"use client"

import { Navbar } from "@/components/navbar"
import { PageWrapper } from "@/components/page-wrapper"
import { JournalWorkspace } from "@/components/journal/journal-workspace"

export default function JournalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-12 md:py-20">
        <PageWrapper>
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-sans tracking-tight">Journal</h1>
              <p className="max-w-xl font-sans text-sm leading-relaxed opacity-55">
                A simple dated note with a small archive beside it.
              </p>
            </div>

            <JournalWorkspace />
          </div>
        </PageWrapper>
      </main>
    </div>
  )
}
