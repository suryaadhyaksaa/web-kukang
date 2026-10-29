'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import {
  Zap,
  Wrench,
  BatteryCharging,
  Layers,
  Sparkles,
  Quote,
  ChevronRight,
  CheckCircle2,
  Gauge,
  ZoomIn,
  X,
  Info,
  Image as ImageIcon
} from 'lucide-react';

interface WorkshopItem {
  step: string;
  name: string;
  desc: string;
  detailedDesc: string;
  img: string;
  tag: string;
  highlights: string[];
}

export default function TechnicalDivisionsPage() {
  const [showHeadPhotoModal, setShowHeadPhotoModal] = useState(false);
  const [selectedWorkshopItem, setSelectedWorkshopItem] = useState<WorkshopItem | null>(null);

  const headTechnical = {
    name: 'Raju Indra Pratama',
    role: 'Technical Manager / Kepala Divisi Technical',
    major: 'Teknik Sistem Energi 23',
    image: '/images/team/head-technical.jpg',
    quote:
      'Di Divisi Technical Kukang EV, setiap milimeter struktur sasis dan setiap miliampere arus baterai diperhitungkan secara presisi. Fokus utama kami bukan hanya membangun mobil listrik yang dapat melaju, melainkan mengoptimalkan efisiensi energi ekstrem melalui inovasi komposit bodi aerodinamis serta manajemen baterai custom tingkat lanjut.'
  };

  const focusElectrical = [
    {
      title: 'Merancang & Merakit Battery Pack Custom',
      desc: 'Pengembangan modul baterai Lithium-ion/LiFePO4 secara independen, mencakup rancangan sel paralel-seri, pengelasan titik (spot welding), serta perhitungan kerapatan energi (energy density).'
    },
    {
      title: 'Battery Management System (BMS) & Thermal Control',
      desc: 'Penerapan sistem BMS presisi tinggi untuk memantau over-current, cell balancing, proteksi suhu ekstrem, dan otomatisasi sakelar pemutus keselamatan (safety cutoff switch).'
    },
    {
      title: 'Wiring Harness Modular & Telemetri IoT',
      desc: 'Penyusunan kabel kelistrikan tahan vibrasi tinggi, instalasi sensor arus & tegangan, serta transmisi data telemetri nirkabel real-time ke pit-stop saat pengujian.'
    },
    {
      title: 'Optimasi Motor Controller & Algoritma BLDC',
      desc: 'Tuning kustom kurva efisiensi motor controller BLDC untuk memberikan dorongan akselerasi optimal dengan konsumsi daya seminimal mungkin.'
    }
  ];

  const focusMechanical = [
    {
      title: 'Pengerjaan & Fabrikasi Body Mobil Aerodinamis',
      desc: 'Merancang bentuk bodi hibrida melengkung dengan koefisien hambatan udara (drag coefficient) rendah melalui komputasi CFD, diikuti cetakan & pencetakan bahan komposit (fiberglass/serat karbon) yang kuat dan ultra-ringan.'
    },
    {
      title: 'Perancangan Sasis & Geometri Suspensi',
      desc: 'Desain sasis tubular/monocoque presisi menggunakan perangkat lunak CAD/FEA untuk menguji ketahanan beban, dikombinasikan dengan suspensi custom yang stabil di lintasan sirkuit.'
    },
    {
      title: 'Sistem Kemudi (Steering) & Pengereman Presisi',
      desc: 'Sintesis sistem katenari steer yang responsif, kalibrasi rasio roda gila, serta pemasangan rem hidrolis ganda hemat bobot untuk keamanan maksimal pengemudi.'
    },
    {
      title: 'Powertrain & Transmisi Minim Gesekan',
      desc: 'Perhitungan rasio reduksi roda gigi dan transmisi daya langsung (direct drive/chain drive) yang dirancang untuk meminimalkan kerugian daya akibat gesekan mekanis.'
    }
  ];

  const workshopItems: WorkshopItem[] = [
    { 
      step: '01', 
      name: 'CAD & Simulation', 
      desc: 'Pemodelan 3D sasis, analisis FEA, dan simulasi CFD aerodinamika bodi.',
      detailedDesc: 'Tahap awal perancangan digital di mana seluruh struktur mobil listrik disimulasikan secara komputasional. Kami menguji ketahanan tegangan sasis melalui Finite Element Analysis (FEA) dan mengoptimalkan aliran udara bodi menggunakan Computational Fluid Dynamics (CFD) untuk meminimalkan hambatan angin.',
      img: '/images/workshop/cad-sim.jpg',
      tag: 'DESAIN 3D',
      highlights: ['3D Modeling SolidWorks / CATIA', 'FEA Stress Analysis Sasis', 'CFD Aerodynamic Drag Simulation']
    },
    { 
      step: '02', 
      name: 'Battery Spot Weld & Sasis', 
      desc: 'Perakitan sel baterai custom dan fabrikasi struktur tubular sasis.',
      detailedDesc: 'Proses perakitan fisik modul baterai menggunakan teknik pengelasan titik (spot welding) presisi tinggi guna memastikan resistansi listrik minimal antar-sel. Di saat bersamaan, tim mekanik mengelas dan membentuk struktur pipa sasis tubular berbahan presisi tinggi yang kokoh namun ringan.',
      img: '/images/workshop/spot-weld.jpg',
      tag: 'FABRIKASI',
      highlights: ['Custom Spot Welding Battery', 'Precision Cell Balancing & Pack Wiring', 'Tubular Steel Chassis Fabrication']
    },
    { 
      step: '03', 
      name: 'Composite Body & Wiring', 
      desc: 'Pencetakan bodi komposit ringan dan instalasi wiring harness.',
      detailedDesc: 'Tahap pencetakan bodi aerodinamis menggunakan material serat komposit (fiberglass / carbon fiber) melalui metode moulding presisi. Dilanjutkan dengan instalasi jalur kabel kelistrikan (wiring harness) modular yang teruji tahan terhadap vibrasi ekstrem dan panas.',
      img: '/images/workshop/body-wiring.jpg',
      tag: 'ASSEMBLY',
      highlights: ['Composite Layup & Moulding', 'Vibration-resistant Wiring Harness', 'BMS & Telemetry Module Integration']
    },
    { 
      step: '04', 
      name: 'Track Test & Telemetry', 
      desc: 'Pengujian melaju di lintasan sirkuit dan evaluasi konsumsi daya.',
      detailedDesc: 'Tahap uji coba lapangan untuk mengevaluasi dinamika kendaraan, respon pengereman, dan efisiensi konsumsi energi per kilometer. Seluruh data performa baterai, arus, dan kecepatan ditransmisikan secara real-time via IoT ke pit-stop monitor.',
      img: '/images/workshop/track-test.jpg',
      tag: 'TESTING',
      highlights: ['Real-time Telemetry Dashboard', 'On-track Power Efficiency Benchmark', 'Brake & Handling Calibration']
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF7EE] text-slate-800 font-inter overflow-x-hidden relative">
      <Navbar />

      {/* Modal Fullscreen Preview Foto Head Technical */}
      {showHeadPhotoModal && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-8 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setShowHeadPhotoModal(false)}
        >
          <button
            onClick={() => setShowHeadPhotoModal(false)}
            className="absolute top-5 right-5 sm:top-8 sm:right-8 p-3 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/80 transition-all z-20 cursor-pointer shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="relative max-w-3xl w-full h-full max-h-[85vh] flex flex-col items-center justify-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] w-auto h-auto rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-2xl shadow-amber-500/20 bg-slate-900 flex items-center justify-center">
              <img 
                src={headTechnical.image} 
                alt={headTechnical.name} 
                className="max-h-[75vh] w-auto max-w-full object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            <div className="text-center space-y-1 bg-slate-900/90 border border-amber-500/30 px-6 py-2.5 rounded-full backdrop-blur-md shadow-xl">
              <h3 className="font-space-grotesk font-bold text-white text-base sm:text-lg tracking-wide">{headTechnical.name}</h3>
              <p className="text-xs font-space-grotesk text-amber-400 font-medium">
                {headTechnical.role} <span className="text-slate-500">•</span> {headTechnical.major}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modal Detail Dokumentasi Ngebengkel & Alur Kerja */}
      {selectedWorkshopItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedWorkshopItem(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white border-2 border-amber-400 rounded-3xl overflow-hidden shadow-2xl shadow-amber-950/40 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button
              onClick={() => setSelectedWorkshopItem(null)}
              className="absolute top-4 right-4 p-3 rounded-full bg-slate-950/85 text-white hover:bg-red-600 transition-all z-30 cursor-pointer shadow-xl border border-slate-700/80"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Area Gambar Dokumentasi */}
            <div className="relative h-72 sm:h-[380px] w-full bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950 shrink-0 overflow-hidden flex items-center justify-center border-b-2 border-amber-300">
              {/* Fallback Graphic saat gambar loading */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-amber-950/40 to-slate-950 flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-amber-500/30 mb-3 shadow-lg">
                  <ImageIcon className="w-12 h-12 text-amber-400 animate-pulse" />
                </div>
                <h4 className="font-space-grotesk font-bold text-amber-300 text-sm tracking-wide">DOKUMENTASI VISUAL BENGKEL</h4>
                <p className="text-xs text-slate-400 font-inter mt-1 max-w-xs">
                  Proses rekayasa {selectedWorkshopItem.name} oleh tim teknis Kukang EV.
                </p>
              </div>

              <img 
                src={selectedWorkshopItem.img} 
                alt={selectedWorkshopItem.name}
                className="relative z-10 w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />

              {/* Gradient Overlay Tipis */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              {/* Header Title Overlay */}
              <div className="absolute bottom-4 left-6 right-6 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-space-grotesk font-extrabold text-amber-300 bg-slate-950/90 px-3.5 py-1.5 rounded-full border border-amber-500/50 shadow-md">
                      PHASE {selectedWorkshopItem.step} • {selectedWorkshopItem.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-space-grotesk font-black text-white drop-shadow-md">
                    {selectedWorkshopItem.name}
                  </h3>
                </div>

                <div className="bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-amber-400/40 text-amber-300 text-xs font-space-grotesk font-bold shrink-0 flex items-center gap-2 shadow-lg">
                  <ZoomIn className="w-4 h-4 text-amber-400" /> DOKUMENTASI RESMI
                </div>
              </div>
            </div>

            {/* Penjelasan Detail Kegiatan */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar bg-amber-50/30">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-space-grotesk text-amber-900 font-bold">
                  <Info className="w-4 h-4 text-amber-600" /> DETAIL PENJELASAN KEGIATAN
                </div>
                <p className="text-slate-700 text-sm sm:text-base font-inter leading-relaxed font-medium">
                  {selectedWorkshopItem.detailedDesc}
                </p>
              </div>

              {/* Highlights Sub-Kegiatan */}
              <div className="space-y-3 pt-3 border-t border-amber-200">
                <span className="text-xs font-space-grotesk text-amber-900 font-bold uppercase tracking-wider">
                  FOKUS UTAMA & TEKNOLOGI
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedWorkshopItem.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-white border border-amber-300/80 rounded-xl px-4 py-3 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-xs text-slate-800 font-inter font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        {/* HERO TITLE SECTION */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-black font-space-grotesk tracking-tight text-slate-900">
            TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-red-600">SQUAD</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto font-inter leading-relaxed font-medium">
            Pusat riset dan manufaktur kendaraan listrik efisiensi tinggi Kukang EV ITERA. Menggabungkan ketelitian rekayasa kelistrikan, daya tahan mekanis, dan aerodinamika bodi masa depan.
          </p>
        </div>

        {/* SALAM PEMBUKA HEAD TECHNICAL */}
        <div className="relative bg-gradient-to-br from-white via-amber-50 to-yellow-100/70 border-2 border-amber-300 rounded-3xl p-6 sm:p-10 shadow-xl shadow-amber-900/5 overflow-hidden">
          
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-orange-300/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 sm:gap-10">
            
            {/* FOTO MANAJER */}
            <div className="w-full sm:w-80 shrink-0 flex flex-col items-center">
              <div 
                onClick={() => setShowHeadPhotoModal(true)}
                className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-lg shadow-amber-950/15 bg-slate-900 cursor-pointer group"
              >
                <img
                  src={headTechnical.image}
                  alt={headTechnical.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-space-grotesk font-bold text-amber-400 bg-slate-950/90 px-2.5 py-1 rounded-full border border-amber-500/50 flex items-center gap-1 shadow-lg">
                    <ZoomIn className="w-3 h-3" /> PREVIEW HD
                  </span>
                </div>

                <div className="absolute bottom-5 left-4 right-4 text-center space-y-1">
                  <h3 className="text-xl font-space-grotesk font-extrabold text-white drop-shadow-md">
                    {headTechnical.name}
                  </h3>
                  <p className="text-xs font-bold text-amber-400 font-inter tracking-wide">
                    {headTechnical.role}
                  </p>
                  <span className="inline-block text-[11px] font-medium text-slate-300 bg-slate-900/80 px-3 py-0.5 rounded-full border border-slate-700/60 mt-1">
                    {headTechnical.major}
                  </span>
                </div>
              </div>
            </div>

            {/* KONTEN SALAM PEMBUKA */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold font-space-grotesk w-max shadow-xs">
                <Quote className="w-3.5 h-3.5 text-amber-700" /> AMBISI TEKNIS & INOVASI
              </div>

              <blockquote className="space-y-4">
                <p className="text-base sm:text-lg italic font-inter text-slate-800 leading-relaxed font-medium border-l-4 border-amber-500 pl-4">
                  "{headTechnical.quote}"
                </p>
              </blockquote>

              <div className="pt-4 border-t border-amber-200 flex flex-wrap gap-2.5">
                <span className="text-xs font-inter font-bold text-amber-950 bg-white border border-amber-300/80 px-3.5 py-1.5 rounded-xl shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" /> High-Efficiency Electrical
                </span>
                <span className="text-xs font-inter font-bold text-amber-950 bg-white border border-amber-300/80 px-3.5 py-1.5 rounded-xl shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" /> Lightweight Composite Body
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* DETIL FOKUS KERJA DIVISI TECHNICAL */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-space-grotesk text-amber-700 font-bold tracking-widest uppercase">
              WORKFLOW & RESPONSIBILITIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-space-grotesk text-slate-900">
              FOKUS KERJA <span className="text-amber-600">DIVISI TEKNIS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* 1. SEKTOR ELECTRICAL & PROGRAMMING */}
            <div className="bg-white border border-amber-200/90 rounded-3xl p-6 sm:p-8 space-y-6 shadow-lg shadow-amber-900/5">
              <div className="flex items-center gap-3 border-b border-amber-100 pb-4">
                <div className="p-3 bg-amber-50 border border-amber-300 rounded-2xl text-amber-700">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-space-grotesk font-bold text-lg text-slate-900">
                    ELECTRICAL & PROGRAMMING
                  </h3>
                  <p className="text-xs text-amber-700 font-space-grotesk font-semibold">
                    Sistem Kelistrikan, Battery Pack, & Telemetri
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {focusElectrical.map((item, idx) => (
                  <div key={idx} className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-4 space-y-1">
                    <h4 className="font-space-grotesk font-bold text-xs text-amber-900 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item.title}</span>
                    </h4>
                    <p className="text-xs text-slate-600 font-inter leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. SEKTOR MECHANICAL, CHASSIS & BODY */}
            <div className="bg-white border border-amber-200/90 rounded-3xl p-6 sm:p-8 space-y-6 shadow-lg shadow-amber-900/5">
              <div className="flex items-center gap-3 border-b border-amber-100 pb-4">
                <div className="p-3 bg-amber-50 border border-amber-300 rounded-2xl text-amber-700">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-space-grotesk font-bold text-lg text-slate-900">
                    MECHANICAL, CHASSIS & BODY
                  </h3>
                  <p className="text-xs text-amber-700 font-space-grotesk font-semibold">
                    Fabrikasi Bodi, Sasis, & Powertrain
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {focusMechanical.map((item, idx) => (
                  <div key={idx} className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-4 space-y-1">
                    <h4 className="font-space-grotesk font-bold text-xs text-amber-900 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item.title}</span>
                    </h4>
                    <p className="text-xs text-slate-600 font-inter leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* SECTION ALUR KERJA */}
        <div className="space-y-6">
          <div className="text-center space-y-1.5">
            <span className="text-[10px] font-space-grotesk text-amber-800 font-bold tracking-widest uppercase bg-amber-100 px-3 py-1 rounded-full border border-amber-200 inline-block">
              PROOF OF WORK
            </span>
            <h3 className="text-2xl sm:text-3xl font-space-grotesk font-extrabold text-slate-900">
              Research and <span className="text-amber-600">Development (R&D)</span>
            </h3>
            <p className="text-xs text-slate-600 font-medium max-w-md mx-auto font-inter">
              Klik kartu atau gambar untuk melihat penjelasan detail kegiatan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
            {workshopItems.map((p, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedWorkshopItem(p)}
                className="group relative bg-white border-2 border-amber-200/80 hover:border-amber-500 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Header / Foto Mini */}
                <div className="relative h-44 sm:h-48 w-full bg-slate-950 overflow-hidden shrink-0">
                  <img 
                    src={p.img} 
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                    <span className="font-space-grotesk font-black text-amber-400 text-[11px] bg-slate-950/90 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-amber-500/40 shadow-xs">
                      PHASE {p.step}
                    </span>
                    <span className="text-[10px] font-space-grotesk font-bold text-slate-100 bg-amber-600/90 px-2.5 py-1 rounded-lg border border-amber-400/50 shadow-xs">
                      {p.tag}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                    <span className="text-[11px] font-space-grotesk font-bold text-amber-300 bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-amber-400/80 flex items-center gap-1.5 shadow-md group-hover:scale-105 transition-transform">
                      <ZoomIn className="w-3.5 h-3.5 text-amber-400" /> KLIK UNTUK DETAIL
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between border-t border-amber-100 bg-gradient-to-b from-white to-amber-50/20">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-space-grotesk font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                        {p.name}
                      </h4>
                      <ChevronRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform shrink-0" />
                    </div>
                    <p className="text-xs text-slate-600 font-inter leading-relaxed line-clamp-2 font-medium">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="text-center bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-100/80 border border-amber-300/80 rounded-3xl p-8 max-w-3xl mx-auto shadow-md">
          <h3 className="font-space-grotesk font-bold text-slate-900 text-lg mb-2">Tertarik Mengenal Anggota Tim Technical?</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto mb-6 font-inter">
            Lihat daftar lengkap mahasiswa dan staf engineer yang mengoperasikan setiap sub-divisi di Kukang EV.
          </p>
          <Link
            href="/tentang/struktur-tim"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-space-grotesk font-bold text-xs shadow-md hover:opacity-95 transition-all cursor-pointer"
          >
            LIHAT STRUKTUR ANGGOTA TIM <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </main>

      <footer className="border-t border-amber-200 py-8 text-center text-xs text-slate-600 font-inter bg-amber-50/80">
        © {new Date().getFullYear()} Kukang EV Team - ITERA. All rights reserved.
      </footer>
    </div>
  );
}