"use client";

import Navbar from "@/components/Navbar";
import SignUpForm from "@/components/SignUpForm";

export default function SignupPage() {
  return (
    <div className="h-screen">
      <Navbar />

      <section>
        <SignUpForm />
      </section>
    </div>
  );
}
