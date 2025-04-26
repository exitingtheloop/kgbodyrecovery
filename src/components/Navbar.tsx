import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <a href="#" className="flex items-center space-x-3">
            <span className="text-2xl font-light text-primary-600">KG</span>
            <span className="hidden sm:block text-lg font-light">Body Recovery</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#team" className="nav-link">Specialists</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#booking" className="btn-primary py-2 px-4">Book Now</a>
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2 rounded-lg text-neutral-600 hover:bg-neutral-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="py-3 space-y-3">
            <a href="#about" className="mobile-nav-link">About</a>
            <a href="#services" className="mobile-nav-link">Services</a>
            <a href="#team" className="mobile-nav-link">Specialists</a>
            <a href="#testimonials" className="mobile-nav-link">Testimonials</a>
            <a href="#booking" className="mobile-nav-link text-primary-600 font-medium">Book Now</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;