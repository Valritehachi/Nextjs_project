import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const links = [
  { name: "Overview", href: "#" },
  { name: "Calorie Calculator", href: "#" },
  { name: "Food", href: "#" },
  { name: "History", href: "#" },
  { name: "Settings", href: "#" },
];

const Sidebar = () => {
  const selected = "overview";

  return (
    <div className="bg-accent h-dvh flex flex-col self-end	justify-between gap-2 py-2">
      <div className="flex flex-col gap-2">
        <div className="px-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <nav>
          {links.map((link) => (
            <Link
              key={link.name}
              className={cn(
                "block px-4 py-2 text-accent-foreground hover:bg-primary hover:text-accent-foreground",
                selected === link.name.toLowerCase() &&
                  "bg-secondary text-secondary-foreground"
              )}
              href={"/" + link.name.toLowerCase()}
            >
              <p>{link.name}</p>
            </Link>
          ))}
        </nav>
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
  );
};

export default Sidebar;
