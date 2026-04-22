"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useRef, useEffect } from "react";
import { User, Settings, LogOut, CreditCard, Sparkles, Menu, X } from "lucide-react";
import { useSettings } from "@/context/settings-context";
import { useAuth } from "@/context/auth-context";
import { motion, AnimatePresence } from "framer-motion";

const appLinksUnified = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Planner", href: "/planner" },
  { name: "Goals", href: "/goals" },
  { name: "Library", href: "/library" },
  { name: "Analytics", href: "/analytics" },
  { name: "Journal", href: "/journal" },
];

const appLinksFocused = [
  { name: "Timer", href: "/timer" },
  { name: "Todos", href: "/todos" },
  { name: "Planner", href: "/planner" },
  { name: "Goals", href: "/goals" },
  { name: "Library", href: "/library" },
  { name: "Analytics", href: "/analytics" },
  { name: "Journal", href: "/journal" },
];

const publicLinks = [
  { name: "Features", href: "/#features" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Program", href: "/program" },
];

import { createClient } from "@/lib/supabase/client";
import { logout } from "@/app/auth/actions";

export function Navbar() {
  const pathname = usePathname();
  const { settings } = useSettings();
  const { user, loading: authLoading } = useAuth();
  const isLoggedIn = !!user;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [userPlan, setUserPlan] = useState<string | null>(null);
  const isLanding = pathname === "/";
  const navigationLinks = isLoggedIn
    ? settings.viewMode === "focused"
      ? appLinksFocused
      : appLinksUnified
    : publicLinks;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click-outside to close dropdown
  useEffect(() => {
    if (!isDropdownOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  // Fetch plan when user changes
  useEffect(() => {
    if (!user) {
      setUserPlan(null);
      return;
    }

    const fetchPlan = async () => {
      const supabase = createClient();
      try {
        const { data } = await supabase
          .from('profiles')
          .select('plan')
          .eq('id', user.id)
          .single();

        setUserPlan(data?.plan || user.user_metadata?.plan || 'free');
      } catch {
        setUserPlan(user.user_metadata?.plan || 'free');
      }
    };

    fetchPlan();
  }, [user]);

  const handleLogout = async () => {
    setIsDropdownOpen(false);
    try {
      await logout();
    } catch {
      // redirect throws in Next.js — expected
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
        <div className="flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[10px] font-black tracking-widest text-accent-foreground cursor-default">
          PLUS
        </div>
      );
    }

    if (plan === 'PRO+') {
      return (
        <div className="flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[10px] font-black tracking-widest text-accent-foreground cursor-default">
          <Sparkles className="w-2.5 h-2.5" />
          PRO+
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center rounded-full bg-accent px-3 py-1 text-[10px] font-bold tracking-widest text-accent-foreground cursor-default">
        FREE
      </div>
    );
  };

  return (
    <header
      className={`sticky top-0 z-[60] flex justify-center transition-all duration-500 ${
        isScrolled ? "pt-4 px-4" : "pt-4 md:pt-6"
      }`}
    >
      <div
        style={{ transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)" }}
        className={`flex h-16 items-center justify-between px-4 sm:px-6 text-foreground ${
          isScrolled
            ? "w-[90%] md:w-[80%] lg:max-w-[960px] rounded-[2.25rem] bg-background/85 backdrop-blur-2xl shadow-sm shadow-foreground/5"
            : "w-[95%] max-w-7xl rounded-xl bg-transparent"
        } ${isMobileMenuOpen ? "pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100" : ""}`}
      >
        <div className="flex items-center gap-6 lg:gap-12">
          <Link href="/" className="text-xl font-serif italic tracking-tight text-foreground">
            Orbit
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-5 lg:gap-8">
              {isLoggedIn && (
                (settings.viewMode === "focused" ? appLinksFocused : appLinksUnified).map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`relative block rounded-full px-3 py-1.5 text-sm font-sans font-medium transition-all ${
                        pathname === link.href
                          ? "bg-accent text-accent-foreground"
                          : "text-foreground/60 hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))
              )}
              {!isLoggedIn &&
                publicLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`relative block rounded-full px-3 py-1.5 text-sm font-sans font-medium transition-all ${
                        pathname === link.href
                          ? "bg-accent text-accent-foreground"
                          : "text-foreground/60 hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {authLoading ? (
            <div className="hidden sm:block h-6 w-16 bg-foreground/10 rounded-full animate-pulse" />
          ) : isLoggedIn && (
            <div className="hidden sm:block">
              {getPlanBadge()}
            </div>
          )}

          <ThemeToggle />

          {authLoading ? (
            <div className="h-9 w-9 bg-foreground/10 rounded-full animate-pulse" />
          ) : isLoggedIn ? (
            <div className="relative flex items-center" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-foreground/5 transition-colors text-foreground"
                id="user-menu-button"
              >
                <User className="w-4 h-4 opacity-60" />
              </button>
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-2 w-48 rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-xl p-2 z-[60] text-foreground"
                  >
                    <Link
                      href="/settings"
                      className="flex items-center gap-3 px-4 py-2 text-sm font-sans text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-xl transition-all"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </Link>
                    <Link
                      href="/#pricing"
                      className="flex items-center gap-3 px-4 py-2 text-sm font-sans text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-xl transition-all"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <CreditCard className="w-4 h-4" />
                      Billing
                    </Link>
                    <div className="h-px bg-border my-1 mx-2" />
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm font-sans text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-xl transition-all"
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
              className="hidden rounded-full bg-foreground px-6 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80 md:block"
            >
              Get Started
            </Link>
          )}

          <button
            className="md:hidden p-1 text-foreground/70 hover:text-foreground transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
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
            className="fixed inset-0 top-0 left-0 w-screen h-screen z-[100] bg-background/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden overscroll-none touch-none"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-foreground/50 hover:text-foreground transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col gap-8 items-center justify-center w-full">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl sm:text-4xl font-sans tracking-tight transition-all duration-300 ${
                    pathname === link.href
                      ? "rounded-full bg-accent px-6 sm:px-8 py-2 text-accent-foreground"
                      : "text-foreground/50 hover:text-foreground hover:scale-105"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
