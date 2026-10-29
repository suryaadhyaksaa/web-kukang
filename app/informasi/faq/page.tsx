'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import {
  HelpCircle,
  ChevronDown,
  Sparkles,
  Search,
  MessageSquare,
  Mail,
  ArrowUpRight,
  Zap,
  ChevronRight,
  BookOpen,
  Users,
  Cpu,
  Handshake
} from 'lucide-react';

const FAQ_CATEGORIES = ['Semua', 'Rekrutmen', 'Riset & Teknis', 'Kemitraan'];

const ALL_FAQS = [
  // Category: Rekrutmen
  {
    category: 'Rekrutmen',
    q: 'Apakah pendaftaran tim terbuka untuk semua program studi di ITERA?',
    a: 'Ya! Seluruh mahasiswa aktif ITERA dari semua angkatan dan program studi (baik Fakultas Teknologi Industri, Fakultas Sains, maupun Fakultas Infrastruktur) dapat mendaftar. Kami membutuhkan talenta teknis dan non-teknis.'
  },
  {
    category: 'Rekrutmen',
    q: 'Bagaimana alur seleksi pendaftaran tim Kukang EV?',
    a: 'Alur seleksi terdiri dari 3 tahapan utama: 1) Seleksi berkas/administrasi, 2) Tes teknis / studi kasus sesuai divisi pilihan, dan 3) Wawancara tatap muka bersama pimpinan divisi & General Manager.'
  },
  {
    category: 'Rekrutmen',
    q: 'Divisi apa saja yang dapat dipilih saat Open Recruitment?',
    a: 'Kami membuka divisi Teknis (Electrical & BMS, Mechanical & Aerodynamics, Programming & Telemetry IoT) serta divisi Non-Teknis (Media & Branding, Sponsorship & Finance, Operations & HR).'
  },
  {
    category: 'Rekrutmen',
    q: 'Apakah pendaftar harus memiliki pengalaman di bidang otomotif/mobil listrik?',
    a: 'Tidak wajib. Pengalaman adalah nilai tambah, namun hal terpenting yang kami cari adalah komitmen tinggi, kemauan belajar secara mandiri, serta kemampuan berkolaborasi dalam tim.'
  },

  // Category: Riset & Teknis
  {
    category: 'Riset & Teknis',
    q: 'Kompetisi apa saja yang menjadi fokus utama tim Kukang EV?',
    a: 'Fokus utama kami adalah Kontes Mobil Hemat Energi (KMHE) tingkat nasional yang diselenggarakan oleh Puspresnas Kemendikbudristek, serta persiapan menuju kejuaraan otomotif ramah lingkungan internasional.'
  },
  {
    category: 'Riset & Teknis',
    q: 'Teknologi utama apa yang dikembangkan pada mobil balap Kukang EV?',
    a: 'Kami mengembangkan kustom Battery Management System (BMS) dengan Active Cell Balancing, telemetri IoT berlatensi rendah (<100ms), bodi Monocoque serat karbon (CFRP), dan pemetaan efisiensi motor BLDC.'
  },
  {
    category: 'Riset & Teknis',
    q: 'Di mana lokasi laboratorium dan tempat kerja pembuatan mobil Kukang EV?',
    a: 'Workshop manufaktur dan riset laboratorium kami berlokasi di area Laboratorium Teknik Institut Teknologi Sumatera (ITERA), Bandar Lampung.'
  },

  // Category: Kemitraan
  {
    category: 'Kemitraan',
    q: 'Bagaimana cara perusahaan atau instansi menjadi mitra sponsor Kukang EV?',
    a: 'Perusahaan dapat menghubungi tim sponsorship kami via email di Kukangitera@gmail.com. Tim kami akan mengirimkan proposal penawaran kemitraan eksklusif beserta paket benefit eksposur.'
  },
  {
    category: 'Kemitraan',
    q: 'Bentuk dukungan apa saja yang dapat diberikan oleh sponsor?',
    a: 'Dukungan dapat berupa pendanaan operasional (cash sponsor), penyediaan material/komponen (in-kind support seperti serat karbon, baterai, sensor), fasilitas pengujian, maupun publikasi media.'
  }
];

