import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { useState, useEffect } from "react";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative">
      <section id="home">
        <Hero />
      </section>

      <section id="skills">
        <Skills />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <Stats />
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact
          isModalOpen={isContactModalOpen}
          setIsModalOpen={setIsContactModalOpen}
        />
      </section>
    </div>
  );
};

export default Index;
