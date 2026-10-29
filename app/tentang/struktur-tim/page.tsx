'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import {
  User,
  Sparkles,
  ShieldCheck,
  Cpu,
  Wrench,
  FileText,
  Settings,
  Palette,
  Award,
  ChevronRight,
  Users,
  Search,
  X,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  ZoomIn,
  ExternalLink,
  Zap
} from 'lucide-react';

// ==========================================
// TYPES & INTERFACES
// ==========================================
interface MemberData {
  role: string;
  titleBadge?: string;
  name: string;
  major: string;
  image: string;
  icon?: React.ElementType;
  highlight?: boolean;
  isStaff?: boolean;
  division?: string;
}

interface MemberCardProps extends MemberData {
  onClick?: () => void;
}

interface DivisionData {
  subDivisionName: string;
  icon: React.ElementType;
  head: MemberData;
  members: MemberData[];
}

// ==========================================
// CONSTANTS & MOCK DATA
// ==========================================
const PEMBINA_DATA: MemberData = {
  role: 'Dosen Pembimbing',
  titleBadge: 'PEMBINA TIM',
  name: 'Dr. Duwi Hariyanto, S.Si.,M.Si.',
  major: 'Dosen Teknik Elektro ITERA',
  image: '/images/team/pembina.png',
  icon: Award,
  division: 'Pembina & Penasihat Tim'
};

const GENERAL_MANAGER_DATA: MemberData = {
  role: 'General Manager KUKANG EV',
  titleBadge: 'GENERAL MANAGER',
  name: 'Urwah Abd. Manaf Panjaitan',
  major: 'Teknik Elektro 23',
  image: '/images/team/gm-kukang.jpg',
  icon: ShieldCheck,
  division: 'Pimpinan Utama Tim'
};

const TOP_MANAGERS_DATA: MemberData[] = [
  {
    role: 'Kepala Divisi Technical',
    titleBadge: 'TECHNICAL MANAGER',
    name: 'Raju Indra Pratama',
    major: 'Teknik Sistem Energi 23',
    image: '/images/team/head-technical.jpg',
    icon: Cpu,
    division: 'Manajemen Teknis'
  },
  {
    role: 'Kepala Divisi Non-Technical',
    titleBadge: 'NON-TECHNICAL MANAGER',
    name: 'M.Daffa Alghani',
    major: 'Teknik Elektro 23',
    image: '/images/team/head-nontechnical.jpg',
    icon: Settings,
    division: 'Manajemen Operasional'
  }
];

