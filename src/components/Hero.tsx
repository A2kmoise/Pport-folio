import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.jpg";
import ContactModal from "./ContactModal";
import { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-24 sm:pt-32 pb-10">

      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/85" />

      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50 animate-pulse animation-delay-2000" />

      {/* Floating animated shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 border border-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-32 left-10 w-48 h-48 border border-accent/20 rounded-full animate-float animation-delay-1000" style={{ animationDirection: 'reverse' }} />

      <div className="relative z-10 container max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-6 mb-8 md:mb-8 animate-float">
          <div className="order-2 md:order-1">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight tracking-tight" style={{ animationDuration: '3s' }}>
              ABAYO Moise
            </h1>
          </div>
          <img
            src={profileImage}
            alt="ABAYO Moise - Full-Stack Developer and Cybersecurity Expert"
            className="order-1 md:order-2 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full object-cover border-4 border-primary shadow-2xl hover:shadow-glow-lg transition-all duration-300 ring-4 ring-primary/20"
          />
        </div>

        <div className="animate-fade-in animation-delay-300">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-4 bg-gradient-primary bg-clip-text text-transparent leading-tight tracking-tight hover:animate-pulse transition-all duration-300 cursor-default">
            Full-Stack Developer
          </h2>
          <h3 className="text-lg sm:text-2xl md:text-3xl text-primary/80 mb-6 md:mb-8 font-semibold animate-fade-in animation-delay-500">
            & Cybersecurity Expert
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-foreground/85 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 font-light hover:text-foreground transition-colors duration-300">
            Crafting secure, scalable solutions with modern technologies.
            <br className="hidden md:block" />
            From React frontends to Spring Boot backends, with a security-first mindset.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-14 px-4 animate-fade-in animation-delay-500">
          <Button
            variant="hero"
            size="lg"
            className="animate-glow-pulse w-full sm:w-auto shadow-lg hover:shadow-glow-lg transition-all duration-300 text-base font-semibold px-8 hover:-translate-y-1"
            asChild
          >
            <a href="/CV.pdf" download aria-label="Download CV">
              <Download className="w-5 h-5 mr-2 animate-bounce" style={{ animationDuration: '1.5s' }} />
              Download CV
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary/60 hover:border-primary hover:bg-primary/10 w-full sm:w-auto transition-all duration-300 text-base font-semibold px-8 hover:-translate-y-1"
            onClick={() => setIsModalOpen(true)}
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
        </div>

        <div className="flex gap-5 sm:gap-8 justify-center animate-fade-in animation-delay-700">
          <a
            href="https://github.com/A2kmoise"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-full"
          >
            <Button variant="ghost" size="icon" className="w-12 h-12 hover:text-primary hover:bg-primary/10 hover:scale-125 transition-all duration-300 hover:-translate-y-2">
              <Github className="w-6 h-6 hover:animate-bounce" style={{ animationDuration: '0.8s' }} />
            </Button>
          </a>
          <a
            href="https://rw.linkedin.com/in/abayo-moise-3568b7377"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-full"
          >
            <Button variant="ghost" size="icon" className="w-12 h-12 hover:text-primary hover:bg-primary/10 hover:scale-125 transition-all duration-300 hover:-translate-y-2">
              <Linkedin className="w-6 h-6 hover:animate-bounce" style={{ animationDuration: '0.8s' }} />
            </Button>
          </a>
          <a
            href="mailto:abayomoise950@gmail.com"
            aria-label="Send Email"
            className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-full"
          >
            <Button variant="ghost" size="icon" className="w-12 h-12 hover:text-primary hover:bg-primary/10 hover:scale-125 transition-all duration-300 hover:-translate-y-2">
              <Mail className="w-6 h-6 hover:animate-bounce" style={{ animationDuration: '0.8s' }} />
            </Button>
          </a>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
