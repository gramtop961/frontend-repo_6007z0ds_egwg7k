import React from 'react';
import { Cpu, Database, Layers, TestTube, Cloud, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Laravel', icon: <Layers size={18} />, desc: 'Blade · Livewire · Eloquent · Queue · Horizon' },
  { name: 'PHP', icon: <Code2 size={18} />, desc: '8.x · Standards · Performance' },
  { name: 'Frontend', icon: <Cpu size={18} />, desc: 'Blade · Inertia · Vue/React · Vite' },
  { name: 'Database', icon: <Database size={18} />, desc: 'MySQL · Redis · Indexing · Migration' },
  { name: 'Testing', icon: <TestTube size={18} />, desc: 'Pest · PHPUnit · Feature/E2E' },
  { name: 'DevOps', icon: <Cloud size={18} />, desc: 'CI/CD · Docker · Cloud · Monitoring' },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-[#05070b] py-16 text-neutral-200">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-6 text-2xl font-semibold tracking-wide text-emerald-300">
          The Toolkit — Arsenal Development
        </h2>
        <p className="mb-10 max-w-2xl text-sm text-neutral-300">
          Fokus pada ekosistem Laravel end-to-end. Dari arsitektur domain sampai interaksi real-time,
          pipeline queue, dan observability yang rapi.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-emerald-400/20 bg-gradient-to-b from-emerald-400/10 to-transparent p-4 backdrop-blur-sm"
            >
              <div className="mb-2 flex items-center gap-2 text-emerald-300">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-400/10 ring-1 ring-emerald-400/30">
                  {s.icon}
                </span>
                <span className="text-sm font-semibold tracking-wide">{s.name}</span>
              </div>
              <p className="text-xs text-neutral-300">{s.desc}</p>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-300/10 blur-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
