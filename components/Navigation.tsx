'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBookConsult = () => {
    window.open('https://docs.google.com/forms/d/1ezCGM7P9sLVS3PbXSTgODyXl2TQVHCWHz1jhuwOjrv0/edit', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo/Name Section */}
          <div className="flex items-center space-x-8">
            <div>
              <h1 className="text-xl md:text-2xl font-serif text-primary-text">
                Dr. Serena Blake
              </h1>
              <p className="text-sm text-secondary-text font-sans">
                Clinical Psychologist, PsyD
              </p>
            </div>
            
            {/* Contact Info - Hidden on mobile */}
            <div className="hidden lg:flex items-center space-x-8 text-sm text-secondary-text font-sans">
              <div>
                <p>(323) 555-0192</p>
              </div>
              <div>
                <p>Los Angeles, CA</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-secondary-text hover:text-primary-text font-sans transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-secondary-text hover:text-primary-text font-sans transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('fees')}
              className="text-secondary-text hover:text-primary-text font-sans transition-colors"
            >
              Fees
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-secondary-text hover:text-primary-text font-sans transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={handleBookConsult}
              className="btn-primary"
            >
              Book Consult
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary-text" />
            ) : (
              <Menu className="w-6 h-6 text-primary-text" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <div className="pb-4 border-b border-gray-100">
                <p className="text-sm text-secondary-text font-sans">(323) 555-0192</p>
                <p className="text-sm text-secondary-text font-sans">Los Angeles, CA</p>
              </div>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-secondary-text hover:text-primary-text font-sans py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-secondary-text hover:text-primary-text font-sans py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('fees')}
                className="text-left text-secondary-text hover:text-primary-text font-sans py-2"
              >
                Fees
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-secondary-text hover:text-primary-text font-sans py-2"
              >
                Contact
              </button>
              <Button 
                onClick={handleBookConsult}
                className="btn-primary w-full mt-4"
              >
                Book Consult
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}