'use client';

import Navbar from '@/components/Navbar';
import HomePage from '@/components/HomePage';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-900 overflow-x-hidden relative">
      {/* Navbar Navigasi Global */}
      <Navbar />

      {/* Konten Halaman Utama Kukang EV */}
      <HomePage />
    </main>
  );
}