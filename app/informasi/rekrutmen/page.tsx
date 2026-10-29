'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import {
  FileText,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Users,
  Calendar,
  Zap,
  ChevronRight,
  Clock,
  Award,
  Cpu,
  Briefcase,
  HelpCircle
} from 'lucide-react';

// Data Alur Seleksi
const RECRUITMENT_STEPS = [
  {
    step: '01',
    title: 'Pendaftaran Berkas',
    desc: 'Isi formulir pendaftaran online dan unggah berkas CV serta KTM/Transkrip Nilai.',
    icon: FileText
  },
  {
    step: '02',
    title: 'Tes Teknis / Studi Kasus',
    desc: 'Pengerjaan tugas singkat atau studi kasus sesuai divisi pilihan teknis maupun non-teknis.',
    icon: Cpu
  },
  {
    step: '03',
    title: 'Wawancara Tatap Muka',
    desc: 'Diskusi komitmen, minat riset, dan motivasi bersama Team Leader dan General Manager.',
    icon: Users
  },
  {
    step: '04',
    title: 'Welcoming Member',
    desc: 'Pengumuman resmi anggota baru dan sesi onboarding tim Kukang EV ITERA.',
    icon: Award
  }
];

// Data Divisi Terbuka
const OPEN_DIVISIONS = [
  {
    category: 'DIVISI TEKNIS',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    items: [
      { name: 'Electrical & BMS', desc: 'Perancangan jalur PCB, Battery Management System kustom, & sensor arus/suhu.' },
      { name: 'Mechanical & Aerodynamics', desc: 'Desain sasis tubular, manufaktur serat karbon (CFRP), & simulasi CFD.' },
      { name: 'Telemetry & IoT Systems', desc: 'Programming microcontroller, cloud database, & live tracking dashboard pit stop.' }
    ]
  },
  {
    category: 'DIVISI NON-TEKNIS',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-300',
    items: [
      { name: 'Media & Public Relation', desc: 'Desain grafis, videografi, dokumentasi event, & pengelolaan media sosial resmi.' },
      { name: 'Sponsorship & Finance', desc: 'Penyusunan proposal kemitraan, hubungan dengan industri, & alokasi anggaran.' },
      { name: 'Operations & HR', desc: 'Manajemen jadwal laboratorium, logistik pengiriman mobil, & riset keanggotaan.' }
    ]
  }
];

// Data Persyaratan Umum
const REQUIREMENTS = [
  'Mahasiswa aktif Institut Teknologi Sumatera (ITERA) dari semua program studi dan angkatan.',
  'Memiliki komitmen tinggi, disiplin waktu, dan semangat bekerja dalam tim riset.',
  'Bersedia mengikuti seluruh alur seleksi dan kegiatan bengkel/bengkel kerja secara aktif.',
  'Memiliki rasa ingin tahu tinggi terhadap teknologi kendaraan listrik dan inovasi terbarukan.'
];

export default function RekrutmenPage() {
  const currentYear = new Date().getFullYear();

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
          <Sparkles className="w-3.5 h-3.5 text-amber-600" /> JOIN KUKANG EV TEAM
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-sora text-slate-900 leading-tight tracking-tight uppercase">
          PENDAFTARAN <span className="text-amber-500">ANGGOTA BARU</span>
        </h1>

        <p className="mt-3 text-slate-500 text-xs sm:text-base max-w-2xl mx-auto font-inter font-medium leading-relaxed">
          Jadilah bagian dari generasi pionir pengembang kendaraan listrik masa depan Institut Teknologi Sumatera (ITERA).
        </p>
      </section>

      {/* ========================================================= */}
      {/* MAIN REGISTRATION CTA CARD                                */}
      {/* ========================================================= */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-md shadow-slate-200/50 space-y-6 text-center backdrop-blur-md">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 mx-auto shadow-xs">
            <FileText className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-mono font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-block">
              BATCH OPEN RECRUITMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-sora text-slate-900">
              Open Recruitment Kukang EV ITERA
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-inter">
              Isi formulir pendaftaran resmi melalui tombol di bawah ini. Pastikan Anda membaca persyaratan dan mempersiapkan berkas sebelum mengisi formulir.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-sora font-bold text-xs shadow-md shadow-amber-500/20 hover:shadow-lg transition-all duration-200 cursor-pointer w-full sm:w-auto"
            >
              BUKA FORMULIR GOOGLE <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 text-[11px] font-mono text-slate-400 border-t border-slate-100 pt-5">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-500" /> Estimasi Pengisian: 5-10 Menit
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-amber-500" /> Terbuka Semua Prodi
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ALUR TAHAPAN SELEKSI                                      */}
      {/* ========================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="text-center space-y-1">
          <span className="font-mono text-xs tracking-[0.2em] text-amber-600 uppercase font-bold">
            SELECTION PROCESS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-sora text-slate-900 uppercase tracking-tight">
            ALUR TAHAPAN REKRUTMEN
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {RECRUITMENT_STEPS.map((stepItem, idx) => {
            const Icon = stepItem.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-md shadow-slate-200/50 hover:border-amber-400 transition-all duration-200 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-sora text-amber-500">
                      {stepItem.step}
                    </span>
                    <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-sora font-bold text-slate-900 text-base">
                    {stepItem.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-inter">
                    {stepItem.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* DIVISI YANG DIBUKA                                         */}
      {/* ========================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="text-center space-y-1">
          <span className="font-mono text-xs tracking-[0.2em] text-amber-600 uppercase font-bold">
            AVAILABLE DIVISIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-sora text-slate-900 uppercase tracking-tight">
            DIVISI YANG DAPAT DIPILIH
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {OPEN_DIVISIONS.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-md shadow-slate-200/50 space-y-6"
            >
              <div className="border-b border-slate-100 pb-3">
                <span className={`text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border inline-block ${group.badgeColor}`}>
                  {group.category}
                </span>
              </div>

              <div className="space-y-4">
                {group.items.map((divItem, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-amber-400 hover:bg-white transition-all duration-200 space-y-1"
                  >
                    <h4 className="font-sora font-bold text-slate-900 text-sm sm:text-base">
                      {divItem.name}
                    </h4>
                    <p className="text-slate-600 text-xs leading-relaxed font-inter">
                      {divItem.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* PERSYARATAN UMUM                                          */}
      {/* ========================================================= */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-md shadow-slate-200/50 space-y-4">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <CheckCircle2 className="w-5 h-5 text-amber-500" />
            <h3 className="font-sora font-bold text-slate-900 text-base uppercase">
              PERSYARATAN PENDAFTARAN UMUM
            </h3>
          </div>

          <div className="space-y-3 pt-2">
            {REQUIREMENTS.map((req, reqIdx) => (
              <div key={reqIdx} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                <p className="text-slate-700 text-xs sm:text-sm font-inter leading-relaxed">
                  {req}
                </p>
              </div>
            ))}
          </div>
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
                href="/informasi/faq" 
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-xs font-bold font-sora transition-all shadow-md shadow-amber-500/20 flex items-center gap-1"
              >
                FAQ Center <HelpCircle className="w-3.5 h-3.5" />
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