"use client"

import { PageWrapper } from "@/components/page-wrapper";
import { Navbar } from "@/components/navbar";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function ProgramPage() {
    return (
        <PageWrapper>
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-grow flex flex-col items-center justify-center p-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl font-serif italic tracking-tight">Program</h1>
                        <p className="opacity-60 font-sans max-w-md mx-auto">
                            Download the program details to get started with your focused journey.
                        </p>

                        <a
                            href="/program.pdf"
                            download="program.pdf"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium font-sans hover:opacity-90 transition-opacity"
                        >
                            <Download className="w-4 h-4" />
                            Download PDF
                        </a>
                    </motion.div>
                </div>
            </div>
        </PageWrapper>
    );
}
