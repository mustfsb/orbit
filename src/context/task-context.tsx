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
  reorderTasks: (fromIndex: number, toIndex: number) => void
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
      position: 0,
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
      setTasks(prev => [data, ...prev])
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

  const reorderTasks = (fromIndex: number, toIndex: number) => {
    setTasks(prev => {
      const result = [...prev]
      const [removed] = result.splice(fromIndex, 1)
      result.splice(toIndex, 0, removed)

      // Update positions in background
      const supabase = createClient()
      result.forEach((task, index) => {
        supabase
          .from('todos')
          .update({ position: index })
          .eq('id', task.id)
          .then(({ error }) => {
            if (error) console.error('Error updating position:', error)
          })
      })

      return result
    })
  }

  return (
    <TaskContext.Provider value={{ tasks, loading, addTask, toggleTask, deleteTask, updateTaskType, updateTask, reorderTasks }}>
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
