import React from "react";

export default function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className="flex scale-95 items-center justify-center rounded-full border border-white/25 stroke-white/[.85] p-4 transition-all duration-200 hover:bg-white/[.85] hover:stroke-black"
      >
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          data-v-a5608aa8=""
        >
          <path
            d="M17 3L3 17M3 3l14 14"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            data-v-a5608aa8=""
          ></path>
        </svg>
      </button>
    </>
  );
}
