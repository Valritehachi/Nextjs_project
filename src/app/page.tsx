import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import logo from "./../../public/landing-photo.jpeg";
import aboutimage from "./../../public/about_us_image.jpg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      {/* Home */}
      <div className="h-screen grid lg:grid-cols-2 grid-cols-1 gap-2 ">
        <div className=" flex flex-col  gap-4 items-center justify-center h-full">
          <h1 className="scroll-m-0 text-7xl font-extrabold tracking-tight lg:text-8xl ">
            Plate Plan
          </h1>
          <h3 className="scroll-m-0 text-2xl  tracking-tight italic">
            Eat Well, Feel Great
          </h3>
          <Link href="/signin">
            <Button className="lg:mt-40">Start Now</Button>  
          </Link>
          
          {/* Scroll Button */}
        </div>
        <div className="flex items-center   justify-center">
          <Image
            src={logo}
            alt="plate"
            className="object-contain brightness-75 h-full "
          />
        </div>
      </div>
    
      {/* About Us */}
      <div

        id="about"
        className="h-screen flex flex-col justify-center items-center bg-gray-100"
        style={{
          backgroundImage: `url(${aboutimage.src})`,
          backgroundSize: 'cover',
          // backgroundPosition: 'center',
          // backgroundRepeat: 'no-repeat',
          width: '100vw',
          
        }}
      >
        <div className="relative z-10 max-w-4xl text-center p-8 text-white border-4 border-white rounded-3xl ml-96">
          <h2 className="text-5xl font-bold mb-8">ABOUT US</h2>
          <p className="text-xl mb-4">
            Born from a passion for wellness and optimal living, PlatePlan
            embodies the power of mindful eating and the pursuit of a balanced
            lifestyle.
          </p>
          <p className="text-xl mb-4">

            We are dedicated to empowering individuals with the tools to take
            control of their nutrition, offering a seamless blend of
            personalized meal planning and accurate calorie tracking.
          </p>
          <p className="text-xl mb-4">
            PlatePlan is designed to inspire healthier choices and sustainable
            habits, helping you achieve your wellness goals while adapting to
            the demands of a changing world.
          </p>
          <p className="text-xl mb-4">
            At PlatePlan, we believe that proper nutrition is the key to
            unlocking your full potential, creating a healthier and more vibrant
            future for all.
          </p>
        </div>
      </div>
    </div>
  );
}
