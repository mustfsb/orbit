"use client"

import { Loader2, Target } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { PageWrapper } from "@/components/page-wrapper";
import { GoalCard } from "@/components/goals/goal-card";
import { GoalComposer } from "@/components/goals/goal-composer";
import { RewardsGallery } from "@/components/goals/rewards-gallery";
import { useGoals } from "@/context/goals-context";

export default function GoalsPage() {
  const {
    loading,
    activeGoals,
    completedGoals,
    rewards,
    focusInsights,
    newlyUnlockedRewardIds,
    createGoal,
    updateGoal,
    deleteGoal,
    acknowledgeRewardAnimations,
  } = useGoals();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-12 md:py-20">
        <PageWrapper>
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-sans tracking-tight">Goals</h1>
              <p className="max-w-xl text-sm font-sans leading-relaxed opacity-55">
                A short list of targets with simple progress.
              </p>
            </div>

            <GoalComposer onCreateGoal={createGoal} />

            {loading ? (
              <div className="flex items-center justify-center py-24">
                <Loader2 className="h-8 w-8 animate-spin opacity-40" />
              </div>
            ) : (
              <div className="space-y-6">
                <section className="space-y-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-sans tracking-tight">Active</h2>
                    </div>
                    <span className="text-[11px] font-sans opacity-45">{activeGoals.length} open</span>
                  </div>

                  <div className="space-y-4">
                    {activeGoals.length === 0 ? (
                      <div className="rounded-[1rem] border border-border bg-foreground/[0.015] p-5 text-sm font-sans opacity-55">
                        No active goals yet. Create one above to start tracking a concrete next target.
                      </div>
                    ) : (
                      activeGoals.map((goal) => (
                        <GoalCard key={goal.id} goal={goal} onSave={updateGoal} onDelete={deleteGoal} />
                      ))
                    )}
                  </div>
                </section>

                <section className="space-y-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-sans tracking-tight">Completed</h2>
                    </div>
                    <span className="text-[11px] font-sans opacity-45">{completedGoals.length} archived</span>
                  </div>

                  <div className="space-y-4">
                    {completedGoals.length === 0 ? (
                      <div className="rounded-[1rem] border border-border bg-foreground/[0.015] p-5 text-sm font-sans opacity-55">
                        Completed goals will settle here once you finish them.
                      </div>
                    ) : (
                      completedGoals.map((goal) => (
                        <GoalCard key={goal.id} goal={goal} onSave={updateGoal} onDelete={deleteGoal} />
                      ))
                    )}
                  </div>
                </section>

                <section className="space-y-4">
                  <h2 className="text-xl font-sans tracking-tight">Rewards</h2>
                  <RewardsGallery
                    rewards={rewards}
                    newlyUnlockedRewardIds={newlyUnlockedRewardIds}
                    onSeen={acknowledgeRewardAnimations}
                  />
                </section>
              </div>
            )}
          </div>
        </PageWrapper>
      </main>
    </div>
  );
}
