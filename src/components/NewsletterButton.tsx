interface NewsletterButtonProps {
  isFormVisible?: boolean;
  setIsFormVisible: (isFormVisible: boolean) => void;
}
export default function NewsletterButton({
  setIsFormVisible,
}: NewsletterButtonProps) {
  return (
    <>
      <button
        onClick={() => setIsFormVisible(true)}
        className="flex items-center justify-center gap-3.5 rounded-full border-white/25 px-8 py-4 font-['Monument_Grotesk_Mono'] text-[.9rem] uppercase tracking-wide transition-all duration-200 hover:opacity-75 focus:opacity-50 active:opacity-100 max-xs:ml-1 xs:border"
      >
        <span>Newsletter</span>
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
      </button>
    </>
  );
}
