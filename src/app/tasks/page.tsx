"use client"

import { TodoList } from "@/components/todo-list";
import { PageWrapper } from "@/components/page-wrapper";
import { Navbar } from "@/components/navbar";

export default function TasksPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 md:py-24">
        <PageWrapper>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="space-y-4">
              <h1 className="text-4xl font-serif italic tracking-tight text-center">The Task Ledger</h1>
              <p className="opacity-60 font-sans italic text-center max-w-md mx-auto">
                Organize your thoughts and intentions. What shall we cultivate today?
              </p>
            </div>
            <TodoList />
          </div>
        </PageWrapper>
      </main>
    </div>
  );
}
