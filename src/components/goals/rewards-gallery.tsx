"use client"

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Clock3,
  Flag,
  Flame,
  Medal,
  Sparkles,
  Trophy,
} from "lucide-react";
import type { RewardIconKey, RewardState } from "@/lib/goals";

const iconMap: Record<RewardIconKey, typeof Flag> = {
  flag: Flag,
  sparkles: Sparkles,
  trophy: Trophy,
  flame: Flame,
  clock3: Clock3,
  medal: Medal,
};

interface RewardsGalleryProps {
  rewards: RewardState[];
  newlyUnlockedRewardIds: string[];
  onSeen: () => void;
}

export function RewardsGallery({ rewards, newlyUnlockedRewardIds, onSeen }: RewardsGalleryProps) {
  useEffect(() => {
    if (newlyUnlockedRewardIds.length === 0) {
      return;
    }

    const timeout = window.setTimeout(() => {
      onSeen();
    }, 2600);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [newlyUnlockedRewardIds, onSeen]);

  const earnedRewards = rewards.filter((reward) => reward.earned);
  const lockedRewards = rewards.filter((reward) => !reward.earned);

  return (
    <div className="space-y-4">
      <p className="text-sm font-sans opacity-55">
        {earnedRewards.length}/{rewards.length} rewards unlocked.
      </p>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-sans font-medium opacity-55">Earned</h4>
          {newlyUnlockedRewardIds.length > 0 ? <span className="text-[11px] font-sans opacity-45">New unlock</span> : null}
        </div>

        <div className="grid gap-4">
          {earnedRewards.length === 0 ? (
            <div className="rounded-[1rem] border border-border bg-foreground/[0.015] p-4 text-sm font-sans opacity-55">
              The first reward unlocks as soon as you complete a goal.
            </div>
          ) : (
            earnedRewards.map((reward) => {
              const Icon = iconMap[reward.icon];
              const isFresh = newlyUnlockedRewardIds.includes(reward.id);

              return (
                <motion.div
                  key={reward.id}
                  initial={isFresh ? { scale: 0.96, opacity: 0.7 } : false}
                  animate={
                    isFresh
                      ? {
                          scale: [0.98, 1.04, 1],
                          opacity: [0.85, 1, 1],
                        }
                      : undefined
                  }
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[1rem] border border-border bg-background p-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-accent p-2.5 text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h5 className="text-base font-sans tracking-tight">{reward.title}</h5>
                        {isFresh ? (
                          <span className="text-[11px] font-sans opacity-45">
                            Unlocked
                          </span>
                        ) : null}
                      </div>
                      <p className="text-sm font-sans leading-relaxed opacity-55">{reward.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </section>

      <section className="space-y-3">
        <h4 className="text-sm font-sans font-medium opacity-55">Locked</h4>
        <div className="grid gap-4">
          {lockedRewards.map((reward) => {
            const Icon = iconMap[reward.icon];

            return (
              <div
                key={reward.id}
                className="rounded-[1rem] border border-border bg-foreground/[0.015] p-4 opacity-55 transition-opacity hover:opacity-75"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-foreground/[0.04] p-2.5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <h5 className="text-base font-sans tracking-tight">{reward.title}</h5>
                      <span className="text-xs font-sans">{reward.current}/{reward.threshold}</span>
                    </div>
                    <p className="text-sm font-sans leading-relaxed opacity-75">{reward.description}</p>
                    <div className="h-1.5 overflow-hidden rounded-full bg-foreground/[0.06]">
                      <div className="h-full rounded-full bg-foreground/20" style={{ width: `${reward.progress}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
