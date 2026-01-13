"use client"

import { Navbar } from "@/components/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Main Content */}
      <main className="flex-grow bg-background">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
          {children}
        </div>
      </main>
    </div>
  );
}
