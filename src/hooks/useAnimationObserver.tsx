import { useEffect, useRef } from 'react';

interface UseAnimationObserverOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

const useAnimationObserver = (options: UseAnimationObserverOptions = {}) => {
  const { 
    threshold = 0.1, 
    rootMargin = '0px', 
    once = true 
  } = options;
  
  const elementsRef = useRef<HTMLElement[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // If we only want to animate once, unobserve after it becomes visible
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            // If we want to animate every time, remove the class when not intersecting
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold, rootMargin }
    );
    
    // Observe all elements
    elementsRef.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });
    
    // Cleanup function
    return () => {
      elementsRef.current.forEach((element) => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [threshold, rootMargin, once]);
  
  // Function to add elements to the refs array
  const addToRefs = (element: HTMLElement | null) => {
    if (element && !elementsRef.current.includes(element)) {
      elementsRef.current.push(element);
    }
  };
  
  return { addToRefs };
};

export default useAnimationObserver;