const TECHNICAL_DIVISIONS: DivisionData[] = [
  {
    subDivisionName: 'DIVISI MECHANICAL',
    icon: Wrench,
    head: {
      role: 'Kepala Sub-Divisi Mechanical',
      titleBadge: 'KEPALA MECHANICAL',
      name: 'Muhamad Riduan',
      major: 'Teknik Sistem Energi 23',
      image: '/images/team/head-mechanical.png',
      division: 'Divisi Mechanical'
    },
    members: [
      { name: 'M.Aldho Putra Yuandri', role: 'Staff Chassis & Body', major: 'Teknik Sistem Energi 25', image: '/images/team/mech-1.png', division: 'Divisi Mechanical' },
      { name: 'Rohim', role: 'Staff Aerodynamics', major: 'Teknik Mesin', image: '/images/team/mech-2.png', division: 'Divisi Mechanical' },
      { name: 'Adrian Zahran Syifai', role: 'Staff Powertrain', major: 'Teknik Mesin', image: '/images/team/mech-3.png', division: 'Divisi Mechanical' },
      { name: 'Sajid Rahman Hakim', role: 'Staff Steering & Brake', major: 'Teknik Mesin', image: '/images/team/mech-4.png', division: 'Divisi Mechanical' },
      { name: 'PUGAR S', role: 'Staff Chassis & Body', major: 'Teknik Elektro 23', image: '/images/team/mech-5.png', division: 'Divisi Mechanical' },
      { name: 'Tengku Irfaan', role: 'Staff Aerodynamics', major: 'Teknik Elektro 23', image: '/images/team/mech-6.png', division: 'Divisi Mechanical' },
      { name: 'Dwilto Alif fiano', role: 'Staff Powertrain', major: 'Teknik Material 24', image: '/images/team/mech-7.png', division: 'Divisi Mechanical' },
      { name: 'M Ghazali E', role: 'Staff Steering & Brake', major: 'Teknik Mesin', image: '/images/team/mech-8.png', division: 'Divisi Mechanical' }
    ]
  },
  {
    subDivisionName: 'DIVISI ELECTRICAL & PROGRAMMING',
    icon: Cpu,
    head: {
      role: 'Kepala Sub-Divisi Electrical',
      titleBadge: 'Head of Electrical & Programming',
      name: 'Mohammad Rasyid Faud',
      major: 'Rekayasa Instrumentasi dan Automasi 24',
      image: '/images/team/head-electrical.png',
      division: 'Divisi Electrical & Programming'
    },
    members: [
      { name: 'Ario Bimo Munfadhil', role: 'Staff BMS & Battery', major: 'Rekayasa Instrumentasi dan Automasi 23', image: '/images/team/elec-1.png', division: 'Divisi Electrical' },
      { name: 'Jonathan Redyanto', role: 'Staff IoT Telemetry', major: 'Rekayasa Instrumentasi dan Automasi 24', image: '/images/team/elec-2.png', division: 'Divisi Electrical' },
      { name: 'Tegar Fariz Habibi', role: 'Staff Wiring & Sensor', major: 'Rekayasa Instrumentasi dan Automasi 25', image: '/images/team/elec-3.png', division: 'Divisi Electrical' },
      { name: 'Abdul Haris Nasrulloh', role: 'Staff Motor Controller', major: 'Rekayasa Instrumentasi dan Automasi 25', image: '/images/team/elec-4.png', division: 'Divisi Electrical' },
      { name: 'Stephan Pardede', role: 'Staff BMS & Battery', major: 'Teknik Elektro', image: '/images/team/elec-5.png', division: 'Divisi Electrical' },
      { name: 'Akbar Nazril Manurung', role: 'Staff IoT Telemetry', major: 'Teknik Elektro', image: '/images/team/elec-6.png', division: 'Divisi Electrical' },
      { name: 'Muhammad Khair', role: 'Staff Wiring & Sensor', major: 'Teknik Elektro', image: '/images/team/elec-7.png', division: 'Divisi Electrical' },
      { name: 'Mohamad Rifky Putra', role: 'Staff Wiring & Sensor', major: 'Teknik Elektro', image: '/images/team/elec-8.png', division: 'Divisi Electrical' },
      { name: 'RAHMAT RAMADHAN', role: 'Staff Motor Controller', major: 'Rekayasa Instrumentasi dan Automasi 24', image: '/images/team/elec-9.png', division: 'Divisi Electrical' },
      { name: 'Zaifanka Akbar Rasyid', role: 'Staff BMS & Battery', major: 'Teknik Elektro 23', image: '/images/team/elec-10.png', division: 'Divisi Electrical' },
      { name: 'Firman Luthfiansyah', role: 'Staff IoT Telemetry', major: 'Teknik Elektro', image: '/images/team/elec-11.png', division: 'Divisi Electrical' },
      { name: 'Pindo Kresno', role: 'Staff Wiring & Sensor', major: 'Teknik Elektro', image: '/images/team/elec-12.png', division: 'Divisi Electrical' },
      { name: 'Rahma Khairunisa', role: 'Staff Wiring & Sensor', major: 'Teknik Elektro', image: '/images/team/elec-13.png', division: 'Divisi Electrical' },
      { name: 'Al Bariq Auliya Priyadi', role: 'Staff Wiring & Sensor', major: 'Teknik Elektro', image: '/images/team/elec-14.png', division: 'Divisi Electrical' }
    ]
  }
];

