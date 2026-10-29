'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, Search, ChevronDown, Menu, X, 
  Shield, Cpu, Sparkles, Trophy, Building2, HelpCircle, FileText, Users, Crosshair, ChevronRight, Handshake
} from 'lucide-react';

const NAV_MENU_ITEMS = [
  {
    title: 'Beranda',
    href: '/',
  },
  {
    title: 'Tentang',
    href: '/tentang/sejarah-visi-misi',
    dropdown: [
      { label: 'Sejarah & Visi Misi', href: '/tentang/sejarah-visi-misi', icon: Shield, badge: 'Utama' },
      { label: 'Fokus Riset', href: '/tentang/fokus-riset', icon: Crosshair },
      { label: 'Struktur & Tim', href: '/tentang/struktur-tim', icon: Users },
    ]
  },
  {
    title: 'Divisi',
    href: '/divisi/technical',
    dropdown: [
      { label: 'Technical Squad', href: '/divisi/technical', icon: Cpu, badge: 'Core' },
      { label: 'Non-Technical Squad', href: '/divisi/non-technical', icon: Sparkles },
    ]
  },
  {
    title: 'Riset & Inovasi',
    href: '/riset/prestasi',
    dropdown: [
      { label: 'Prestasi & Galeri', href: '/riset/prestasi', icon: Trophy, badge: 'Galeri' },
      { label: 'Mitra & Sponsor', href: '/riset/sponsor', icon: Building2 },
    ]
  },
  {
    title: 'Informasi',
    href: '/informasi/faq',
    dropdown: [
      { label: 'FAQ Pendaftaran', href: '/informasi/faq', icon: HelpCircle },
      { label: 'Form Rekrutmen', href: '/informasi/rekrutmen', icon: FileText, badge: 'Open' },
    ]
  }
];

