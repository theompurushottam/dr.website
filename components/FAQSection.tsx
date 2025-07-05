'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="h2 mb-6">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="accordion-trigger flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <h3 className="h4 text-primary-text text-left">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-secondary-text flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-secondary-text flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="accordion-content">
                  <p className="body-text text-secondary-text">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}