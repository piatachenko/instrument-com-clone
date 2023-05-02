import React from "react";

export default function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className="rounded-full border border-white/25 stroke-white/[.85] p-2.5 lg:p-3.5 transition-all duration-200 hover:bg-white/[.85] hover:stroke-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 xs:w-[1.55rem] xs:h-[1.55rem]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </>
  );
}
