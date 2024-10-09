"use client";

import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/Navbar";

export default function LoginPage() {
  return (
    <div className="h-screen">
      <Navbar />

      <section>
        <LoginForm />
      </section>
    </div>
  );
}
