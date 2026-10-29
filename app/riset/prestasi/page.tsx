'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import {
  Trophy,
  Award,
  Sparkles,
  ChevronRight,
  ArrowUpRight,
  Zap,
  Eye,
  Calendar,
  Medal,
  Star,
  CheckCircle2,
  ImageIcon,
  Building2,
  Layers
} from 'lucide-react';

// Data Prestasi & Penghargaan
const ACHIEVEMENTS = [
  {
    id: 'kmhe-2024',
    title: 'Finalis Kontes Mobil Hemat Energi (KMHE)',
    year: '2024',
    organizer: 'Pusat Prestasi Nasional (Puspresnas) - Kemendikbudristek',
    category: 'Kategori Prototype Listrik',
    desc: 'Berhasil lolos seleksi teknis dan laporan desain hingga menjadi finalis ajang efisiensi energi kendaraan terkemuka di tingkat nasional.',
    badge: 'TINGKAT NASIONAL',
    highlight: 'Efisiensi Energi Baterai Kustom'
  },
  {
    id: 'best-presentation-2023',
    title: 'Best Technical Presentation',
    year: '2023',
    organizer: 'Ajang Expo Inovasi Mahasiswa ITERA',
    category: 'Inovasi Teknologi Terbarukan',
    desc: 'Penghargaan atas keunggulan pemaparan arsitektur BMS dan simulasi CFD aerodinamika di hadapan dewan juri akademisi dan industri.',
    badge: 'INSTITUSI',
    highlight: 'Arsitektur BMS & CFD'
  },
  {
    id: 'expo-inovasi-2023',
    title: 'Juara Favorit Stand Teknologi',
    year: '2023',
    organizer: 'Pameran Karya & Inovasi Perguruan Tinggi',
    category: 'Exhibition & Public Choice',
    desc: 'Mendapat antusiasme tertinggi dari pengunjung melalui pameran purwarupa mobil balap listrik dan demonstrasi telemetri IoT interaktif.',
    badge: 'PUBLIK',
    highlight: 'Live IoT Telemetry Demo'
  }
];

// Data Galeri Kegiatan
const GALLERY_ITEMS = [
  { id: 1, title: 'Manufaktur Sasis CFRP', category: 'Workshop', tag: 'Chassis Manufacturing', image: '/images/ngebengkel.jpg' },
  { id: 2, title: 'Paddock Test KMHE 2024', category: 'Race', tag: 'National Competition', image: '/images/kmhe-2025.jpg' },
  { id: 3, title: 'Pameran Expo Inovasi', category: 'Expo', tag: 'Design Exhibition', image: '/images/expo-innovasi.jpg' },
  { id: 4, title: 'Uji Jalan Telemetri IoT', category: 'Track', tag: 'Track Testing', image: '/images/track-testing.jpg' },
  { id: 5, title: 'Evaluasi & Briefing Tim', category: 'Workshop', tag: 'Team Coordination', image: '/images/workshop.jpg' },
  { id: 6, title: 'Uji Karakteristik Sel Baterai', category: 'Lab', tag: 'BMS Testing', image: '/images/expo-inovasi.jpg' },
];

export default function PrestasiPage() {
  const currentYear = new Date().getFullYear();
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const filteredGallery = activeFilter === 'Semua'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-inter selection:bg-amber-400 selection:text-slate-900 overflow-x-hidden relative">
      
      {/* ========================================================= */}
      {/* BACKGROUND ATMOSPHERE & WATERMARK LOGO                    */}
      {/* ========================================================= */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[650px] rounded-full opacity-25 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.35) 0%, rgba(249, 115, 22, 0.15) 45%, transparent 75%)'
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center">
          <img
            src="/logo.png"
            alt="Kukang EV Watermark"
            className="w-[480px] sm:w-[720px] lg:w-[850px] opacity-[0.08] object-contain select-none"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>

      <Navbar />

      {/* ========================================================= */}
      {/* HERO SECTION                                              */}
      {/* ========================================================= */}
      <section className="relative z-10 pt-32 sm:pt-40 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold font-sora tracking-widest uppercase mb-4 shadow-xs backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" /> MILESTONES & RECOGNITION
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-sora text-slate-900 leading-tight tracking-tight uppercase">
          PRESTASI <span className="text-amber-500">& GALERI</span>
        </h1>

        <p className="mt-3 text-slate-500 text-xs sm:text-base max-w-2xl mx-auto font-inter font-medium leading-relaxed">
          Rekam jejak dedikasi, karya, dan pencapaian tim Kukang EV ITERA dalam mengembangkan inovasi kendaraan listrik ramah lingkungan.
        </p>

        

      </section>

      {/* ========================================================= */}
      {/* DAFTAR PRESTASI & PENGHARGAAN                             */}
      {/* ========================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="text-center space-y-1">
          <span className="font-mono text-xs tracking-[0.2em] text-amber-600 uppercase font-bold">
            HONORS & AWARDS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-sora text-slate-900 uppercase tracking-tight">
            PENCAPAIAN TIM KUKANG EV
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-md shadow-slate-200/50 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-600 border border-amber-500/30 shrink-0 shadow-xs">
                  <Trophy className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" /> {item.year}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-sora text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs font-mono font-semibold text-amber-600">
                    {item.category} • <span className="text-slate-500">{item.organizer}</span>
                  </p>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-inter pt-1">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Tag Highlight / Status Year */}
              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6 shrink-0 gap-2">
                <span className="text-2xl sm:text-3xl font-black font-sora text-amber-500">
                  {item.year}
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200/80 whitespace-nowrap">
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* GALERI KEGIATAN & DOKUMENTASI                              */}
      {/* ========================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 border-t border-slate-200/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="font-mono text-xs tracking-[0.2em] text-amber-600 uppercase font-bold flex items-center gap-2">
              <ImageIcon className="w-4 h-4" /> DOKUMENTASI DEDIKASI
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-sora text-slate-900 uppercase tracking-tight">
              GALERI KEGIATAN TIM
            </h2>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-xs overflow-x-auto max-w-full">
            {['Semua', 'Workshop', 'Race', 'Track', 'Expo', 'Lab'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-sora font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  activeFilter === cat
                    ? 'bg-amber-500 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Galeri */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="group relative bg-slate-100 border border-slate-200/90 hover:border-amber-400 rounded-2xl overflow-hidden min-h-[230px] p-5 flex flex-col justify-end transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md"
            >
              {!failedImages[item.id] ? (
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center z-0 filter brightness-95 transition-transform duration-500 group-hover:scale-105"
                  onError={() => handleImageError(item.id)}
                />
              ) : (
                <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center p-4 text-center z-0">
                  <ImageIcon className="w-10 h-10 text-amber-500 mb-2" />
                  <span className="text-xs font-mono text-slate-500 font-bold">{item.title}</span>
                </div>
              )}

              {/* Gradient Backdrop Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent z-10 pointer-events-none" />

              <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-lg bg-white/90 border border-slate-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xs">
                <Eye className="w-4 h-4 text-amber-600" />
              </div>

              <div className="relative z-20 space-y-1">
                <span className="text-[10px] font-bold font-sora text-amber-400 uppercase tracking-widest px-2 py-0.5 rounded-md bg-slate-900/80 border border-amber-500/30 inline-block">
                  {item.tag}
                </span>
                <h3 className="font-bold text-white text-sm sm:text-base font-sora">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER                                                    */}
      {/* ========================================================= */}
      <footer className="relative z-10 border-t border-slate-200 bg-white/90 backdrop-blur-md pt-12 pb-8 mt-10">
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