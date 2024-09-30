"use client";

import React from 'react';
import LoginPage from '../../components/LoginForm';
import Navbar from '../../components/Navbar';

export default function SignupPage() {
  return (
    <div>
      <Navbar />

      {/* Signup Form Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        {/* Form */}
        <LoginPage />
      </section>
    </div>
  );
}