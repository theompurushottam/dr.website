'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission to your insurance provider for potential reimbursement."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions are conducted via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM."
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice is required for cancellations. Late cancellations may be subject to a fee."
    },
    {
      question: "How do I book a session?",
      answer: "You can easily book your session through our online booking system or by contacting us directly via phone or email."
    },
    {
      question: "Are the sessions confidential?",
      answer: "Absolutely. All sessions are completely confidential, ensuring your privacy and comfort at all times."
    },
    {
      question: "Do you offer weekend appointments?",
      answer: "Currently, we only offer appointments on weekdays. However, weekend slots may be considered in special cases."
    },
    {
      question: "Can I reschedule my appointment?",
      answer: "Yes, appointments can be rescheduled with at least 24 hours' notice, subject to availability."
    },
    {
      question: "Is there a free consultation available?",
      answer: "Yes, we offer a complimentary 15-minute consultation to help you decide if our services are the right fit for you."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#FAF8F6]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-800"
          >
            Frequently Asked Questions
          </motion.h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Find quick answers to some of the most common questions about our services and sessions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 focus:outline-none hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800 text-left">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-gray-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-600 flex-shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-5 pb-5 text-gray-600"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