export default function FAQPage() {
  const currentYear = new Date().getFullYear();
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Filter FAQ berdasarkan Kategori dan Kata Kunci Pencarian
  const filteredFaqs = ALL_FAQS.filter((faq) => {
    const matchCategory = activeCategory === 'Semua' || faq.category === activeCategory;
    const matchSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

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
          <Sparkles className="w-3.5 h-3.5 text-amber-600" /> HELP CENTER & FAQ
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-sora text-slate-900 leading-tight tracking-tight uppercase">
          FREQUENTLY ASKED <span className="text-amber-500">QUESTIONS</span>
        </h1>

        <p className="mt-3 text-slate-500 text-xs sm:text-base max-w-2xl mx-auto font-inter font-medium leading-relaxed">
          Temukan jawaban lengkap seputar keanggotaan tim, alur rekrutmen, riset teknologi kendaraan listrik, dan peluang kemitraan dengan Kukang EV ITERA.
        </p>

        {/* Live Search Input Bar */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <div className="relative flex items-center bg-white border border-slate-200/90 rounded-2xl shadow-md shadow-slate-200/60 p-2 focus-within:border-amber-500 transition-all">
            <Search className="w-5 h-5 text-amber-500 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari pertanyaan (misal: prodi, alur, sponsor, BMS)..."
              className="w-full px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none font-inter"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-400 hover:text-slate-600 font-bold px-2 py-1 rounded-md bg-slate-100 mr-1"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FAQ CONTENT & FILTER ACCORDION                            */}
      {/* ========================================================= */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 p-1.5 bg-white border border-slate-200/90 rounded-2xl shadow-xs overflow-x-auto max-w-full">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-sora font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                activeCategory === cat
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion FAQ Items */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? 'bg-white border-amber-500 shadow-md shadow-amber-500/5'
                      : 'bg-white/90 border-slate-200/90 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4 focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl shrink-0 ${isOpen ? 'bg-amber-500/10 text-amber-600' : 'bg-slate-100 text-slate-400'}`}>
                        <HelpCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold text-amber-600 uppercase block tracking-wider mb-0.5">
                          {item.category}
                        </span>
                        <h3 className="font-bold text-slate-900 text-sm sm:text-base font-sora">
                          {item.q}
                        </h3>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-600 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 font-inter pl-14">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-white border border-slate-200 rounded-2xl p-10 text-center space-y-3">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="font-sora font-bold text-slate-800 text-base">Pertanyaan Tidak Ditemukan</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Coba gunakan kata kunci lain atau pilih kategori FAQ yang tersedia di atas.
              </p>
            </div>
          )}
        </div>

        {/* ========================================================= */}
        {/* CONTACT & HELP CARD                                       */}
        {/* ========================================================= */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-md shadow-slate-200/50 text-center space-y-5 mt-10">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 mx-auto shadow-xs">
            <MessageSquare className="w-7 h-7" />
          </div>

          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-bold font-sora text-slate-900">
              Masih Punya Pertanyaan Lain?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto font-inter">
              Tim kami siap membantu menjawab pertanyaan seputar rekrutmen, kemitraan, maupun informasi kegiatan riset Kukang EV ITERA.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="mailto:Kukangitera@gmail.com"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-sora font-bold text-xs shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" /> KIRIM EMAIL PERTANYAAN
            </a>
            <Link
              href="/informasi/rekrutmen"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 font-sora font-bold text-xs transition-all flex items-center justify-center gap-1.5"
            >
              INFO REKRUTMEN <ArrowUpRight className="w-4 h-4 text-amber-600" />
            </Link>
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