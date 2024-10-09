"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between p-4 bg-accent">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        PlatePlan
      </h3>
      <div className="flex gap-4 ">
        <ModeToggle />
        <Button variant="outline">
          <Link href="/login">Login</Link>
        </Button>
        <Button>
          <Link href="/register">Sign Up</Link>
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
