"use client"

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import {
  ArrowRight,
  Check,
  Plus,
  Minus,
} from "lucide-react";
import Link from "next/link";
import { PageWrapper } from "@/components/page-wrapper";
import { motion, AnimatePresence } from "framer-motion";
import { HomeBentoGrid } from "@/components/home/home-bento-grid";
import { LandingBentoGrid } from "@/components/home/landing-bento";
import { KineticHero } from "@/components/home/kinetic-hero";
import { IntegrationsBento } from "@/components/home/integrations-bento";
import { SocialProofCarousel } from "@/components/home/social-proof";
import { PrivacySection } from "@/components/home/privacy-section";

const faqItems = [
  {
    question: "How does the AI planning work?",
    answer: "Orbit analyzes your goals and constraints to generate a structured weekly schedule that balances high-intensity focus with restorative breaks, using advanced cognitive load models."
  },
  {
    question: "Is my data private and secure?",
    answer: "Absolutely. We believe in privacy by design. Your thoughts, goals, and data are encrypted and never used for training third-party models without explicit permission."
  },
  {
    question: "Can I sync across all my devices?",
    answer: "Yes, Orbit is available as a web app and can be installed on your mobile device as a PWA, ensuring your focus environment is always within reach."
  },
  {
    question: "What makes Orbit different from other productivity tools?",
    answer: "Orbit is built around the philosophy of deep work and intentional living. Unlike generic task managers, it uses AI to understand your cognitive patterns and adapts your schedule to maximize focus and minimize burnout."
  },
  {
    question: "Can I export my data?",
    answer: "Yes. You can export all your data — goals, journal entries, focus sessions, and plans — at any time in standard formats. Your data belongs to you."
  },
  {
    question: "Is there a free trial for Plus?",
    answer: "Yes, every new account gets a 14-day free trial of Orbit Plus with full access to AI planning, unlimited history, and advanced analytics. No credit card required."
  }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#222222] py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium tracking-tight pr-8">{question}</span>
        <div className="shrink-0 text-foreground/40 group-hover:text-foreground transition-colors">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-sm leading-relaxed max-w-2xl text-foreground/60">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />

        <main className="flex-grow">
          {/* Kinetic Hero Section */}
          <KineticHero />

          {/* Landing Bento Grid */}
          <LandingBentoGrid />

          {/* Integrations Section */}
          <IntegrationsBento />

          {/* Live Snapshot */}
          <HomeBentoGrid />

          {/* Social Proof */}
          <SocialProofCarousel />

          {/* Privacy Section */}
          <PrivacySection />

          {/* Pricing Section */}
          <section id="pricing" className="max-w-5xl mx-auto px-6 mb-48">
            <div className="text-center mb-16">
              <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-bold mb-4">Pricing</p>
              <h2 className="text-4xl md:text-5xl tracking-tight font-bold mb-4">Invest in your focus.</h2>
              <p className="text-foreground/40 text-base max-w-sm mx-auto">Simple, transparent pricing for those who take their work seriously.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 relative">
              {/* Free Plan */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative rounded-2xl border border-[#222222] bg-[#111111] p-8 flex flex-col overflow-hidden transition-all duration-300 hover:border-[#333333]"
              >
                <div className="mb-8 relative">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/30 font-bold mb-5">Free</p>
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold tracking-tight">$0</span>
                    <span className="text-xs text-foreground/25 uppercase tracking-widest pb-1.5">/ month</span>
                  </div>
                  <p className="text-xs text-foreground/35 mt-4 leading-relaxed">
                    For those just getting started with intentional work.
                  </p>
                </div>

                <div className="space-y-3.5 mb-10 flex-grow">
                  {["Core Focus Timer", "Basic Planning", "Community Access", "7 Day History"].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm text-foreground/50">
                      <Check className="w-3.5 h-3.5 shrink-0 opacity-60" />
                      {item}
                    </div>
                  ))}
                </div>

                <button className="w-full py-3.5 rounded-xl border border-[#222222] text-sm text-foreground/50 hover:text-foreground hover:border-[#333333] hover:bg-foreground/5 transition-all duration-300">
                  Join Beta
                </button>
              </motion.div>

              {/* Plus Plan */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="relative rounded-2xl border border-accent/30 bg-[#111111] p-8 flex flex-col overflow-hidden transition-all duration-300 hover:border-accent/50"
              >
                <div className="absolute inset-0 bg-accent/[0.02] pointer-events-none" />
                
                {/* Recommended badge */}
                <div className="absolute top-4 right-4 flex items-center rounded-full bg-accent/10 border border-accent/20 px-3 py-1">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-accent">Recommended</span>
                </div>

                <div className="mb-8 relative">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold mb-5">Plus</p>
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold tracking-tight">$3</span>
                    <span className="text-xs text-foreground/25 uppercase tracking-widest pb-1.5">/ month</span>
                  </div>
                  <p className="text-xs text-foreground/40 mt-4 leading-relaxed">
                    For serious deep workers who need the full suite.
                  </p>
                </div>

                <div className="space-y-3.5 mb-10 flex-grow relative">
                  {["Everything in Free", "AI Architecture Models", "Unlimited History", "Advanced Analytics", "Cross-device Sync", "Priority Support"].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                      <Check className="w-3.5 h-3.5 shrink-0 text-accent" />
                      {item}
                    </div>
                  ))}
                </div>

                <button className="relative w-full rounded-xl bg-accent py-3.5 text-sm font-semibold text-accent-foreground transition-opacity duration-300 hover:opacity-90">
                  Get Started
                </button>
              </motion.div>

              {/* Pro+ Plan */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="relative rounded-2xl border border-[#222222] bg-[#111111] p-8 flex flex-col overflow-hidden transition-all duration-300 hover:border-[#333333]"
              >
                <div className="mb-8 relative">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/30 font-bold mb-5">Pro+</p>
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold tracking-tight">$75</span>
                    <span className="text-xs text-foreground/25 uppercase tracking-widest pb-1.5">once</span>
                  </div>
                  <p className="text-xs text-foreground/35 mt-4 leading-relaxed">
                    Pay once, own forever. All future updates included.
                  </p>
                </div>

                <div className="space-y-3.5 mb-10 flex-grow">
                  {["Everything in Plus", "Lifetime Access", "Future Updates Included", "Exclusive Beta Tools", "Founder Badge"].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm text-foreground/50">
                      <Check className="w-3.5 h-3.5 shrink-0 opacity-60" />
                      {item}
                    </div>
                  ))}
                </div>

                <button className="w-full py-3.5 rounded-xl border border-[#222222] text-sm text-foreground/50 hover:text-foreground hover:border-[#333333] hover:bg-foreground/5 transition-all duration-300">
                  Get Lifetime Access
                </button>
              </motion.div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="max-w-2xl mx-auto px-6 mb-48">
            <div className="text-center mb-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-bold mb-4">FAQ</p>
              <h2 className="text-3xl font-bold">Questions</h2>
            </div>
            <div className="divide-y divide-[#222222]">
              {faqItems.map((item, i) => (
                <FAQItem key={i} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="max-w-5xl mx-auto px-6 mb-48">
            <div className="p-16 md:p-24 rounded-[2.5rem] border border-[#222222] bg-[#111111]/30 text-center space-y-8 relative overflow-hidden">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight relative z-10">Begin your cultivation.</h2>
              <p className="text-foreground/60 max-w-lg mx-auto text-lg relative z-10">
                Join a community of thousands reclaiming their focus and building more intentional lives.
              </p>
              <div className="flex justify-center pt-6 relative z-10">
                <Link href="/signup" className="inline-flex items-center gap-3 rounded-full bg-accent px-12 py-5 text-sm font-medium text-accent-foreground transition-all hover:brightness-110 hover:-translate-y-0.5">
                  Start your journey <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-[#222222] py-8">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-sm font-medium">Orbit</span>
            <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-foreground/40">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </footer>
      </div>
    </PageWrapper>
  );
}
