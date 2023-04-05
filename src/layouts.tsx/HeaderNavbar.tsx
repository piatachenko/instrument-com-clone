import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logo from "~/assets/logo.svg";
import LinkElement from "~/components/LinkElement";

export default function HeaderNavbar() {
  const [isFixed, setIsFixed] = useState(true);
  const [isOverlap, setIsOverlap] = useState(false);
  const prevScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < prevScrollYRef.current;

      if (currentScrollY < 120 && !isFixed || window.scrollY <= 60) {
        setIsFixed(true);
        setIsOverlap(false);
      } else if (currentScrollY >= 120 && isScrollingUp && !isFixed) {
        setIsFixed(true);
        setIsOverlap(true);
      } else if (currentScrollY >= 120 && !isScrollingUp && isFixed) {
        setIsFixed(false);
        setIsOverlap(true);
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
        className={`mr-5 flex w-full items-center justify-between bg-black py-12 pl-14 transition-all duration-700 ${
          isFixed ? "fixed" : "fixed -translate-y-[8rem]"
        } ${isOverlap ? "z-10" : "-z-10"}`}
      >
        <div>
          <Link href="/">
            <Image src={logo} alt="" width={110} />
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
