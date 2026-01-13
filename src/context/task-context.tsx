"use client"

import React, { createContext, useContext, useEffect, useState, useCallback } from "react"
import { createClient } from "@/lib/supabase/client"

export type TaskType = "focus" | "creative" | "rest" | "admin" | "review" | "distraction";

export interface Task {
  id: string
  text: string
  completed: boolean
  created_at: string
  type: TaskType
  position: number
  user_id?: string
}

interface TaskContextType {
  tasks: Task[]
  loading: boolean
  addTask: (text: string, type?: TaskType) => Promise<void>
  toggleTask: (id: string) => Promise<void>
  deleteTask: (id: string) => Promise<void>
  updateTaskType: (id: string, type: TaskType) => Promise<void>
  updateTask: (id: string, text: string) => Promise<void>
  updateTaskPositions: (tasks: Task[]) => Promise<void>
}

const TaskContext = createContext<TaskContextType | undefined>(undefined)

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [userId, setUserId] = useState<string | null>(null)

  // Load tasks from Supabase
  const fetchTasks = useCallback(async () => {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      setLoading(false)
      setTasks([])
      return
    }

    setUserId(user.id)

    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .eq('user_id', user.id)
      .order('position', { ascending: true })
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching tasks:', error)
    } else {
      setTasks(data || [])
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchTasks()

    // Listen for auth changes
    const supabase = createClient()
    const { data: { subscription } } = supabase.auth.onAuthStateChange(() => {
      fetchTasks()
    })

    return () => subscription.unsubscribe()
  }, [fetchTasks])

  const addTask = async (text: string, type: TaskType = "focus") => {
    if (!userId) return

    const supabase = createClient()
    const newTask = {
      text,
      type,
      completed: false,
      position: tasks.length,
      user_id: userId
    }

    const { data, error } = await supabase
      .from('todos')
      .insert(newTask)
      .select()
      .single()

    if (error) {
      console.error('Error adding task:', error)
      return
    }

    if (data) {
      setTasks(prev => [...prev, data])
    }
  }

  const toggleTask = async (id: string) => {
    const task = tasks.find(t => t.id === id)
    if (!task) return

    const newCompleted = !task.completed

    // Optimistic update
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: newCompleted } : t))

    const supabase = createClient()
    const { error } = await supabase
      .from('todos')
      .update({ completed: newCompleted })
      .eq('id', id)

    if (error) {
      console.error('Error toggling task:', error)
      // Revert on error
      setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !newCompleted } : t))
    }
  }

  const deleteTask = async (id: string) => {
    const taskToDelete = tasks.find(t => t.id === id)

    // Optimistic update
    setTasks(prev => prev.filter(t => t.id !== id))

    const supabase = createClient()
    const { error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting task:', error)
      // Revert on error
      if (taskToDelete) {
        setTasks(prev => [...prev, taskToDelete])
      }
    }
  }

  const updateTaskType = async (id: string, type: TaskType) => {
    // Optimistic update
    setTasks(prev => prev.map(t => t.id === id ? { ...t, type } : t))

    const supabase = createClient()
    const { error } = await supabase
      .from('todos')
      .update({ type })
      .eq('id', id)

    if (error) {
      console.error('Error updating task type:', error)
    }
  }

  const updateTask = async (id: string, text: string) => {
    // Optimistic update
    setTasks(prev => prev.map(t => t.id === id ? { ...t, text } : t))

    const supabase = createClient()
    const { error } = await supabase
      .from('todos')
      .update({ text })
      .eq('id', id)

    if (error) {
      console.error('Error updating task:', error)
    }
  }

  const updateTaskPositions = async (reorderedTasks: Task[]) => {
    // Optimistic update: Update the positions of the tasks in the local state
    // We need to merge the reordered tasks with the existing tasks (which might include other types)
    setTasks((prev: Task[]) => {
      const tasksMap = new Map(prev.map((t: Task) => [t.id, t]));
      reorderedTasks.forEach((t: Task) => tasksMap.set(t.id, t));
      // We should return the tasks sorted by position to maintain consistency
      return Array.from(tasksMap.values()).sort((a: Task, b: Task) => a.position - b.position);
    });

    const supabase = createClient()

    // Update sequentially to ensure order or usage of upsert if supported for batch
    // Supabase JS doesn't support bulk update with different values easily without upsert or multiple calls.
    // For drag and drop, multiple calls is often acceptable if number of items is small.
    // Or we can use upsert.

    // Create simplified objects for upsert
    const updates = reorderedTasks.map(t => ({
      id: t.id,
      position: t.position,
      text: t.text, // Required for upsert if not partial? No, update can be partial, but upsert needs row content or primary key
      user_id: userId, // RLS might need this
      updated_at: new Date().toISOString()
    }));

    // Actually, simple loop is safer for now to avoid accidental overwrites if schema is strict
    // But upsert is better for batch. Let's try to just loop promises.

    const promises = reorderedTasks.map(t =>
      supabase.from('todos').update({ position: t.position }).eq('id', t.id)
    );

    await Promise.all(promises);
  }

  return (
    <TaskContext.Provider value={{ tasks, loading, addTask, toggleTask, deleteTask, updateTaskType, updateTask, updateTaskPositions }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTasks() {
  const context = useContext(TaskContext)
  if (context === undefined) {
    throw new Error("useTasks must be used within a TaskProvider")
  }
  return context
}
