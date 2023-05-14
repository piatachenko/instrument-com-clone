import { useEffect, useRef, ReactNode } from "react";

interface ObserverProps {
  children: ReactNode;
}

export default function Observer({ children }: ObserverProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      });
    });

    if (containerRef.current) {
      const elements = containerRef.current.children;

      for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as Element;
        if (element) {
          observer.observe(element);
        }
      }
    }
  }, []);

  return (
    <div ref={containerRef} style={{ display: "contents" }}>
      {children}
    </div>
  );
}
