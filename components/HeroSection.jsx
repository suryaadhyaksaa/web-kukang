// File: app/page.jsx
'use client';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import SimulatorEV from '@/components/SimulatorEV';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111319]">
      {/* 1. Navbar / Header Navigasi */}
      <Navbar />

      {/* 2. Hero Section (Bagian tampilan depan yang tadinya terlalu gelap) */}
      <HeroSection />

      {/* 3. Section Simulator EV */}
      <section id="simulator" className="py-12">
        <SimulatorEV />
      </section>
    </main>
  );
}