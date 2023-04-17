interface SubscribeButtonProps {
  isSubscribed: boolean;
  isEmailValid: boolean;
}

export default function SubscribeButton({isSubscribed, isEmailValid}: SubscribeButtonProps) {
  return (
    <>
      <button
        type="submit"
        className={`flex items-center justify-center gap-3.5 rounded-full border border-white/25 px-8 py-4 font-['Monument_Grotesk_Mono'] text-[.9rem] transition-all duration-200 ${
          isEmailValid
            ? "bg-white fill-black text-black hover:opacity-75 focus:opacity-50 active:opacity-100"
            : "bg-transparent fill-white text-white hover:opacity-100 focus:opacity-100 active:opacity-100"
        }`}
        disabled={!isEmailValid}
      >
        <span>{!isSubscribed ? "Subscribe" : "Subscribed!"}</span>
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
