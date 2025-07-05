'use client';

import { motion } from 'framer-motion';

export default function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full bg-[#f4f1e7] py-5"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-left">
          <h1 className="text-xl sm:text-2xl font-serif font-medium text-[#3e5543]">
            Dr. Serena Blake, PsyD
          </h1>
          <p className="text-sm text-[#3e5543] mt-1">
            Licensed Clinical Psychologist
          </p>
        </div>
      </div>
    </motion.nav>
  );
}
