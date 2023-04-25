import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Logo from "~/assets/Logo";
import LinkSelectElement from "~/components/LinkSelectElement";

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
        className={`fixed flex w-full items-center justify-between bg-black py-12 px-[4%] transition-all duration-700 z-10 max-md:hidden ${
          isFixed ? "" : "-translate-y-[8rem]"
        }`}
      >
        <div>
          <Link href="/">
            <Logo className="w-[110px]" />
          </Link>
        </div>
        <nav className="-mr-9">
          <LinkSelectElement
            text="What We Do"
            href="https://www.instrument.com/what-we-do"
          />
          <LinkSelectElement
            text="Who We Are"
            href="https://www.instrument.com/who-we-are"
          />
          <LinkSelectElement
            text="Being Here"
            href="https://www.instrument.com/being-here"
          />
          <LinkSelectElement
            text="Careers"
            href="https://www.instrument.com/careers"
          />
        </nav>
      </header>
    </>
  );
}
