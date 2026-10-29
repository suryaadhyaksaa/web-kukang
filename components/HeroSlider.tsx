'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles, ArrowUpRight, Radio } from 'lucide-react';

interface SlideData {
  id: number;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    badge: 'ITERA ELECTRIC VEHICLE TEAM',
    title: 'INOVASI KENDARAAN LISTRIK',
    highlight: 'BERKECEPATAN & EFISIEN',
    description: 'Mendorong batasan efisiensi energi terbarukan melalui riset komprehensif, desain aerodinamis presisi, dan teknologi Battery Management System mutakhir.',
    image: '/images/itera-campus.jpg',
  },
  {
    id: 2,
    badge: 'PROTOTYPE VEHICLE SHOWCASE',
    title: 'ARSITEKTUR SISI SERAT KARBON',
    highlight: 'KUKANG EV GEN-1',
    description: 'Bodi monocoque ultra-ringan dengan koefisien drag rendah (Cd < 0.18) untuk memaksimalkan downforce dan efisiensi konsumsi daya.',
    image: '/images/kukang-ev-car.jpg',
  },
  {
    id: 3,
    badge: 'RACING & COMPETITION PREPARATION',
    title: 'MENGUKIR PRESTASI DI LINTASAN',
    highlight: 'MANDALIKA CIRCUIT',
    description: 'Tim pengembang mobil listrik mahasiswa ITERA yang mendedikasikan inovasi riset ramah lingkungan untuk masa depan otomotif Indonesia.',
    image: '/images/kukang-team-mandalika.jpg',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play interval switch setiap 5 detik
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section 
      className="relative w-full min-h-[85vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#070a12] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. BACKGROUND CAROUSEL IMAGES WITH SMOOTH FADE */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transition-transform duration-[7000ms]`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center filter brightness-90 contrast-110 saturate-75 mix-blend-luminosity"
            onError={(e) => {
              e.currentTarget.style.opacity = '0';
            }}
          />
          {/* Dark Cyber Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#070a12]/80 via-[#070a12]/85 to-[#070a12]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>
      ))}

      {/* 2. SLIDE CONTENT AREA (ANIMATED BY KEY INDEX) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {slides.map((slide, index) => {
          if (index !== currentSlide) return null;

          return (
            <div
              key={slide.id}
              className="flex flex-col items-center animate-in fade-in zoom-in-95 duration-700"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 backdrop-blur-md border border-amber-500/40 text-amber-400 text-xs font-bold font-sora tracking-widest mb-8 shadow-lg shadow-amber-500/10 hover:border-amber-400 transition-all">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>{slide.badge}</span>
              </div>

              {/* Title with Sora Font */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-sora text-white leading-[1.12] max-w-5xl tracking-tight drop-shadow-md">
                {slide.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500">
                  {slide.highlight}
                </span>
              </h1>

              {/* Description with Inter Font */}
              <p className="mt-6 text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-inter font-normal drop-shadow-sm">
                {slide.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/tentang/sejarah-visi-misi"
                  className="group px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 font-bold font-sora text-xs shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2.5 active:scale-95"
                >
                  PELAJARI SELENGKAPNYA
                  <ArrowUpRight className="w-4 h-4 text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
                <Link
                  href="/informasi/rekrutmen"
                  className="px-8 py-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-white font-bold font-sora text-xs hover:border-amber-500 hover:text-amber-400 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 active:scale-95"
                >
                  JOIN RECRUITMENT
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. NAVIGATION BUTTONS (LEFT & RIGHT ARROWS) */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-white hover:bg-amber-500 hover:border-amber-500 hover:text-slate-950 backdrop-blur-md transition-all shadow-xl group active:scale-90"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 sm:p-4 rounded-full bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-white hover:bg-amber-500 hover:border-amber-500 hover:text-slate-950 backdrop-blur-md transition-all shadow-xl group active:scale-90"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* 4. BOTTOM DOT INDICATORS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 bg-slate-950/80 border border-slate-800/80 px-4 py-2 rounded-full backdrop-blur-md">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? 'w-8 bg-amber-400 shadow-md shadow-amber-500/50'
                : 'w-2 bg-slate-700 hover:bg-slate-500'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}