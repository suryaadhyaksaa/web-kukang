'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  Target,
  ShieldCheck,
  Zap,
  Globe2,
  Users
} from 'lucide-react';

const MISSION_ITEMS = [
  {
    number: '01',
    title: 'Riset dan Inovasi',
    desc: 'Merancang dan mengembangkan purwarupa kendaraan listrik yang hemat energi serta ramah lingkungan.',
    icon: Zap,
  },
  {
    number: '02',
    title: 'Kompetisi Global',
    desc: 'Mewakili Indonesia dan ITERA di ajang bergengsi Nasional ataupun Internasional.',
    icon: Globe2,
  },
  {
    number: '03',
    title: 'Kolaborasi Multidisiplin',
    desc: 'Menjadi wadah bagi mahasiswa lintas program studi untuk mengaplikasikan ilmu secara langsung dan bekerja sama dalam rekayasa teknologi kendaraan listrik.',
    icon: Users,
  },
];

const ENGINEERING_PILLARS = [
  {
    number: '01',
    title: 'VEHICLE DEVELOPMENT',
    description: 'From initial concept to a refined electric vehicle platform through CAD modeling and structural FEA analysis.',
  },
  {
    number: '02',
    title: 'ELECTRICAL SYSTEM',
    description: 'Developing reliable custom BMS architecture and low-latency IoT telemetry for live track performance optimization.',
  },
  {
    number: '03',
    title: 'POWERTRAIN',
    description: 'Engineering high-efficiency BLDC motor drives and custom reduction gear ratios for maximum energy savings.',
  },
  {
    number: '04',
    title: 'EFFICIENCY & PERFORMANCE',
    description: 'Optimizing every aerodynamic curve and electrical load to achieve extreme energy consumption targets on the race track.',
  },
];

const TEAM_STATISTICS = [
  { value: '2022', label: 'YEAR FOUNDED' },
  { value: '35+', label: 'RESEARCH MEMBERS' },
  { value: '05', label: 'ACTIVE DIVISIONS' },
  { value: '100%', label: 'STUDENT DRIVEN' },
];

