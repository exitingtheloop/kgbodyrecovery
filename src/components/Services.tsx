import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Dumbbell, BedDouble, MessageCircle, Droplets, StretchHorizontal, Heart, Activity } from 'lucide-react';
import useMeasure from 'react-use-measure';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const Services: React.FC = () => {
  const [ref, bounds] = useMeasure();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const services: Service[] = [
    {
      title: "Complete Recovery",
      description: "A comprehensive program addressing your specific recovery needs with a personalized approach.",
      icon: <Dumbbell className="h-8 w-8" />,
      image: "https://images.pexels.com/photos/3757956/pexels-photo-3757956.jpeg"
    },
    {
      title: "Dry Needling",
      description: "Precision technique targeting trigger points to relieve muscle pain and improve mobility.",
      icon: <BedDouble className="h-8 w-8" />,
      image: "https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg"
    },
    {
      title: "Myo Therapy",
      description: "Advanced myofascial release techniques to restore tissue health and alleviate chronic discomfort.",
      icon: <MessageCircle className="h-8 w-8" />,
      image: "https://images.pexels.com/photos/3757958/pexels-photo-3757958.jpeg"
    },
    {
      title: "Cupping Therapy",
      description: "Traditional method using suction to increase blood flow and promote natural healing.",
      icon: <Droplets className="h-8 w-8" />,
      image: "https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg"
    },
    {
      title: "Flexi Therapy",
      description: "Specialized stretching protocols to enhance flexibility and reduce injury risk.",
      icon: <StretchHorizontal className="h-8 w-8" />,
      image: "https://images.pexels.com/photos/3757955/pexels-photo-3757955.jpeg"
    },
    {
      title: "Body Pain Rehab",
      description: "Targeted rehabilitation for chronic pain conditions with sustainable, long-term solutions.",
      icon: <Heart className="h-8 w-8" />,
      image: "https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg"
    },
    {
      title: "Rehab Plus",
      description: "Enhanced recovery program combining multiple modalities for accelerated healing.",
      icon: <Activity className="h-8 w-8" />,
      image: "https://images.pexels.com/photos/3757953/pexels-photo-3757953.jpeg"
    }
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? bounds.width : -bounds.width,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? bounds.width : -bounds.width,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + services.length) % services.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        paginate(1);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  return (
    <section id="services" className="py-20 md:py-32 bg-neutral-100 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Recovery Services</h2>
          <p className="section-subtitle mx-auto">
            Discover our range of specialized treatment options designed to address your unique recovery needs
          </p>
        </div>

        <div ref={ref} className="relative h-[600px] max-w-5xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              onAnimationComplete={() => setIsAnimating(false)}
              className="absolute inset-0"
            >
              <div className="h-full w-full rounded-2xl overflow-hidden shadow-2xl relative group">
                <img
                  src={services[currentIndex].image}
                  alt={services[currentIndex].title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary-500 rounded-lg mr-4">
                        {services[currentIndex].icon}
                      </div>
                      <h3 className="text-2xl font-light">{services[currentIndex].title}</h3>
                    </div>
                    <p className="text-lg text-white/90">{services[currentIndex].description}</p>
                    <button className="mt-6 px-6 py-3 bg-white text-primary-600 rounded-full font-medium 
                                     transition-all duration-300 hover:bg-primary-50 hover:shadow-lg 
                                     hover:shadow-white/10 transform hover:translate-y-[-2px]">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 backdrop-blur-sm
                       shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl"
            onClick={() => paginate(-1)}
          >
            <ChevronLeft className="h-6 w-6 text-neutral-800" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/80 backdrop-blur-sm
                       shadow-lg transition-all duration-300 hover:bg-white hover:shadow-xl"
            onClick={() => paginate(1)}
          >
            <ChevronRight className="h-6 w-6 text-neutral-800" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const newDirection = index > currentIndex ? 1 : -1;
                  setDirection(newDirection);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-8 bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-neutral-50" />
        </svg>
      </div>
    </section>
  );
};

export default Services;