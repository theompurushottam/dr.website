'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#f8f3ec] text-center py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-6">

        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-serif"
        >
          Dr. Sherna Blake, Licensed Psychologist
        </motion.h3>

        <motion.a
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href="mailto:serena@blakepsychology.com"
          className="underline text-lg hover:text-blue-600 block"
        >
          serena@blakepsychology.com
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg space-y-2"
        >
          <p>
            Phone: <a href="tel:3235550192" className="underline hover:text-blue-600">(323) 555-0192</a>
          </p>
          <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-x-4"
        >
          <a href="#" className="underline hover:text-blue-600">Home</a>
          <a href="#" className="underline hover:text-blue-600">Privacy Policy</a>
          <a href="#" className="underline hover:text-blue-600">Good Faith Estimate</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="pt-4"
        >
          <a
            href="https://drshernablake.sessionshealth.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600"
          >
            Client Portal
          </a>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="text-sm text-gray-700 mt-12"
      >
        &copy; 2025 Dr. Sherna Blake Psychological Services. All rights reserved.
      </motion.p>
    </footer>
  );
}
