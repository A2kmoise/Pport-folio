import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import SEO from "@/components/SEO";
import { useState } from "react";

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "ABAYO Moise",
    "jobTitle": "Full-Stack Developer & Cybersecurity Specialist",
    "url": "https://abmoise.vercel.app",
    "email": "mailto:abayomoise950@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kigali",
      "addressCountry": "Rwanda"
    },
    "sameAs": [
      "https://github.com/A2kmoise",
      "https://rw.linkedin.com/in/abayo-moise-3568b7377"
    ],
    "knowsAbout": [
      "Java",
      "Spring Boot",
      "React",
      "Node.js",
      "NestJS",
      "Penetration Testing",
      "Cybersecurity",
      "TypeScript",
      "PostgreSQL"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ABAYO Moise Portfolio",
    "url": "https://abmoise.vercel.app",
    "author": {
      "@type": "Person",
      "name": "ABAYO Moise"
    }
  }
];

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative">
      <SEO
        title="ABAYO Moise | Senior Full-Stack Developer & Cybersecurity Expert"
        description="Explore the portfolio of ABAYO Moise — Full-Stack Developer & Cybersecurity Specialist specializing in secure React, Spring Boot, and NestJS web applications."
        jsonLd={homeJsonLd}
      />
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

