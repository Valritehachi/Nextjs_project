"use client";

import Navbar from "@/components/Navbar";
import { SignIn } from "@clerk/nextjs";
import { useState, useEffect } from "react";

export default function SignInPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <div
        className={`transition-opacity duration-1000 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
      <SignIn routing="path" path="/signin" signUpUrl="/signup" />
      </div>
    </div>
  );
}
