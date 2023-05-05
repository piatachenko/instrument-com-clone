import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { type CSSProperties } from "react";
import ImagesCarousel from "~/components/ImagesCarousel";
import LinkButton from "~/components/LinkButton";
import Footer from "~/layouts.tsx/Footer";
import HeaderNavbar from "~/layouts.tsx/HeaderNavbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Instrument</title>
        <meta data-n-head="ssr" charSet="utf-8" />
        <meta
          data-n-head="ssr"
          name="viewport"
          content="width=device-width,initial-scale=1"
        />
        <meta
          data-n-head="ssr"
          data-hid="apple-mobile-web-app-title"
          name="apple-mobile-web-app-title"
          content="Instrument"
        />
        <meta
          data-n-head="ssr"
          data-hid="og:site_name"
          property="og:site_name"
          content="Instrument"
        />
        <meta
          data-n-head="ssr"
          data-hid="twitter:card"
          property="twitter:card"
          content="summary_large_image"
        />
        <meta
          data-n-head="ssr"
          data-hid="twitter:site"
          property="twitter:site"
          content="@instrument"
        />
        <meta
          data-n-head="ssr"
          data-hid="mobile-web-app-capable"
          name="mobile-web-app-capable"
          content="yes"
        />
        <meta
          data-n-head="ssr"
          data-hid="author"
          name="author"
          content="Instrument"
        />
        <meta
          data-n-head="ssr"
          data-hid="theme-color"
          name="theme-color"
          content="#fff"
        />
        <meta
          data-n-head="ssr"
          data-hid="og:type"
          name="og:type"
          property="og:type"
          content="website"
        />
        <meta
          data-n-head="ssr"
          data-hid="og:image"
          property="og:image"
          content="https://images.prismic.io/instrument-v5/83967c1c-120b-44c7-89ae-1066bb39f59a_Instrument-homepage-prismic-social.png?auto=compress,format"
        />
        <meta
          data-n-head="ssr"
          data-hid="og:description"
          property="og:description"
          content="We are equal parts creative agency, engineering firm, and consultancy. Our approach draws the best elements of each to deliver exceptional work."
        />
        <meta
          data-n-head="ssr"
          data-hid="og:title"
          property="og:title"
          content="Instrument"
        />
        <meta
          data-n-head="ssr"
          data-hid="description"
          name="description"
          content="We are equal parts creative agency, engineering firm, and consultancy. Our approach draws the best elements of each to deliver exceptional work."
        />
        <link
          data-n-head="ssr"
          rel="icon"
          type="image/x-icon"
          href="https://instrument.com/favicon.ico"
        />
        <link
          data-n-head="ssr"
          rel="manifest"
          href="https://instrument.com/_nuxt/manifest.6a8e406d.json"
        />
        <link
          data-n-head="ssr"
          rel="shortcut icon"
          href="https://instrument.com/_nuxt/icons/icon_64.7f94e8.png"
        />
        <link
          data-n-head="ssr"
          rel="apple-touch-icon"
          href="https://instrument.com/_nuxt/icons/icon_512.7f94e8.png"
          sizes="512x512"
        />
        <link
          data-n-head="ssr"
          rel="canonical"
          href="https://www.instrument.com/"
        />
        <link
          rel="preload"
          href="/fonts/ABCMonumentGroteskMono/ABCMonumentGroteskMono-Regular-Trial.otf"
          as="font"
          type="font/otf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Whyte/Whyte-Book.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Whyte/Whyte-Medium.ttf"
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
      </Head>
      <HeaderNavbar />
      <main className="px-[4%] pt-[115.25px] tracking-tight 3xl:px-[6%] overflow-x-hidden">
        <div className="mt-[1.5rem] max-md:-mx-[5%] xs:mt-[11.5rem] sm:mt-[12rem] md:mt-[13rem] xl:mt-[14rem] 2xl:mt-[15rem]">
          <div className="relative pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/796346595?h=8a4686b5aa&amp;controls=0&amp;loop=1&amp;background=1&amp;app_id=122963"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute left-0 top-0 h-full w-full"
              data-ready="true"
            ></iframe>
          </div>
        </div>
        <section>
          <header className="mx-auto mb-[3.7rem] mt-20 max-w-[92%] xs:mb-56 xs:mt-48 xs:max-w-[84%] xs:text-center md:max-w-[76%] lg:max-w-[68%] 2xl:max-w-[60%] 3xl:pb-9 3xl:pt-14">
            <h1
              className="leading-[120%]"
              style={
                {
                  fontSize: "calc(28px + 68*(100vw - 320px)/ 2180)",
                } as CSSProperties
              }
            >
              We build connected brand systems from vision through execution
            </h1>
          </header>
          <div className="space-y-24 max-lg:mx-[4%] xs:space-y-56">
            <div>
              <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-[7%]">
                <div className="grow basis-[52%] 3xl:p-10">
                  <Image
                    src="/assets/1first.avif"
                    alt="What We Do"
                    width={2000}
                    height={2000}
                  />
                </div>
                <div className="basis-[41%] pl-[2%]">
                  <div className="m-auto xs:max-w-[79%]">
                    <p
                      style={
                        {
                          fontSize: "calc(19px + 13*(100vw - 320px)/2180)",
                        } as CSSProperties
                      }
                    >
                      As a full-service partner to the world&apos;s most
                      ambitious companies, we create transformational change
                      through best-in-class digital products and communications.
                    </p>
                    <div className="mt-10 xs:mt-7 lg:mt-10">
                      <LinkButton href="https://www.instrument.com/what-we-do">
                        <span>What we do</span>
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center gap-10 lg:flex-row-reverse lg:gap-[7%]">
                <div className="grow basis-[52%] 3xl:p-10">
                  <Image
                    src="/assets/2second.avif"
                    alt="What We Do"
                    width={2000}
                    height={2000}
                  />
                </div>
                <div className="basis-[41%] pr-[2%]">
                  <div className="m-auto xs:max-w-[79%]">
                    <p
                      style={
                        {
                          fontSize: "calc(19px + 13*(100vw - 320px)/2180)",
                        } as CSSProperties
                      }
                    >
                      Instrument Named Among World&apos;s Most Innovative
                      Companies in Design
                    </p>
                    <div className="mt-10 xs:mt-7 lg:mt-10">
                      <LinkButton href="https://www.instrument.com/articles/instrument-named-among-most-innovative-companies-in-design">
                        <span>Learn more</span>
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <header className="mx-auto mb-44 mt-32 max-w-[92%] xs:my-60 xs:max-w-[84%] xs:text-center md:max-w-[76%] lg:max-w-[68%] 2xl:max-w-[60%] 3xl:pb-9 3xl:pt-14">
            <h2
              className="leading-[100%]"
              style={
                {
                  fontSize: "calc(28px + 68*(100vw - 320px)/ 2180)",
                } as CSSProperties
              }
            >
              Explore some of our most recent work
            </h2>
            <div className="mt-7 xs:mt-10">
              <LinkButton href="https://www.instrument.com/work">
                <span>Our work</span>
              </LinkButton>
            </div>
          </header>
          <div>
            <div className="flex gap-16 max-lg:flex-col max-lg:gap-24 max-md:mx-[-5%] 3xl:gap-[5%]">
              <div className="basis-1/2">
                <Link href="https://www.instrument.com/work/eames-institute">
                  <span className="w-full">
                    <Image
                      src="/assets/3third.avif"
                      alt=""
                      width={2000}
                      height={2000}
                    ></Image>
                  </span>
                  <span className="block gap-10 max-md:mx-[9%] max-md:max-w-[31.5rem] max-lg:md:flex max-3xl:lg:max-w-[31.5rem] 3xl:flex [&>*]:basis-1/2">
                    <span
                      className="mt-5 block font-['Whyte_Medium'] leading-[125%]"
                      style={
                        {
                          fontSize: "calc(19px + 13*(100vw - 320px)/ 2180)",
                        } as CSSProperties
                      }
                    >
                      Eames Institute
                    </span>
                    <span className="mt-3 block pr-1 font-['Monument_Grotesk_Mono'] text-[0.875rem] leading-[1.5rem] md:max-lg:mt-5 3xl:mt-5">
                      Ray and Charles Eames laid the foundation for modern
                      design and created work that has transcended time. With an
                      aspiration to bring the Eameses&apos; timeless
                      methodologies to a modern audience, the Eames Institute
                      enlisted Instrument to co-create a digital platform to
                      unveil their vast collection to the world.
                    </span>
                  </span>
                </Link>
              </div>
              <div className="basis-1/2">
                <Link href="https://www.instrument.com/work/dropbox-award-submission">
                  <span className="w-full">
                    <Image
                      src="/assets/4fourth.avif"
                      alt=""
                      width={2000}
                      height={2000}
                    ></Image>
                  </span>
                  <span className="block gap-10 max-md:mx-[9%] max-md:max-w-[31.5rem] max-lg:md:flex max-3xl:lg:max-w-[31.5rem] 3xl:flex [&>*]:basis-1/2">
                    <span
                      className="mt-5 block font-['Whyte_Medium'] leading-[125%]"
                      style={
                        {
                          fontSize: "calc(19px + 13*(100vw - 320px)/ 2180)",
                        } as CSSProperties
                      }
                    >
                      Dropbox &quot;For All Things Worth Saving&quot;
                    </span>
                    <span className="mt-3 block pr-1 font-['Monument_Grotesk_Mono'] text-[0.875rem] leading-[1.5rem] md:max-lg:mt-5 3xl:mt-5">
                      To evolve and mature how Dropbox engages with their
                      customers, we developed a multi-year brand platform as
                      well as launched its first campaign titled &apos;For All
                      Things Worth Saving&apos; — an ecosystem of branded
                      experiences aimed to remind people of the inherent value
                      of their digital files.
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="flex items-center justify-center">
          <ul className="-px-[4%] flex w-full md:w-[60vw] [&>*]:basis-1/3">
            <li>
              <ImagesCarousel
                images={[
                  "/assets/path.avif",
                  "/assets/ebay.avif",
                  "/assets/samsung.avif",
                  "/assets/nike.avif",
                  "/assets/intercom.avif",
                  "/assets/stumptown.avif",
                  "/assets/yeti.avif",
                  "/assets/sonos.avif",
                  "/assets/dropbox-new.avif",
                ]}
                duration={2000}
              />
            </li>
            <li>
              <ImagesCarousel
                images={[
                  "/assets/levis.avif",
                  "/assets/new-knowledge.avif",
                  "/assets/gopro.avif",
                  "/assets/youtube.avif",
                  "/assets/facebook.avif",
                  "/assets/dwell.avif",
                  "/assets/one-medical.avif",
                  "/assets/netflix.avif",
                  "/assets/xbox.avif",
                ]}
                duration={2000}
                delay={100}
              />
            </li>
            <li>
              <ImagesCarousel
                images={[
                  "/assets/tumblr.avif",
                  "/assets/airbnb.avif",
                  "/assets/specialized.avif",
                  "/assets/spotify.avif",
                  "/assets/mercy-corps.avif",
                  "/assets/umpqua.avif",
                  "/assets/linkedin.avif",
                  "/assets/patagonia.avif",
                  "/assets/google.avif",
                ]}
                duration={2000}
                delay={200}
              />
            </li>
          </ul>
        </div>
        <div>
          <div className="mx-auto mb-[5%] mt-7 max-w-[92%] pb-[10rem] xs:max-w-[84%] xs:text-center md:max-w-[76%] lg:max-w-[68%] 2xl:max-w-[60%]">
            <p
              className="leading-[100%]"
              style={
                {
                  fontSize: "calc(28px + 68*(100vw - 320px)/ 2180)",
                } as CSSProperties
              }
            >
              We&apos;d love to work with you and your team
            </p>
            <div className="mt-7 xs:mt-10">
              <LinkButton href="https://www.instrument.com/contact">
                <span>Get in touch</span>
              </LinkButton>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
