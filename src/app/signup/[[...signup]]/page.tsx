"use client";

import Navbar from "@/components/Navbar";
import { SignUp } from "@clerk/nextjs";
import { useState, useEffect } from "react";

export default function SignupPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex justify-center items-center h-full">
      <Navbar />
      <div className="flex justify-center items-center h-full">
        <div
          className={`transition-opacity duration-1000 ease-out ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <SignUp routing="path" path="/signup" signInUrl="/signin" />
        </div>
      </div>
    </div>
  );
}
