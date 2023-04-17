import { useEffect, useState } from "react";
import CloseButton from "~/components/CloseButton";
import EmailInput from "~/components/EmailInput";
import NewsletterButton from "~/components/NewsletterButton";
import SubscribeButton from "~/components/SubscribeButton";

export default function SubscribeForm() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!isFormVisible) {
        setIsSubscribed(false);
        setIsEmailValid(false);
      }
    }, 1500);
  }, [isFormVisible]);

  function formSubmit(event: any) {
    event.preventDefault();
    setIsFormVisible(false);
    setIsSubscribed(true);
  }

  return (
    <>
      <form
        onSubmit={formSubmit}
        className={`fixed inset-x-0 bottom-0 z-10 flex min-h-[10rem] w-full items-center justify-between bg-[#111]/90 px-14 backdrop-blur-md transition-all duration-300 ${
          isFormVisible ? "translate-y-0" : "translate-y-full"
        } ${isSubscribed ? "delay-[1.2s]" : ""}`}
      >
        <label
          htmlFor="enter-email"
          className="flex items-center gap-5 fill-neutral-100"
        >
          <span className="w-[2.75rem]">
            <svg
              data-v-4afa0c38=""
              viewBox="0 0 33 34"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                data-v-4afa0c38=""
                d="M0 18.8927C0 8.79842 7.18049 0.714844 17.91 0.714844C27.2363 0.714844 33 6.65185 33 14.1105C33 21.1615 28.2405 25.2645 24.2101 25.2645C21.5827 25.2645 20.4135 23.7836 20.895 21.637C19.2855 23.7836 17.2222 25.2645 14.4435 25.2645C11.1697 25.2645 8.95498 23.0771 8.95498 19.2867C8.95498 13.9882 12.1463 8.83918 17.4285 8.83918C20.9362 8.83918 22.3531 11.3118 22.8345 12.7383C23.2334 10.782 23.3985 10.0347 23.5636 9.35544H24.6503L21.9817 21.7457C21.6653 23.4168 22.7107 24.1776 24.1551 24.1776C27.6628 24.1776 31.7757 20.0747 31.7757 14.0969C31.7757 7.2768 26.5348 1.82888 17.8962 1.82888C7.74448 1.82888 1.25177 9.43695 1.25177 18.8927C1.25177 26.9763 7.38683 32.6008 15.654 32.6008C19.9321 32.6008 23.9625 31.3645 26.6311 29.1364L27.2776 30.2097C24.3752 32.4378 20.3722 33.7148 15.7366 33.7148C6.57524 33.7148 0 27.574 0 18.8927ZM22.188 15.143C22.188 11.8688 20.1246 9.92604 17.3047 9.92604C12.8203 9.92604 10.1655 14.5452 10.1655 19.1372C10.1655 22.4794 11.9812 24.2048 14.5673 24.2048C18.8866 24.1912 22.188 19.4905 22.188 15.143Z"
              ></path>
            </svg>
          </span>
          <span className="font-['Monument_Grotesk_Mono'] text-sm tracking-wider text-neutral-100">
            Join Our Newsletter
          </span>
        </label>
        {isSubscribed ? (
          <span className="text-center text-[2.25rem]">
            Thanks for subscribing!
          </span>
        ) : (
          <EmailInput setIsEmailValid={setIsEmailValid} />
        )}
        <div className="flex items-center gap-6">
          <SubscribeButton
            isEmailValid={isEmailValid}
            isSubscribed={isSubscribed}
          />
          <CloseButton onClick={() => setIsFormVisible(false)} />
        </div>
      </form>
      <NewsletterButton setIsFormVisible={setIsFormVisible} />
    </>
  );
}
