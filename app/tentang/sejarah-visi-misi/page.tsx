'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HistorySection from '@/components/HistorySection';
import Link from 'next/link';
import {
  Sparkles,
  Zap,
  Award,
  ChevronRight,
  Globe,
  Cpu,
  ArrowUpRight
} from 'lucide-react';

export default function SejarahPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-inter selection:bg-amber-400 selection:text-slate-900 overflow-x-hidden relative">
      
      {/* ========================================================= */}
      {/* LATAR BELAKANG (PERSISI SEPERTI GAMBAR REFERENSI)          */}
      {/* ========================================================= */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Radial Amber/Orange Glow di Tengah */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[650px] rounded-full opacity-25 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.35) 0%, rgba(249, 115, 22, 0.15) 45%, transparent 75%)'
          }}
        />

        {/* Watermark Logo Kukang EV Berwarna di Tengah */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center">
          <img
            src="/logo.png"
            alt="Kukang EV Watermark"
            className="w-[480px] sm:w-[720px] lg:w-[850px] opacity-[0.09] object-contain select-none"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>

      <Navbar />

      {/* HERO / HEADER SECTION */}
      <section className="relative z-10 pt-32 sm:pt-40 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        

        {/* Formatan Judul Dua Warna Seperti di Gambar */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-sora text-slate-900 leading-tight tracking-tight uppercase">
          SEJARAH <span className="text-amber-500">PERJALANAN</span>
        </h1>

        <p className="mt-3 text-slate-500 text-xs sm:text-base max-w-2xl mx-auto font-inter font-medium leading-relaxed">
          Sinergi mahasiswa lintas disiplin Institut Teknologi Sumatera dalam riset & pengembangan mobil listrik masa depan.
        </p>

        
      </section>

      {/* MAIN HISTORY CONTENT */}
      <div className="relative z-10">
        <HistorySection />
      </div>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-200 bg-white/90 backdrop-blur-md pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-amber-600 font-sora font-black text-lg">
                <Zap className="w-5 h-5 fill-amber-500 text-amber-500" /> KUKANG EV TEAM
              </div>
              <p className="text-slate-500 text-xs max-w-md font-inter">
                Institut Teknologi Sumatera (ITERA) — Pelopor Inovasi Kendaraan Listrik Masa Depan Ramah Lingkungan.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap justify-center">
              <Link 
                href="/tentang/sejarah-visi-misi" 
                className="px-4 py-2 rounded-xl bg-slate-100 border border-slate-300 hover:border-amber-500 text-xs font-bold font-sora text-slate-700 hover:text-amber-700 transition-all flex items-center gap-1"
              >
                Visi & Misi <ChevronRight className="w-3.5 h-3.5" />
              </Link>
              <Link 
                href="/informasi/rekrutmen" 
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-bold font-sora transition-all shadow-md shadow-amber-500/20 flex items-center gap-1"
              >
                Join Team <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-3 text-center">
            <p>© {currentYear} KUKANG EV TEAM — ITERA. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Electric Mobility Innovation
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}