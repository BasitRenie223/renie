import Head from "next/head";
import Footer from "@/components/Navbar/Footer";
import Banner from "@/components/Banner/Banner";
import HowItWork from "@/components/HowItWorks/HowItWork";
import MiniFooter from "@/components/Navbar/MiniFooter";
import Navbar from "@/components/Navbar/Navbar";
import Section3 from "@/components/Section3";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import RenieBin from "@/components/RenieBin";

export default function Home() {
  return (
    <>
      <Head>
        <title>Transform your waste into income</title>
        <meta name="description" content="Transform your waste into income" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Navbar />
      </section>

      <section className="section section-1">
        <Banner />
      </section>

      <section id="how-it-works" className="section section-2">
        <HowItWork />
      </section>

      <section className=" scroll-section-outer">
        <Section3 />
      </section>

      <section className="section section-4">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/aAoVks4P7dU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>

      <section>
        <Section5 />
      </section>

      <section className="renie-software-section">
        <Section6 />
      </section>

      <section className="new-section">
        <RenieBin />
      </section>

      <section className=" section-8">
        <Footer />
      </section>
      <MiniFooter />
    </>
  );
}