const NON_TECHNICAL_DIVISIONS: DivisionData[] = [
  {
    subDivisionName: 'DIVISI Administrations, Sponsorship, & Fundraising',
    icon: FileText,
    head: {
      role: 'Kepala Sub-Divisi Administrations, Sponsorship, & Fundraising',
      titleBadge: 'KEPALA ADMINISTRASI & SPONSORSHIP',
      name: 'Assifa SerliYanti',
      major: 'Teknik Industri 23',
      image: '/images/team/head-admin.png',
      division: 'Divisi Administrasi & Sponsorship'
    },
    members: [
      { name: 'Sahiva Syamdo Vinoza', role: 'Staff Administrations', major: 'Teknik Informatika 23', image: '/images/team/admin-1.png', division: 'Divisi Administrasi' },
      { name: 'Surya Adhyaksa', role: 'Staff Secretary', major: 'Rekayasa Instrumentasi dan Automasi 24', image: '/images/team/admin-2.png', division: 'Divisi Administrasi' },
      { name: 'Siti Nur Aisyah', role: 'Staff Secretary', major: 'Teknik Geomatika/Geofisika 25', image: '/images/team/admin-3.jpg', division: 'Divisi Administrasi' },
      { name: 'Muhammad Maulidan', role: 'Staff Secretary', major: 'Teknik Mesin 25', image: '/images/team/admin-4.jpg', division: 'Divisi Administrasi' },
      { name: 'Don Jabbaru Farhan Aroyo', role: 'Staff Finance & Legal', major: 'Teknik Elektro 23', image: '/images/team/admin-5.png', division: 'Divisi Administrasi' },
      { name: 'Febri Yanti Pasaribu', role: 'Staff Finance', major: 'Teknik Industri 25', image: '/images/team/admin-6.png', division: 'Divisi Administrasi' },
      { name: 'Melva Yolanda Erlika Fara', role: 'Staff Sponsorship', major: 'Teknik Industri 25', image: '/images/team/admin-7.png', division: 'Divisi Administrasi' }
    ]
  },
  {
    subDivisionName: 'DIVISI OPERASIONAL',
    icon: Settings,
    head: {
      role: 'Kepala Sub-Divisi Operasional',
      titleBadge: 'KEPALA OPERASIONAL',
      name: 'Leanro Parasian Simbolon',
      major: 'Teknik Elektro 23',
      image: '/images/team/head-ops.png',
      division: 'Divisi Operasional'
    },
    members: [
      { name: 'Ivan Nandira Mangunang', role: 'Staff Logistics', major: 'Teknik Elektro', image: '/images/team/ops-1.png', division: 'Divisi Operasional' }
    ]
  },
  {
    subDivisionName: 'DIVISI MEDIA CREATIVE',
    icon: Palette,
    head: {
      role: 'Kepala Sub-Divisi Media Creative',
      titleBadge: 'KEPALA MEDIA CREATIVE',
      name: 'Aziz Nur Wahab',
      major: 'Teknik Industri Pertanian 23',
      image: '/images/team/head-media.png',
      division: 'Divisi Media Creative'
    },
    members: [
      { name: 'Anisa Fikratul Afizah', role: 'Staff Content Creator', major: 'Teknik Industri 23', image: '/images/team/media-1.png', division: 'Divisi Media Creative' },
      { name: 'Tegar Bimantara', role: 'Staff Videographer', major: 'Perencanaan Wilayah dan Kota 23', image: '/images/team/media-2.png', division: 'Divisi Media Creative' },
      { name: 'Aline Jennifer', role: 'Staff Social Media Specialist', major: 'Kimia 23', image: '/images/team/media-3.png', division: 'Divisi Media Creative' },
      { name: 'Nugraheni Sihombing', role: 'Staff Content Creator', major: 'Rekayasa Instrumentasi dan Automasi 24', image: '/images/team/media-4.jpg', division: 'Divisi Media Creative' },
      { name: 'Muhammad Rivaldo Avicenna', role: 'Staff Graphic Designer', major: 'Teknik Informatika', image: '/images/team/media-5.jpg', division: 'Divisi Media Creative' },
      { name: 'Yul Dwi Muqarrib', role: 'Staff Social Media Specialist', major: 'Teknik Elektro', image: '/images/team/media-6.jpg', division: 'Divisi Media Creative' }
    ]
  }
];

// ==========================================
// SUB COMPONENTS
// ==========================================

