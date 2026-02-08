import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.jpg";
import ContactModal from "./ContactModal";
import { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-20">
      {/* Refined Background Treatment */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 filter grayscale contrast-125"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Elegant minimalist accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 container max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">

        {/* Profile Column */}
        <div className="md:col-span-5 order-2 md:order-1 flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute -inset-4 border border-primary/20 scale-95 group-hover:scale-100 transition-transform duration-700" />
            <div className="absolute -inset-2 border border-primary/40 scale-90 group-hover:scale-105 transition-transform duration-700 delay-100" />

            <div className="relative w-64 h-80 sm:w-72 sm:h-96 overflow-hidden">
              <img
                src={profileImage}
                alt="ABAYO Moise"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-110 hover:scale-100"
              />
            </div>
          </div>
        </div>

        {/* Text Content Column */}
        <div className="md:col-span-7 order-1 md:order-2 text-center md:text-left space-y-8">
          <div className="space-y-4">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm animate-fade-in">
              Portfolio
            </p>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif text-primary leading-[1.1] animate-fade-in animation-delay-300">
              ABAYO <br />
              <span className="italic opacity-90">Moise</span>
            </h1>
          </div>

          <div className="space-y-6 animate-fade-in animation-delay-500">
            <div className="inline-block relative">
              <h2 className="text-2xl sm:text-3xl font-serif italic text-foreground/90">
                Full-Stack Developer <span className="mx-2 not-italic text-primary/30">|</span> Cybersecurity Enthusiast
              </h2>
              <div className="absolute -bottom-2 left-0 w-12 h-px bg-primary" />
            </div>

            <div className="space-y-4">
              <p className="text-primary font-serif italic text-xl tracking-wide flex items-center gap-3">
                Secure. Scalable. Battle-tested.
              </p>

              <p className="text-lg text-foreground/70 max-w-xl leading-relaxed font-light font-sans">
              Java & Spring Boot specialist with hands-on penetration testing expertise, delivering high-performance backends and secure React-driven digital experiences.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-4 animate-fade-in animation-delay-700">
            <Button
              variant="default"
              size="lg"
              className="group rounded-none px-10 h-14 bg-primary text-primary-foreground hover:bg-primary/80 transition-all duration-500"
              asChild
            >
              <a href="/CV.pdf" download>
                DOWNLOAD CV
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-none px-10 h-14 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 tracking-wider"
              onClick={() => setIsModalOpen(true)}
            >
              GET IN TOUCH
            </Button>
          </div>

          <div className="flex gap-8 pt-8 animate-fade-in animation-delay-1000">
            {[
              { icon: Github, href: "https://github.com/A2kmoise" },
              { icon: Linkedin, href: "https://rw.linkedin.com/in/abayo-moise-3568b7377" },
              { icon: Mail, href: "mailto:abayomoise950@gmail.com" }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-foreground/40 hover:text-primary transition-colors duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
