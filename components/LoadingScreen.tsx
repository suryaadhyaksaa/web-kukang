'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Cek apakah browser pernah menyimpan data kunjungan
    const hasVisited = localStorage.getItem('kukang_ev_has_visited');

    // HANYA jika BENAR-BENAR belum pernah berkunjung, aktifkan loading
    if (!hasVisited) {
      setIsLoading(true);

      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('kukang_ev_has_visited', 'true');
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  // Jika sudah pernah berkunjung, jangan tampilkan apa pun
  if (!isLoading) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B1120] text-white overflow-hidden select-none"
      >
        {/* Background Ambient Glow */}
        <div className="absolute w-72 h-72 bg-amber-400/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
        <div className="absolute w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Logo & Icon Animated Container */}
        <div className="relative flex flex-col items-center z-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
            className="w-24 h-24 rounded-full border-2 border-dashed border-amber-400/40 border-t-amber-400 flex items-center justify-center p-2 mb-6"
          />

          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute top-4 w-16 h-16 rounded-full bg-[#151D30] border-2 border-amber-400 flex items-center justify-center shadow-[0_0_25px_rgba(251,191,36,0.5)]"
          >
            <Zap className="w-8 h-8 text-amber-400 animate-bounce" />
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl sm:text-3xl font-black tracking-widest text-white font-orbitron text-center"
          >
            KUKANG <span className="text-amber-400">EV</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.5 }}
            className="text-xs text-blue-200/70 tracking-widest font-mono mt-1 uppercase"
          >
            ITERA STUDENT TEAM
          </motion.p>

          <div className="w-48 h-1.5 bg-[#151D30] rounded-full overflow-hidden mt-6 border border-blue-500/20">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-red-600 via-amber-400 to-amber-300 rounded-full"
            />
          </div>

          <motion.span
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-[10px] font-mono text-amber-400/80 mt-3 tracking-wider uppercase"
          >
            INITIALIZING SYSTEM...
          </motion.span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}