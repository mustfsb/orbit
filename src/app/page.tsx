"use client"

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import {
  ArrowRight,
  Sparkles,
  Clock,
  BarChart3,
  Check,
  Plus,
  Minus,
  Github,
  Twitter,
  Linkedin,
  Target,
  Layout
} from "lucide-react";
import Link from "next/link";
import { PageWrapper } from "@/components/page-wrapper";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

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
  }
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border py-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-xl font-serif italic tracking-tight">{question}</span>
        <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground/5 transition-colors">
          {isOpen ? <Minus className="w-4 h-4 opacity-40" /> : <Plus className="w-4 h-4 opacity-40" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 0.7 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-sm leading-relaxed max-w-2xl font-sans">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}



export default function Home() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("orbit-auth") === "true";
    if (isLoggedIn) {
      router.push("/dashboard");
    } else {
      setIsReady(true);
    }
  }, [router]);

  if (!isReady) return <div className="min-h-screen bg-background" />;

  return (
    <PageWrapper>
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="max-w-5xl mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-48 text-center relative overflow-hidden">
            {/* Ambient Background - Minimalist Grid */}
            <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none select-none">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.2)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]"></div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8 relative z-10"
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-accent/5 text-[10px] uppercase tracking-widest font-medium text-accent"
              >
                <Sparkles className="w-3 h-3" />
                Now in Private Beta
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] font-serif italic"
              >
                Master your <br /> workflow.
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl opacity-60 max-w-2xl mx-auto leading-relaxed italic font-serif"
              >
                A minimal environment for deep work, intentional planning, and cognitive flourishing. Crafted for those who value clarity over noise.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
              >
                <motion.div whileTap={{ scale: 0.98 }}>
                  <Link href="/signup" className="px-10 py-4 rounded-full bg-accent text-accent-foreground hover:opacity-90 transition-opacity flex items-center gap-3 text-sm font-medium shadow-lg shadow-accent/20 tracking-wider">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </section>

          {/* Social Proof */}
          <section className="border-y border-border bg-foreground/[0.01] py-12 mb-32">
            <div className="max-w-5xl mx-auto px-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-center opacity-30 font-bold mb-10">Trusted by minimalist thinkers</p>
              <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                {["Google", "Microsoft", "Spotify", "Amazon", "Uber"].map((brand) => (
                  <span key={brand} className="text-xl font-serif font-bold tracking-tight">{brand}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="max-w-7xl mx-auto px-6 mb-48 overflow-hidden">
            <div className="text-center mb-24">
              <h2 className="text-3xl md:text-5xl tracking-tight font-serif italic mb-6">Tools for the internal life.</h2>
              <p className="opacity-50 text-sm max-w-md mx-auto">Systems designed to fade into the background, leaving only your best work.</p>
            </div>

            <div className="relative mask-marquee">
              <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="flex gap-8 whitespace-nowrap"
                style={{ width: 'max-content' }}
              >
                {[...Array(2)].map((_, idx) => (
                  <div key={idx} className="flex gap-8 pr-8">
                    {[
                      { icon: Sparkles, title: "AI Planning", desc: "Advanced cognitive models for schedule architecture." },
                      { icon: Clock, title: "Focus Timer", desc: "Distraction-free environment induction flow." },
                      { icon: BarChart3, title: "Deep Analytics", desc: "Observation without the pressure of performance." },
                      { icon: Target, title: "Intentions", desc: "Set clear markers for your spiritual growth." },
                      { icon: Layout, title: "Adaptive UI", desc: "Interfaces that shift with your mental state." }
                    ].map((feature, i) => (
                      <div
                        key={`${idx}-${i}`}
                        className="inline-block w-[300px] p-8 rounded-[2rem] border border-border bg-foreground/[0.02] space-y-4 hover:border-accent/30 transition-colors group"
                      >
                        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-foreground/5 text-accent group-hover:scale-110 transition-transform duration-500">
                          <feature.icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl tracking-tight italic font-serif">{feature.title}</h3>
                        <p className="opacity-50 text-xs leading-relaxed whitespace-normal">
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="max-w-6xl mx-auto px-6 mb-48">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl tracking-tight font-serif italic mb-6">Invest in your focus.</h2>
              <p className="opacity-60 text-lg max-w-lg mx-auto font-serif italic">Simple, transparent pricing for those who take their work seriously.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start relative">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[120px] -z-10 rounded-full" />

              {/* Free Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 md:p-10 rounded-[2rem] border border-border bg-background/50 backdrop-blur-sm flex flex-col relative z-10 hover:border-accent/20 transition-colors"
              >
                <div className="mb-8">
                  <h3 className="text-xl font-serif italic mb-2 opacity-80">Free</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-serif italic">$0</span>
                    <span className="text-xs opacity-40 uppercase tracking-widest font-sans font-medium">/ month</span>
                  </div>
                  <p className="text-xs opacity-50 mt-4 leading-relaxed">
                    Perfect for trying out the core features and establishing a baseline flow.
                  </p>
                </div>
                <div className="space-y-4 mb-10 flex-grow">
                  {["Core Focus Timer", "Basic Planning", "Community Access", "7 Day History"].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm opacity-70">
                      <div className="w-5 h-5 rounded-full bg-foreground/5 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 rounded-xl border border-border bg-transparent hover:bg-foreground/5 text-sm font-medium transition-all duration-300">
                  Join Beta
                </button>
              </motion.div>

              {/* Pro Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="p-8 md:p-10 rounded-[2rem] border border-accent/30 bg-background/80 backdrop-blur-md flex flex-col relative z-20 shadow-2xl shadow-accent/10 md:-mt-8 md:mb-8 ring-1 ring-accent/20"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-accent to-[#d97757] text-white px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold shadow-lg shadow-accent/20">
                  Recommended
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-serif italic mb-2 text-accent">Plus</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-serif italic">$3</span>
                    <span className="text-xs opacity-40 uppercase tracking-widest font-sans font-medium">/ month</span>
                  </div>
                  <p className="text-xs opacity-50 mt-4 leading-relaxed">
                    For serious deep workers who need detailed analytics and unlimited history.
                  </p>
                </div>
                <div className="space-y-4 mb-10 flex-grow">
                  {["Everything in Free", "AI Architecture Models", "Unlimited History", "Advanced Analytics", "Cross-device Sync", "Priority Support"].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm font-medium opacity-90">
                      <div className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 rounded-xl bg-gradient-to-r from-accent to-[#d97757] text-white text-sm font-bold shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:scale-[1.02] transition-all duration-300">
                  Get Started
                </button>
              </motion.div>

              {/* Pro+ Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="p-8 md:p-10 rounded-[2rem] border border-border bg-background/50 backdrop-blur-sm flex flex-col relative z-10 hover:border-accent/20 transition-colors"
              >
                <div className="mb-8">
                  <h3 className="text-xl font-serif italic mb-2 opacity-80">Pro+</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-serif italic">$75</span>
                    <span className="text-xs opacity-40 uppercase tracking-widest font-sans font-medium">one-time</span>
                  </div>
                  <p className="text-xs opacity-50 mt-4 leading-relaxed">
                    Pay once, own it forever. Includes all future Plus updates and features.
                  </p>
                </div>
                <div className="space-y-4 mb-10 flex-grow">
                  {["Everything in Plus", "Lifetime Access", "Future Updates Included", "Exclusive Beta Tools", "Founder Badge"].map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm opacity-70">
                      <div className="w-5 h-5 rounded-full bg-foreground/5 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 rounded-xl border border-border bg-transparent hover:bg-foreground/5 text-sm font-medium transition-all duration-300">
                  Get Lifetime Access
                </button>
              </motion.div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="max-w-3xl mx-auto px-6 mb-48">
            <h2 className="text-3xl font-serif italic mb-12 text-center">Frequently asked.</h2>
            <div className="divide-y divide-border">
              {faqItems.map((item, i) => (
                <FAQItem key={i} question={item.question} answer={item.answer} />
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="max-w-5xl mx-auto px-6 mb-48">
            <div className="p-16 md:p-24 rounded-[3rem] border border-border bg-foreground/[0.01] text-center space-y-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-50" />
              <h2 className="text-4xl md:text-6xl font-serif italic tracking-tight relative z-10">Begin your cultivation.</h2>
              <p className="opacity-60 max-w-lg mx-auto text-lg italic font-serif relative z-10">
                Join a community of thousands reclaiming their focus and building more intentional lives.
              </p>
              <div className="flex justify-center pt-6 relative z-10">
                <Link href="/signup" className="px-12 py-5 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity flex items-center gap-3 text-sm font-medium">
                  Start your journey <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="pt-24 pb-12 border-t border-border bg-foreground/[0.01]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
              <div className="col-span-2">
                <div className="text-2xl font-serif italic mb-6">Orbit</div>
                <p className="text-sm opacity-50 max-w-xs leading-relaxed font-sans">
                  Cultivating a more thoughtful relationship between human intuition and machine intelligence.
                </p>
              </div>
              <div className="space-y-6">
                <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] opacity-40">Product</h4>
                <ul className="text-sm space-y-4 opacity-60 font-sans">
                  <li><a href="#" className="hover:text-accent transition-colors">Features</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">Pricing</a></li>
                  <li><Link href="/dashboard" className="hover:text-accent transition-colors">Launch App</Link></li>
                </ul>
              </div>
              <div className="space-y-6">
                <h4 className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] opacity-40">Company</h4>
                <ul className="text-sm space-y-4 opacity-60 font-sans">
                  <li><a href="#" className="hover:text-accent transition-colors">Our Philosophy</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">Safety Research</a></li>
                  <li><a href="#" className="hover:text-accent transition-colors">Join the Team</a></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-border/50 text-[10px] opacity-40 uppercase tracking-widest font-sans font-bold">
              <div>© 2026 Orbit Research. Designed for the human spirit.</div>
              <div className="flex gap-10">
                <a href="#" className="hover:opacity-100 transition-opacity">Privacy Architecture</a>
                <a href="#" className="hover:opacity-100 transition-opacity">Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </PageWrapper >
  );
}
