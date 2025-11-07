import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  const years = useMemo(() => {
    const startYear = 2016; // adjust your actual starting year here if needed
    return Math.max(1, new Date().getFullYear() - startYear);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0d12] text-neutral-200">
      <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-emerald-400/20 via-cyan-400/10 to-transparent blur-3xl pointer-events-none" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 flex flex-col items-start justify-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium tracking-wider text-emerald-300">
            <Rocket size={14} /> The Code Alchemist's Lab
          </span>

          <h1 className="mb-6 font-semibold leading-tight text-neutral-100">
            <span className="block text-4xl sm:text-5xl lg:text-6xl font-[600] tracking-tight" style={{ fontFamily: 'IBM Plex Sans, Inter, ui-sans-serif' }}>
              Ubai: Bukan Sekadar Developer,
            </span>
            <span className="mt-1 block text-4xl sm:text-5xl lg:text-6xl font-[800] tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-400 uppercase" style={{ fontFamily: 'IBM Plex Sans, Inter, ui-sans-serif' }}>
              Solusi Berlabel Production-Ready.
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-sm/6 sm:text-base/7 text-neutral-300">
            {years}+ Tahun menjadi Full-Stack Artisan Laravel. Vibe studio rahasia, arsitektur tepat, kode
            rapi, dan pengalaman battle-tested dari backend sampai interaksi frontend.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-md border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200 transition hover:bg-cyan-400/20"
            >
              Lihat Artefak
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-400 px-4 py-2 font-medium text-black transition hover:bg-emerald-300"
            >
              Hubungi Sekarang
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative h-[420px] w-full rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-sm lg:h-[560px]"
        >
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0d12] via-transparent to-transparent opacity-60" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
