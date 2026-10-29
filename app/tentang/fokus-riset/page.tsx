'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import {
  Cpu,
  Zap,
  Radio,
  Sparkles,
  ChevronRight,
  ArrowUpRight,
  CheckCircle2,
  Activity,
  Layers,
  Award,
  Globe,
  Gauge
} from 'lucide-react';

const RESEARCH_FOCUS_ITEMS = [
  {
    id: 'bms',
    icon: Zap,
    badge: 'ELECTRICAL & POWER',
    title: 'BMS & Battery Pack',
    subtitle: 'Battery Management System Mandiri',
    desc: 'Pengembangan BMS kustom berfitur Active Cell Balancing dengan pemantauan arus, voltase, dan suhu secara presisi untuk efisiensi energi serta keamanan baterai tingkat tinggi.',
    highlights: [
      'Custom Multi-layer PCB Design',
      'Active Balancing Circuit',
      'Thermal & Overcurrent Cutoff'
    ],
    specs: [
      { label: 'Sel Baterai', value: 'LiFePO4 / Li-Ion' },
      { label: 'Fitur Keamanan', value: 'Multi-point Sensor' }
    ],
    status: 'ACTIVE RESEARCH'
  },
  {
    id: 'aero',
    icon: Sparkles,
    badge: 'MECHANICAL & MATERIALS',
    title: 'Aerodynamic Monocoque',
    subtitle: 'Chassis CFRP & Bodi Aerodinamis',
    desc: 'Perancangan struktur bodi berbahan Carbon Fiber Reinforced Polymer (CFRP) dengan pengujian Computational Fluid Dynamics (CFD) guna menekan koefisien hambatan angin (Drag Coefficient).',
    highlights: [
      'CFRP Composite Material',
      'CFD Airflow Simulation',
      'Ultra-Lightweight Monocoque'
    ],
    specs: [
      { label: 'Target Cd', value: '< 0.18 Cd' },
      { label: 'Struktur', value: 'Carbon Monocoque' }
    ],
    status: 'CFD OPTIMIZATION'
  },
  {
    id: 'telemetry',
    icon: Radio,
    badge: 'IOT & EMBEDDED',
    title: 'Telemetry IoT System',
    subtitle: 'Monitoring Real-time Lap & Pit Stop',
    desc: 'Sistem transmisi data sensor nirkabel berkecepatan tinggi dari kendaraan ke pit stop dashboard. Memungkinkan strategi balap real-time berdasarkan data suhu, daya, dan kecepatan.',
    highlights: [
      'Cloud Telemetry Dashboard',
      'LoRa & MQTT Wireless',
      'Pit-Stop Strategy Analytics'
    ],
    specs: [
      { label: 'Latency Data', value: '< 100ms Live' },
      { label: 'Protokol', value: 'IoT Cloud Protocol' }
    ],
    status: 'DEPLOYED & TESTED'
  },
  {
    id: 'motor',
    icon: Cpu,
    badge: 'POWERTRAIN & DRIVES',
    title: 'High-Efficiency Motor',
    subtitle: 'Optimasi Controller & Motor BLDC',
    desc: 'Riset pemetaan kurva efisiensi motor Brushless DC (BLDC) serta penyetelan controller kustom guna memaksimalkan rasio jarak tempuh per watt-hour pada lintasan sirkuit.',
    highlights: [
      'BLDC Torque Mapping',
      'Custom Reduction Ratio',
      'Regenerative Braking Test'
    ],
    specs: [
      { label: 'Efisiensi Target', value: '> 92%' },
      { label: 'Sistem Penggerak', value: 'Direct / Gear Drive' }
    ],
    status: 'BENCH TESTING'
  }
];

