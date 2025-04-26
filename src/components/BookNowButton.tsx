import React, { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

const BookNowButton: React.FC = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 500px
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="#booking"
      className={`fixed bottom-6 right-6 bg-primary-600 text-white rounded-full p-4 shadow-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 z-50 flex items-center ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      aria-label="Book an appointment"
    >
      <Calendar className="h-5 w-5 mr-2" />
      <span className="font-medium">Book Now</span>
    </a>
  );
};

export default BookNowButton;