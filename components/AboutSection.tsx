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
              About Dr. Jennifer Hahm
            </motion.h2>

            <div className="space-y-6 text-[17px] leading-[1.9] text-gray-700 font-sans">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                viewport={{ once: true }}
              >
                Finding time and opportunities to care for ourselves can be incredibly challenging in today’s busy and demanding world.
                I believe therapy offers a dedicated space for self-care, providing the support and tools needed to improve this essential practice.
                Therapy can help individuals identify and clarify their goals, values, and the various elements that contribute to their well-being,
                recognizing that these aspects vary from person to person.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
                viewport={{ once: true }}
              >
                I am dedicated to supporting this journey by offering active listening, psychological knowledge, empathy, compassion, and insights
                into behavioral patterns and tendencies. I hold a master’s degree in Clinical Psychology from the Michigan School of Psychology (2012)
                and a Ph.D. in Counseling Psychology from Western Michigan University (2018). My experience spans therapy and psychological assessment
                in psychiatric inpatient units, academic medical centers, universities, and outpatient practice settings.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.8 }}
                viewport={{ once: true }}
              >
                My therapeutic approach is primarily psychodynamic and humanistic, focusing on building insight and fostering self-compassion to support long-term growth and healing.
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
                src="/images/doctor.png" // Replace with the correct image path
                alt="Dr. Jennifer Hahm"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
