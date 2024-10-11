import Navbar from "@/components/Navbar";
import NotFoundTemplate from "@/components/NotFoundTemplate";

export default function Example() {
  return (
    <div className="flex flex-col h-dvh">
      <NotFoundTemplate link="/" linkText="Go Home" />
    </div>
  );
}
