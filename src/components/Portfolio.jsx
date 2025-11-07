import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const projects = [
  {
    title: 'Inventory Orchestrator',
    industry: 'Retail · FMCG',
    tagline: 'Mengoptimalkan 50.000+ SKU dengan Queue, Redis, dan Horizon.',
    tech: ['Laravel', 'Horizon', 'Redis', 'MySQL', 'Livewire'],
  },
  {
    title: 'Booking Engine X',
    industry: 'Hospitality · Travel',
    tagline: 'Realtime availability & pricing dengan Eloquent + Caching layer.',
    tech: ['Laravel', 'Eloquent', 'Inertia', 'Vue', 'Redis'],
  },
  {
    title: 'FinOps Dashboard',
    industry: 'Finance · SaaS',
    tagline: 'Audit trail ketat dan akses RBAC, disajikan via Blade component.',
    tech: ['Laravel', 'Blade', 'Livewire', 'MySQL', 'Queue'],
  },
];

const ProjectCard = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-xl border border-cyan-400/20 bg-[#071018]/60 p-5 shadow-lg backdrop-blur-md"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_60%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_60%)] opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />

      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-neutral-100">{item.title}</h3>
          <p className="text-xs text-neutral-400">{item.industry}</p>
        </div>
        <BadgeCheck className="text-cyan-300" size={18} />
      </div>

      <p className="mt-3 text-sm text-neutral-300">{item.tagline}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.tech.map((t) => (
          <span
            key={t}
            className="glitch relative rounded-md border border-emerald-400/30 bg-emerald-400/10 px-2 py-1 text-[10px] uppercase tracking-wider text-emerald-200"
          >
            {t}
          </span>
        ))}
      </div>

      <style>{`
        .glitch:hover { 
          box-shadow: 0 0 0 0 rgba(0,0,0,0);
          animation: glitch 0.3s linear 1; 
        }
        @keyframes glitch {
          0% { transform: translate(0,0) }
          20% { transform: translate(-1px,1px) }
          40% { transform: translate(1px,-1px) }
          60% { transform: translate(-1px,-1px) }
          80% { transform: translate(1px,1px) }
          100% { transform: translate(0,0) }
        }
      `}</style>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="relative w-full bg-[#05070b] py-16 text-neutral-200">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-6 text-2xl font-semibold tracking-wide text-cyan-300">
          Proyek Pilihan — Di Mana Laravel Jadi Jantungnya Solusi
        </h2>
        <p className="mb-10 max-w-2xl text-sm text-neutral-300">
          Setiap artefak adalah jawaban pada masalah nyata. Fokus pada efisiensi, reliability, dan
          pengalaman pengguna yang rapi dari backend hingga antarmuka.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} item={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
