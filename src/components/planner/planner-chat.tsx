"use client"

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChatMessage } from "@/lib/gemini";
import { Send, User, Sparkles } from "lucide-react";

interface PlannerChatProps {
  history: ChatMessage[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

// ThinkingLoader component kept as is, but ensuring it fits in button later
export function ThinkingLoader() {
  return (
    <div className="flex items-center gap-2 opacity-60">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-2 h-2 rounded-full bg-current"
      />
      <span className="text-xs font-medium tracking-wide">Synthesizing...</span>
    </div>
  );
}

export function PlannerChat({ history, onSendMessage, isLoading }: PlannerChatProps) {
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isLoading]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div
        ref={scrollRef}
        className="flex-grow overflow-y-auto p-4 space-y-6 scrollbar-none content-start"
      >
        {history.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30 px-8">
            <Sparkles className="w-6 h-6" />
            <p className="text-sm font-medium">
              Architectural Margin
            </p>
          </div>
        )}

        {history.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
          >
            <div className={`max-w-[90%] p-4 rounded-2xl border text-sm leading-relaxed ${msg.role === "user"
              ? "border-border bg-foreground/[0.04] text-foreground rounded-tr-sm"
              : "border-border bg-background text-foreground/80 shadow-sm rounded-tl-sm"
              }`}>
              {msg.content}
            </div>
            <span className="text-[9px] opacity-20 mt-1 px-1 uppercase tracking-wider">
              {msg.role === "user" ? "You" : "Orbit"}
            </span>
          </motion.div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="border border-border bg-background p-4 rounded-2xl rounded-tl-sm shadow-sm">
              <ThinkingLoader />
            </div>
          </div>
        )}
      </div>

      <div className="p-4 pt-2">
        <form onSubmit={handleSubmit} className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            placeholder="Type your revision..."
            className="w-full border border-border bg-foreground/[0.03] hover:bg-foreground/[0.05] focus:bg-background rounded-full py-4 pl-6 pr-12 text-sm transition-all outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 transition-all scale-90 group-focus-within:opacity-100 group-focus-within:scale-100 has-[:disabled]:opacity-0"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
