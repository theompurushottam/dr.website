'use client';

import { motion } from 'framer-motion';

export default function FullPage() {
  return (
    <div>

      {/* Rates and Insurance Section */}
      <section className="bg-[#96b5b6] text-center">
        <div className="max-w-4xl mx-auto px-4 py-20">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-serif mb-8"
          >
            Rates and Insurance
          </motion.h2>

          {/* Session Fee */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl mb-4"
          >
            Session Fee - $200
          </motion.div>

          {/* Psychodiagnostic Evaluation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8"
          >
            Psychodiagnostic Evaluation - $225
          </motion.div>

          {/* Insurance Info */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-lg mb-4"
          >
            I accept both private pay and insurance. I am in-network with BCBS and Aetna.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-base md:text-lg"
          >
            For out-of-network plans, I’ve partnered with Mentaya using{' '}
            <a
              href="https://app.mentaya.com/public/practices/zGs5AgWuQhDtekoxCW7M/eligibility?p=qiXNacRErRNrk7OjP7lg"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600 hover:text-blue-800"
            >
              this tool
            </a>{' '}
            to help you check your eligibility for reimbursement for my services.
          </motion.p>
        </div>

        {/* Not Accepting Clients Section */}
        <div className="bg-[#f8f3ec] py-12">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-xl md:text-2xl font-semibold"
          >
            Unable to accept new clients at this time.
          </motion.p>
        </div>
      </section>

      {/* Quote Section */}
      <section
        className="bg-cover bg-center bg-no-repeat text-center py-24 px-4"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-serif text-black mb-6 max-w-4xl mx-auto"
        >
          “I have come to believe that caring for myself is not self-indulgent.
          <br />
          Caring for myself is an act of survival.”
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl font-serif text-black"
        >
          — Audre Lorde
        </motion.p>
      </section>
    </div>
  );
}
