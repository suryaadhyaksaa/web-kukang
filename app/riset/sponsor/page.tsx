'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import {
  Handshake,
  Building2,
  Sparkles,
  Award,
  ChevronRight,
  ArrowUpRight,
  Mail,
  Zap,
  Globe,
  Users,
  ShieldCheck,
  Megaphone,
  Briefcase
} from 'lucide-react';

// Data Statistik Kemitraan
const PARTNERSHIP_STATS = [
  { label: 'Mitra & Sponsor', value: '2', icon: Building2 },
  { label: 'Jangkauan Media', value: '100K+', icon: Megaphone },
  { label: 'Tingkat Kompetisi', value: 'KMHE & Formula', icon: Award },
  { label: 'Dukungan Riset', value: '100% CSR & R&D', icon: ShieldCheck },
];

// Data Mitra & Sponsor Berdasarkan Tier
const PARTNER_TIERS = [
  {
    tierName: 'PLATINUM & MAIN PARTNERS',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    description: 'Mitra utama pendukung manufaktur, riset komponen utama, dan operasional kompetisi nasional.',
    partners: [
      { name: 'Institut Teknologi Sumatera', category: 'Main University Base', logo: '/itera.png' },
      { name: 'Ev Clinic', category: 'Energy & Power Sponsor', logo: '/images/sponsors/ev-clinic.png' },
      { name: 'Bukit Asam', category: 'Coal & Energy Sponsor', logo: '/images/sponsors/bukit-asam.png' },
    ]
  },
  {
    tierName: 'TECHNICAL & COMPONENT SPONSORS',
    badgeColor: 'bg-slate-100 text-slate-800 border-slate-300',
    description: 'Mitra penyedia material serat karbon, permesinan CNC, komponen baterai, dan sistem telemetri.',
    partners: [
      
    ]
  },
  {
    tierName: 'INSTITUTIONAL & MEDIA PARTNERS',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-300',
    description: 'Mitra publikasi media massa, asosiasi otomotif, dan komite teknologi terbarukan.',
    partners: [
     
    ]
  }
];

// Data Benefit Kemitraan
const PARTNERSHIP_BENEFITS = [
  {
    title: 'Brand Exposure Maksimal',
    desc: 'Penempatan logo perusahaan pada bodi mobil balap listrik, jersey tim, booth pameran, serta seluruh media publikasi digital.',
    icon: Megaphone
  },
  {
    title: 'Akses Talent Mahasiswa ITERA',
    desc: 'Kesempatan merekrut talenta terbaik dari mahasiswa lintas disiplin teknik (Elektro, Mesin, Informatika, Industri).',
    icon: Users
  },
  {
    title: 'Kolaborasi Riset & CSR Inovasi',
    desc: 'Mendukung program Corporate Social Responsibility (CSR) berbasis keberlanjutan dan pengujian teknologi kendaraan listrik.',
    icon: Briefcase
  },
  {
    title: 'Liputan Media & Event Publik',
    desc: 'Sorotan media massa nasional dan lokal selama ajang balap kompetisi serta pameran teknologi otomotif.',
    icon: Globe
  }
];

