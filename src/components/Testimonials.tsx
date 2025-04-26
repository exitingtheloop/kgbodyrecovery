import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "After years of chronic back pain, the team at KG Body Recovery completely transformed my quality of life. Their holistic approach addressed issues other therapists missed.",
      author: "Sarah Johnson",
      role: "Marathon Runner",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "The personalized recovery program was exactly what I needed after my sports injury. I'm back to peak performance and have the tools to prevent future issues.",
      author: "Michael Chen",
      role: "Tennis Player",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      quote: "Their therapeutic approach combines science with genuine care. Every session is tailored to my evolving needs, and the results speak for themselves.",
      author: "Emma Rodriguez",
      role: "Yoga Instructor",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-neutral-50 relative">
      <div ref={sectionRef} className="section-container animate-fade-in">
        <div className="text-center mb-16">
          <h2 className="section-title">Client Experiences</h2>
          <p className="section-subtitle mx-auto">
            Read what our clients have to say about their recovery journey with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg p-8 md:p-12">
            <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <svg className="h-10 w-10 text-primary-200 mb-3" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-lg md:text-xl font-light text-neutral-700 mb-6">
                    {testimonials[currentIndex].quote}
                  </p>
                  <div>
                    <p className="font-medium text-neutral-900">{testimonials[currentIndex].author}</p>
                    <p className="text-neutral-500">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-8 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary-500' : 'bg-neutral-200'}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={prevTestimonial}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-neutral-700 hover:text-primary-600 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md text-neutral-700 hover:text-primary-600 transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;