"use client";

import { useState } from "react";

import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import About from "@/components/About";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Office from "@/components/Office";
import AppointmentModal from "@/components/AppointmentModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <Hero onOpen={() => setIsModalOpen(true)} />
      <Intro />
      <Services />
      <About />
      <Office />
      <CTA onOpen={() => setIsModalOpen(true)} />
      <FAQ />

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}