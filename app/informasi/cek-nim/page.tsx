'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Search } from 'lucide-react';

export default function CekNimPage() {
  const [nim, setNim] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nim) return;
    setResult(`Status NIM ${nim}: Berkas sedang dalam tahap verifikasi tim HR.`);
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-gray-100 font-sans pt-28 pb-20">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest font-orbitron">TRACKER</span>
          <h1 className="text-3xl sm:text-5xl font-black font-orbitron text-white">
            CEK STATUS <span className="text-red-500">NIM</span>
          </h1>
        </div>

        <form onSubmit={handleSearch} className="bg-[#10192D] border border-amber-400/20 p-8 rounded-2xl space-y-4">
          <label className="block text-xs font-bold font-orbitron text-amber-400">MASUKKAN NIM MAHASISWA</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              placeholder="Contoh: 121130001"
              className="flex-1 bg-[#0B1120] border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
            />
            <button type="submit" className="px-6 py-3 bg-amber-400 text-black font-bold font-orbitron rounded-xl text-xs flex items-center gap-2">
              <Search className="w-4 h-4" /> CEK
            </button>
          </div>

          {result && (
            <div className="mt-4 p-4 bg-amber-400/10 border border-amber-400/30 rounded-xl text-amber-400 text-xs font-mono">
              {result}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}