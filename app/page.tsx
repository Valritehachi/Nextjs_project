"use client";

import React from 'react';
import Button from '../components/Button';
import MaterialButton from '../components/MaterialButton';
import Navbar from '../components/Navbar';


export default function Page() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-start justify-center h-screen pl-64 bg-gray-50 pt-64"> 
        {/* pl is for width and pt is for height*/}
        <h1 className="text-6xl font-bold mb-4">PlatePlan</h1>
        <h2 className="text-xl mb-20 italic text-gray-600">Eat Well, Feel Great</h2>
        <p className="text-lg mb-8">We help you fast track your lifestyle!</p>
        {/* Button */}

        <div className="relative h-screen">
      
          <button 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg" 
            onClick={handleClick}
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}