export default function HistorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section
      ref={sectionRef}
      id="our-journey"
      aria-label="Our Journey, History, Vision & Mission"
      className="relative w-full bg-transparent text-slate-900 py-12 sm:py-20 font-inter selection:bg-amber-400 selection:text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">

        {/* 1. HERO HEADER */}
        <header className="space-y-3 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <span className="h-[2px] w-8 bg-amber-500" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber-600 font-bold">
              OUR JOURNEY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-sora tracking-tight text-slate-900 uppercase leading-[1.05]"
          >
            FROM SPARK <br />
            <span className="text-amber-500">
              TO MOTION.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-slate-500 text-base sm:text-lg max-w-2xl font-normal leading-relaxed font-inter"
          >
            "A journey of engineering, collaboration, and innovation. Every journey begins with an idea. KUKANG EV ITERA continues to transform ideas into engineering, technology, and motion."
          </motion.p>
        </header>

        {/* 2. SEJARAH SINGKAT CARD */}
        <section className="bg-white border border-slate-200/90 p-6 sm:p-10 rounded-2xl shadow-md shadow-slate-200/50 space-y-4">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
            <h3 className="text-lg sm:text-xl font-bold font-sora text-slate-900 tracking-wider uppercase">
              SEJARAH SINGKAT KUKANG EV ITERA
            </h3>
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal border-l-2 border-amber-500 pl-4 sm:pl-6 font-inter">
            Kukang EV ITERA resmi dibentuk pada tahun <strong className="text-slate-900 font-mono">2022</strong> sebagai wadah riset kendaraan listrik berkelanjutan bagi mahasiswa. Komunitas ini berawal dari inisiatif kakak tingkat angkatan <strong className="text-amber-600 font-mono">2018 dan 2019</strong> yang ingin mewariskan proyek pengembangan kendaraan listrik agar terus berlanjut di ITERA. Hingga kini, Kukang EV terus berkembang dengan berpartisipasi dalam kompetisi inovasi teknologi tingkat nasional dan internasional.
          </p>
        </section>

        {/* 3. VISI & MISI */}
        <section className="space-y-8 border-t border-slate-200/80 pt-12">
          <div className="space-y-1">
            <span className="font-mono text-xs tracking-[0.2em] text-amber-600 uppercase font-bold">
              PURPOSE & DIRECTION
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-sora text-slate-900 uppercase tracking-tight">
              VISI & MISI
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* VISI CARD */}
            <div className="lg:col-span-5 bg-white border border-slate-200/90 p-6 sm:p-8 rounded-2xl shadow-md shadow-slate-200/50 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs uppercase tracking-widest text-amber-600 font-bold">
                    VISION
                  </span>
                  <Target className="w-5 h-5 text-amber-500" />
                </div>
                <h4 className="text-xl font-bold font-sora text-slate-900 uppercase">
                  VISI
                </h4>
                <p className="text-slate-700 text-base leading-relaxed font-medium italic border-l-2 border-amber-500 pl-4 py-1 font-inter">
                  "Menjadi tim pelopor inovasi kendaraan listrik (EV) yang membawa dampak nyata bagi kemajuan teknologi dan energi terbarukan di Indonesia."
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                KUKANG EV ITERA • ELECTRIC VEHICLE RESEARCH
              </div>
            </div>

            {/* MISI CARD */}
            <div className="lg:col-span-7 bg-white border border-slate-200/90 p-6 sm:p-8 rounded-2xl shadow-md shadow-slate-200/50 space-y-6">
              <div className="flex justify-between items-center">
                <span className="font-mono text-xs uppercase tracking-widest text-amber-600 font-bold">
                  MISSION
                </span>
                <ShieldCheck className="w-5 h-5 text-amber-500" />
              </div>
              <h4 className="text-xl font-bold font-sora text-slate-900 uppercase">
                MISI
              </h4>

              <div className="space-y-3">
                {MISSION_ITEMS.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.number}
                      className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 flex items-start gap-3.5 hover:border-amber-300 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 shrink-0 border border-amber-500/20">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h5 className="font-bold font-sora text-slate-900 text-xs sm:text-sm uppercase tracking-wide mb-0.5">
                          {item.number}. {item.title}
                        </h5>
                        <p className="text-slate-500 text-xs leading-relaxed font-inter">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 4. ENGINEERING PILLARS */}
        <section className="space-y-8 border-t border-slate-200/80 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div className="space-y-1">
              <span className="font-mono text-xs tracking-[0.2em] text-amber-600 uppercase font-bold">
                SYSTEM ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-sora text-slate-900 uppercase tracking-tight">
                ENGINEERING PILLARS
              </h3>
            </div>
            <p className="text-slate-400 text-xs font-mono max-w-xs">
              Continuous optimization across mechanical, electrical, and aerodynamic domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ENGINEERING_PILLARS.map((eng) => (
              <div
                key={eng.number}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 shadow-sm hover:shadow-md transition-all space-y-3"
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-base font-bold text-amber-500">
                    {eng.number}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </div>

                <h4 className="text-xs font-bold font-sora text-slate-900 uppercase tracking-wider">
                  {eng.title}
                </h4>

                <p className="text-slate-500 text-[11px] leading-relaxed font-inter">
                  "{eng.description}"
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. STATISTIK CARD */}
        <section className="border border-slate-200/90 py-8 bg-white rounded-2xl shadow-md shadow-slate-200/50">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_STATISTICS.map((stat, index) => (
              <div key={index} className="text-center space-y-0.5">
                <span className="text-2xl sm:text-4xl font-black font-sora text-slate-900 tracking-tight block">
                  {stat.value}
                </span>
                <span className="font-mono text-[10px] text-amber-500 font-bold tracking-widest uppercase block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 6. PENUTUP & CTA */}
        <footer className="text-center space-y-6 pt-4">
          <div className="inline-flex flex-col items-center space-y-2">
            <span className="font-mono text-xs tracking-[0.2em] text-slate-400 uppercase">
              THE JOURNEY CONTINUES
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sora text-slate-900 uppercase tracking-tight">
              KUKANG EV ITERA
            </h3>
            <span className="italic font-mono text-xs text-amber-500 font-bold">
              "Engineering never stops."
            </span>
          </div>

          <div className="flex justify-center items-center gap-2 pt-2">
            <div className="h-[1px] w-8 bg-amber-500/40" />
            <a
              href="/informasi/rekrutmen"
              className="inline-flex items-center gap-2 font-mono text-xs text-amber-600 hover:text-amber-700 transition-colors tracking-widest uppercase font-bold"
            >
              <span>JOIN THE TEAM</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <div className="h-[1px] w-8 bg-amber-500/40" />
          </div>
        </footer>

      </div>
    </section>
  );
}