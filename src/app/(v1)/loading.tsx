import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex h-screen justify-center items-center  container mx-auto">
      <div className="h-full flex items-center justify-center">
        <LoaderCircle className="animate-spin justify-center items-center h-20 w-20" />
        ;
      </div>
    </div>
  );
}
