import Image from "next/image";
import React, { useEffect, useState, type CSSProperties } from "react";

interface ImagesCarouselProps {
  images: string[];
  duration: number;
  delay?: number;
}

export default function ImagesCarousel({
  images,
  duration,
  delay,
}: ImagesCarouselProps) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setImageIndex((imageIndex) => (imageIndex + 1) % images.length);
    }, duration);
    return () => clearInterval(interval);
  }, [imageIndex, duration, images.length]);

  return (
    <>
      <ul className="relative my-14 min-h-[40vw] w-full 3xl:my-10">
        {Array.from(images.keys()).map((i) => (
          <li
            key={i}
            className="absolute bottom-1/2 right-1/2 w-full translate-x-1/2 translate-y-1/2"
          >
            <Image
              src={images[i] ?? ""}
              className={`transition-all delay-[--delay] duration-[.4s] ${
                imageIndex === i
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-5 opacity-0"
              }`}
              style={{ "--delay": `${delay}ms` } as CSSProperties}
              alt=""
              width={2000}
              height={2000}
            ></Image>
          </li>
        ))}
      </ul>
    </>
  );
}
