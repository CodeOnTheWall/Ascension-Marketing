import Hero from "./Hero/Hero";
import About from "./[components]/About/About";
import Services from "./[components]/Services/Services";
import FAQ from "./[components]/FAQS/FAQ";
import Contact from "@/app/[components]/Contact";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* About Us */}
      <section id="about">
        <About />
      </section>

      {/* Services*/}
      <section id="services">
        <Services />
      </section>

      {/* Eventually: Reviews and Testimonials */}

      {/* FAQ's */}
      <section id="FAQ">
        <FAQ />
      </section>

      {/* Contact Me */}
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}
