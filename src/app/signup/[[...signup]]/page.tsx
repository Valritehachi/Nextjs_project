import Navbar from "@/components/Navbar";
import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <div className="h-dvh bg-accent flex flex-col">
      <Navbar />
      <div className="flex justify-center items-center h-full">
        <SignUp routing="path" path="/signup" signInUrl="/signin" />
      </div>
    </div>
  );
}
