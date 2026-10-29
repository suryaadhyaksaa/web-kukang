'use client';

import React, { useState } from 'react';
import { ArrowUp, Zap } from 'lucide-react';

export default function FloatingLogo() {
  const [imageError, setImageError] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 left-5 z-50 flex items-center gap-2 group">
      <button
        type="button"
        onClick={scrollToTop}
        title="Kembali ke atas"
        className="relative w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-md border border-amber-400/40 shadow-lg hover:border-amber-500 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center p-2.5 cursor-pointer"
      >
        {!imageError ? (
          <img
            src="/icon.png"
            alt="Kukang EV"
            className="w-full h-full object-contain filter drop-shadow-xs"
            onError={() => setImageError(true)}
          />
        ) : (
          <Zap className="w-6 h-6 text-amber-500 fill-amber-500" />
        )}

        <div className="absolute inset-0 bg-amber-500 rounded-2xl opacity-0 group-hover:opacity-90 transition-opacity duration-200 flex items-center justify-center text-white">
          <ArrowUp className="w-5 h-5 font-bold" />
        </div>
      </button>

      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-900 text-white text-[11px] font-sora font-bold px-3 py-1.5 rounded-xl shadow-md pointer-events-none whitespace-nowrap">
        Kukang EV • Back to Top
      </span>
    </div>
  );
}