import { useEffect, useRef, type ReactNode } from "react";

interface ObserverProps {
  children: ReactNode;
}

export default function Observer({ children }: ObserverProps) {
  const containerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      });
    });

    const elements = containerRef.current.children;

    for (let i = 0; i < elements.length; i++) {
      observer.observe(elements[i]);
    }
  }, []);

  return (
    <div ref={containerRef} style={{ display: "contents" }}>
      {children}
    </div>
  );
}
