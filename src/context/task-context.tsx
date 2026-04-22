"use client"

import React, { createContext, useContext, useEffect, useState, useCallback } from "react"
import { createClient } from "@/lib/supabase/client"
import { useAuth } from "@/context/auth-context"

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
  const { user } = useAuth()
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)

  const fetchTasks = useCallback(async (userId: string) => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .eq('user_id', userId)
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
    if (!user) {
      setTasks([])
      setLoading(false)
      return
    }
    setLoading(true)
    fetchTasks(user.id)
  }, [user, fetchTasks])

  const addTask = async (text: string, type: TaskType = "focus") => {
    if (!user) return

    const supabase = createClient()
    const newTask = {
      text,
      type,
      completed: false,
      position: tasks.length,
      user_id: user.id
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

    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: newCompleted } : t))

    const supabase = createClient()
    const { error } = await supabase
      .from('todos')
      .update({ completed: newCompleted })
      .eq('id', id)

    if (error) {
      console.error('Error toggling task:', error)
      setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !newCompleted } : t))
    }
  }

  const deleteTask = async (id: string) => {
    const taskToDelete = tasks.find(t => t.id === id)

    setTasks(prev => prev.filter(t => t.id !== id))

    const supabase = createClient()
    const { error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting task:', error)
      if (taskToDelete) {
        setTasks(prev => [...prev, taskToDelete].sort((a, b) => a.position - b.position))
      }
    }
  }

  const updateTaskType = async (id: string, type: TaskType) => {
    const original = tasks.find(t => t.id === id)
    setTasks(prev => prev.map(t => t.id === id ? { ...t, type } : t))

    const supabase = createClient()
    const { error } = await supabase
      .from('todos')
      .update({ type })
      .eq('id', id)

    if (error) {
      console.error('Error updating task type:', error)
      if (original) {
        setTasks(prev => prev.map(t => t.id === id ? original : t))
      }
    }
  }

  const updateTask = async (id: string, text: string) => {
    const original = tasks.find(t => t.id === id)
    setTasks(prev => prev.map(t => t.id === id ? { ...t, text } : t))

    const supabase = createClient()
    const { error } = await supabase
      .from('todos')
      .update({ text })
      .eq('id', id)

    if (error) {
      console.error('Error updating task:', error)
      if (original) {
        setTasks(prev => prev.map(t => t.id === id ? original : t))
      }
    }
  }

  const updateTaskPositions = async (reorderedTasks: Task[]) => {
    setTasks((prev: Task[]) => {
      const tasksMap = new Map(prev.map((t: Task) => [t.id, t]));
      reorderedTasks.forEach((t: Task) => tasksMap.set(t.id, t));
      return Array.from(tasksMap.values()).sort((a: Task, b: Task) => a.position - b.position);
    });

    const supabase = createClient()
    const { error } = await supabase.from('todos').upsert(
      reorderedTasks.map(t => ({
        id: t.id,
        position: t.position,
        text: t.text,
        type: t.type,
        completed: t.completed,
        user_id: user?.id,
      }))
    )

    if (error) {
      console.error('Error updating task positions:', error)
    }
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
