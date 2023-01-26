import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className=" h-screen snap-y snap-mandatory overflow-scroll z-0">
      {/* Header - located in layout */}
      {/* <div className="animate-[wiggle_1s_ease-in-out_infinite]">hi</div> */}

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About Us */}
      <section id="about" className=" snap-center">
        <About />
      </section>

      {/* Services*/}
      <section id="services" className=" snap-center">
        <Services />
      </section>

      {/* Eventually: Reviews and Testimonials */}

      {/* FAQ's */}
      <section id="FAQ" className=" snap-center">
        <FAQ />
      </section>

      {/* Contact Me */}
      <section id="contact" className=" snap-center">
        <Contact />
      </section>
    </div>
  );
}
