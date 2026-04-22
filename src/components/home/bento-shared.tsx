"use client"

import React from "react";

export const CardDynamic = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <div className={`rounded-2xl bg-[#111111] border border-[#222222] p-6 lg:p-8 relative overflow-hidden transition-all duration-300 group cursor-default hover:border-[#333333] hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(224,255,130,0.06)] ${className}`}>
    {children}
  </div>
);

export const CardGreen = ({ className, children }: { className?: string, children: React.ReactNode }) => (
  <div className={`rounded-2xl bg-[#E0FF82] text-[#0a0a0a] p-6 lg:p-8 relative overflow-hidden transition-all duration-300 group cursor-default hover:brightness-105 hover:-translate-y-1 ${className}`}>
    {children}
  </div>
);
