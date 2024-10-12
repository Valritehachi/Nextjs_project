import Navbar from "@/components/Navbar";
import Image from "next/image";
import logo from "./../../public/landing-photo.jpeg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 h-full">
      <div className=" flex flex-col  gap-4 items-center lg:items-start justify-center h-full">
        <h1 className="scroll-m-20 text-7xl font-extrabold tracking-tight lg:text-8xl ">
          Plate Plan
        </h1>
        <h3 className="scroll-m-20 text-2xl  tracking-tight italic">
          Eat Well, Feel Great
        </h3>
        <Button className="lg:mt-40">Start Now</Button>
      </div>
      <div className="flex items-center   justify-center">
        <Image
          src={logo}
          alt="plate"
          className="object-contain brightness-75 h-full "
        />
      </div>
    </div>
  );
}
