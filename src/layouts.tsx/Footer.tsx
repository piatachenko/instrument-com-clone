import Link from "next/link";
import React from "react";
import FooterNavbar from "./FooterNavbar";
import SubscribeForm from "./SubscribeForm";

export default function Footer() {
  return (
    <>
      <footer className="relative px-[8%] md:px-[4%]">
        <div className="-mx-8 items-end justify-between pb-10 xs:pb-7 md:flex">
          <FooterNavbar />
          <div className="pb-2 pr-10 max-md:mb-5 xs:max-md:mt-20 max-xs:mt-5">
            <div className="flex flex-col items-start gap-[1.5rem] fill-white xs:flex-row xs:items-center md:flex-col lg:flex-row lg:gap-[3.25rem]">
              <SubscribeForm />
              <div className="flex grow items-center justify-center max-xs:mt-6 max-xs:ml-10 gap-[2.5rem] xs:gap-[3.25rem]">
                <Link href={"https://instagram.com/instrument"}>
                  <svg
                    width="21"
                    height="21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fillRule="evenodd" data-v-a5608aa8="">
                      <g data-v-a5608aa8="">
                        <mask id="pathmask" data-v-a5608aa8="">
                          <use data-v-a5608aa8=""></use>
                        </mask>
                        <path
                          d="M10.497.007c-2.851 0-3.208.012-4.328.063-1.117.05-1.88.228-2.548.488a5.145 5.145 0 0 0-1.86 1.21 5.145 5.145 0 0 0-1.21 1.86c-.26.667-.437 1.43-.488 2.548C.013 7.296 0 7.653 0 10.503c0 2.851.012 3.208.063 4.328.051 1.117.229 1.88.488 2.548.268.69.627 1.276 1.21 1.86a5.146 5.146 0 0 0 1.86 1.21c.668.26 1.43.437 2.548.488 1.12.05 1.477.063 4.328.063 2.85 0 3.208-.012 4.327-.063 1.118-.051 1.88-.229 2.548-.488a5.146 5.146 0 0 0 1.86-1.21 5.146 5.146 0 0 0 1.21-1.86c.26-.668.437-1.43.488-2.548.051-1.12.063-1.477.063-4.328 0-2.85-.012-3.208-.063-4.327-.05-1.118-.228-1.88-.488-2.548a5.146 5.146 0 0 0-1.21-1.86 5.145 5.145 0 0 0-1.86-1.21c-.667-.26-1.43-.437-2.548-.488-1.12-.051-1.477-.063-4.327-.063zm0 1.89c2.802 0 3.134.012 4.241.062 1.024.047 1.58.218 1.95.362.49.19.839.417 1.206.785.368.367.595.717.785 1.207.144.37.315.925.362 1.949.05 1.107.061 1.439.061 4.241 0 2.803-.01 3.135-.061 4.242-.047 1.023-.218 1.58-.362 1.949-.19.49-.417.84-.785 1.207a3.252 3.252 0 0 1-1.207.785c-.37.144-.925.315-1.949.361-1.106.051-1.438.062-4.241.062s-3.135-.011-4.242-.062c-1.023-.046-1.58-.217-1.949-.36-.49-.191-.84-.419-1.207-.786a3.252 3.252 0 0 1-.785-1.207c-.144-.37-.315-.926-.362-1.95-.05-1.106-.06-1.438-.06-4.24 0-2.803.01-3.135.06-4.242.047-1.024.218-1.58.362-1.95.19-.49.418-.839.785-1.206a3.252 3.252 0 0 1 1.207-.785c.37-.144.926-.315 1.95-.362 1.106-.05 1.438-.061 4.24-.061z"
                          mask="url(#b)"
                          data-v-a5608aa8=""
                        ></path>
                      </g>
                      <path
                        d="M10.31 14.16a3.47 3.47 0 1 1-.001-6.939 3.47 3.47 0 0 1 0 6.94zm0-8.815a5.345 5.345 0 1 0-.001 10.691 5.345 5.345 0 0 0 0-10.69zM17.564 4.773a1.336 1.336 0 1 1-2.673 0 1.336 1.336 0 0 1 2.673 0"
                        data-v-a5608aa8=""
                      ></path>
                    </g>
                  </svg>
                </Link>
                <Link href={"https://twitter.com/instrument"}>
                  <svg
                    width="21"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                    data-v-a5608aa8=""
                  >
                    <path
                      d="M6.602 17.148c7.922 0 12.256-6.586 12.256-12.288 0-.186 0-.37-.008-.556A8.788 8.788 0 0 0 21 2.064a8.712 8.712 0 0 1-2.478.682A4.343 4.343 0 0 0 20.42.354a8.554 8.554 0 0 1-2.738 1.044A4.294 4.294 0 0 0 14.54.034a4.318 4.318 0 0 0-4.309 4.32c0 .337.042.666.11.986C6.761 5.163 3.586 3.436 1.46.825c-.369.64-.579 1.382-.579 2.173 0 1.5.764 2.822 1.915 3.597a4.348 4.348 0 0 1-1.949-.54v.06a4.325 4.325 0 0 0 3.453 4.236c-.361.101-.74.152-1.134.152-.277 0-.546-.025-.807-.076a4.309 4.309 0 0 0 4.024 2.998 8.625 8.625 0 0 1-5.35 1.853c-.345 0-.69-.017-1.026-.059a12.229 12.229 0 0 0 6.594 1.93"
                      fillRule="nonzero"
                      data-v-a5608aa8=""
                    ></path>
                  </svg>
                </Link>
                <Link href={"https://linkedin.com/company/instrument"}>
                  <svg
                    width="21"
                    height="21"
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    data-v-a5608aa8=""
                  >
                    <path
                      d="M.05 1.546C.05.717.74.046 1.59.046h17.745c.85 0 1.539.671 1.539 1.5V19.5c0 .829-.69 1.501-1.539 1.501H1.589C.739 21 .05 20.328.05 19.499V1.546zm4.74 5.287c1.096 0 1.779-.728 1.779-1.635-.02-.929-.683-1.635-1.759-1.635-1.076 0-1.779.706-1.779 1.635 0 .907.683 1.635 1.738 1.635h.02zM3.216 17.587h3.145V8.124H3.217v9.463zm4.885 0h3.145v-5.285c0-.282.02-.565.104-.767.227-.565.745-1.15 1.614-1.15 1.138 0 1.593.868 1.593 2.14v5.062h3.145V12.16c0-2.906-1.552-4.259-3.621-4.259-1.697 0-2.442.949-2.855 1.594h.02V8.124H8.102c.042.888 0 9.463 0 9.463z"
                      fillRule="nonzero"
                      data-v-a5608aa8=""
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
