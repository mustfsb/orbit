import type { FocusInsights } from "@/lib/focus-insights";

export type GoalStatus = "active" | "completed";

export interface Goal {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  target_date: string | null;
  progress: number;
  status: GoalStatus;
  created_at: string;
  updated_at: string;
  completed_at: string | null;
}

export interface GoalInput {
  title: string;
  description?: string;
  target_date?: string | null;
  progress?: number;
  status?: GoalStatus;
}

export interface GoalUpdate {
  title?: string;
  description?: string | null;
  target_date?: string | null;
  progress?: number;
  status?: GoalStatus;
  completed_at?: string | null;
  updated_at?: string;
}

export type RewardIconKey =
  | "flag"
  | "sparkles"
  | "trophy"
  | "flame"
  | "clock3"
  | "medal";

export interface RewardDefinition {
  id: string;
  title: string;
  description: string;
  threshold: number;
  metric: "completedGoals" | "currentStreak" | "totalSessions" | "totalFocusMinutes";
  icon: RewardIconKey;
}

export interface RewardState extends RewardDefinition {
  earned: boolean;
  current: number;
  progress: number;
}

export interface RewardMetrics {
  completedGoals: number;
  currentStreak: number;
  totalSessions: number;
  totalFocusMinutes: number;
}

export const REWARD_DEFINITIONS: RewardDefinition[] = [
  {
    id: "first-goal-completed",
    title: "First Goal Completed",
    description: "Close your first personal milestone.",
    threshold: 1,
    metric: "completedGoals",
    icon: "flag",
  },
  {
    id: "three-goals-completed",
    title: "Three Goals Crushed",
    description: "Complete three active goals.",
    threshold: 3,
    metric: "completedGoals",
    icon: "sparkles",
  },
  {
    id: "ten-goals-crushed",
    title: "10 Goals Crushed",
    description: "Build real momentum with ten completed goals.",
    threshold: 10,
    metric: "completedGoals",
    icon: "trophy",
  },
  {
    id: "seven-day-streak",
    title: "7-Day Streak",
    description: "Log focus work seven days in a row.",
    threshold: 7,
    metric: "currentStreak",
    icon: "flame",
  },
  {
    id: "twenty-five-sessions",
    title: "25 Focus Sessions",
    description: "Bank twenty-five completed focus sessions.",
    threshold: 25,
    metric: "totalSessions",
    icon: "clock3",
  },
  {
    id: "ten-hours-deep",
    title: "10 Hours Deep",
    description: "Accumulate ten hours of focused work.",
    threshold: 600,
    metric: "totalFocusMinutes",
    icon: "medal",
  },
];

export function sortGoals(goals: Goal[]): Goal[] {
  return [...goals].sort((left, right) => {
    if (left.status !== right.status) {
      return left.status === "active" ? -1 : 1;
    }

    if (left.status === "active") {
      if (left.target_date && right.target_date) {
        return left.target_date.localeCompare(right.target_date);
      }
      if (left.target_date) {
        return -1;
      }
      if (right.target_date) {
        return 1;
      }
      return left.created_at.localeCompare(right.created_at);
    }

    return right.updated_at.localeCompare(left.updated_at);
  });
}

export function getRewardMetrics(goals: Goal[], insights: FocusInsights): RewardMetrics {
  return {
    completedGoals: goals.filter((goal) => goal.status === "completed").length,
    currentStreak: insights.currentStreak,
    totalSessions: insights.totalSessions,
    totalFocusMinutes: insights.totalFocusMinutes,
  };
}

export function deriveRewardStates(metrics: RewardMetrics): RewardState[] {
  return REWARD_DEFINITIONS.map((definition) => {
    const current = metrics[definition.metric];
    const progress = Math.min(100, Math.round((current / definition.threshold) * 100));

    return {
      ...definition,
      current,
      progress,
      earned: current >= definition.threshold,
    };
  });
}
