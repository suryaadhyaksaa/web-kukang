'use client';

import React, { useState, useEffect } from 'react';
import {
  Zap,
  Gauge,
  Battery,
  Wind,
  Navigation,
  Play,
  RotateCcw,
  SlidersHorizontal,
  Activity,
  Award,
  Clock
} from 'lucide-react';

export default function SimulatorEV() {
  // --- INPUT STATES ---
  const [speed, setSpeed] = useState<number>(45); // km/jam
  const [batteryCapacity, setBatteryCapacity] = useState<number>(2.0); // kWh
  const [weight, setWeight] = useState<number>(110); // kg (Mobil + Driver)
  const [driveMode, setDriveMode] = useState<'eco' | 'balanced' | 'race'>('eco');
  const [trackCondition, setTrackCondition] = useState<'flat' | 'hilly' | 'windy'>('flat');

  // --- INTERACTIVE RACE SIMULATION STATES ---
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simBattery, setSimBattery] = useState<number>(100); // % SOC
  const [simDistance, setSimDistance] = useState<number>(0); // km
  const [simTime, setSimTime] = useState<number>(0); // Detik simulasi

  // --- KALKULASI MATEMATIS FISIKA EV ---
  const modeMultiplier = driveMode === 'eco' ? 0.82 : driveMode === 'balanced' ? 1.0 : 1.35;
  const trackMultiplier = trackCondition === 'flat' ? 1.0 : trackCondition === 'hilly' ? 1.3 : 1.15;

  // Beban Daya (Rolling Resistance + Aerodynamic Drag)
  const rollingPower = weight * 0.08 * (speed / 3.6); // Watt
  const aeroPower = 0.5 * 1.2 * 0.18 * 0.8 * Math.pow(speed / 3.6, 3); // Watt (Cd Kukang EV = 0.18)
  const totalPowerWatts = Math.max((rollingPower + aeroPower) * modeMultiplier * trackMultiplier, 50);

  // Konsumsi Energi (Wh/km) = Power (W) / Speed (km/h)
  const energyConsumptionWhKm = totalPowerWatts / speed;

  // Estimasi Jarak Tempuh Maksimum (km)
  const estimatedRange = Math.round(((batteryCapacity * 1000) / energyConsumptionWhKm) * 10) / 10;

  // Durasi Baterai (Menit)
  const durationMinutes = Math.round((estimatedRange / speed) * 60);

  // Skor Efisiensi Kendaraan (%)
  const efficiencyScore = Math.min(
    100,
    Math.max(10, Math.round(100 - (energyConsumptionWhKm - 15) * 2.5))
  );

  // --- TIMER EFEK DRAIN BATERAI REAL-TIME SIMULASI ---
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSimulating) {
      interval = setInterval(() => {
        setSimTime((prev) => prev + 1);
        setSimDistance((prev) => +(prev + (speed / 3600) * 5).toFixed(2));

        setSimBattery((prev) => {
          const drainRate = (energyConsumptionWhKm * ((speed / 3600) * 5)) / (batteryCapacity * 10);
          const nextVal = prev - drainRate;
          if (nextVal <= 0) {
            setIsSimulating(false);
            return 0;
          }
          return +nextVal.toFixed(1);
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isSimulating, speed, energyConsumptionWhKm, batteryCapacity]);

  // Reset Simulasi Uji Lintasan
  const handleResetSimulation = () => {
    setIsSimulating(false);
    setSimBattery(100);
    setSimDistance(0);
    setSimTime(0);
  };

  return (
    <div className="w-full text-gray-100 font-orbitron">
      {/* CONTAINER UTAMA WITH GLASSMORPHISM */}
      <div className="bg-slate-950/80 border border-amber-400/30 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(245,158,11,0.08)] relative overflow-hidden">
        
        {/* Glow Ambient Corner Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* HEADER CONTROLS */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-orbitron tracking-widest uppercase">
              <SlidersHorizontal className="w-4 h-4" /> INTERACTIVE TELEMETRY PARAMETERS
            </div>
            <h3 className="text-2xl font-black font-orbitron text-white mt-1 tracking-wider">
              SIMULATOR LAP & KONSUMSI DAYA
            </h3>
          </div>

          {/* Drive Mode Selector */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-900 border border-white/10 rounded-2xl">
            {(['eco', 'balanced', 'race'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setDriveMode(mode)}
                className={`px-4 py-2 rounded-xl text-xs font-orbitron font-bold uppercase transition-all duration-300 ${
                  driveMode === mode
                    ? mode === 'race'
                      ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                      : mode === 'eco'
                      ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/30'
                      : 'bg-amber-500 text-black shadow-lg shadow-amber-500/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {mode === 'eco' ? '⚡ Eco Efficiency' : mode === 'balanced' ? '⚖️ Balanced' : '🔥 Race Mode'}
              </button>
            ))}
          </div>
        </div>

        {/* MAIN GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          
          {/* SISI KIRI: SLIDER PARAMETER (5 COLS) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Slider 1: Kecepatan Rata-rata */}
            <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 hover:border-amber-400/40 transition-colors">
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-orbitron font-bold text-gray-300 flex items-center gap-2 tracking-wide">
                  <Gauge className="w-4 h-4 text-amber-400" /> KECEPATAN TARGET
                </label>
                <span className="text-base font-black font-orbitron text-amber-400 bg-amber-400/10 px-3 py-1 rounded-lg border border-amber-400/20">
                  {speed} <span className="text-xs text-gray-400 font-orbitron">KM/H</span>
                </span>
              </div>
              <input
                type="range"
                min={20}
                max={80}
                step={1}
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-orbitron text-gray-500 mt-2">
                <span>20 KM/H (KMHE LIMIT)</span>
                <span>80 KM/H (TRACK LIMIT)</span>
              </div>
            </div>

            {/* Slider 2: Kapasitas Baterai */}
            <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 hover:border-amber-400/40 transition-colors">
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-orbitron font-bold text-gray-300 flex items-center gap-2 tracking-wide">
                  <Battery className="w-4 h-4 text-amber-400" /> KAPASITAS BATERAI
                </label>
                <span className="text-base font-black font-orbitron text-amber-400 bg-amber-400/10 px-3 py-1 rounded-lg border border-amber-400/20">
                  {batteryCapacity} <span className="text-xs text-gray-400 font-orbitron">KWH</span>
                </span>
              </div>
              <input
                type="range"
                min={0.5}
                max={5.0}
                step={0.1}
                value={batteryCapacity}
                onChange={(e) => setBatteryCapacity(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-orbitron text-gray-500 mt-2">
                <span>0.5 KWH (LIGHT)</span>
                <span>5.0 KWH (LONG RANGE)</span>
              </div>
            </div>

            {/* Slider 3: Bobot Total Kendaraan */}
            <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5 hover:border-amber-400/40 transition-colors">
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-orbitron font-bold text-gray-300 flex items-center gap-2 tracking-wide">
                  <Activity className="w-4 h-4 text-amber-400" /> BOBOT TOTAL (CAR + DRIVER)
                </label>
                <span className="text-base font-black font-orbitron text-amber-400 bg-amber-400/10 px-3 py-1 rounded-lg border border-amber-400/20">
                  {weight} <span className="text-xs text-gray-400 font-orbitron">KG</span>
                </span>
              </div>
              <input
                type="range"
                min={80}
                max={160}
                step={5}
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-amber-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-orbitron text-gray-500 mt-2">
                <span>80 KG (CARBON MONOCOQUE)</span>
                <span>160 KG (STANDARD FRAME)</span>
              </div>
            </div>

            {/* Selector Kondisi Lintasan */}
            <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-5">
              <label className="text-xs font-orbitron font-bold text-gray-300 flex items-center gap-2 mb-3 tracking-wide">
                <Wind className="w-4 h-4 text-amber-400" /> KONDISI LINTASAN / TRACK
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'flat', label: 'FLAT TRACK', icon: '🛣️' },
                  { key: 'windy', label: 'CROSSWIND', icon: '💨' },
                  { key: 'hilly', label: 'INCLINE SLOPE', icon: '⛰️' },
                ].map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setTrackCondition(t.key as any)}
                    className={`py-2.5 px-2 rounded-xl text-[10px] font-orbitron font-bold border text-center transition-all ${
                      trackCondition === t.key
                        ? 'bg-amber-400/20 border-amber-400 text-amber-300 shadow-md shadow-amber-400/10'
                        : 'bg-slate-950/60 border-white/10 text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="text-sm mb-0.5">{t.icon}</div>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* SISI KANAN: STATISTIK TELEMETRI & LIVE RUNNER (7 COLS) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Display Stat Hasil Kalkulasi */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              
              {/* Estimasi Jarak */}
              <div className="bg-gradient-to-br from-amber-500/10 to-slate-900 border border-amber-400/40 rounded-2xl p-5 text-center relative overflow-hidden">
                <Navigation className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                <span className="text-[10px] font-orbitron font-bold text-gray-400 uppercase tracking-widest block">
                  ESTIMASI JARAK
                </span>
                <p className="text-3xl font-black font-orbitron text-amber-400 my-1">
                  {estimatedRange} <span className="text-sm text-gray-300 font-orbitron">KM</span>
                </p>
                <span className="text-[10px] font-orbitron text-amber-300/80">
                  ~{durationMinutes} MENIT OPERASIONAL
                </span>
              </div>

              {/* Konsumsi Daya */}
              <div className="bg-slate-900/90 border border-white/10 rounded-2xl p-5 text-center relative overflow-hidden">
                <Zap className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                <span className="text-[10px] font-orbitron font-bold text-gray-400 uppercase tracking-widest block">
                  KONSUMSI DAYA
                </span>
                <p className="text-3xl font-black font-orbitron text-white my-1">
                  {Math.round(energyConsumptionWhKm)} <span className="text-sm text-gray-400 font-orbitron">WH/KM</span>
                </p>
                <span className="text-[10px] font-orbitron text-gray-500">
                  POWER: {Math.round(totalPowerWatts)} WATT
                </span>
              </div>

              {/* Skor Efisiensi */}
              <div className="col-span-2 md:col-span-1 bg-slate-900/90 border border-white/10 rounded-2xl p-5 text-center relative overflow-hidden">
                <Award className="w-5 h-5 text-amber-400 mx-auto mb-2" />
                <span className="text-[10px] font-orbitron font-bold text-gray-400 uppercase tracking-widest block">
                  SKOR EFISIENSI
                </span>
                <p className="text-3xl font-black font-orbitron text-emerald-400 my-1">
                  {efficiencyScore}%
                </p>
                <span className="text-[10px] font-orbitron text-emerald-300/80 uppercase">
                  {efficiencyScore > 80 ? 'GRADE A+ (OPTIMUM)' : efficiencyScore > 60 ? 'GRADE B (STANDARD)' : 'HIGH POWER DRAW'}
                </span>
              </div>

            </div>

            {/* LIVE SIMULATION TEST DRIVE RUNNER */}
            <div className="bg-slate-900 border border-amber-400/30 rounded-2xl p-6 relative overflow-hidden shadow-2xl flex-1 flex flex-col justify-between space-y-6">
              
              {/* Header Telemetri Uji Coba */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${isSimulating ? 'bg-emerald-400 animate-ping' : 'bg-gray-500'}`} />
                  <span className="text-xs font-orbitron font-bold text-white tracking-widest">
                    LIVE TRACK TEST SIMULATION
                  </span>
                </div>
                <span className="text-[10px] font-orbitron bg-slate-950 px-3 py-1 rounded-md border border-white/10 text-amber-400 tracking-wider">
                  {isSimulating ? 'RUNNING TEST...' : 'READY FOR TEST'}
                </span>
              </div>

              {/* Dynamic Progress Meter */}
              <div className="space-y-4">
                
                {/* Visual Jarak & Sisa Baterai */}
                <div className="grid grid-cols-2 gap-4 text-xs font-orbitron">
                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-white/10">
                    <span className="text-gray-400 block text-[10px] tracking-wider">JARAK TEMPUH SIMULASI</span>
                    <span className="text-xl font-black font-orbitron text-amber-400">{simDistance} KM</span>
                  </div>
                  <div className="bg-slate-950/80 p-3.5 rounded-xl border border-white/10">
                    <span className="text-gray-400 block text-[10px] tracking-wider">SISA BATERAI (SOC)</span>
                    <span className={`text-xl font-black font-orbitron ${simBattery < 20 ? 'text-red-500 animate-pulse' : 'text-emerald-400'}`}>
                      {simBattery}%
                    </span>
                  </div>
                </div>

                {/* Animated Dynamic Battery Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-orbitron text-gray-400 tracking-wide">
                    <span>PENGURANGAN BATERAI REAL-TIME</span>
                    <span>{simBattery}%</span>
                  </div>
                  <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-white/10">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        simBattery > 40 ? 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]' : simBattery > 20 ? 'bg-amber-400' : 'bg-red-500 animate-pulse'
                      }`}
                      style={{ width: `${simBattery}%` }}
                    />
                  </div>
                </div>

                {/* Counter Waktu Simulasi */}
                <div className="p-3 bg-slate-950/60 rounded-xl border border-white/5 flex items-center justify-between text-xs font-orbitron">
                  <span className="text-gray-400 flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> WAKTU UJI COBA:
                  </span>
                  <span className="text-white font-bold">{simTime} DETIK</span>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                {!isSimulating ? (
                  <button
                    onClick={() => setIsSimulating(true)}
                    disabled={simBattery <= 0}
                    className="flex-1 py-3 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-black font-orbitron text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 tracking-wider"
                  >
                    <Play className="w-4 h-4 fill-black" /> JALANKAN UJI LINTASAN
                  </button>
                ) : (
                  <button
                    onClick={() => setIsSimulating(false)}
                    className="flex-1 py-3 bg-red-500/20 border border-red-500 text-red-400 hover:bg-red-500/30 font-black font-orbitron text-xs rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95 tracking-wider"
                  >
                    <RotateCcw className="w-4 h-4" /> PAUSE SIMULASI
                  </button>
                )}

                <button
                  onClick={handleResetSimulation}
                  className="px-5 py-3 bg-slate-950 hover:bg-slate-800 border border-white/10 text-gray-300 font-orbitron font-bold text-xs rounded-xl transition-all tracking-wider"
                >
                  RESET
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}