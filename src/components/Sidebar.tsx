import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";

import { getCurrentUser } from "@/utils/auth/getUser";
import NavLinks from "./NavLinks";

const links = [
  { name: "Overview", href: "#" },
  { name: "Calorie Calculator", href: "#" },
  { name: "Food", href: "#" },
  { name: "History", href: "#" },
  { name: "Settings", href: "#" },
];

const Sidebar = async () => {
  const selected = "overview";
  const user = await getCurrentUser();

  return (
    <div className="bg-card h-dvh flex flex-col self-end	justify-between gap-2 py-2">
      <div className="flex flex-col gap-2 h-full">
        <div className="p-4 rounded-md bg-muted ">
          <div className="rounded-md">
            <div className="flex items-center">
              <div className="flex items-center gap-2 ">
                <div>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
                <div className="flex flex-col gap-1 text-xs text-card-foreground">
                  <div>{user.fullName}</div>
                  <div>{user.emailAddresses[0].emailAddress}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full">
          <NavLinks />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center px-4">
            <ModeToggle />
          </div>
          <Button className="justify-start" variant={"secondary"}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
