import type { Metadata } from "next";
import { AuthPage } from "@/components/auth/AuthPage";
import { authPages } from "@/data/auth";

export const metadata: Metadata = { title: "Sign In | ByteSpace" };

export default function LoginPage() {
  return <AuthPage content={authPages.login} />;
}