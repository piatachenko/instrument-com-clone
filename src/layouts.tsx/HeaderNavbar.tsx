import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Logo from "~/assets/Logo";
import LinkSelectElement from "~/components/LinkSelectElement";

export default function HeaderNavbar() {
  const [isFixed, setIsFixed] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        className={`transition-tansform fixed z-10 flex w-full items-center justify-between bg-black px-[8%] py-[1.1rem] duration-700 md:px-[4%] md:py-12 ${
          isFixed
            ? ""
            : isMobileMenuOpen
            ? "md:-translate-y-[8rem]"
            : "-translate-y-[8rem]"
        }`}
      >
        <div className="z-10">
          <Link href="/">
            <Logo className="w-[110px]" />
          </Link>
        </div>
        <nav className="-mr-9 max-md:hidden max-[860px]:md:[&>*:not(:nth-last-child(1))]:-mr-5">
          <span>
            <LinkSelectElement
              text="What We Do"
              href="https://www.instrument.com/what-we-do"
            />
          </span>
          <span>
            <LinkSelectElement
              text="Who We Are"
              href="https://www.instrument.com/who-we-are"
            />
          </span>
          <span>
            <LinkSelectElement
              text="Being Here"
              href="https://www.instrument.com/being-here"
            />
          </span>
          <span>
            <LinkSelectElement
              text="Careers"
              href="https://www.instrument.com/careers"
            />
          </span>
        </nav>
        <div className="z-10 flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="100%"
                height="100%"
                role="presentation"
                aria-hidden="true"
                data-v-a5608aa8=""
                className="w-5 fill-white"
              >
                <title data-v-a5608aa8="">Close Menu</title>
                <path
                  className="origin-center scale-[1.3]"
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  data-v-a5608aa8=""
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="100%"
                height="100%"
                role="presentation"
                aria-hidden="true"
                data-v-a5608aa8=""
                className="w-5 fill-white"
              >
                <title data-v-a5608aa8="">Open Menu</title>
                <path
                  d="M0 0h24v2H0zM0 8h24v2H0zM0 16h24v2H0z"
                  data-v-a5608aa8=""
                  className="translate-y-[.185rem]"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <nav
          className={`fixed inset-0 flex min-h-[105vh] flex-col justify-end gap-[1.34rem] bg-black pb-[25vh] pl-[3%] transition-opacity md:hidden ${
            isMobileMenuOpen ? "opacity-100" : "invisible opacity-0"
          }`}
        >
          <span>
            <LinkSelectElement
              text="What We Do"
              href="https://www.instrument.com/what-we-do"
            />
          </span>
          <span>
            <LinkSelectElement
              text="Work"
              href="https://www.instrument.com/work"
            />
          </span>
          <span>
            <LinkSelectElement
              text="Who We Are"
              href="https://www.instrument.com/who-we-are"
            />
          </span>
          <span>
            <LinkSelectElement
              text="Being Here"
              href="https://www.instrument.com/being-here"
            />
          </span>
          <span>
            <LinkSelectElement
              text="Careers"
              href="https://www.instrument.com/careers"
            />
          </span>
          <span>
            <LinkSelectElement
              text="Contact"
              href="https://www.instrument.com/contact"
            />
          </span>
        </nav>
      </header>
    </>
  );
}
