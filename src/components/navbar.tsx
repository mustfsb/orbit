"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useRef, useEffect } from "react";
import { User, Settings, Timer, ListTodo, LayoutDashboard, BarChart3, LogOut, CreditCard, Sparkles, Menu, X } from "lucide-react";
import { useSettings } from "@/context/settings-context";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const appLinksUnified = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Planner", href: "/planner" },
  { name: "Analytics", href: "/analytics" },
];

const appLinksFocused = [
  { name: "Timer", href: "/timer" },
  { name: "Todos", href: "/todos" },
  { name: "Planner", href: "/planner" },
  { name: "Analytics", href: "/analytics" },
];

import { createClient } from "@/lib/supabase/client";
import { logout } from "@/app/auth/actions";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
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

    // Check current session
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

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
      if (session) {
        // We don't necessarily need to show loading here on every auth change loop, 
        // but for initial load it's handled by checkSession.
        // For re-auth, we might want to update plan without full flicker usually, 
        // but let's keep it simple.
        fetchPlan(session.user.id, session.user.user_metadata?.plan);
      } else {
        setUserPlan(null);
        // Ensure loading is false if we logged out
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
      // redirect usually throws an error in Next.js, so correct/expected
    }
  };

  const getPlanBadge = () => {
    // Determine plan
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

    // Default FREE badge
    return (
      <div className="flex items-center justify-center text-[10px] font-bold tracking-widest px-3 py-1 rounded-full bg-foreground/5 text-accent cursor-default">
        FREE
      </div>
    );
  };

  return (
    <header className="bg-background/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-xl font-serif italic tracking-tight">
            Orbit
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {/* Show navigation items regardless of loading state for layout stability, 
                  but conditional links depend on loggedIn. 
                  Maybe just keep existing logic, as nav links aren't the main data fetch issue. */}
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
        </div>

        <div className="flex items-center gap-4">
          {isLoading ? (
            <div className="h-6 w-16 bg-foreground/5 rounded-full animate-pulse hidden md:block" />
          ) : isLoggedIn && (
            <div className="hidden md:block">
              {getPlanBadge()}
            </div>
          )}

          <ThemeToggle />

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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1 opacity-70 hover:opacity-100"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex flex-col p-6 md:hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-serif italic tracking-tight">Orbit</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-foreground/5 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-grow flex flex-col gap-6 justify-center items-center">
              {isLoggedIn && (
                (settings.viewMode === "focused" ? appLinksFocused : appLinksUnified).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-3xl font-serif italic tracking-tight transition-colors ${pathname === link.href ? "text-accent" : "opacity-60 hover:opacity-100"}`}
                  >
                    {link.name}
                  </Link>
                ))
              )}
              {!isLoggedIn && (
                <Link
                  href="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif italic tracking-tight hover:text-accent transition-colors"
                >
                  Get Started
                </Link>
              )}
            </nav>

            <div className="mt-auto">
              {isLoggedIn && (
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-center gap-2 p-4 text-red-500 text-sm font-medium hover:bg-red-500/5 rounded-xl transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
