"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import logo from "./../../public/landing-photo.jpeg";
import { useState, useEffect } from "react";
import aboutimage from "./../../public/about_us_image.jpg";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  const [isImageVisible, setIsImageVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsImageVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="h-screen flex flex-col">
        <Navbar />
        <div className="h-full grid lg:grid-cols-2 grid-cols-1 gap-2">
          <div className=" flex flex-col  gap-4 items-center justify-center h-full">
            <h1 className="scroll-m-0 text-7xl font-extrabold tracking-tight lg:text-8xl ">
              Plate Plan
            </h1>
            <h3 className="scroll-m-0 text-2xl  tracking-tight italic">
              Eat Well, Feel Great
            </h3>
            <SignedIn>
              <Button asChild className="lg:mt-40">
                <Link href="/bodycomposition">Start Now</Link>
              </Button>
            </SignedIn>
            <SignedOut>
              <Button asChild className="lg:mt-40">
                <Link href="/signin">Start Now</Link>
              </Button>
            </SignedOut>

            {/* Scroll Button */}
          </div>
          <div className="flex items-center   justify-center">
            <Image
              src="/landing-photo.jpeg"
              alt="plate"
              width={1000}
              height={600}
              className={`object-contain brightness-75 h-full transition-opacity duration-1000 ease-in-out ${
                isImageVisible ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
      <div className="h-screen" id="about">
        <div className="bg-[url('/about_us_image.jpg')] h-full object-cover brightness-75">
          <div className="flex justify-center items-center h-full container mx-auto text-primary-foreground ">
            <div className="p-4  rounded-md ring-8 ring-white">
              <h2 className="text-5xl font-bold mb-8">ABOUT US</h2>
              <p className="text-xl mb-4">
                Born from a passion for wellness and optimal living, PlatePlan
                embodies the power of mindful eating and the pursuit of a
                balanced lifestyle.
              </p>
              <p className="text-xl mb-4">
                We are dedicated to empowering individuals with the tools to
                take control of their nutrition, offering a seamless blend of
                personalized meal planning and accurate calorie tracking.
              </p>
              <p className="text-xl mb-4">
                PlatePlan is designed to inspire healthier choices and
                sustainable habits, helping you achieve your wellness goals
                while adapting to the demands of a changing world.
              </p>
              <p className="text-xl mb-4">
                At PlatePlan, we believe that proper nutrition is the key to
                unlocking your full potential, creating a healthier and more
                vibrant future for all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
