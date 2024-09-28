"use client";

import React from 'react';
import SignupForm from '../../components/SignupForm';
import Navbar from '../../components/Navbar';

export default function SignupPage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Signup Form Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        {/* Form */}
        <SignupForm />
      </section>
    </div>
  );
}
