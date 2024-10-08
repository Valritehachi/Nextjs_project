"use client";

import React from "react";
import BodyCompositionForm from "./BodyComposition";
import Navbar from "../../components/Navbar";

export default function BodyCompositionPage() {
  return (
    <div>
      <Navbar />

      {/* Body Composition Form Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <BodyCompositionForm />
      </section>
    </div>
  );
}