// Kartu Anggota Glassmorphic Light Theme
function MemberCard({ role, titleBadge, name, major, image, icon: Icon, highlight = false, isStaff = false, onClick }: MemberCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={onClick}
      className={`group relative rounded-2xl border transition-all duration-300 flex flex-col items-center text-center cursor-pointer select-none active:scale-[0.98] w-full min-w-0 ${
        isStaff ? 'p-3 bg-white/70 backdrop-blur-md border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-400' : 'p-4'
      } ${
        highlight
          ? 'bg-gradient-to-b from-amber-500/10 via-white/80 to-slate-50/90 border-amber-400 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20'
          : !isStaff
            ? 'bg-white/80 backdrop-blur-lg border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400/80 hover:-translate-y-1'
            : ''
      }`}
    >
      {highlight && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-36 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-full" />
      )}

      {/* Wadah Badge Anggota: Selalu Punya Wadah Khusus di Atas & Rata Tengah */}
      {titleBadge && (
        <div className="w-full flex justify-center items-center mb-2.5 px-1">
          <span className="inline-flex items-center justify-center gap-1 text-[9px] sm:text-[10px] font-orbitron font-bold text-amber-800 bg-amber-100/90 border border-amber-300/80 px-2.5 py-1 rounded-lg uppercase tracking-wider text-center leading-tight shadow-sm max-w-full break-words [overflow-wrap:anywhere]">
            {Icon && <Icon className="w-3 h-3 text-amber-600 shrink-0" />}
            <span>{titleBadge}</span>
          </span>
        </div>
      )}

      {/* Foto Profil */}
      <div
        className={`relative overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center shrink-0 rounded-xl shadow-inner ${
          isStaff ? 'w-16 h-20 sm:w-20 sm:h-24 mb-2' : 'w-24 h-32 sm:w-28 sm:h-36 mb-3'
        }`}
      >
        {!imgError && image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-400 p-2">
            <User className={isStaff ? 'w-5 h-5 text-slate-400 mb-0.5' : 'w-7 h-7 text-slate-400 mb-1'} />
            <span className="text-[8px] font-mono text-slate-400">NO PHOTO</span>
          </div>
        )}

        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
          <span className="text-[8px] sm:text-[9px] font-orbitron font-bold text-white bg-slate-900/90 border border-amber-400/80 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
            <ZoomIn className="w-3 h-3 text-amber-400" /> PREVIEW
          </span>
        </div>
      </div>

      {/* Informasi Nama & Jabatan */}
      <div className="space-y-1 w-full flex flex-col items-center justify-center text-center min-w-0">
        <h3 className={`font-orbitron font-bold text-slate-900 leading-snug text-center break-words [overflow-wrap:anywhere] w-full ${
          isStaff ? 'text-[11px] sm:text-sm line-clamp-2' : 'text-xs sm:text-base line-clamp-2'
        }`}>
          {name}
        </h3>
        
        <p className={`font-orbitron font-medium tracking-wide leading-tight text-center break-words [overflow-wrap:anywhere] w-full ${
          isStaff ? 'text-[9px] sm:text-[10px] text-amber-700/90' : 'text-[11px] sm:text-xs text-amber-700'
        }`}>
          {role}
        </p>

        <p className="text-[9px] sm:text-[11px] text-slate-500 font-sans pt-0.5 leading-tight text-center break-words [overflow-wrap:anywhere] w-full">
          {major}
        </p>
      </div>
    </div>
  );
}

