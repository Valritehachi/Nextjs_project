"use client";

import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
  return (
    <div className="h-dvh bg-accent flex flex-col">
      <Navbar />
      <LoginForm />
    </div>
  );
}
