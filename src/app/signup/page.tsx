import { Suspense } from "react";
import { PageWrapper } from "@/components/page-wrapper";
import { Loader2 } from "lucide-react";
import { SignupForm } from "@/components/auth/signup-form";

export default function SignupPage() {
  return (
    <PageWrapper>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-accent" /></div>}>
        <SignupForm />
      </Suspense>
    </PageWrapper>
  );
}
