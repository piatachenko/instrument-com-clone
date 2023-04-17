import Link from "next/link";
import React, { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  children: ReactNode;
}

export default function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <>
      <Link
        href={href}
        className="inline-block rounded-full bg-white px-8 pb-[1rem] pt-[1.1rem] font-['Monument_Grotesk_Mono'] text-sm text-black transition-all duration-300 hover:brightness-[.7]"
      >
        <span className="flex items-center gap-3">
          {children}
          <span>
            <svg
              width="9"
              height="7"
              xmlns="http://www.w3.org/2000/svg"
              data-v-a5608aa8=""
            >
              <path
                d="M6.188 4.833c.113-.118.298-.296.553-.533l.274-.253c-.392.009-.775.014-1.149.014H.281V2.939h5.585c.365 0 .748.005 1.149.014a50.395 50.395 0 0 1-.841-.827L4.089 0h1.6l3.274 3.5L5.688 7h-1.6l2.1-2.167z"
                fillRule="nonzero"
                data-v-a5608aa8=""
              ></path>
            </svg>
          </span>
        </span>
      </Link>
    </>
  );
}
