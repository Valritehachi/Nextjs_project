import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface NotFoundTemplateProps {
  link: string;
  linkText: string;
}

const NotFoundTemplate: React.FC<NotFoundTemplateProps> = ({
  link,
  linkText,
}) => {
  return (
    <div className="flex flex-col h-dvh">
      <div className="h-full bg-primary text-primary-foreground flex flex-col justify-center items-center text-center">
        <p className="text-base font-semibold text-primary-foreground">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-accent sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-muted">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href={link}>
            <Button variant={"outline"}>{linkText}</Button>
          </Link>
          <Link href="/contact">
            <Button variant={"link"} className="text-muted">
              Contact support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFoundTemplate;
