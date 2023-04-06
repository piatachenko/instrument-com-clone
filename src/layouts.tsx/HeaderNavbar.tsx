import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logo from "~/assets/logo.svg";
import LinkElement from "~/components/LinkElement";

export default function HeaderNavbar() {
  const [isFixed, setIsFixed] = useState(true);
  const prevScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < prevScrollYRef.current;

      if (currentScrollY < 100 && !isFixed) {
        setIsFixed(true);
      } else if (currentScrollY >= 100 && isScrollingUp && !isFixed) {
        setIsFixed(true);
      } else if (currentScrollY >= 100 && !isScrollingUp && isFixed) {
        setIsFixed(false);
      }

      prevScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isFixed]);

  return (
    <>
      <header
        className={`flex w-full items-center justify-between bg-black py-12 pl-14 pr-5 transition-all duration-700 ${
          isFixed ? "fixed" : "fixed -translate-y-[8rem]"
        }`}
      >
        <div>
          <Link href="/">
            <Image src={logo} alt="Instrument Logo" width={110} />
          </Link>
        </div>
        <nav>
          <LinkElement
            text="What We Do"
            href="https://www.instrument.com/what-we-do"
          />
          <LinkElement
            text="Who We Are"
            href="https://www.instrument.com/who-we-are"
          />
          <LinkElement
            text="Being Here"
            href="https://www.instrument.com/being-here"
          />
          <LinkElement
            text="Careers"
            href="https://www.instrument.com/careers"
          />
        </nav>
      </header>
    </>
  );
}