// Modal View Foto High-Res
function MemberModal({ member, onClose }: { member: MemberData | null; onClose: () => void }) {
  if (!member) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center pt-16 sm:pt-24 pb-6 px-3 sm:px-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white/95 border border-amber-300 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center overflow-y-auto flex flex-col items-center max-h-[calc(100vh-5rem)] sm:max-h-[82vh] my-auto shadow-2xl backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-700 border border-slate-200 cursor-pointer transition-colors"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-[10px] sm:text-xs font-orbitron font-bold tracking-wider mb-3 mt-1 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" /> MEMBER PREVIEW
        </div>

        <div className="relative w-full max-w-[200px] sm:max-w-[260px] h-[180px] sm:h-[260px] mx-auto rounded-2xl overflow-hidden border-2 border-amber-400 bg-slate-50 mb-3 sm:mb-4 shrink-0 flex items-center justify-center shadow-md">
          <img 
            src={member.image} 
            alt={member.name} 
            loading="eager"
            decoding="async"
            className="w-full h-full object-contain object-center"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        <h3 className="text-base sm:text-xl font-orbitron font-black text-slate-900 mb-1 leading-snug px-2">
          {member.name}
        </h3>
        <p className="text-[11px] sm:text-xs font-orbitron font-bold text-amber-700 tracking-wider mb-1 px-2">
          {member.role}
        </p>
        <p className="text-[11px] sm:text-xs font-sans text-slate-600 mb-3 sm:mb-4 px-2">
          {member.major}
        </p>

        <div className="w-full bg-slate-50/90 border border-slate-200 rounded-xl p-3 sm:p-4 text-left space-y-2 mb-4 sm:mb-5">
          <div className="flex justify-between items-center text-xs font-sans text-slate-600">
            <span>Status Keanggotaan:</span>
            <span className="text-emerald-700 font-orbitron font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[9px] sm:text-[10px]">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" /> ACTIVE MEMBER
            </span>
          </div>
          <div className="flex justify-between items-center text-xs font-sans text-slate-600 border-t border-slate-200 pt-2">
            <span>Divisi Tim:</span>
            <span className="text-slate-900 font-medium truncate ml-2">{member.division || 'Kukang EV ITERA'}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-2.5 w-full">
          <a
            href={member.image}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 py-2.5 sm:py-3 rounded-xl bg-slate-100 text-slate-700 border border-slate-300 font-orbitron font-bold text-xs flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-200 transition-colors shadow-sm"
          >
            <ExternalLink className="w-4 h-4 text-amber-600" /> UKURAN ASLI
          </a>
          <button
            onClick={onClose}
            type="button"
            className="w-full sm:flex-1 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-orbitron font-bold text-xs cursor-pointer hover:opacity-95 transition-opacity shadow-md"
          >
            TUTUP PREVIEW
          </button>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// MAIN PAGE COMPONENT
// ==========================================
export default function StructurePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'ALL' | 'LEADERSHIP' | 'TECHNICAL' | 'NON_TECHNICAL'>('ALL');
  const [selectedMember, setSelectedMember] = useState<MemberData | null>(null);
  const [collapsedDivisions, setCollapsedDivisions] = useState<Record<string, boolean>>({});

  const toggleDivision = (divName: string) => {
    setCollapsedDivisions((prev) => ({ ...prev, [divName]: !prev[divName] }));
  };

  const totalCount = useMemo(() => {
    let count = 2 + TOP_MANAGERS_DATA.length;
    TECHNICAL_DIVISIONS.forEach((d) => { count += 1 + d.members.length; });
    NON_TECHNICAL_DIVISIONS.forEach((d) => { count += 1 + d.members.length; });
    return count;
  }, []);

  const technicalCount = useMemo(() => {
    let count = 1;
    TECHNICAL_DIVISIONS.forEach((d) => { count += 1 + d.members.length; });
    return count;
  }, []);

  const nonTechnicalCount = useMemo(() => {
    let count = 1;
    NON_TECHNICAL_DIVISIONS.forEach((d) => { count += 1 + d.members.length; });
    return count;
  }, []);

  const matchesSearch = (item: { name: string; role: string; major: string }) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(term) ||
      item.role.toLowerCase().includes(term) ||
      item.major.toLowerCase().includes(term)
    );
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 font-sans overflow-x-hidden selection:bg-amber-200">
      
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[350px] sm:w-[800px] h-[350px] sm:h-[800px] bg-gradient-to-tr from-amber-200/40 via-orange-100/30 to-red-100/20 rounded-full blur-3xl opacity-70" />
        
        <img
          src="/images/logo-kukang.png"
          alt="Kukang EV Watermark"
          className="w-[280px] sm:w-[580px] md:w-[750px] max-w-none opacity-[0.06] select-none object-contain transform -rotate-12 transition-all duration-700"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      <Navbar />

      <main className="relative z-10 pt-20 sm:pt-28 pb-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />

        {/* ================= HERO HEADER ================= */}
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-8">
          <h1 className="text-xl sm:text-4xl md:text-5xl font-black font-orbitron tracking-tight text-slate-900 leading-tight">
            STRUKTUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-red-600">ORGANISASI</span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto font-sans px-2 leading-relaxed">
            Sinergi <span className="font-bold text-slate-800">{totalCount} Anggota</span> & Mahasiswa lintas disiplin Institut Teknologi Sumatera dalam riset mobil listrik masa depan.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 w-full max-w-2xl pt-2">
            {[
              { label: 'Total Anggota', count: totalCount, icon: Users, color: 'text-amber-600' },
              { label: 'Divisi Teknis', count: technicalCount, icon: Cpu, color: 'text-orange-600' },
              { label: 'Non-Teknis', count: nonTechnicalCount, icon: Settings, color: 'text-red-600' },
              { label: 'Dosen Pembina', count: 1, icon: Award, color: 'text-amber-700' },
            ].map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <div key={idx} className="bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-xl p-2 sm:p-3 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center gap-1 text-[9px] sm:text-xs text-slate-500 font-sans mb-0.5">
                    <StatIcon className={`w-3.5 h-3.5 ${stat.color} shrink-0`} />
                    <span className="truncate">{stat.label}</span>
                  </div>
                  <div className="text-sm sm:text-xl font-orbitron font-extrabold text-slate-900">{stat.count}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= INTERACTIVE CONTROL BAR ================= */}
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-2.5 sm:p-4 mb-8 sm:mb-10 shadow-lg shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 sticky top-16 sm:top-20 z-30">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 w-full md:w-auto">
            {[
              { id: 'ALL', label: 'Semua' },
              { id: 'LEADERSHIP', label: 'Pimpinan' },
              { id: 'TECHNICAL', label: 'Teknis' },
              { id: 'NON_TECHNICAL', label: 'Non-Teknis' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[10px] sm:text-xs font-orbitron font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/20'
                    : 'bg-slate-100/80 text-slate-600 border border-slate-200 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama, divisi, prodi..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-9 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500/80 focus:bg-white font-sans transition-colors"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* ================= PIMPINAN UTAMA ================= */}
        {(activeTab === 'ALL' || activeTab === 'LEADERSHIP') && (
          <div className="space-y-6 sm:space-y-12 mb-12 sm:mb-16">
            {matchesSearch(PEMBINA_DATA) && (
              <div className="flex flex-col items-center">
                <div className="w-full max-w-xs px-1 sm:px-0">
                  <MemberCard {...PEMBINA_DATA} onClick={() => setSelectedMember(PEMBINA_DATA)} />
                </div>
                <div className="w-0.5 h-5 sm:h-8 bg-gradient-to-b from-amber-400 to-slate-300 mt-2.5 sm:mt-3" />
              </div>
            )}

            {matchesSearch(GENERAL_MANAGER_DATA) && (
              <div className="flex flex-col items-center">
                <div className="w-full max-w-xs px-1 sm:px-0">
                  <MemberCard {...GENERAL_MANAGER_DATA} highlight={true} onClick={() => setSelectedMember(GENERAL_MANAGER_DATA)} />
                </div>
                <div className="w-0.5 h-5 sm:h-8 bg-gradient-to-b from-amber-400 to-slate-300 mt-2.5 sm:mt-3" />
              </div>
            )}

            <div className="space-y-3 sm:space-y-4">
              <div className="text-center">
                <span className="text-[10px] sm:text-[11px] font-orbitron font-bold text-slate-400 tracking-widest uppercase border-b border-slate-200 pb-1">
                  EXECUTIVE MANAGERS
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 max-w-3xl mx-auto pt-1 sm:pt-2">
                {TOP_MANAGERS_DATA.filter(matchesSearch).map((m, idx) => (
                  <MemberCard key={idx} {...m} onClick={() => setSelectedMember(m)} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= DIVISI TEKNIS ================= */}
        {(activeTab === 'ALL' || activeTab === 'TECHNICAL') && (
          <div className="mt-8 sm:mt-12 space-y-6 sm:space-y-12">
            <div className="flex items-center gap-2 justify-center border-b border-slate-200 pb-3">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0" />
              <h2 className="text-sm sm:text-xl font-black font-orbitron text-slate-900 tracking-wider text-center leading-tight">
                DIVISI TEKNIS (TECHNICAL DIVISION)
              </h2>
            </div>

            {TECHNICAL_DIVISIONS.map((div, idx) => {
              const DivIcon = div.icon;
              const filteredMembers = div.members.filter(matchesSearch);
              const isHeadMatch = matchesSearch(div.head);

              if (!isHeadMatch && filteredMembers.length === 0 && searchTerm) return null;

              const isCollapsed = collapsedDivisions[div.subDivisionName];

              return (
                <div key={idx} className="bg-white/80 backdrop-blur-xl border border-slate-200/90 rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 space-y-4 sm:space-y-5 shadow-lg shadow-slate-200/40 w-full min-w-0 overflow-hidden">
                  
                  {/* Header Divisi: Rapi & Akses Mulus di Mobile / Desktop */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-200/80 pb-3 gap-2.5 w-full min-w-0">
                    <div className="flex items-start sm:items-center gap-2 text-slate-900 font-orbitron font-bold text-xs sm:text-base min-w-0 w-full sm:w-auto">
                      <div className="p-1.5 rounded-lg bg-amber-100 text-amber-700 shrink-0 mt-0.5 sm:mt-0">
                        <DivIcon className="w-4 h-4" />
                      </div>
                      <span className="whitespace-normal break-words [overflow-wrap:anywhere] leading-snug flex-1 min-w-0">
                        {div.subDivisionName}
                      </span>
                    </div>

                    <div className="flex justify-end w-full sm:w-auto shrink-0 pt-1 sm:pt-0">
                      <button
                        type="button"
                        onClick={() => toggleDivision(div.subDivisionName)}
                        className="text-[10px] sm:text-xs font-orbitron font-bold text-slate-700 hover:text-amber-700 flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-amber-50 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-amber-300 transition-all cursor-pointer shadow-xs"
                      >
                        {isCollapsed ? (
                          <>TAMPILKAN <ChevronDown className="w-3.5 h-3.5 text-amber-600" /></>
                        ) : (
                          <>SEMBUNYIKAN <ChevronUp className="w-3.5 h-3.5 text-amber-600" /></>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 items-start">
                    <div className="lg:col-span-1 max-w-xs mx-auto lg:max-w-none w-full">
                      <p className="text-[10px] font-orbitron font-bold text-slate-400 mb-2 uppercase tracking-wider text-center lg:text-left">
                        SUB-DIV HEAD
                      </p>
                      <MemberCard {...div.head} icon={DivIcon} onClick={() => setSelectedMember(div.head)} />
                    </div>

                    {!isCollapsed && (
                      <div className="lg:col-span-3 space-y-2">
                        <p className="text-[10px] font-orbitron font-bold text-slate-400 mb-2 uppercase tracking-wider flex items-center gap-1.5 justify-center lg:justify-start">
                          <Users className="w-3 h-3 text-amber-600 shrink-0" /> STAFF MEMBERS ({filteredMembers.length})
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3.5">
                          {filteredMembers.map((staff, sIdx) => (
                            <MemberCard key={sIdx} {...staff} isStaff={true} onClick={() => setSelectedMember(staff)} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ================= DIVISI NON-TEKNIS ================= */}
        {(activeTab === 'ALL' || activeTab === 'NON_TECHNICAL') && (
          <div className="mt-10 sm:mt-14 space-y-6 sm:space-y-12">
            <div className="flex items-center gap-2 justify-center border-b border-slate-200 pb-3">
              <Settings className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 shrink-0" />
              <h2 className="text-sm sm:text-xl font-black font-orbitron text-slate-900 tracking-wider text-center leading-tight">
                DIVISI NON-TEKNIS (NON-TECHNICAL DIVISION)
              </h2>
            </div>

            {NON_TECHNICAL_DIVISIONS.map((div, idx) => {
              const DivIcon = div.icon;
              const filteredMembers = div.members.filter(matchesSearch);
              const isHeadMatch = matchesSearch(div.head);

              if (!isHeadMatch && filteredMembers.length === 0 && searchTerm) return null;

              const isCollapsed = collapsedDivisions[div.subDivisionName];

              return (
                <div key={idx} className="bg-white/80 backdrop-blur-xl border border-slate-200/90 rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 space-y-4 sm:space-y-5 shadow-lg shadow-slate-200/40 w-full min-w-0 overflow-hidden">
                  
                  {/* Header Divisi: Rapi & Akses Mulus di Mobile / Desktop */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-200/80 pb-3 gap-2.5 w-full min-w-0">
                    <div className="flex items-start sm:items-center gap-2 text-slate-900 font-orbitron font-bold text-xs sm:text-base min-w-0 w-full sm:w-auto">
                      <div className="p-1.5 rounded-lg bg-orange-100 text-orange-700 shrink-0 mt-0.5 sm:mt-0">
                        <DivIcon className="w-4 h-4" />
                      </div>
                      <span className="whitespace-normal break-words [overflow-wrap:anywhere] leading-snug flex-1 min-w-0">
                        {div.subDivisionName}
                      </span>
                    </div>

                    <div className="flex justify-end w-full sm:w-auto shrink-0 pt-1 sm:pt-0">
                      <button
                        type="button"
                        onClick={() => toggleDivision(div.subDivisionName)}
                        className="text-[10px] sm:text-xs font-orbitron font-bold text-slate-700 hover:text-amber-700 flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-amber-50 px-3 py-1.5 rounded-xl border border-slate-200 hover:border-amber-300 transition-all cursor-pointer shadow-xs"
                      >
                        {isCollapsed ? (
                          <>TAMPILKAN <ChevronDown className="w-3.5 h-3.5 text-amber-600" /></>
                        ) : (
                          <>SEMBUNYIKAN <ChevronUp className="w-3.5 h-3.5 text-amber-600" /></>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 items-start">
                    <div className="lg:col-span-1 max-w-xs mx-auto lg:max-w-none w-full">
                      <p className="text-[10px] font-orbitron font-bold text-slate-400 mb-2 uppercase tracking-wider text-center lg:text-left">
                        SUB-DIV HEAD
                      </p>
                      <MemberCard {...div.head} icon={DivIcon} onClick={() => setSelectedMember(div.head)} />
                    </div>

                    {!isCollapsed && (
                      <div className="lg:col-span-3 space-y-2">
                        <p className="text-[10px] font-orbitron font-bold text-slate-400 mb-2 uppercase tracking-wider flex items-center gap-1.5 justify-center lg:justify-start">
                          <Users className="w-3 h-3 text-amber-600 shrink-0" /> STAFF MEMBERS ({filteredMembers.length})
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3.5">
                          {filteredMembers.map((staff, sIdx) => (
                            <MemberCard key={sIdx} {...staff} isStaff={true} onClick={() => setSelectedMember(staff)} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ================= CALL TO ACTION FOOTER BANNER ================= */}
        <div className="mt-12 sm:mt-16 text-center bg-gradient-to-b from-white/90 to-amber-50/80 border border-amber-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-10 max-w-3xl mx-auto shadow-xl shadow-amber-500/5 backdrop-blur-xl">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-3">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <h3 className="font-orbitron font-bold text-slate-900 text-sm sm:text-xl mb-2">Ingin Bergabung Dengan Tim Kukang EV?</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-5 sm:mb-6 leading-relaxed">
            Pendaftaran divisi Teknikal dan Non-Teknikal dibuka pada setiap periode Open Recruitment Kukang EV ITERA.
          </p>
          <Link
            href="/informasi/rekrutmen"
            className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-orbitron font-bold text-[11px] sm:text-xs shadow-lg shadow-amber-500/25 hover:opacity-95 hover:scale-105 transition-all cursor-pointer"
          >
            LIHAT INFO REKRUTMEN <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <footer className="relative z-10 border-t border-slate-200 py-6 text-center text-[10px] sm:text-xs text-slate-500 font-sans bg-white/80 backdrop-blur-md">
        © {new Date().getFullYear()} Kukang EV Team - ITERA. All rights reserved.
      </footer>
    </div>
  );
}