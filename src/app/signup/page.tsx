"use client";

import Navbar from "@/components/Navbar";
import SignUpForm from "@/components/SignUpForm";

export default function SignupPage() {
  return (
    <div className="h-dvh bg-accent flex flex-col">
      <Navbar />
      <SignUpForm />
    </div>
  );
}
