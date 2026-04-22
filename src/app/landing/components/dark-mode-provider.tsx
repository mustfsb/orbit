"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

interface DarkModeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const DarkModeContext = createContext<DarkModeContextValue>({
  theme: "light",
  toggleTheme: () => {},
});

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.getElementById("landing-root");
  if (root) {
    root.setAttribute("data-theme", theme);
  }
}

function getSavedTheme(): Theme {
  if (typeof document === "undefined") return "light";
  // Read the data-theme attribute that the inline script already set
  const attr = document.getElementById("landing-root")?.getAttribute("data-theme");
  if (attr === "dark" || attr === "light") return attr;
  // Fallback: read localStorage directly
  try {
    const saved = localStorage.getItem("landing-theme") as Theme | null;
    if (saved === "dark" || saved === "light") return saved;
  } catch {}
  // Final fallback: system preference
  if (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

export function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getSavedTheme);

  // Persist to localStorage and apply to DOM whenever theme changes
  useEffect(() => {
    try {
      localStorage.setItem("landing-theme", theme);
    } catch {}
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      return next;
    });
  }, []);

  return (
    <DarkModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(DarkModeContext);
}
