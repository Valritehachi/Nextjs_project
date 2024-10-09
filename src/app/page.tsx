import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex gap-2 items-center pt-2">
      <ModeToggle />
      <Button>Button</Button>
    </div>
  );
}
