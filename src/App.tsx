import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookNowButton from './components/BookNowButton';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'KG Body Recovery | Personalized Physical Therapy';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Add smooth scrolling to anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.pathname === window.location.pathname) {
        e.preventDefault();
        
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <BookNowButton />
    </div>
  );
}

export default App;