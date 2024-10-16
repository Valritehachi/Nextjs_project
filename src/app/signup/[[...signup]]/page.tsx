import Navbar from "@/components/Navbar";
import { SignUp } from "@clerk/nextjs";

export default function SignupPage() {
  return (
    <div className="flex justify-center items-center h-full">
      <SignUp routing="path" path="/signup" signInUrl="/signin" />
    </div>
  );
}
