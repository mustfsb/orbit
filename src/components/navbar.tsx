"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useRef, useEffect } from "react";
import { User, Settings, LogOut, CreditCard, Sparkles, Bell, Menu, X } from "lucide-react";
import { useSettings } from "@/context/settings-context";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@/lib/supabase/client";
import { logout } from "@/app/auth/actions";

const appLinksUnified = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Planner", href: "/planner" },
  { name: "Analytics", href: "/analytics" },
];

const appLinksFocused = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Timer", href: "/timer" },
  { name: "Todos", href: "/todos" },
  { name: "Planner", href: "/planner" },
  { name: "Analytics", href: "/analytics" },
];

export function Navbar() {
  const pathname = usePathname();
  const { settings } = useSettings();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPlan, setUserPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    const fetchPlan = async (userId: string, metadataPlan?: string) => {
      let finalPlan = 'free';
      try {
        const { data } = await supabase
          .from('profiles')
          .select('plan')
          .eq('id', userId)
          .single();

        if (data?.plan) {
          finalPlan = data.plan;
        } else {
          finalPlan = metadataPlan || 'free';
        }
      } catch (e) {
        finalPlan = metadataPlan || 'free';
      }

      setUserPlan(finalPlan);
      setIsLoading(false);
    };

    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setIsLoggedIn(!!session);
        if (session) {
          await fetchPlan(session.user.id, session.user.user_metadata?.plan);
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
      }
    };

    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
      if (session) {
        fetchPlan(session.user.id, session.user.user_metadata?.plan);
      } else {
        setUserPlan(null);
        setIsLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    setIsDropdownOpen(false);
    try {
      await logout();
      setIsLoggedIn(false);
      setUserPlan(null);
    } catch (error) {
      // redirect usually throws an error in Next.js
    }
  };

  const getPlanBadge = () => {
    let plan = 'FREE';
    if (userPlan) {
      if (userPlan.toLowerCase().includes('plus')) plan = 'PLUS';
      else if (userPlan.toLowerCase().includes('pro') || userPlan.toLowerCase().includes('life')) plan = 'PRO+';
    }

    if (plan === 'PLUS') {
      return (
        <div className="flex items-center gap-1.5 text-[10px] font-black tracking-widest px-3 py-1 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 border border-slate-200 shadow-sm cursor-default">
          PLUS
        </div>
      )
    }

    if (plan === 'PRO+') {
      return (
        <div className="flex items-center gap-1 text-[10px] font-black tracking-widest px-3 py-1 rounded-full bg-[#e57c5e] text-white border border-[#e57c5e] shadow-[0_0_15px_-3px_rgba(229,124,94,0.4)] cursor-default">
          <Sparkles className="w-2.5 h-2.5 fill-current" />
          PRO+
        </div>
      )
    }

    return (
      <div className="flex items-center justify-center text-[10px] font-bold tracking-widest px-3 py-1 rounded-full bg-foreground/5 text-accent cursor-default">
        FREE
      </div>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/50 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Name */}
        <Link
          href="/"
          className="text-xl font-serif italic tracking-tight z-[60]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Orbit
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-8">
            {isLoggedIn && (
              (settings.viewMode === "focused" ? appLinksFocused : appLinksUnified).map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`text-sm font-sans font-medium transition-all relative py-5 block ${pathname === link.href
                      ? "text-accent"
                      : "opacity-60 hover:opacity-100"
                      }`}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                      />
                    )}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </nav>

        {/* Right side container: Notification, Toggle, Account, Hamburger */}
        <div className="flex items-center gap-3 z-[60]">
          {/* Notification Badge */}
          <button className="p-2 rounded-full hover:bg-foreground/5 transition-colors relative">
            <Bell className="w-5 h-5 opacity-70" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-background" />
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Account/User Menu */}
          {isLoading ? (
            <div className="h-9 w-9 bg-foreground/5 rounded-full animate-pulse" />
          ) : isLoggedIn ? (
            <div className="relative flex items-center" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-foreground/5 transition-colors"
                id="user-menu-button"
              >
                <User className="w-4 h-4 opacity-70" />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-2 w-48 rounded-2xl border border-border bg-background shadow-xl p-2 z-[60]"
                  >
                    <Link
                      href="/settings"
                      className="flex items-center gap-3 px-4 py-2 text-sm font-sans opacity-70 hover:opacity-100 hover:bg-foreground/5 rounded-xl transition-all"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </Link>
                    <Link
                      href="/#pricing"
                      className="flex items-center gap-3 px-4 py-2 text-sm font-sans opacity-70 hover:opacity-100 hover:bg-foreground/5 rounded-xl transition-all"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <CreditCard className="w-4 h-4" />
                      Billing
                    </Link>
                    <div className="h-px bg-border my-1 mx-2" />
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm font-sans text-accent opacity-70 hover:opacity-100 hover:bg-foreground/5 rounded-xl transition-all"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              href="/signup"
              className="px-6 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity hidden md:block"
            >
              Get Started
            </Link>
          )}

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 md:hidden rounded-full hover:bg-foreground/5 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-[10px] -webkit-backdrop-blur-[10px] flex flex-col justify-center items-center"
          >
            <nav>
              <ul className="flex flex-col items-center gap-8">
                {appLinksUnified.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-4xl font-serif italic tracking-tight transition-all ${pathname === link.href
                        ? "text-accent"
                        : "opacity-60 hover:opacity-100"
                        }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                {!isLoggedIn && (
                  <li>
                    <Link
                      href="/signup"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-10 py-4 rounded-full bg-accent text-accent-foreground text-lg font-medium hover:opacity-90 transition-opacity mt-4 block"
                    >
                      Get Started
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
