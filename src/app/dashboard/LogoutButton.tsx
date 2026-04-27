"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="cursor-pointer font-medium inline-flex items-center justify-center whitespace-nowrap transition-all rounded-full border border-border bg-background hover:bg-muted h-9 px-4 text-sm text-foreground"
    >
      Log out
    </button>
  );
}
