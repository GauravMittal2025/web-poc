import { useEffect, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px' } = options;
  const [elements, setElements] = useState<Element[]>([]);
  const [isIntersecting, setIsIntersecting] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('data-scroll-id');
          if (id) {
            setIsIntersecting((prev) => ({
              ...prev,
              [id]: entry.isIntersecting,
            }));
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [elements, threshold, rootMargin]);

  const registerElement = (element: Element | null) => {
    if (element && !elements.includes(element)) {
      const id = `scroll-element-${elements.length}`;
      element.setAttribute('data-scroll-id', id);
      setElements((prev) => [...prev, element]);
    }
  };

  return { registerElement, isIntersecting };
};

export default useScrollAnimation;