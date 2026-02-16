import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import About from "@/components/About";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Office from "@/components/Office";


export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Services />
       <About />
      <Office />
      <CTA />
      <FAQ />
      
    </main>
  );
}
