import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import GoogleMaps from "@/components/GoogleMaps";
import TourEmbedSection from "@/components/TourEmbedSection";
import UseCases from "@/components/UseCases";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <TourEmbedSection />
        <Services />
        <Pricing />
        <Faq />
        <GoogleMaps />
        <UseCases />
        <Process />
        <Benefits />
        <Contact />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