export default function SponsorPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-inter selection:bg-amber-400 selection:text-slate-900 overflow-x-hidden relative">
      
      {/* BACKGROUND ATMOSPHERE & WATERMARK LOGO */}
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

      {/* HERO SECTION */}
      <section className="relative z-10 pt-32 sm:pt-40 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold font-sora tracking-widest uppercase mb-4 shadow-xs backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" /> PARTNERSHIP & SPONSORSHIP
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-sora text-slate-900 leading-tight tracking-tight uppercase">
          MITRA & <span className="text-amber-500">SPONSOR</span>
        </h1>

        <p className="mt-3 text-slate-500 text-xs sm:text-base max-w-2xl mx-auto font-inter font-medium leading-relaxed">
          Sinergi bersama industri, instansi, dan penyedia teknologi dalam mendorong revolusi kendaraan listrik masa depan buatan mahasiswa ITERA.
        </p>

        {/* Quick Highlight Stats */}
        <div className="mt-8 inline-grid grid-cols-2 md:grid-cols-4 gap-3 p-2 bg-white/90 border border-slate-200/80 rounded-2xl shadow-md shadow-slate-200/60 text-left max-w-3xl w-full">
          {PARTNERSHIP_STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 flex items-center gap-3">
                <div className="p-2 bg-amber-500/10 rounded-lg text-amber-600 border border-amber-500/20">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400 font-medium">{stat.label}</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 font-sora">{stat.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SHOWCASE DAFTAR MITRA & SPONSOR */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        <div className="text-center space-y-2">
          <span className="font-mono text-xs tracking-[0.2em] text-amber-600 uppercase font-bold">
            OUR TRUSTED PARTNERS
          </span>
          <h2 className="text-2xl sm:text-4xl font-black font-sora text-slate-900 uppercase tracking-tight">
            MITRA YANG PERNAH BEKERJA SAMA
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto font-inter">
            Terima kasih kepada seluruh instansi dan perusahaan yang telah mendukung riset dan perjalanan kompetisi Kukang EV ITERA.
          </p>
        </div>

        <div className="space-y-10">
          {PARTNER_TIERS.map((tier, tierIdx) => (
            tier.partners.length > 0 && (
              <div key={tierIdx} className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-md shadow-slate-200/50 space-y-8">
                
                {/* Header Tier */}
                <div className="border-b border-slate-100 pb-4 space-y-1">
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border inline-block ${tier.badgeColor}`}>
                    {tier.tierName}
                  </span>
                  <p className="text-slate-500 text-xs sm:text-sm font-inter pt-1">
                    {tier.description}
                  </p>
                </div>

                {/* Grid Logo Mitra Ukuran Besar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {tier.partners.map((partner, partnerIdx) => (
                    <div 
                      key={partnerIdx}
                      className="p-6 sm:p-8 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[220px]"
                    >
                      {/* Container Logo */}
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white border border-slate-200/80 p-4 flex items-center justify-center shadow-xs mb-4">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            if (e.currentTarget.parentElement) {
                              e.currentTarget.parentElement.classList.add('flex', 'items-center', 'justify-center');
                              e.currentTarget.parentElement.innerHTML = `<span class="text-xs font-mono text-slate-400 font-bold">LOGO</span>`;
                            }
                          }}
                        />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-sora font-bold text-base sm:text-lg text-slate-900 leading-snug">
                          {partner.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-amber-600 font-mono font-semibold">
                          {partner.category}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        {/* BENEFIT KEMITRAAN & SPONSORSHIP */}
        <div className="space-y-8 pt-8">
          <div className="text-center space-y-1">
            <span className="font-mono text-xs tracking-[0.2em] text-amber-600 uppercase font-bold">
              WHY PARTNER WITH US
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-sora text-slate-900 uppercase tracking-tight">
              BENEFIT MENJADI MITRA SPONSOR
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {PARTNERSHIP_BENEFITS.map((benefit, bIdx) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={bIdx}
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-md shadow-slate-200/50 hover:border-amber-400 transition-all flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-sora font-bold text-slate-900 text-sm sm:text-base">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-inter">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CALL TO ACTION CARD */}
        <div className="bg-white border border-slate-200/90 p-8 sm:p-12 rounded-3xl shadow-md shadow-slate-200/50 space-y-6 text-center max-w-4xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 mx-auto shadow-xs">
            <Handshake className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-sora text-slate-900">
              Bergabung Sebagai Mitra Strategis Kami
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-inter">
              Dukung penelitian dan inovasi mobil listrik karya mahasiswa ITERA. Dapatkan proposal penawaran kemitraan eksklusif untuk ajang kompetisi nasional.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a 
              href="mailto:Kukangitera@gmail.com" 
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-sora font-bold text-xs shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" /> HUBUNGI TIM SPONSORSHIP
            </a>
            <Link
              href="/informasi/rekrutmen"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 font-sora font-bold text-xs transition-all flex items-center justify-center gap-1.5"
            >
              TANYA DETAIL PROPOSAL <ArrowUpRight className="w-4 h-4 text-amber-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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