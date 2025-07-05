'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. Dr. Blake will contact you within 24 hours.');
    setFormData({ name: '', phone: '', email: '', message: '', preferredTime: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-24 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-800"
          >
            Get in Touch
          </motion.h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Ready to take the first step? Contact Dr. Blake today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-16"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-800">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-base font-medium text-gray-700 mb-1">Address</p>
                  <p className="text-gray-600">1287 Maplewood Drive, Los Angeles, CA 90026</p>
                </div>
                <div>
                  <p className="text-base font-medium text-gray-700 mb-1">Phone</p>
                  <p className="text-gray-600">(323) 555-0192</p>
                </div>
                <div>
                  <p className="text-base font-medium text-gray-700 mb-1">Email</p>
                  <p className="text-gray-600">serena@blakepsychology.com</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 text-gray-800">Office Hours</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-base font-medium text-gray-700 mb-1">In-person sessions</p>
                  <p className="text-gray-600">Tuesday & Thursday, 10 AM–6 PM</p>
                </div>
                <div>
                  <p className="text-base font-medium text-gray-700 mb-1">Virtual sessions (Zoom)</p>
                  <p className="text-gray-600">Monday, Wednesday & Friday, 1 PM–5 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                  className="w-full border-gray-300 rounded-xl focus:border-gray-500 focus:ring-0 py-3 text-base"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  required
                  className="w-full border-gray-300 rounded-xl focus:border-gray-500 focus:ring-0 py-3 text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                  className="w-full border-gray-300 rounded-xl focus:border-gray-500 focus:ring-0 py-3 text-base"
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Time
                </label>
                <Select value={formData.preferredTime} onValueChange={(value) => handleChange('preferredTime', value)}>
                  <SelectTrigger className="w-full border-gray-300 rounded-xl focus:border-gray-500 focus:ring-0 py-3 text-base">
                    <SelectValue placeholder="Select preferred time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                    <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                    <SelectItem value="anytime">Anytime</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  required
                  rows={5}
                  className="w-full border-gray-300 rounded-xl focus:border-gray-500 focus:ring-0 py-3 text-base"
                  placeholder="Tell me a bit about what brings you to therapy..."
                />
              </div>

              <Button
                type="submit"
                className="w-full py-4 text-base font-medium bg-gray-800 text-white hover:bg-gray-700 rounded-xl transition-all"
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
