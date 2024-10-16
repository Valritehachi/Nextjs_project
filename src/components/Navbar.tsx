import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  return (
    <div className=" bg-accent ">
      <div className="flex justify-between p-4 container mx-auto  ">
        <div className="flex">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            <Link href="/">PlatePlan</Link>
          </h3>
          <Link href="#about">
            <Button variant={"link"} className="text-accent-foreground">
              About us
            </Button>
          </Link>
          <SignedIn>
            <Link href="/food">
              <Button variant={"link"} className="text-accent-foreground">
                Food
              </Button>
            </Link>
            <Link href="/bodycomposition">
              <Button variant={"link"} className="text-accent-foreground">
                Body Composition
              </Button>
            </Link>
          </SignedIn>
        </div>
        <div className="flex gap-4 ">
          <ModeToggle />
          <SignedOut>
            <Link href="/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </SignedOut>
          <div className="flex justify-center items-center">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
