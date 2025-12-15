// app/hooks/useInView.js
import { useState, useEffect, useRef } from "react";

export default function useInView(options = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      options
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);

  return { ref, inView };
}