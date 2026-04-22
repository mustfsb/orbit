"use client"

import { Lock, EyeOff, Shield, HardDrive } from "lucide-react"

const features = [
  { icon: Lock, label: "Encrypted", desc: "AES-256-GCM for every session" },
  { icon: EyeOff, label: "Zero-Knowledge", desc: "We can't read your data" },
  { icon: Shield, label: "No Tracking", desc: "No pixels, no analytics resale" },
  { icon: HardDrive, label: "You Own It", desc: "Export or delete instantly" },
]

export function PrivacySection() {
  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 vault-grid-bg opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          Your data stays yours.
        </h2>
        <p className="text-lg text-foreground/50 max-w-xl mx-auto mb-20">
          End-to-end encrypted. Zero knowledge. No tracking.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {features.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-[#111111]/60 border border-[#222222] hover:border-[#333333] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <div className="text-center">
                <span className="text-xs font-mono uppercase tracking-widest text-foreground/80 block mb-1">{label}</span>
                <span className="text-[10px] text-foreground/40 leading-relaxed">{desc}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom badge */}
        <div className="mt-16 inline-flex items-center gap-2 rounded-full bg-accent/5 border border-accent/10 px-4 py-2">
          <Lock className="w-3 h-3 text-accent" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent/70">256-bit AES-GCM Encryption</span>
        </div>
      </div>
    </section>
  )
}
