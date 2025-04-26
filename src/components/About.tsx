import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const elementsRef = useRef<HTMLElement[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    elementsRef.current.forEach(el => observer.observe(el));
    
    return () => {
      elementsRef.current.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  const addToRefs = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section id="about" className="bg-neutral-50 py-20 md:py-32 relative">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={addToRefs} 
            className="animate-fade-in"
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3757956/pexels-photo-3757956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Therapeutic session" 
                className="rounded-2xl shadow-lg h-[500px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-600 opacity-10 rounded-2xl"></div>
            </div>
          </div>
          
          <div>
            <h2 
              ref={addToRefs} 
              className="section-title animate-fade-in"
            >
              Your Journey to Recovery Starts Here
            </h2>
            
            <p 
              ref={addToRefs} 
              className="text-lg text-neutral-600 mb-6 animate-fade-in animate-delay-100"
            >
              At KG Body Recovery, we believe in a holistic approach to physical wellness and rehabilitation. Our personalized therapy programs are designed to address the root causes of discomfort, not just the symptoms.
            </p>
            
            <p 
              ref={addToRefs} 
              className="text-lg text-neutral-600 mb-8 animate-fade-in animate-delay-200"
            >
              With years of specialized experience in therapeutic techniques from around the world, our practitioners blend traditional healing wisdom with cutting-edge science to deliver exceptional results.
            </p>
            
            <div 
              ref={addToRefs} 
              className="animate-fade-in animate-delay-300"
            >
              <a href="#services" className="btn-primary">
                Explore Our Therapies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;