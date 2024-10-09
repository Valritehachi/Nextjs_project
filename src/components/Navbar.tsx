"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

const Navbar: React.FC = () => {
  return (
    <div className=" bg-accent ">
      <div className="flex justify-between p-4 container mx-auto  ">
        <div className="flex">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            <Link href="/">PlatePlan</Link>
          </h3>

          <Button variant={"link"} className="text-accent-foreground">
            <Link href="/">About us</Link>
          </Button>
        </div>
        <div className="flex gap-4 ">
          <ModeToggle />
          <Button variant="outline">
            <Link href="/login">Login</Link>
          </Button>
          <Button>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
