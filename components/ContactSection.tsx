'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="h2 mb-6">
            Get in Touch
          </h2>
          <p className="body-text text-lg text-secondary-text">
            Ready to take the first step? Contact Dr. Blake today.
          </p>
        </div>
        
        <div className="grid-two-col">
          {/* Contact Information */}
          <div className="space-y-16">
            <div>
              <h3 className="h3 mb-8 text-primary-text">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div>
                  <p className="body-text font-medium text-primary-text mb-2">Address</p>
                  <p className="body-text text-secondary-text">1287 Maplewood Drive, Los Angeles, CA 90026</p>
                </div>
                <div>
                  <p className="body-text font-medium text-primary-text mb-2">Phone</p>
                  <p className="body-text text-secondary-text">(323) 555-0192</p>
                </div>
                <div>
                  <p className="body-text font-medium text-primary-text mb-2">Email</p>
                  <p className="body-text text-secondary-text">serena@blakepsychology.com</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="h3 mb-8 text-primary-text">
                Office Hours
              </h3>
              
              <div className="space-y-6">
                <div>
                  <p className="body-text font-medium text-primary-text mb-2">In-person sessions</p>
                  <p className="body-text text-secondary-text">Tuesday & Thursday, 10 AM–6 PM</p>
                </div>
                <div>
                  <p className="body-text font-medium text-primary-text mb-2">Virtual sessions (Zoom)</p>
                  <p className="body-text text-secondary-text">Monday, Wednesday & Friday, 1 PM–5 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="h3 mb-8 text-primary-text">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-sans text-primary-text mb-3">
                  Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                  className="w-full border-gray-300 rounded-none focus:border-primary-cta focus:ring-0 py-3 text-base font-sans"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-sans text-primary-text mb-3">
                  Phone *
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  required
                  className="w-full border-gray-300 rounded-none focus:border-primary-cta focus:ring-0 py-3 text-base font-sans"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-sans text-primary-text mb-3">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  required
                  className="w-full border-gray-300 rounded-none focus:border-primary-cta focus:ring-0 py-3 text-base font-sans"
                />
              </div>
              
              <div>
                <label htmlFor="preferredTime" className="block text-sm font-sans text-primary-text mb-3">
                  Preferred Contact Time
                </label>
                <Select value={formData.preferredTime} onValueChange={(value) => handleChange('preferredTime', value)}>
                  <SelectTrigger className="w-full border-gray-300 rounded-none focus:border-primary-cta focus:ring-0 py-3 text-base font-sans">
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
                <label htmlFor="message" className="block text-sm font-sans text-primary-text mb-3">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  required
                  rows={5}
                  className="w-full border-gray-300 rounded-none focus:border-primary-cta focus:ring-0 py-3 text-base font-sans"
                  placeholder="Tell me a bit about what brings you to therapy..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary w-full py-4 text-base"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}