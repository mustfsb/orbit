"use client"

import { useEffect, useRef, useState } from "react";
import { motion, Reorder, useDragControls } from "framer-motion";
import { Check, CheckCircle2, Circle, GripVertical, Plus } from "lucide-react";
import { useTasks } from "@/context/task-context";
import { type PlanTask, type WeeklyPlan } from "@/lib/gemini";

interface PlannerGridProps {
  plan: WeeklyPlan;
  completions: Record<string, boolean>;
  onToggleCompletion: (key: string) => void;
  onReorderDay: (dayIndex: number, reorderedTasks: PlanTask[]) => void;
}

const typeLabels: Record<PlanTask["type"], string> = {
  focus: "Focus",
  rest: "Rest",
  review: "Review",
  admin: "Admin",
  creative: "Creative",
};

const typeAccentClasses: Record<PlanTask["type"], string> = {
  focus: "border-border bg-background text-accent",
  rest: "border-border bg-background text-blue-500",
  review: "border-border bg-background text-emerald-600",
  admin: "border-border bg-background text-foreground/55",
  creative: "border-border bg-background text-purple-500",
};

const fullDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function PlannerRow({
  task,
  completionKey,
  isCompleted,
  isDragging,
  onToggleCompletion,
  onDragStart,
  onDragEnd,
}: {
  task: PlanTask;
  completionKey: string;
  isCompleted: boolean;
  isDragging: boolean;
  onToggleCompletion: (key: string) => void;
  onDragStart: () => void;
  onDragEnd: () => void;
}) {
  const { addTask } = useTasks();
  const dragControls = useDragControls();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddTask = async () => {
    if (isAdded) {
      return;
    }

    setIsAdded(true);
    await addTask(task.name, task.type);
  };

  return (
    <Reorder.Item
      value={task}
      dragListener={false}
      dragControls={dragControls}
      dragElastic={0.035}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{ type: "spring", stiffness: 520, damping: 38, mass: 0.78 }}
      whileDrag={{
        scale: 1.008,
        y: -2,
        boxShadow: "0 16px 32px -26px rgba(26,26,26,0.28)",
      }}
      className={`relative rounded-[1.35rem] border bg-background px-4 py-4 transition-[border-color,background-color,box-shadow] ${
        isDragging
          ? "z-20 border border-accent/40 shadow-sm"
          : "border-border hover:bg-foreground/[0.015]"
      }`}
    >
      <div className={`absolute inset-x-5 -top-px h-px rounded-full transition-opacity ${isDragging ? "bg-accent/50 opacity-100" : "opacity-0"}`} />

      <div className="flex items-start gap-3">
        <button
          onPointerDown={(event) => dragControls.start(event)}
          className="mt-0.5 rounded-full p-1.5 text-foreground/25 transition-colors hover:bg-foreground/[0.04] hover:text-foreground/70 touch-none"
          title="Drag to reorder"
        >
          <GripVertical className="h-4 w-4" />
        </button>

        <button
          onClick={() => onToggleCompletion(completionKey)}
          className="mt-0.5 text-foreground/35 transition-colors hover:text-accent"
          title={isCompleted ? "Mark incomplete" : "Mark complete"}
        >
          {isCompleted ? <CheckCircle2 className="h-4.5 w-4.5 text-accent" /> : <Circle className="h-4.5 w-4.5" />}
        </button>

        <div className="flex-1 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1.5">
              <p className={`text-sm font-sans leading-relaxed ${isCompleted ? "line-through opacity-35" : "opacity-75"}`}>
                {task.name}
              </p>
              {task.description ? (
                <p className="text-xs font-sans leading-relaxed opacity-40">{task.description}</p>
              ) : null}
            </div>

            <button
              onClick={handleAddTask}
              disabled={isAdded}
              className={`rounded-full border p-2 transition-colors ${
                isAdded
                  ? "border-border bg-accent text-accent-foreground"
                  : "border-border bg-foreground/[0.05] opacity-50 hover:text-accent"
              }`}
              title={isAdded ? "Added to tasks" : "Add to task list"}
            >
              {isAdded ? <Check className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
            </button>
          </div>

          <div className="flex items-center justify-between gap-3">
            <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${typeAccentClasses[task.type]}`}>
              {typeLabels[task.type]}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-25">
              {isDragging ? "Release to place" : isCompleted ? "Done" : "Hold handle to move"}
            </span>
          </div>
        </div>
      </div>
    </Reorder.Item>
  );
}

function PlannerDayColumn({
  dayPlan,
  dayIndex,
  completions,
  onToggleCompletion,
  onReorderDay,
}: {
  dayPlan: WeeklyPlan[number];
  dayIndex: number;
  completions: Record<string, boolean>;
  onToggleCompletion: (key: string) => void;
  onReorderDay: (dayIndex: number, reorderedTasks: PlanTask[]) => void;
}) {
  const [localTasks, setLocalTasks] = useState(dayPlan.tasks);
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);
  const localTasksRef = useRef(localTasks);

  useEffect(() => {
    localTasksRef.current = localTasks;
  }, [localTasks]);

  useEffect(() => {
    if (!draggedTaskId) {
      setLocalTasks(dayPlan.tasks);
    }
  }, [dayPlan.tasks, draggedTaskId]);

  const commitReorder = () => {
    const nextTasks = localTasksRef.current;
    const orderChanged = nextTasks.some((task, taskIndex) => task.id !== dayPlan.tasks[taskIndex]?.id);
    setDraggedTaskId(null);

    if (orderChanged) {
      onReorderDay(dayIndex, nextTasks);
    }
  };

  const completedCount = localTasks.filter((task, taskIndex) => {
    const fallbackKey = `${dayPlan.day}-${taskIndex}`;
    return Boolean(completions[task.id ?? fallbackKey] ?? completions[fallbackKey]);
  }).length;
  const isToday = dayPlan.day === fullDayNames[new Date().getDay()];

  return (
    <motion.section
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: dayIndex * 0.04, duration: 0.35 }}
      className={`rounded-[1.9rem] border p-5 md:p-6 ${
        isToday ? "border-accent/30 bg-background" : "border-border bg-foreground/[0.015]"
      }`}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-sans tracking-tight">{dayPlan.day}</h3>
            {isToday ? (
              <span className="rounded-full border border-accent bg-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-foreground">
                Today
              </span>
            ) : null}
          </div>
          <p className="text-xs font-sans opacity-45">
            {completedCount}/{localTasks.length} completed
          </p>
        </div>

        <div className="rounded-full bg-foreground/[0.05] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] opacity-35">
          {localTasks.length} items
        </div>
      </div>

      {localTasks.length === 0 ? (
        <div className="rounded-[1.5rem] border border-border bg-background px-4 py-8 text-center text-sm font-sans opacity-45">
          No scheduled work blocks for this day yet.
        </div>
      ) : (
        <Reorder.Group
          axis="y"
          values={localTasks}
          onReorder={setLocalTasks}
          layoutScroll
          className="space-y-2.5"
        >
          {localTasks.map((task, taskIndex) => {
            const completionKey = task.id ?? `${dayPlan.day}-${taskIndex}`;
            const fallbackKey = `${dayPlan.day}-${taskIndex}`;

            return (
              <PlannerRow
                key={completionKey}
                task={task}
                completionKey={completionKey}
                isCompleted={Boolean(completions[completionKey] ?? completions[fallbackKey])}
                isDragging={draggedTaskId === completionKey}
                onToggleCompletion={onToggleCompletion}
                onDragStart={() => setDraggedTaskId(completionKey)}
                onDragEnd={commitReorder}
              />
            );
          })}
        </Reorder.Group>
      )}
    </motion.section>
  );
}

export function PlannerGrid({
  plan,
  completions,
  onToggleCompletion,
  onReorderDay,
}: PlannerGridProps) {
  if (!plan || plan.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
      {plan.map((dayPlan, dayIndex) => (
        <PlannerDayColumn
          key={dayPlan.day}
          dayPlan={dayPlan}
          dayIndex={dayIndex}
          completions={completions}
          onToggleCompletion={onToggleCompletion}
          onReorderDay={onReorderDay}
        />
      ))}
    </div>
  );
}
