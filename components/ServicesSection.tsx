'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TherapyAndServicesSection() {
  const services = [
    {
      title: 'Anxiety & Stress Management',
      description:
        'Learn effective coping strategies to manage anxiety and stress through evidence-based techniques including cognitive-behavioral therapy and mindfulness practices.',
      image: '/image/service1.jpg', 
    },
    {
      title: 'Relationship Counseling',
      description:
        'Strengthen communication and deepen connections in your relationships through personalized therapy sessions focused on building trust and understanding.',
      image: '/image/service2.jpg',
    },
    {
      title: 'Trauma Recovery',
      description:
        'Heal from past experiences with compassionate, trauma-informed care that helps you process difficult emotions and build resilience for the future.',
      image: '/image/service3.jpg', 
    },
  ];

  return (
    <>
      {/* Therapy Section */}
      <section className="py-24 bg-[#f9f6ef]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Therapy Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-4xl font-serif text-gray-800 mb-10"
          >
            Therapy can be a space where you invest in yourself—
            <br />
            <span className="block mt-4">one of the highest forms of self-care.</span>
          </motion.h2>

          {/* Therapy Description */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-700 text-base max-w-3xl mx-auto leading-relaxed mb-16"
          >
            You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships. Whatever the source of your stress, you don’t have to face it alone. Therapy offers you the time and space to work toward wellness and peace.
          </motion.p>

          {/* Divider */}
          <motion.hr
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-gray-400 w-full mb-10"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-[#f9f6ef]">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-serif text-gray-800 mb-6"
            >
              Areas of Focus
            </motion.h2>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-64 h-64 mx-auto mb-6 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-serif text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed max-w-xs mx-auto">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
