'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[32px] md:text-[36px] font-serif text-gray-900 font-semibold mb-6"
            >
              About Dr. Serena Blake
            </motion.h2>

            <div className="space-y-6 text-[17px] leading-[1.9] text-gray-700 font-sans">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                viewport={{ once: true }}
              >
                In today’s fast-paced and demanding world, prioritizing self-care can feel overwhelming. Dr. Serena Blake believes that therapy is a powerful and intentional space to foster personal growth, emotional healing, and long-term well-being.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                viewport={{ once: true }}
              >
                Dr. Serena Blake holds a Doctorate in Clinical Psychology and has extensive experience working in hospitals, universities, and private practices. She specializes in helping individuals navigate challenges like anxiety, depression, life transitions, and trauma. Her warm, compassionate, and personalized approach creates a safe environment for clients to explore their thoughts and emotions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
                viewport={{ once: true }}
              >
                Dr. Blake’s therapeutic style is integrative, combining evidence-based strategies with a humanistic perspective. She is committed to supporting clients in building self-awareness, resilience, and a deeper sense of self-compassion to create meaningful and lasting change.
              </motion.p>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-80 h-auto lg:w-[400px] rounded-lg overflow-hidden shadow-md">
              <img
                src="/image/about-dr.png" //
                alt="Dr. Serena Blake"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
