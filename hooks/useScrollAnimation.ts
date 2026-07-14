import { useEffect, useRef } from 'react';
import anime from 'animejs';

interface AnimeOptions {
  [key: string]: any;
}

export const useScrollAnimation = <T extends HTMLElement,>(options: AnimeOptions) => {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: element,
              ...options,
            });
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options]);

  return elementRef;
};
