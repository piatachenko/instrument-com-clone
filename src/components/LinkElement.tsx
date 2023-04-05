import Link from "next/link";
import React from "react";

interface LinkElementProps {
  text: string;
  href: string;
  current?: boolean;
}

export default function LinkElement({ text, href, current }: LinkElementProps) {
  return (
    <>
      <Link
        href={href}
        className="word relative inline-block px-9 text-sm tracking-wider before:absolute before:left-[0.9rem] before:top-[-0.2rem] before:text-base before:text-[#808080] before:opacity-0 before:transition-all before:duration-200 before:ease-in before:content-['['] after:absolute after:right-[0.9rem] after:top-[-0.2rem] after:text-base after:text-[#808080] after:opacity-0 after:transition-all after:duration-200 after:ease-in after:content-[']'] hover:before:opacity-100 hover:after:opacity-100"
      >
        {text.toUpperCase()}
      </Link>
    </>
  );
}