import Navbar from "@/components/Navbar";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center h-full">
      <SignIn routing="path" path="/signin" signUpUrl="/signup" />
    </div>
  );
}
