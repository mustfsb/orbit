"use client"

import { TodoList } from "@/components/todo-list";
import { PageWrapper } from "@/components/page-wrapper";
import { Navbar } from "@/components/navbar";

export default function TodosPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans bg-background">
            <Navbar />
            <main className="flex-grow max-w-4xl mx-auto w-full px-6 py-12">
                <PageWrapper>
                    <TodoList />
                </PageWrapper>
            </main>
        </div>
    );
}
