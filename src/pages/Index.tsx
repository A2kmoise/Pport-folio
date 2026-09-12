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
    "alternateName": "Moise Abayo",
    "jobTitle": ["Full-Stack Developer", "Cybersecurity Specialist", "Software Engineer"],
    "description": "Senior Full-Stack Developer and Cybersecurity Expert specializing in React, Spring Boot, NestJS, and penetration testing",
    "url": "https://abmoise.vercel.app",
    "email": "mailto:abayomoise950@gmail.com",
    "image": "https://abmoise.vercel.app/favicon.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kigali",
      "addressCountry": "RW"
    },
    "nationality": {
      "@type": "Country",
      "name": "Rwanda"
    },
    "sameAs": [
      "https://github.com/A2kmoise",
      "https://rw.linkedin.com/in/abayo-moise-3568b7377"
    ],
    "knowsAbout": [
      "Java",
      "Spring Boot",
      "React",
      "React Native",
      "Node.js",
      "NestJS",
      "Penetration Testing",
      "Cybersecurity",
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "MongoDB",
      "Express.js",
      "REST API",
      "Web Security",
      "Swift",
      "iOS Development"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certificate",
        "name": "Introduction to Cybersecurity",
        "issuedBy": {
          "@type": "Organization",
          "name": "Cisco"
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ABAYO Moise Portfolio",
    "alternateName": "AB Moise Portfolio",
    "url": "https://abmoise.vercel.app",
    "description": "Professional portfolio showcasing full-stack development projects and cybersecurity expertise",
    "author": {
      "@type": "Person",
      "name": "ABAYO Moise"
    },
    "inLanguage": "en-US",
    "copyrightYear": 2026,
    "copyrightHolder": {
      "@type": "Person",
      "name": "ABAYO Moise"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ABAYO Moise - Software Development Services",
    "description": "Professional full-stack development and cybersecurity consulting services",
    "provider": {
      "@type": "Person",
      "name": "ABAYO Moise"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full-Stack Web Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Backend API Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cybersecurity Consulting"
          }
        }
      ]
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

