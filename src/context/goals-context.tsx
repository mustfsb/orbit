"use client"

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/context/auth-context";
import { buildFocusInsights, type FocusInsights, type SessionRecord } from "@/lib/focus-insights";
import {
  deriveRewardStates,
  getRewardMetrics,
  sortGoals,
  type Goal,
  type GoalInput,
  type GoalUpdate,
  type RewardState,
} from "@/lib/goals";

interface GoalsContextType {
  goals: Goal[];
  loading: boolean;
  userId: string | null;
  activeGoals: Goal[];
  completedGoals: Goal[];
  rewards: RewardState[];
  focusInsights: FocusInsights;
  newlyUnlockedRewardIds: string[];
  createGoal: (input: GoalInput) => Promise<void>;
  updateGoal: (goalId: string, updates: GoalUpdate) => Promise<void>;
  deleteGoal: (goalId: string) => Promise<void>;
  refreshGoalsData: () => Promise<void>;
  acknowledgeRewardAnimations: () => void;
}

const GoalsContext = createContext<GoalsContextType | undefined>(undefined);

function getSeenRewardsStorageKey(userId: string): string {
  return `orbit-seen-rewards-${userId}`;
}

function emptyInsights(): FocusInsights {
  return buildFocusInsights([]);
}

export function GoalsProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(true);
  const [focusInsights, setFocusInsights] = useState<FocusInsights>(emptyInsights());
  const [newlyUnlockedRewardIds, setNewlyUnlockedRewardIds] = useState<string[]>([]);

  const userId = user?.id ?? null;

  // Full refresh: fetches both goals and sessions (used on initial load / auth change)
  const refreshGoalsData = useCallback(async (): Promise<void> => {
    setLoading(true);

    if (!user) {
      setGoals([]);
      setFocusInsights(emptyInsights());
      setNewlyUnlockedRewardIds([]);
      setLoading(false);
      return;
    }

    const supabase = createClient();
    const [{ data: goalsData, error: goalsError }, { data: sessionsData, error: sessionsError }] =
      await Promise.all([
        supabase
          .from("goals")
          .select("*")
          .eq("user_id", user.id)
          .order("status", { ascending: true })
          .order("target_date", { ascending: true, nullsFirst: false })
          .order("updated_at", { ascending: false }),
        supabase
          .from("pomodoro_sessions")
          .select("duration, started_at, status")
          .eq("user_id", user.id)
          .order("started_at", { ascending: false }),
      ]);

    if (goalsError) {
      console.error("Error fetching goals:", goalsError);
      setGoals([]);
    } else {
      setGoals(sortGoals((goalsData ?? []) as Goal[]));
    }

    if (sessionsError) {
      console.error("Error fetching focus sessions for rewards:", sessionsError);
      setFocusInsights(emptyInsights());
    } else {
      setFocusInsights(buildFocusInsights((sessionsData ?? []) as SessionRecord[]));
    }

    setLoading(false);
  }, [user]);

  // Goals-only refresh: used after mutations (sessions haven't changed, no need to refetch)
  const refreshGoalsOnly = useCallback(async (): Promise<void> => {
    if (!user) return;

    const supabase = createClient();
    const { data: goalsData, error: goalsError } = await supabase
      .from("goals")
      .select("*")
      .eq("user_id", user.id)
      .order("status", { ascending: true })
      .order("target_date", { ascending: true, nullsFirst: false })
      .order("updated_at", { ascending: false });

    if (goalsError) {
      console.error("Error fetching goals:", goalsError);
    } else {
      setGoals(sortGoals((goalsData ?? []) as Goal[]));
    }
  }, [user]);

  useEffect(() => {
    refreshGoalsData().catch((error: unknown) => {
      console.error("Failed to initialize goals context:", error);
      setLoading(false);
    });
  }, [refreshGoalsData]);

  const rewards = useMemo<RewardState[]>(() => {
    return deriveRewardStates(getRewardMetrics(goals, focusInsights));
  }, [goals, focusInsights]);

  useEffect(() => {
    if (!userId || typeof window === "undefined") {
      return;
    }

    const storageKey = getSeenRewardsStorageKey(userId);
    const seenRewardIds = new Set<string>(JSON.parse(window.localStorage.getItem(storageKey) ?? "[]") as string[]);
    const freshRewards = rewards.filter((reward) => reward.earned && !seenRewardIds.has(reward.id)).map((reward) => reward.id);

    if (freshRewards.length === 0) {
      return;
    }

    freshRewards.forEach((rewardId) => seenRewardIds.add(rewardId));
    window.localStorage.setItem(storageKey, JSON.stringify(Array.from(seenRewardIds)));
    setNewlyUnlockedRewardIds(freshRewards);
  }, [rewards, userId]);

  const createGoal = useCallback(
    async (input: GoalInput): Promise<void> => {
      if (!userId) {
        return;
      }

      const supabase = createClient();
      const progress = Math.max(0, Math.min(100, input.progress ?? 0));
      const status = input.status ?? "active";
      const now = new Date().toISOString();

      const { error } = await supabase.from("goals").insert({
        user_id: userId,
        title: input.title.trim(),
        description: input.description?.trim() || null,
        target_date: input.target_date || null,
        progress,
        status,
        completed_at: status === "completed" ? now : null,
      });

      if (error) {
        console.error("Error creating goal:", error);
        return;
      }

      await refreshGoalsOnly();
    },
    [refreshGoalsOnly, userId]
  );

  const updateGoal = useCallback(
    async (goalId: string, updates: GoalUpdate): Promise<void> => {
      const supabase = createClient();
      const payload: GoalUpdate = {
        ...updates,
        updated_at: new Date().toISOString(),
      };

      if (typeof payload.title === "string") {
        payload.title = payload.title.trim();
      }

      if (typeof payload.description === "string") {
        payload.description = payload.description.trim() || null;
      }

      if (typeof payload.progress === "number") {
        payload.progress = Math.max(0, Math.min(100, payload.progress));
      }

      if (payload.status === "completed" && !payload.completed_at) {
        payload.completed_at = new Date().toISOString();
      }

      if (payload.status === "active") {
        payload.completed_at = null;
      }

      const { error } = await supabase.from("goals").update(payload).eq("id", goalId);

      if (error) {
        console.error("Error updating goal:", error);
        return;
      }

      await refreshGoalsOnly();
    },
    [refreshGoalsOnly]
  );

  const deleteGoal = useCallback(
    async (goalId: string): Promise<void> => {
      const supabase = createClient();
      const { error } = await supabase.from("goals").delete().eq("id", goalId);

      if (error) {
        console.error("Error deleting goal:", error);
        return;
      }

      await refreshGoalsOnly();
    },
    [refreshGoalsOnly]
  );

  const acknowledgeRewardAnimations = useCallback(() => {
    setNewlyUnlockedRewardIds([]);
  }, []);

  const value = useMemo<GoalsContextType>(() => {
    const activeGoals = goals.filter((goal) => goal.status === "active");
    const completedGoals = goals.filter((goal) => goal.status === "completed");

    return {
      goals,
      loading,
      userId,
      activeGoals,
      completedGoals,
      rewards,
      focusInsights,
      newlyUnlockedRewardIds,
      createGoal,
      updateGoal,
      deleteGoal,
      refreshGoalsData,
      acknowledgeRewardAnimations,
    };
  }, [
    acknowledgeRewardAnimations,
    createGoal,
    deleteGoal,
    focusInsights,
    goals,
    loading,
    newlyUnlockedRewardIds,
    refreshGoalsData,
    rewards,
    updateGoal,
    userId,
  ]);

  return <GoalsContext.Provider value={value}>{children}</GoalsContext.Provider>;
}

export function useGoals() {
  const context = useContext(GoalsContext);
  if (!context) {
    throw new Error("useGoals must be used within a GoalsProvider");
  }

  return context;
}
