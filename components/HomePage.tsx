'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';
import {
  Zap,
  HelpCircle,
  Image as ImageIcon,
  ChevronRight,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  Cpu,
  Gauge,
  ArrowUpRight,
  Eye,
  ShieldCheck,
  Layers,
  Terminal,
  User,
  MapPin,
  Quote
} from 'lucide-react';

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [gmImageError, setGmImageError] = useState(false);
  const [carImageError, setCarImageError] = useState(false);

  // Variasi Animasi Framer Motion dengan Tipe Tepat
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  const galleryItems = [
    { title: 'NGEBENGKEL', category: 'Workshop', tag: 'Chassis Manufacturing', image: '/images/ngebengkel.jpg' },
    { title: 'KMHE 2025', category: 'Event', tag: 'Kompetisi Mobil Hemat Energi', image: '/images/kmhe-2025.jpg' },
    { title: 'Expo Inovasi', category: 'Event', tag: 'Design Exhibition', image: '/images/expo-innovasi.jpg' },
    { title: 'Uji Jalan Mobil Listrik', category: 'Track', tag: 'Track Testing', image: '/images/track-testing.jpg' },
    { title: 'Diskusi & Evaluasi Tim', category: 'Workshop', tag: 'Team Coordination', image: '/images/workshop.jpg' },
    { title: 'Partisipasi Ekspo Inovasi', category: 'Event', tag: 'Public Exhibition', image: '/images/expo-inovasi.jpg' },
  ];

  const filteredGallery = activeFilter === 'Semua'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const faqs = [
    {
      q: 'Apa itu Kukang EV?',
      a: 'Kukang EV adalah tim riset kendaraan listrik mahasiswa Institut Teknologi Sumatera (ITERA) yang berfokus pada pengembangan teknologi efisiensi energi dan kendaraan terbarukan.'
    },
    {
      q: 'Bagaimana cara bergabung dengan tim Kukang EV?',
      a: 'Pendaftaran dilakukan secara terbuka lewat program Open Recruitment. Anda dapat mengecek jadwal dan persyaratan lengkap di menu Informasi > Rekrutmen.'
    },
    {
      q: 'Kompetisi apa saja yang menjadi fokus utama tim?',
      a: 'Kami berkompetisi di tingkat nasional seperti Kontes Mobil Hemat Energi (KMHE) serta bersiap menuju kejuaraan otomotif ramah lingkungan tingkat internasional.'
    },
    {
      q: 'Apakah pendaftaran terbuka untuk mahasiswa non-teknis?',
      a: 'Tentu! Kami memiliki divisi Non-Teknis seperti Media & Branding, Finance & Sponsorship, serta Operations yang terbuka untuk semua program studi di ITERA.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-inter selection:bg-amber-400 selection:text-slate-900 overflow-x-hidden relative">
      
      {/* ========================================================= */}
      {/* 1. HERO SECTION WITH ITERA CAMPUS BACKGROUND              */}
      {/* ========================================================= */}
      <section className="relative w-full pt-32 sm:pt-40 lg:pt-44 pb-12 sm:pb-16 overflow-hidden">
        
        {/* LATAR BELAKANG GAMBAR ITERA CAMPUS */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <img
            src="/images/itera-campus.jpg"
            alt="Gedung Utama ITERA Campus"
            loading="eager"
            className="w-full h-full object-cover object-center opacity-180 brightness-110"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          {/* Layer Gradient Overlay agar Teks Tetap Sangat Jelas */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/40 via-[#f8fafc]/80 to-[#f8fafc]" />
          {/* Cyber Grid Pattern Light */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center space-y-4 max-w-5xl"
          >
            {/* Badge Banner */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold font-sora tracking-widest uppercase shadow-xs backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" /> ITERA ELECTRIC VEHICLE TEAM
            </motion.div>

            {/* Title Hero */}
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl lg:text-7xl font-black font-sora text-slate-900 leading-[1.12] tracking-tight uppercase">
              INOVASI KENDARAAN LISTRIK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">
                HEMAT ENERGI
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p variants={itemVariants} className="text-slate-700 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed font-inter font-medium px-2">
              Mendorong batasan efisiensi energi terbarukan melalui riset komprehensif, desain aerodinamis presisi, dan teknologi <span className="text-amber-700 font-bold border-b-2 border-amber-500/50 pb-0.5">Battery Management System</span> mutakhir.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto max-w-xs sm:max-w-none">
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/tentang/sejarah-visi-misi"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-bold font-sora text-xs shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  PELAJARI SELENGKAPNYA <ArrowUpRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/informasi/rekrutmen"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/95 border border-slate-300 text-slate-800 font-bold font-sora text-xs hover:border-amber-500 hover:text-amber-600 shadow-xs transition-all flex items-center justify-center cursor-pointer"
                >
                  JOIN RECRUITMENT
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-5xl"
          >
            {[
              { label: 'Efisiensi Target', val: '95%+', icon: Gauge, detail: 'Power Transfer' },
              { label: 'Telemetri Latency', val: '<100ms', icon: Cpu, detail: 'IoT Cloud Sync' },
              { label: 'Anggota Tim', val: '35+', icon: ShieldCheck, detail: 'Lintas Program Studi' },
              { label: 'Riset Aktif', val: '5 Divisi', icon: Zap, detail: 'Teknis & Non-Teknis' },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -4 }}
                  className="bg-white/95 backdrop-blur-md border border-slate-200/90 hover:border-amber-400 rounded-2xl p-4 shadow-md shadow-slate-200/50 flex items-center gap-3 text-left transition-all duration-200"
                >
                  <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-600 border border-amber-500/20 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-lg sm:text-2xl font-black font-sora text-slate-900 leading-tight">{stat.val}</p>
                    <p className="text-xs text-slate-700 font-sora font-bold truncate">{stat.label}</p>
                    <p className="text-[10px] font-inter text-slate-400 truncate">{stat.detail}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SAMBUTAN GENERAL MANAGER                               */}
      {/* ========================================================= */}
      <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80">
        <div className="relative bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-md shadow-slate-200/50 overflow-hidden">
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-bold font-sora tracking-widest shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> WELCOME TO KUKANG EV
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sora text-slate-900 leading-tight uppercase">
                SELAMAT DATANG DI <br />
                <span className="text-amber-500">KUKANG EV ITERA</span>
              </h2>

              <div className="relative bg-slate-50/80 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3">
                <Quote className="w-8 h-8 text-amber-500/20 absolute top-3 right-4 pointer-events-none" />
                <p className="italic text-slate-800 text-xs sm:text-base font-medium leading-relaxed relative z-10 font-inter">
                  "Selamat datang di portal resmi Kukang EV. Kami adalah wadah riset dan inovasi lintas disiplin mahasiswa Institut Teknologi Sumatera (ITERA) yang berkomitmen memajukan teknologi kendaraan listrik masa depan."
                </p>
                <p className="text-slate-600 text-xs sm:text-sm not-italic leading-relaxed pt-2 border-t border-slate-200/80 font-inter">
                  Melalui semangat kolaborasi dan riset berkelanjutan, tim kami berfokus pada efisiensi energi, teknologi <span className="text-amber-600 font-semibold">Battery Management System (BMS)</span>, dan desain aerodinamis untuk menghadirkan mobil balap hemat energi yang siap bersaing di kancah nasional maupun internasional.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-amber-500 rounded-full" />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold font-sora text-slate-900 uppercase">GENERAL MANAGER KUKANG EV</h4>
                    <p className="text-[11px] sm:text-xs text-amber-600 font-sora tracking-wider font-semibold">ITERA STUDENT RESEARCH TEAM</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 flex items-center gap-1.5 font-medium">
                  <Terminal className="w-3.5 h-3.5 text-amber-600" /> OFFICIAL STATEMENT
                </span>
              </div>
            </div>

            {/* GM Photo Card */}
            <div className="relative w-full lg:w-[360px] shrink-0">
              <div className="relative rounded-2xl p-3 bg-slate-50 border border-slate-200/90 shadow-xs overflow-hidden group">
                <div className="relative w-full h-[340px] sm:h-[420px] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                  {!gmImageError ? (
                    <img
                      src="/images/gm-kukang.png"
                      alt="General Manager Kukang EV"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={() => setGmImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-white">
                      <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-dashed border-amber-500/40 flex items-center justify-center mb-3 text-amber-600">
                        <User className="w-7 h-7" />
                      </div>
                      <p className="text-xs font-sora font-bold text-amber-700 tracking-wider mb-1">FOTO GM BELUM DIUNGGAH</p>
                      <p className="text-[11px] text-slate-500 font-inter max-w-[220px] leading-relaxed">
                        Simpan foto di <code className="text-amber-700 font-mono bg-amber-50 px-1 rounded">public/images/gm-kukang.png</code>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. GRAND DESIGN VEHICLE                                   */}
      {/* ========================================================= */}
      <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80">
        <div className="text-center space-y-2 mb-8">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-widest font-sora flex items-center justify-center gap-2">
            <Layers className="w-4 h-4 text-amber-600" /> GRAND DESIGN VEHICLE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black font-sora text-slate-900 uppercase">
            ARSITEKTUR <span className="text-amber-500">MOBIL LISTRIK</span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto font-inter leading-relaxed">
            Integrasi teknologi aerodinamis serat karbon, <span className="text-amber-600 font-semibold">Battery Management System (BMS)</span> pintar, serta sasis tubular hybrid yang ringan dan kokoh.
          </p>
        </div>

        {/* Tampilan Foto Mobil */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-md shadow-slate-200/50 mb-6 sm:mb-8">
          {!carImageError ? (
            <img
              src="/images/kukang-ev-car.jpg"
              alt="Mobil Listrik Kukang EV Prototype"
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover object-center"
              onError={() => setCarImageError(true)}
            />
          ) : (
            <div className="w-full h-[300px] sm:h-[400px] flex flex-col items-center justify-center p-6 text-center bg-slate-50 text-slate-800">
              <div className="p-3 bg-amber-500/10 rounded-2xl border border-amber-500/30 mb-3 text-amber-600">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h3 className="font-sora font-bold text-slate-900 text-sm sm:text-base tracking-wider mb-2">PROTOTYPE VEHICLE VIEW</h3>
              <p className="text-[11px] sm:text-xs text-slate-600 font-mono bg-white px-3 py-1 rounded-lg border border-slate-200 max-w-md">
                Simpan foto mobil di: <span className="text-amber-700 font-bold">public/images/kukang-ev-car.jpg</span>
              </p>
            </div>
          )}
        </div>

        {/* Spec Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          <div className="bg-white border border-slate-200/90 hover:border-amber-400 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2.5">
                <span className="text-[10px] font-sora font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                  CFD OPTIMIZED
                </span>
                <span className="text-[10px] font-sora text-amber-600 font-bold">Aero +32%</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold font-sora text-slate-900 mb-1.5">
                Aerodynamic Carbon Monocoque
              </h3>
              <p className="text-slate-600 text-xs font-inter leading-relaxed mb-4">
                Bodi ultra-ringan dengan koefisien drag rendah (Cd &lt; 0.18) yang dirancang presisi menggunakan analisis CFD untuk mengoptimalkan aliran udara.
              </p>
            </div>
            
            <div className="space-y-1.5 border-t border-slate-100 pt-3">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-inter">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Bobot Bodi: &lt; 25 kg
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-inter">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Bahan: Carbon Fiber Prepreg
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 hover:border-amber-400 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2.5">
                <span className="text-[10px] font-sora font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                  HIGH TELEMETRY
                </span>
                <span className="text-[10px] font-sora text-amber-600 font-bold">99.8% Accuracy</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold font-sora text-slate-900 mb-1.5">
                Smart BMS & IoT Telemetry
              </h3>
              <p className="text-slate-600 text-xs font-inter leading-relaxed mb-4">
                Sistem manajemen baterai cerdas yang memantau voltase sel, temperatur, dan arus secara real-time via modul IoT dengan latency di bawah 100ms.
              </p>
            </div>

            <div className="space-y-1.5 border-t border-slate-100 pt-3">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-inter">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Real-time Cloud Sync
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-inter">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Active Cell Balancing
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 hover:border-amber-400 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2.5">
                <span className="text-[10px] font-sora font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                  RIGID HYBRID
                </span>
                <span className="text-[10px] font-sora text-amber-600 font-bold">Safety Approved</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold font-sora text-slate-900 mb-1.5">
                Ergonomic & Lightweight Chassis
              </h3>
              <p className="text-slate-600 text-xs font-inter leading-relaxed mb-4">
                Sasis tubular aluminum/carbon hybrid yang dirancang khusus mengedepankan keamanan pengemudi (driver safety zone) serta kekuatan torsional tinggi.
              </p>
            </div>

            <div className="space-y-1.5 border-t border-slate-100 pt-3">
              <div className="flex items-center gap-2 text-xs text-slate-700 font-inter">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Chassis Weight: 18 kg
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-700 font-inter">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" /> Impact Safety Approved
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. DOKUMENTASI & GALLERY                                  */}
      {/* ========================================================= */}
      <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200/80">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4">
          <div className="space-y-1">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-widest font-sora flex items-center gap-2">
              <ImageIcon className="w-4 h-4" /> GALLERY & ACTIVITIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-sora text-slate-900 uppercase">
              DOKUMENTASI <span className="text-amber-500">KEGIATAN</span>
            </h2>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-xs overflow-x-auto max-w-full">
            {['Semua', 'Workshop', 'Lab', 'Track', 'Event'].map((cat) => (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredGallery.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-100 border border-slate-200 hover:border-amber-400 rounded-2xl overflow-hidden min-h-[220px] sm:min-h-[240px] p-5 flex flex-col justify-end transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center z-0 filter brightness-95 transition-transform duration-300 group-hover:scale-105"
                onError={(e) => { e.currentTarget.style.opacity = '0'; }}
              />

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
      {/* 5. FAQ CENTER                                             */}
      {/* ========================================================= */}
      <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-slate-200/80">
        <div className="text-center space-y-2 mb-8">
          <span className="text-amber-600 text-xs font-bold uppercase tracking-widest font-sora flex items-center justify-center gap-2">
            <HelpCircle className="w-4 h-4" /> FAQ CENTER
          </span>
          <h2 className="text-2xl sm:text-4xl font-black font-sora text-slate-900 uppercase">
            PERTANYAAN <span className="text-amber-500">POPULER</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  isOpen ? 'bg-white border-amber-500 shadow-xs' : 'bg-white border-slate-200/90'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex justify-between items-center gap-3 focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base font-sora flex items-center gap-2.5">
                    <HelpCircle className={`w-4 h-4 shrink-0 ${isOpen ? 'text-amber-600' : 'text-slate-400'}`} />
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : 'text-slate-400'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 font-inter pl-9 sm:pl-12">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/informasi/faq"
            className="text-xs font-bold font-sora text-amber-700 hover:text-amber-800 inline-flex items-center gap-1 bg-amber-500/10 border border-amber-500/30 px-4 py-2.5 rounded-xl hover:bg-amber-500/20 transition-all"
          >
            LIHAT FAQ SELENGKAPNYA <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. BANNER MANDALIKA                                       */}
      {/* ========================================================= */}
      <section className="relative z-10 w-full py-16 sm:py-24 overflow-hidden border-t border-slate-200">
        <div className="absolute inset-0 z-0 bg-slate-950 pointer-events-none">
          <img
            src="/images/kukang-team-mandalika.jpg"
            alt="Tim Kukang EV di Pertamina Mandalika Circuit"
            loading="lazy"
            className="w-full h-full object-cover object-center brightness-90 contrast-105 opacity-90"
            onError={(e) => { e.currentTarget.style.opacity = '0'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/50" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-4 sm:space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/40 text-amber-400 text-xs font-bold font-sora tracking-widest shadow-md">
            <MapPin className="w-4 h-4 text-amber-400" /> PERTAMINA MANDALIKA INTERNATIONAL CIRCUIT
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black font-sora tracking-tight leading-tight uppercase">
            BERSAMA MEMAJUKAN INOVASI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
              KENDARAAN LISTRIK INDONESIA
            </span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto font-inter leading-relaxed font-medium">
            Kukang EV ITERA — Tim pengembang mobil listrik hemat energi yang siap mengukir prestasi dan mendedikasikan teknologi ramah lingkungan bagi Indonesia.
          </p>

          <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row justify-center gap-3 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto relative z-20">
            <Link
              href="/informasi/rekrutmen"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white font-bold font-sora text-xs shadow-md hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              BERGABUNG DENGAN TIM <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tentang/sejarah-visi-misi"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/80 border border-white/30 text-white font-bold font-sora text-xs hover:bg-white hover:text-slate-900 transition-colors flex items-center justify-center cursor-pointer"
            >
              TENTANG KUKANG EV
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-200 py-6 text-center text-xs text-slate-500 font-inter bg-white">
        © {new Date().getFullYear()} Kukang EV Team - ITERA. All rights reserved.
      </footer>
    </div>
  );
}