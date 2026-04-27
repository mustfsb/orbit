import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./LogoutButton";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const name = user.user_metadata?.name as string | undefined;
  const email = user.email ?? "";
  const provider = user.app_metadata?.provider as string | undefined;
  const createdAt = new Date(user.created_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : email[0].toUpperCase();

  return (
    <section className="px-site py-section">
      <div className="max-w-site mx-auto">
        <div className="flex items-center justify-between mb-8">
          <p className="font-sans text-[13px] leading-[19.5px] tracking-[0.8px] uppercase text-muted-foreground">
            Dashboard
          </p>
          <LogoutButton />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[860px]">
          {/* Avatar + name card */}
          <div className="md:col-span-1 bg-muted rounded-2xl ring-1 ring-foreground/10 p-8 flex flex-col items-center gap-4 text-center">
            <div
              className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              <span className="font-sans text-[22px] font-semibold text-primary-foreground">
                {initials}
              </span>
            </div>
            <div>
              {name && (
                <p className="font-sans text-[18px] leading-[27px] font-semibold text-foreground">
                  {name}
                </p>
              )}
              <p className="font-sans text-[14px] leading-[21px] text-muted-foreground break-all">
                {email}
              </p>
            </div>
          </div>

          {/* Details card */}
          <div className="md:col-span-2 bg-muted rounded-2xl ring-1 ring-foreground/10 p-8 flex flex-col gap-5">
            <p className="font-sans text-[13px] leading-[19.5px] tracking-[0.6px] uppercase text-muted-foreground">
              Account details
            </p>
            <div className="flex flex-col gap-4">
              <Row label="User ID" value={user.id} mono />
              <Row label="Email" value={email} />
              {name && <Row label="Name" value={name} />}
              <Row
                label="Sign-in method"
                value={provider === "google" ? "Google" : "Email & password"}
              />
              <Row label="Member since" value={createdAt} />
              <Row
                label="Email verified"
                value={user.email_confirmed_at ? "Yes" : "Pending"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-border pb-4 last:border-0 last:pb-0">
      <span className="font-sans text-[13px] text-muted-foreground sm:w-36 shrink-0">
        {label}
      </span>
      <span
        className={`font-sans text-[14px] text-foreground break-all${mono ? " font-mono text-[12px]" : ""}`}
      >
        {value}
      </span>
    </div>
  );
}