export default function Navbar() {
  const [logoError, setLogoError] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [activeHoverDropdown, setActiveHoverDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120]/90 backdrop-blur-xl border-b border-amber-400/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO KUKANG EV */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-11 h-11 rounded-full bg-[#151D30] border border-amber-400/50 p-1 shrink-0 flex items-center justify-center group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-all">
            {!logoError ? (
              <img 
                src="/logo-kukang.png" 
                alt="KUKANG EV Logo" 
                className="w-full h-full object-contain rounded-full"
                onError={() => setLogoError(true)}
              />
            ) : (
              <Zap className="w-6 h-6 text-amber-400" />
            )}
          </div>
          <div>
            <span className="text-xl font-black text-white block leading-none font-orbitron group-hover:text-amber-400 transition-colors tracking-wider">
              KUKANG <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">EV</span>
            </span>
            <span className="text-[9px] text-amber-400/80 font-bold uppercase tracking-widest block mt-0.5 font-orbitron">
              Institute of Technology Sumatera
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV MENU */}
        <nav className="hidden lg:flex items-center space-x-1 font-semibold text-xs uppercase tracking-wider font-orbitron">
          {NAV_MENU_ITEMS.map((item, index) => {
            const hasDropdown = item.dropdown && item.dropdown.length > 0;
            const isOpen = activeHoverDropdown === item.title;

            return (
              <div 
                key={index}
                className="relative group py-6"
                onMouseEnter={() => setActiveHoverDropdown(item.title)}
                onMouseLeave={() => setActiveHoverDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all ${
                    isOpen 
                      ? 'text-amber-400 bg-amber-400/10 border border-amber-400/30' 
                      : 'text-gray-200 hover:text-amber-400 hover:bg-white/5'
                  }`}
                >
                  <span>{item.title}</span>
                  {hasDropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-400' : 'text-gray-400'}`} />
                  )}
                </Link>

                {/* DROPDOWN MENU */}
                {hasDropdown && (
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="absolute top-full left-0 w-64 bg-[#10192D]/95 backdrop-blur-2xl text-gray-100 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-amber-400/30 overflow-hidden p-2 z-50"
                      >
                        <div className="text-[9px] font-bold text-amber-400/80 uppercase tracking-widest px-3 py-2 border-b border-white/10 font-orbitron flex items-center justify-between">
                          <span>{item.title} Menu</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        </div>

                        <div className="py-1 space-y-0.5">
                          {item.dropdown?.map((sub, sIdx) => {
                            const SubIcon = sub.icon;
                            return (
                              <Link
                                key={sIdx}
                                href={sub.href}
                                onClick={() => setActiveHoverDropdown(null)}
                                className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-red-500/20 hover:border hover:border-amber-400/40 transition-all group/item"
                              >
                                <div className="flex items-center gap-2.5">
                                  <SubIcon className="w-4 h-4 text-amber-400 group-hover/item:scale-110 group-hover/item:text-red-400 transition-all" />
                                  <span className="normal-case font-sans text-xs group-hover/item:font-bold">{sub.label}</span>
                                </div>
                                {sub.badge && (
                                  <span className="text-[8px] font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/30 font-orbitron">
                                    {sub.badge}
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>

        {/* CTA BUTTONS */}
        <div className="hidden lg:flex items-center space-x-2.5">
          {/* Tombol Sponsorship / Hubungi Kami */}
          <Link 
            href="/riset/sponsor" 
            className="px-4 py-2.5 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 border border-amber-400/40 text-xs font-bold font-orbitron tracking-wider hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:scale-105 transition-all flex items-center gap-2"
          >
            <Handshake className="w-4 h-4" /> SPONSORSHIP
          </Link>

          {/* Tombol Gabung Tim */}
          <Link 
            href="/informasi/rekrutmen" 
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-amber-400 text-white text-xs font-bold font-orbitron tracking-wider hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:scale-105 transition-all flex items-center gap-1.5 border border-amber-300/30"
          >
            GABUNG TIM <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2.5 rounded-xl bg-[#10192D] border border-amber-400/30 text-amber-400 lg:hidden hover:bg-amber-400/10 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B1120]/98 border-b border-amber-400/20 px-6 py-6 space-y-3 font-orbitron backdrop-blur-2xl"
          >
            {NAV_MENU_ITEMS.map((item, idx) => {
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              const isMobileOpen = activeMobileDropdown === item.title;

              if (!hasDropdown) {
                return (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-amber-400 font-bold text-sm py-2.5 border-b border-white/5 uppercase"
                  >
                    {item.title}
                  </Link>
                );
              }

              return (
                <div key={idx} className="border-b border-white/5 pb-2">
                  <button
                    onClick={() => setActiveMobileDropdown(isMobileOpen ? null : item.title)}
                    className="w-full flex items-center justify-between text-left text-gray-200 font-bold text-sm py-2.5 uppercase"
                  >
                    <span>{item.title}</span>
                    <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform duration-200 ${isMobileOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isMobileOpen && (
                    <div className="mt-1 pl-4 space-y-2 text-xs border-l-2 border-amber-400/50 my-2 font-sans">
                      {item.dropdown?.map((sub, sIdx) => {
                        const SubIcon = sub.icon;
                        return (
                          <Link
                            key={sIdx}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between py-2 text-gray-300 hover:text-amber-400 font-medium"
                          >
                            <div className="flex items-center gap-2">
                              <SubIcon className="w-4 h-4 text-amber-400" />
                              <span>{sub.label}</span>
                            </div>
                            {sub.badge && (
                              <span className="text-[8px] font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/30 font-orbitron">
                                {sub.badge}
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {/* MOBILE CTA BUTTONS */}
            <div className="pt-4 space-y-2.5">
              <Link
                href="/riset/sponsor"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-amber-400/10 border border-amber-400/40 text-amber-400 text-xs font-bold font-orbitron text-center flex items-center justify-center gap-2 uppercase shadow-md"
              >
                <Handshake className="w-4 h-4" /> Sponsorship / Hubungi Kami
              </Link>

              <Link
                href="/informasi/rekrutmen"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 text-white text-xs font-bold font-orbitron text-center block shadow-lg uppercase"
              >
                Gabung Tim
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}