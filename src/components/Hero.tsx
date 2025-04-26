import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        // Parallax effect for background
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen bg-hero-pattern bg-cover bg-center flex items-center justify-center text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight animate-fade-in visible">
          Recover, Rebuild, Reclaim Your Body
        </h1>
        <p className="text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto animate-fade-in animate-delay-200 visible">
          Personalized physical therapy and wellness solutions tailored for you.
        </p>
        <a 
          href="#booking" 
          className="btn-primary inline-block animate-fade-in animate-delay-300 visible"
        >
          Book Your Recovery Session
        </a>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-white h-8 w-8 opacity-80" />
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-neutral-50"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;