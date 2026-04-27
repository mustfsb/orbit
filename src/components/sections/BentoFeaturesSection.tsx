import Image from "next/image";
import Link from "next/link";
import { TbArrowRight } from "react-icons/tb";

export function BentoFeaturesSection() {
  return (
    <section className="py-section px-site border-t border-border">
      <div className="max-w-site mx-auto">
        <h2 className="font-sans text-[32px] leading-[38px] tracking-[-0.96px] lg:text-[56px] lg:leading-[67px] lg:tracking-[-1.68px] font-semibold text-foreground mb-8 lg:mb-10">
          Ask your on-demand planner.
        </h2>

        {/* Top wide card */}
        <div
          className="rounded-2xl overflow-hidden mb-4"
          style={{ backgroundColor: "#F0B429" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[320px]">
            {/* Left copy */}
            <div className="p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <p className="font-sans text-[13px] font-medium text-black/60 mb-3">
                  Orbit AI
                </p>
                <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] lg:tracking-[-0.56px] font-semibold text-black mb-5 max-w-[300px]">
                  You assign the tasks. Orbit builds the plan.
                </h3>
                <Link href="/planner">
                  <button
                    type="button"
                    className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                    aria-label="Try the planner"
                  >
                    <TbArrowRight size={18} />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right screenshot */}
            <div className="relative min-h-[220px] lg:min-h-0">
              <Image
                src="/images/notion/notion-agent-aimn.png"
                alt="Orbit AI planner interface"
                fill
                className="object-cover object-left-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Bottom two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Focus Timer card */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{ backgroundColor: "#E85B3C" }}
          >
            <div className="p-8 lg:p-10">
              <p className="font-sans text-[13px] font-medium text-white/60 mb-3">
                Focus Timer
              </p>
              <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] font-semibold text-white mb-5 max-w-[260px]">
                Deep work, tracked and measured.
              </h3>
              <Link href="/timer">
                <button
                  type="button"
                  className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/80 transition-colors"
                  aria-label="Try focus timer"
                >
                  <TbArrowRight size={18} />
                </button>
              </Link>
            </div>
            <div className="relative flex-1 min-h-[200px] overflow-hidden">
              <Image
                src="/images/notion/card-qa-agent.jpg"
                alt="Focus session interface"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Analytics card */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{ backgroundColor: "#3B7BE8" }}
          >
            <div className="p-8 lg:p-10">
              <p className="font-sans text-[13px] font-medium text-white/60 mb-3">
                Analytics
              </p>
              <h3 className="font-sans text-[22px] leading-[29px] tracking-[-0.44px] lg:text-[28px] lg:leading-[36px] font-semibold text-white mb-5 max-w-[260px]">
                See the patterns in your work.
              </h3>
              <Link href="/dashboard">
                <button
                  type="button"
                  className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/80 transition-colors"
                  aria-label="View analytics"
                >
                  <TbArrowRight size={18} />
                </button>
              </Link>
            </div>
            <div className="relative flex-1 min-h-[200px] overflow-hidden">
              <Image
                src="/images/notion/meeting-ui.png"
                alt="Analytics and insights"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