export default function FokusRisetPage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-900 font-inter selection:bg-amber-400 selection:text-slate-900 overflow-x-hidden relative">
      
      {/* ========================================================= */}
      {/* BACKGROUND ATMOSPHERE & WATERMARK LOGO                   */}
      {/* ========================================================= */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Radial Amber Glow di Tengah */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[650px] rounded-full opacity-25 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.35) 0%, rgba(249, 115, 22, 0.15) 45%, transparent 75%)'
          }}
        />

        {/* Watermark Logo Kukang EV */}
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

      {/* ========================================================= */}
      {/* HERO SECTION                                              */}
      {/* ========================================================= */}
      <section className="relative z-10 pt-32 sm:pt-40 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Badge Banner */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold font-sora tracking-widest uppercase mb-4 shadow-sm backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" /> RESEARCH & DEVELOPMENT
        </div>

        {/* Heading Dua Warna */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-sora text-slate-900 leading-tight tracking-tight uppercase">
          FOKUS <span className="text-amber-500">RISET & INOVASI</span>
        </h1>

        <p className="mt-3 text-slate-500 text-xs sm:text-base max-w-2xl mx-auto font-inter font-medium leading-relaxed">
          Pilar utama rekayasa teknologi kendaraan listrik Kukang EV ITERA meliputi aspek mekanikal, kelistrikan, telemetri IoT, dan sistem penggerak efisien.
        </p>

        {/* Highlight Quick Stats Bar */}
        <div className="mt-8 inline-grid grid-cols-2 md:grid-cols-4 gap-3 p-2 bg-white/90 border border-slate-200/80 rounded-2xl shadow-md shadow-slate-200/60 text-left max-w-3xl w-full">
          <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-600 border border-amber-500/20">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-medium">Domain Utama</p>
              <p className="text-xs font-bold text-slate-900 font-sora">4 Fokus Riset</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-600 border border-amber-500/20">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-medium">Manufaktur</p>
              <p className="text-xs font-bold text-slate-900 font-sora">100% In-House</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-600 border border-amber-500/20">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-medium">Telemetri</p>
              <p className="text-xs font-bold text-slate-900 font-sora">IoT Real-Time</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-600 border border-amber-500/20">
              <Gauge className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 font-medium">Aerodinamika</p>
              <p className="text-xs font-bold text-slate-900 font-sora">CFD Carbon</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* GRID KARTU FOKUS RISET                                    */}
      {/* ========================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {RESEARCH_FOCUS_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id} 
                className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-md shadow-slate-200/50 hover:border-amber-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Top Badge & Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-sora text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono font-bold text-amber-600 tracking-wide mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-inter">
                    {item.desc}
                  </p>

                  {/* Highlight Checklist */}
                  <div className="space-y-2 pt-1">
                    <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                      POIN KUNCI RISET:
                    </p>
                    <div className="space-y-1.5">
                      {item.highlights.map((hl, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Specs & Status Footer inside Card */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="grid grid-cols-2 gap-3 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                    {item.specs.map((sp, idx) => (
                      <div key={idx}>
                        <span className="text-[10px] font-mono text-slate-400 uppercase block">
                          {sp.label}
                        </span>
                        <span className="text-xs font-mono font-bold text-slate-900">
                          {sp.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-400">STATUS RISET:</span>
                    <span className="text-emerald-600 font-bold flex items-center gap-1.5 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80 text-[10px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* CALL TO ACTION BANNER                                     */}
        {/* ========================================================= */}
        <div className="mt-14 text-center bg-white border border-slate-200/90 rounded-2xl p-8 sm:p-10 shadow-md shadow-slate-200/50 backdrop-blur-md">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto mb-3 border border-amber-500/20">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-sora font-bold text-slate-900 text-lg sm:text-xl mb-2">
            Ingin Berkolaborasi dalam Riset Kendaraan Listrik?
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto mb-6 leading-relaxed font-inter">
            Kukang EV ITERA membuka peluang kemitraan riset, sponsor laboratorium, dan pengujian teknologi kendaraan listrik bersama industri & akademisi.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/riset/sponsor"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-sora font-bold text-xs shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
            >
              MITRA SPONSORSHIP <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/informasi/rekrutmen"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 font-sora font-bold text-xs transition-all flex items-center justify-center gap-1.5"
            >
              GABUNG TIM RISET <ArrowUpRight className="w-4 h-4 text-amber-600" />
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