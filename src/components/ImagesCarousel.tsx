import Image from "next/image";
import React, { CSSProperties, useEffect, useState } from "react";

interface CSSCustomProps extends CSSProperties {
  "--delay": string;
}

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
  }, [imageIndex]);

  return (
    <>
      <ul className="relative min-h-[40vw] my-14 3xl:my-10 w-full">
        {Array.from(images.keys()).map((i) => (
          <li className="absolute bottom-1/2 right-1/2 w-full translate-x-1/2 translate-y-1/2">
            <Image
              src={images[i] ?? ""}
              className={`transition-all delay-[--delay] duration-[.4s] ${
                imageIndex === i
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-5 opacity-0"
              }`}
              style={{ "--delay": `${delay}ms` } as CSSCustomProps}
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
