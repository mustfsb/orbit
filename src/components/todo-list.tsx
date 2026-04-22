"use client"

import React, { useState } from "react"
import { Plus, CheckCircle2, Circle, Trash2, Play, GripVertical, Edit2, Loader2 } from "lucide-react"
import { Reorder, useDragControls } from "framer-motion"
import { useTasks, Task } from "@/context/task-context"
import { useTimer } from "@/context/timer-context"

function EditableTaskText({
  text,
  isCompleted,
  onSave,
  borderless = false,
}: {
  text: string,
  isCompleted: boolean,
  onSave: (s: string) => void,
  borderless?: boolean,
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [value, setValue] = useState(text)

  const handleSave = () => {
    if (value.trim()) {
      onSave(value)
      setIsEditing(false)
    }
  }

  if (isEditing) {
    return (
      <input
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={handleSave}
        onKeyDown={(e) => e.key === "Enter" && handleSave()}
        className={`bg-transparent focus:outline-none w-full font-sans text-lg ${borderless ? "" : "border-b border-accent"}`}
      />
    )
  }

  return (
    <div className="group/text flex items-center gap-2 w-full">
      <span
        className={`text-lg font-sans transition-all duration-300 cursor-pointer ${isCompleted ? 'opacity-30 line-through' : 'opacity-80'}`}
        onClick={() => !isCompleted && setIsEditing(true)}
      >
        {text}
      </span>
      {!isCompleted && (
        <Edit2
          onClick={() => setIsEditing(true)}
          className="w-3 h-3 opacity-0 group-hover/text:opacity-20 hover:!opacity-100 cursor-pointer transition-opacity"
        />
      )}
    </div>
  )
}

function TaskItem({ task, borderless = false }: { task: Task; borderless?: boolean }) {
  const { toggleTask, deleteTask, updateTask } = useTasks()
  const { startFocus, activeTaskId, isActive } = useTimer()
  const dragControls = useDragControls()

  return (
    <Reorder.Item
      value={task}
      dragListener={false}
      dragControls={dragControls}
      className="flex items-center justify-between group py-2 px-2 rounded-lg hover:bg-foreground/[0.02] transition-colors bg-background"
    >
      {/* Drag Handle */}
      <div
        onPointerDown={(e) => dragControls.start(e)}
        className="cursor-grab active:cursor-grabbing p-1 opacity-0 group-hover:opacity-30 hover:!opacity-60 transition-opacity touch-none"
      >
        <GripVertical className="w-4 h-4" />
      </div>

      <div className="flex items-start gap-4 flex-grow">
        <div onClick={() => toggleTask(task.id)} className="cursor-pointer mt-1">
          {task.completed ? (
            <CheckCircle2 className="w-5 h-5 text-accent" />
          ) : (
            <Circle className="w-5 h-5 opacity-30 group-hover:opacity-60 transition-opacity" />
          )}
        </div>

        <EditableTaskText
          text={task.text}
          isCompleted={task.completed}
          onSave={(newText) => updateTask(task.id, newText)}
          borderless={borderless}
        />
      </div>
      <div className="flex items-center gap-1">
        {!task.completed && (
          <button
            onClick={() => startFocus(task.id, task.text)}
            className={`p-2 rounded-full transition-all ${activeTaskId === task.id && isActive
              ? "text-accent opacity-100 bg-accent/10"
              : "opacity-0 group-hover:opacity-40 hover:!opacity-100 hover:text-accent"
              }`}
            title="Focus on this task"
          >
            <Play className={`w-4 h-4 ${activeTaskId === task.id && isActive ? "fill-current" : ""}`} />
          </button>
        )}
        <button
          onClick={() => deleteTask(task.id)}
          className="opacity-0 group-hover:opacity-40 hover:opacity-100 transition-opacity p-2 hover:text-red-500"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </Reorder.Item>
  )
}

export function TodoList({ borderless = false }: { borderless?: boolean }) {
  const { tasks: allTasks, loading, addTask, updateTaskPositions, updateTaskType, deleteTask, updateTask } = useTasks()
  const [view, setView] = useState<'focus' | 'distraction'>('focus')
  const [inputValue, setInputValue] = useState("")

  const tasks = allTasks.filter(t =>
    view === 'focus' ? t.type !== 'distraction' : t.type === 'distraction'
  )

  const handleAddTask = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!inputValue.trim()) return

    addTask(inputValue, view === 'focus' ? 'focus' : 'distraction')
    setInputValue("")
  }

  const handleReorder = (newOrder: Task[]) => {
    // Calculate new positions for the reordered items
    // We'll just use their index in the new array as the position
    // This assumes specific view (focus) is the primary ordering mechanism
    const reorderedWithPositions = newOrder.map((task, index) => ({
      ...task,
      position: index
    }))

    updateTaskPositions(reorderedWithPositions)
  }

  const moveToFocus = async (id: string) => {
    await updateTaskType(id, 'focus')
  }

  return (
    <div
      className={`bg-[#fdfcf8] dark:bg-[#1a1a1a] rounded-xl shadow-sm overflow-hidden flex flex-col min-h-[600px] relative ${
        borderless ? "" : "border border-border"
      }`}
    >
      <div className={`p-8 relative flex items-center justify-between ${borderless ? "" : "border-b border-border"}`}>
        <div>
          <h2 className="text-3xl tracking-tight italic mb-2 font-sans">
            {view === 'focus' ? "Today's Mastery" : "Distraction Buffer"}
          </h2>
          <p className="text-sm opacity-60 font-sans italic">Monday, January 12th</p>
        </div>

        <div className="flex gap-1 bg-foreground/[0.03] p-1 rounded-lg">
          <button
            onClick={() => setView('focus')}
            className={`px-3 py-1.5 text-xs font-sans font-medium rounded-md transition-all ${view === 'focus' ? 'bg-background shadow-sm opacity-100' : 'opacity-40 hover:opacity-70'}`}
          >
            Focus
          </button>
          <button
            onClick={() => setView('distraction')}
            className={`px-3 py-1.5 text-xs font-sans font-medium rounded-md transition-all flex items-center gap-2 ${view === 'distraction' ? 'bg-background shadow-sm opacity-100' : 'opacity-40 hover:opacity-70'}`}
          >
            Inbox
            {allTasks.filter(t => t.type === 'distraction' && !t.completed).length > 0 && (
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            )}
          </button>
        </div>
      </div>

      <div className="p-8 space-y-6 flex-grow">
        <form onSubmit={handleAddTask} className="flex items-center gap-4 group pb-4">
          <Plus className="w-5 h-5 text-accent opacity-50" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={view === 'focus' ? "Add a new task..." : "Quick capture a distraction..."}
            className="w-full bg-transparent border-none focus:outline-none ring-0 focus:ring-0 font-sans text-lg placeholder:opacity-30"
          />
        </form>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 animate-spin opacity-40" />
          </div>
        ) : tasks.length === 0 ? (
          <div className="text-center py-12 opacity-40 font-sans">
            <p>
              {view === 'focus' ? "No tasks yet. Add your first task above." : "No distractions buffered. Your mind is clear."}
            </p>
          </div>
        ) : view === 'focus' ? (
          <Reorder.Group axis="y" values={tasks} onReorder={handleReorder} className="space-y-2">
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} borderless={borderless} />
            ))}
          </Reorder.Group>
        ) : (
          <div className="space-y-2">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`flex items-center justify-between group py-3 px-3 rounded-lg hover:bg-foreground/[0.02] transition-colors ${
                  borderless ? "" : "border border-transparent hover:border-border/50"
                }`}
              >
                <span className="text-lg font-sans opacity-80">{task.text}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => moveToFocus(task.id)}
                    className={`text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-accent hover:text-accent-foreground ${
                      borderless ? "bg-foreground/[0.06]" : "border border-border hover:border-accent"
                    }`}
                  >
                    Move to Task
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="opacity-0 group-hover:opacity-40 hover:opacity-100 transition-opacity p-2 hover:text-red-500"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={`p-8 bg-foreground/[0.01] ${borderless ? "" : "border-t border-border"}`}>
        <div className="flex justify-between items-center text-xs opacity-40 font-sans tracking-widest uppercase font-medium">
          <span>{tasks.filter(t => !t.completed).length} Items</span>
          {view === 'focus' && <span>{tasks.filter(t => t.completed).length} Completed</span>}
        </div>
      </div>
    </div>
  )
}
