"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import logo from "./../../public/landing-photo.jpeg";
import { useState, useEffect, useRef } from "react";
import aboutimage from "./../../public/about_us_image.jpg";
import teambackground from "./../../public/team_background_image.jpg";
import kteam from "./../../public/team_3.jpg";
import jteam from "./../../public/team_2.jpg";
import vteam from "./../../public/team_1.jpg";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsImageVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsAboutVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div>
      {/* Home */}
      <div className="h-screen grid lg:grid-cols-2 grid-cols-1 gap-2">
        <div className=" flex flex-col  gap-4 items-center justify-center h-full">
          <h1 className="scroll-m-0 text-7xl font-extrabold tracking-tight lg:text-8xl ">
            Plate Plan
          </h1>
          <h3
            className="scroll-m-0 text-2xl tracking-tight"
            style={{ fontStyle: "italic !important" }}
          >
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
            className={`object-contain brightness-75 h-full transition-opacity duration-1000 ease-in-out ${
              isImageVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>

      {/* About Us */}
      <div
        id="about"
        className="h-screen flex flex-col justify-center items-center bg-gray-100"
        style={{
          backgroundImage: `url(${aboutimage.src})`,
          backgroundSize: "cover",
          width: "100vw",
        }}
      >
        <div
          ref={aboutRef}
          className={`relative z-20 max-w-4xl text-center p-8 text-white border-4 border-white rounded-3xl transition-all duration-1000 ease-in-out ${
            isAboutVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
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


      {/* Meet the Team Section */}
      <div
        className="h-screen flex flex-col justify-center items-center bg-gray-100"
        style={{
          backgroundImage: `url(${teambackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100vw",
        }}
      >
      <div className="max-w-6xl text-center p-8 text-white">
        <h2 className="text-5xl font-bold mb-8">Meet the Team</h2>

        <div className="flex flex-col space-y-8">
          <div className="flex items-center space-x-8 ">
            <Image
              src={kteam}
              alt="Khekla Dlamini"
              className="rounded-full mr-10"
              width={150}
              height={150}
            />
            <div className="text-left">
              <h3 className="text-4xl font-bold">Khekla Dlamini</h3>
              <p className="text-xl">Project Manager, UI/UX Designer</p>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <Image
              src={vteam}
              alt="Valrite Ehachi"
              className="rounded-full"
              width={150}
              height={150}
            />
            <div className="text-left">
              <h3 className="text-4xl font-bold">Valrite Ehachi</h3>
              <p className="text-xl">Frontend Developer & Writer</p>
            </div>
          </div>

          <div className="flex items-center space-x-8">
            <Image
              src={jteam}
              alt="Joseph Karanja"
              className="rounded-full"
              width={150}
              height={150}
            />
            <div className="text-left">
              <h3 className="text-4xl font-bold">Joseph Karanja</h3>
              <p className="text-xl">Backend Developer & QA Engineer</p>
            </div>
            </div> 
          </div>
        </div>
      </div>
    </div>  
  );
}
