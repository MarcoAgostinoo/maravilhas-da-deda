import { useEffect, useRef } from "react";

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  onIntersect?: (entry: IntersectionObserverEntry) => void;
}

export const useIntersectionObserver = ({
  threshold = 0.5,
  rootMargin = "0px",
  onIntersect,
}: UseIntersectionObserverProps = {}) => {
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("animate-fade-in");
            if (onIntersect) {
              onIntersect(entry);
            }
            observer.unobserve(element);
          }
        });
      },
      {
        threshold,
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin, onIntersect]);

  return elementRef;
};
