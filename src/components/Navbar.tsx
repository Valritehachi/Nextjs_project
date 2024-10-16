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
          <Button asChild variant={"link"} className="text-accent-foreground">
            <Link href="#about">About us</Link>
          </Button>
          <SignedIn>
            <Button asChild variant={"link"} className="text-accent-foreground">
              <Link href="/overview">Overview</Link>
            </Button>
            <Button asChild variant={"link"} className="text-accent-foreground">
              <Link href="/food">Food</Link>
            </Button>
            <Button asChild variant={"link"} className="text-accent-foreground">
              <Link href="/bodycomposition">Body Composition</Link>
            </Button>
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
