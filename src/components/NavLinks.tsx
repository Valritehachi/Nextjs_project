"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { usePathname } from "next/navigation";

const links = [
  { name: "Overview", href: "#", path: "overview" },
  { name: "Calorie Calculator", href: "#", path: "calorie-calculator" },
  { name: "Food", href: "#", path: "food" },
  { name: "History", href: "#", path: "history" },
  { name: "Settings", href: "#", path: "settings" },
];

const NavLinks = () => {
  const pathname = usePathname();
  const path = pathname.split("/")[1];

  return (
    <div className="">
      <nav>
        {links.map((link) => (
          <Link
            key={link.name}
            className={cn(
              "block px-4 py-2 text-accent-foreground hover:bg-primary hover:text-accent-foreground",
              path === link.name.toLowerCase() &&
                "bg-secondary text-secondary-foreground"
            )}
            href={"/" + link.path}
          >
            <p>{link.name}</p>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavLinks;
