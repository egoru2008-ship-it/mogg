import { About } from "@/components/site/about";
import { Contacts } from "@/components/site/contacts";
import { DownloadButton } from "@/components/site/download-button";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Marquee } from "@/components/site/marquee";
import { Pricing } from "@/components/site/pricing";
import { Programs } from "@/components/site/programs";
import { Schedule } from "@/components/site/schedule";
import { Testimonials } from "@/components/site/testimonials";
import { Trainers } from "@/components/site/trainers";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Programs />
        <Trainers />
        <Pricing />
        <Schedule />
        <Testimonials />
        <Contacts />
      </main>
      <Footer />
      <DownloadButton />
    </>
  );
}
