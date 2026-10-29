'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import {
  Megaphone,
  DollarSign,
  Sparkles,
  Quote,
  ChevronRight,
  CheckCircle2,
  ZoomIn,
  X,
  Info,
  Image as ImageIcon,
  Handshake,
  FileText,
  TrendingUp,
  Camera,
  Users
} from 'lucide-react';

interface ActivityItem {
  step: string;
  name: string;
  desc: string;
  detailedDesc: string;
  img: string;
  tag: string;
  highlights: string[];
}

export default function NonTechnicalDivisionsPage() {
  const [showHeadPhotoModal, setShowHeadPhotoModal] = useState(false);
  const [selectedActivityItem, setSelectedActivityItem] = useState<ActivityItem | null>(null);

  const headNonTechnical = {
    name: 'M.Daffa Alghani',
    role: 'Non-Technical Manager / Kepala Divisi Non-Technical',
    major: 'Teknik Elektro 23',
    image: '/images/team/head-nontechnical.jpg',
    quote:
      'Di Divisi Non-Technical Kukang EV, kami memastikan bahwa inovasi rekayasa tidak berhenti di dalam bengkel. Dari strategi branding yang berdampak, kemitraan sponsor bernilai tinggi, hingga tata kelola operasional yang presisi, kami adalah fondasi pendorong utama keberlanjutan dan kejayaan tim di panggung nasional maupun internasional.'
  };

  const focusMediaBranding = [
    {
      title: 'Strategi Visual Identity & Graphic Design',
      desc: 'Pengembangan identitas visual Kukang EV yang konsisten across platform, mencakup panduan livery kendaraan, merchandise, publikasi digital, dan standar dokumentasi resmi.'
    },
    {
      title: 'Social Media Campaign & Video Production',
      desc: 'Perancangan konten edukatif & hiburan berkala, pembuatan dokumenter pendek riset mobil listrik, serta rekapitulasi momen kompetisi melalui visual sinematik.'
    },
    {
      title: 'Public Relations & Media Outreach',
      desc: 'Penyusunan press release resmi, manajemen hubungan dengan media massa, dan eksekusi kampanye kesadaran teknologi ramah lingkungan di lingkungan kampus & publik.'
    },
    {
      title: 'Sponsorship Branding Activation',
      desc: 'Memastikan penempatan logo dan exposure benefit mitra industri terakomodasi secara optimal di bodi mobil, jersey tim, booth pameran, dan media sosial.'
    }
  ];

  const focusFinanceOperations = [
    {
      title: 'Sponsorship Proposal & Corporate Pitching',
      desc: 'Penyusunan proposal pendanaan bernilai tambah, negosiasi kemitraan strategis dengan BUMN & perusahaan swasta, serta pengelolaan relasi sponsor berkelanjutan.'
    },
    {
      title: 'Financial Planning & Budget Auditing',
      desc: 'Pengelolaan anggaran operasional riset dan kompetisi, pencatatan arus kas presisi, serta transparansi pelaporan keuangan bulanan secara akuntabel.'
    },
    {
      title: 'Event Logistics & Accommodation Planning',
      desc: 'Pengurusan pengiriman mobil riset, pemesanan akomodasi venue kompetisi, katering tim, dan manajemen kelengkapan perlengkapan lapangan saat race day.'
    },
    {
      title: 'Institutional Legal & External Partnership',
      desc: 'Pengurusan surat izin operasional kelembagaan ITERA, kerjasama antar-organisasi mahasiswa, serta legalitas administrasi keikutsertaan lomba.'
    }
  ];

  const activityItems: ActivityItem[] = [
    { 
      step: '01', 
      name: 'Branding & Design System', 
      desc: 'Perancangan identitas visual, livery mobil, dan kit pemasaran tim.',
      detailedDesc: 'Tahap penyusunan identitas visual terpadu Kukang EV. Kami merancang panduan desain (brand guidelines), desain livery aerodinamis mobil listrik, merchandise resmi, serta materi publikasi visual untuk meningkatkan nilai daya tarik tim di mata publik dan sponsor.',
      img: '/images/non-technical/branding.jpg',
      tag: 'DESIGN',
      highlights: ['Brand Identity Guidelines', 'Vehicle Livery Design 3D', 'Official Merchandise & Apparels']
    },
    { 
      step: '02', 
      name: 'Proposal & Corporate Pitching', 
      desc: 'Penyusunan proposal pendanaan dan presentasi ke mitra industri.',
      detailedDesc: 'Proses penyusunan proposal sponsorship profesional bertaraf industri. Tim melakukan riset prospek mitra, menyusun paket benefit eksklusif, serta melangsungkan sesi presentasi (pitching) langsung ke perusahaan calon penyokong dana.',
      img: '/images/non-technical/pitching.jpg',
      tag: 'PARTNERSHIP',
      highlights: ['Industrial Sponsorship Proposal', 'Corporate Pitching & Negotiation', 'Sponsor Benefits Agreement']
    },
    { 
      step: '03', 
      name: 'Content & Media Production', 
      desc: 'Dokumentasi riset, pembuatan video sinematik, dan press release.',
      detailedDesc: 'Proses produksi konten multimedia harian di bengkel dan lintasan balap. Tim media meliput proses rekayasa teknik, menyunting video dokumenter pendek, dan menerbitkan rilis pers ke berbagai jejaring media massa lokal dan nasional.',
      img: '/images/non-technical/content.jpg',
      tag: 'MEDIA',
      highlights: ['Workshop Cinematic Photography', 'Short Documentary & Reels', 'Press Release & Public Publication']
    },
    { 
      step: '04', 
      name: 'Race Logistics & Finance Audit', 
      desc: 'Pengelolaan logistik arena balap dan audit transparansi keuangan.',
      detailedDesc: 'Tahap krusial eksekusi lapangan saat kompetisi. Tim operasional mengelola mobilisasi paddock, jadwal katering, pengiriman kendaraan, sementara tim keuangan melakukan verifikasi serta pembukuan audit alokasi dana secara rinci.',
      img: '/images/non-technical/logistics.jpg',
      tag: 'OPERATIONS',
      highlights: ['Paddock & Transport Logistics', 'On-site Hospitality Management', 'Comprehensive Financial Audit']
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFF5F5] text-slate-800 font-inter overflow-x-hidden relative">
      <Navbar />

      {/* Modal Fullscreen Preview Foto Head Non-Technical */}
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
            <div className="relative max-h-[75vh] w-auto h-auto rounded-2xl overflow-hidden border-2 border-red-500/50 shadow-2xl shadow-red-500/20 bg-slate-900 flex items-center justify-center">
              <img 
                src={headNonTechnical.image} 
                alt={headNonTechnical.name} 
                className="max-h-[75vh] w-auto max-w-full object-contain"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>

            <div className="text-center space-y-1 bg-slate-900/90 border border-red-500/30 px-6 py-2.5 rounded-full backdrop-blur-md shadow-xl">
              <h3 className="font-space-grotesk font-bold text-white text-base sm:text-lg tracking-wide">{headNonTechnical.name}</h3>
              <p className="text-xs font-space-grotesk text-red-400 font-medium">
                {headNonTechnical.role} <span className="text-slate-500">•</span> {headNonTechnical.major}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modal Detail Dokumentasi Alur Kerja Non-Technical */}
      {selectedActivityItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedActivityItem(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white border-2 border-red-400 rounded-3xl overflow-hidden shadow-2xl shadow-red-950/30 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button
              onClick={() => setSelectedActivityItem(null)}
              className="absolute top-4 right-4 p-3 rounded-full bg-slate-950/85 text-white hover:bg-red-600 transition-all z-30 cursor-pointer shadow-xl border border-slate-700/80"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Area Gambar Dokumentasi Besar & Terang */}
            <div className="relative h-72 sm:h-[380px] w-full bg-gradient-to-br from-slate-900 via-slate-950 to-red-950 shrink-0 overflow-hidden flex items-center justify-center border-b-2 border-red-300">
              {/* Fallback Graphic */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-950/40 to-slate-950 flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-red-500/30 mb-3 shadow-lg">
                  <ImageIcon className="w-12 h-12 text-red-400 animate-pulse" />
                </div>
                <h4 className="font-space-grotesk font-bold text-red-300 text-sm tracking-wide">DOKUMENTASI VISUAL NON-TEKNIS</h4>
                <p className="text-xs text-slate-400 font-inter mt-1 max-w-xs">
                  Proses eksekusi {selectedActivityItem.name} oleh tim manajemen Kukang EV.
                </p>
              </div>

              <img 
                src={selectedActivityItem.img} 
                alt={selectedActivityItem.name}
                className="relative z-10 w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />

              {/* Gradient Overlay Tipis */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              {/* Header Title Overlay */}
              <div className="absolute bottom-4 left-6 right-6 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-space-grotesk font-extrabold text-red-300 bg-slate-950/90 px-3.5 py-1.5 rounded-full border border-red-500/50 shadow-md">
                      PHASE {selectedActivityItem.step} • {selectedActivityItem.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-space-grotesk font-black text-white drop-shadow-md">
                    {selectedActivityItem.name}
                  </h3>
                </div>

                <div className="bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-red-400/40 text-red-300 text-xs font-space-grotesk font-bold shrink-0 flex items-center gap-2 shadow-lg">
                  <ZoomIn className="w-4 h-4 text-red-400" /> DOKUMENTASI RESMI
                </div>
              </div>
            </div>

            {/* Penjelasan Detail Kegiatan */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto custom-scrollbar bg-rose-50/40">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-space-grotesk text-red-900 font-bold">
                  <Info className="w-4 h-4 text-red-600" /> DETAIL PENJELASAN KEGIATAN
                </div>
                <p className="text-slate-700 text-sm sm:text-base font-inter leading-relaxed font-medium">
                  {selectedActivityItem.detailedDesc}
                </p>
              </div>

              {/* Highlights Sub-Kegiatan */}
              <div className="space-y-3 pt-3 border-t border-red-200">
                <span className="text-xs font-space-grotesk text-red-900 font-bold uppercase tracking-wider">
                  FOKUS UTAMA & RUANG LINGKUP
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedActivityItem.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-white border border-red-200 rounded-xl px-4 py-3 shadow-xs">
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
            NON-TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-orange-600">SQUAD</span>
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto font-inter leading-relaxed font-medium">
            Pusat manajemen strategis, publikasi media, pencarian sponsorship, dan tata kelola operasional Kukang EV ITERA. Menghubungkan inovasi teknis dengan kemitraan publik serta dunia industri.
          </p>
        </div>

        {/* SALAM PEMBUKA HEAD NON-TECHNICAL */}
        <div className="relative bg-gradient-to-br from-white via-rose-50 to-red-100/70 border-2 border-red-300 rounded-3xl p-6 sm:p-10 shadow-xl shadow-red-950/5 overflow-hidden">
          
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-300/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-rose-300/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 sm:gap-10">
            
            {/* FOTO MANAJER */}
            <div className="w-full sm:w-80 shrink-0 flex flex-col items-center">
              <div 
                onClick={() => setShowHeadPhotoModal(true)}
                className="relative w-full h-[380px] sm:h-[440px] rounded-2xl overflow-hidden border-2 border-red-400/80 shadow-lg shadow-red-950/15 bg-slate-900 cursor-pointer group"
              >
                <img
                  src={headNonTechnical.image}
                  alt={headNonTechnical.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-space-grotesk font-bold text-red-400 bg-slate-950/90 px-2.5 py-1 rounded-full border border-red-500/50 flex items-center gap-1 shadow-lg">
                    <ZoomIn className="w-3 h-3" /> PREVIEW HD
                  </span>
                </div>

                <div className="absolute bottom-5 left-4 right-4 text-center space-y-1">
                  <h3 className="text-xl font-space-grotesk font-extrabold text-white drop-shadow-md">
                    {headNonTechnical.name}
                  </h3>
                  <p className="text-xs font-bold text-red-400 font-inter tracking-wide">
                    {headNonTechnical.role}
                  </p>
                  <span className="inline-block text-[11px] font-medium text-slate-300 bg-slate-900/80 px-3 py-0.5 rounded-full border border-slate-700/60 mt-1">
                    {headNonTechnical.major}
                  </span>
                </div>
              </div>
            </div>

            {/* KONTEN SALAM PEMBUKA */}
            <div className="flex-1 flex flex-col justify-center space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 border border-red-300 text-red-900 text-xs font-bold font-space-grotesk w-max shadow-xs">
                <Quote className="w-3.5 h-3.5 text-red-700" /> STRATEGI & KEBERLANJUTAN TIM
              </div>

              <blockquote className="space-y-4">
                <p className="text-base sm:text-lg italic font-inter text-slate-800 leading-relaxed font-medium border-l-4 border-red-500 pl-4">
                  "{headNonTechnical.quote}"
                </p>
              </blockquote>

              <div className="pt-4 border-t border-red-200 flex flex-wrap gap-2.5">
                <span className="text-xs font-inter font-bold text-red-950 bg-white border border-red-300/80 px-3.5 py-1.5 rounded-xl shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-red-600" /> High-Impact Branding
                </span>
                <span className="text-xs font-inter font-bold text-red-950 bg-white border border-red-300/80 px-3.5 py-1.5 rounded-xl shadow-xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600" /> Industrial Partnership & Governance
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* DETIL FOKUS KERJA DIVISI NON-TECHNICAL */}
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-space-grotesk text-red-700 font-bold tracking-widest uppercase">
              WORKFLOW & RESPONSIBILITIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-black font-space-grotesk text-slate-900">
              FOKUS KERJA <span className="text-red-600">DIVISI NON-TECHNICAL</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* 1. SEKTOR MEDIA, BRANDING & PR */}
            <div className="bg-white border border-red-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-lg shadow-red-900/5">
              <div className="flex items-center gap-3 border-b border-red-100 pb-4">
                <div className="p-3 bg-red-50 border border-red-300 rounded-2xl text-red-700">
                  <Megaphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-space-grotesk font-bold text-lg text-slate-900">
                    MEDIA, BRANDING & PUBLIC RELATIONS
                  </h3>
                  <p className="text-xs text-red-700 font-space-grotesk font-semibold">
                    Publikasi Visual, Konten, & Exposure Branding
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {focusMediaBranding.map((item, idx) => (
                  <div key={idx} className="bg-rose-50/50 border border-red-200/60 rounded-2xl p-4 space-y-1">
                    <h4 className="font-space-grotesk font-bold text-xs text-red-900 flex items-start gap-2">
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

            {/* 2. SEKTOR SPONSORSHIP, FINANCE & OPERATIONS */}
            <div className="bg-white border border-red-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-lg shadow-red-900/5">
              <div className="flex items-center gap-3 border-b border-red-100 pb-4">
                <div className="p-3 bg-red-50 border border-red-300 rounded-2xl text-red-700">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-space-grotesk font-bold text-lg text-slate-900">
                    SPONSORSHIP, FINANCE & OPERATIONS
                  </h3>
                  <p className="text-xs text-red-700 font-space-grotesk font-semibold">
                    Pendanaan, Audit Anggaran, & Logistik Tim
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {focusFinanceOperations.map((item, idx) => (
                  <div key={idx} className="bg-rose-50/50 border border-red-200/60 rounded-2xl p-4 space-y-1">
                    <h4 className="font-space-grotesk font-bold text-xs text-red-900 flex items-start gap-2">
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

        {/* SECTION ALUR KERJA NON-TECHNICAL - 4 KOLOM INTERAKTIF */}
        <div className="space-y-6">
          <div className="text-center space-y-1.5">
            <span className="text-[10px] font-space-grotesk text-red-800 font-bold tracking-widest uppercase bg-red-100 px-3 py-1 rounded-full border border-red-200 inline-block">
              MANAGEMENT WORKFLOW
            </span>
            <h3 className="text-2xl sm:text-3xl font-space-grotesk font-extrabold text-slate-900">
              BRANDING <span className="text-red-600">PROFILE</span>
            </h3>
            <p className="text-xs text-slate-600 font-medium max-w-md mx-auto">
              Klik kartu atau gambar untuk melihat penjelasan detail kegiatan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
            {activityItems.map((p, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedActivityItem(p)}
                className="group relative bg-white border-2 border-red-200/80 hover:border-red-500 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
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
                    <span className="font-space-grotesk font-black text-red-400 text-[11px] bg-slate-950/90 backdrop-blur-xs px-2.5 py-1 rounded-lg border border-red-500/40 shadow-xs">
                      PHASE {p.step}
                    </span>
                    <span className="text-[10px] font-space-grotesk font-bold text-slate-100 bg-red-600/90 px-2.5 py-1 rounded-lg border border-red-400/50 shadow-xs">
                      {p.tag}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                    <span className="text-[11px] font-space-grotesk font-bold text-red-300 bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-red-400/80 flex items-center gap-1.5 shadow-md group-hover:scale-105 transition-transform">
                      <ZoomIn className="w-3.5 h-3.5 text-red-400" /> KLIK UNTUK DETAIL
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between border-t border-red-100 bg-gradient-to-b from-white to-rose-50/30">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-space-grotesk font-bold text-slate-900 group-hover:text-red-700 transition-colors">
                        {p.name}
                      </h4>
                      <ChevronRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform shrink-0" />
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
        <div className="text-center bg-gradient-to-r from-red-50 via-rose-50 to-red-100/80 border border-red-300/80 rounded-3xl p-8 max-w-3xl mx-auto shadow-md">
          <h3 className="font-space-grotesk font-bold text-slate-900 text-lg mb-2">Tertarik Mengenal Anggota Tim Non-Technical?</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto mb-6">
            Lihat daftar lengkap mahasiswa dan manajer yang mengelola divisi branding, sponsorship, dan operasional Kukang EV.
          </p>
          <Link
            href="/tentang/struktur-tim"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 text-white font-space-grotesk font-bold text-xs shadow-md hover:opacity-95 transition-all cursor-pointer"
          >
            LIHAT STRUKTUR ANGGOTA TIM <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </main>

      <footer className="border-t border-red-200 py-8 text-center text-xs text-slate-600 font-inter bg-red-50/80">
        © {new Date().getFullYear()} Kukang EV Team - ITERA. All rights reserved.
      </footer>
    </div>
  );
}