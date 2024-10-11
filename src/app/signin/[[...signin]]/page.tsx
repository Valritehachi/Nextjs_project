import Navbar from "@/components/Navbar";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="h-dvh bg-accent flex flex-col">
      <Navbar />
      <div className="flex justify-center items-center h-full">
        <SignIn routing="path" path="/signin" signUpUrl="/signup" />
      </div>
    </div>
  );
}
