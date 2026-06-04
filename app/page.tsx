import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
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
        <Services />
        <GoogleMaps />
        <TourEmbedSection />
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
