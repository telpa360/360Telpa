import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import UseCases from "@/components/UseCases";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Services />
        <UseCases />
        <Process />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
