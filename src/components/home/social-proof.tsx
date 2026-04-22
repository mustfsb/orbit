"use client"

import React from "react";

const testimonials = [
  {
    quote: "Orbit didn't just organize my tasks; it rewired how I perceive time. I actually look forward to planning blocks now.",
    name: "Alex M.",
    role: "Product Designer",
  },
  {
    quote: "The visual momentum is addictive. Seeing the deep work streak fill up gives me satisfaction unlike any list app.",
    name: "Sarah J.",
    role: "Senior Engineer",
  },
  {
    quote: "It's surprisingly human. The AI agent feels more like a calm colleague sorting things out behind the scenes.",
    name: "David K.",
    role: "Founding Partner",
  }
];

export const SocialProofCarousel = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-32">
      <div className="text-center mb-16">
        <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-bold mb-4">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Cultivating thinkers.
        </h2>
      </div>

      <div className="flex flex-col">
        {testimonials.map((t, i) => (
          <div 
            key={i} 
            className="group py-16 border-t border-[#222222] first:border-t-0 transition-colors duration-500 hover:bg-[#111111]/50 px-6 -mx-6 rounded-2xl cursor-default"
          >
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed tracking-tight text-foreground/90 italic mb-8 transition-colors duration-500 group-hover:text-accent">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[10px] font-mono font-bold text-foreground/70 group-hover:bg-accent group-hover:text-[#0a0a0a] transition-all duration-500">
                {t.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p className="text-sm font-medium group-hover:text-foreground transition-colors duration-300">{t.name}</p>
                <p className="text-[10px] font-mono uppercase tracking-widest text-foreground/40">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
