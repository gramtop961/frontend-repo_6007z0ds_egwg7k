import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="contact" className="relative w-full bg-[#0a0d12] py-16 text-neutral-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-b from-emerald-400/10 to-transparent p-8">
          <div className="pointer-events-none absolute -top-10 left-10 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 right-10 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />

          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold text-neutral-100"
          >
            Siap Ubah Ide Lu Jadi Kode Clean? Let's Talk Architectures.
          </motion.h3>

          <p className="mt-2 max-w-2xl text-sm text-neutral-300">
            Kirim brief atau ajak diskusi seputar arsitektur. Production-ready mindset dari awal.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:ubai@email.com"
              className="rounded-md bg-emerald-400 px-4 py-2 font-medium text-black transition hover:bg-emerald-300"
            >
              Hubungi Sekarang
            </a>
            <a
              href="#cv"
              className="rounded-md border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-cyan-200 transition hover:bg-cyan-400/20"
            >
              Lihat CV Full
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
