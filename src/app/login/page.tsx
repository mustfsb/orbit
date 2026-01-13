import { Suspense } from "react";
import { PageWrapper } from "@/components/page-wrapper";
import { Loader2 } from "lucide-react";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <PageWrapper>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-accent" /></div>}>
        <LoginForm />
      </Suspense>
    </PageWrapper>
  );
}
