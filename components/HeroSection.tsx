'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const handleBookConsult = () => {
    window.open('https://docs.google.com/forms/d/1ezCGM7P9sLVS3PbXSTgODyXl2TQVHCWHz1jhuwOjrv0/edit', '_blank');
  };

  return (
    <div className="w-full bg-[#f9f8f4]">
      {/* Header - Doctor's Name Block */}
      <div className="w-full px-6 py-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-left">
            <Link href="/" className="hover:underline">
              <p className="text-xl md:text-2xl font-serif text-[#355e3b] font-semibold cursor-pointer">
                Dr. Serena Blake
              </p>
            </Link>
            <p className="text-sm md:text-base font-serif text-[#355e3b]">
              Psychological Services
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full px-4 md:px-6 lg:px-8 py-12">
        <div className="relative max-w-7xl mx-auto rounded-xl overflow-hidden shadow-lg h-[85vh]">
          {/* Background Image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content on Image */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-white leading-tight mb-6">
              Psychological Care for<br />Change, Insight, and Well-Being
            </h1>
            <p className="text-lg sm:text-xl text-white/90 font-sans mb-10 max-w-2xl">
              Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation.
            </p>
            <Button
              onClick={handleBookConsult}
              className="bg-[#CBD5CF] hover:bg-[#b3c1bb] text-black px-8 py-3 rounded-full text-sm font-medium transition"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
