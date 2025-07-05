'use client';

import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const handleBookConsult = () => {
    window.open('https://docs.google.com/forms/d/1ezCGM7P9sLVS3PbXSTgODyXl2TQVHCWHz1jhuwOjrv0/edit', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
          Psychological Care for Change, Insight, and Well-Being
        </h1>
        <h2 className="text-xl md:text-2xl text-white/90 mb-12 font-sans max-w-2xl mx-auto">
          Helping you find balance and clarity in your life.
          <a href="https://psypact.org/mpage/psypactmap" target="_blank"></a>
        </h2>
        <Button 
          onClick={handleBookConsult}
          className="btn-secondary"
        >
          Book a Free Consult
        </Button>
      </div>
    </section>
  );
}