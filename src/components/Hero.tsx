import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";  
import heroImage from "@/assets/hero-bg.jpg"; 
import profileImage from "@/assets/profile.jpg";
import ContactModal from "./ContactModal";  
import { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />

      <div className="relative z-10 container max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="animate-float flex flex-col items-center md:flex-row md:justify-center gap-4 mb-8 md:mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
            ABAYO Moise
          </h1>
          <img 
            src={profileImage} 
            alt="ABAYO Moise - Full-Stack Developer and Cybersecurity Expert" 
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary shadow-lg"
          />
        </div>

        <div className="animate-float">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Full-Stack Developer
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4 md:mb-6">
            & Cybersecurity Expert
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-foreground/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
            Crafting secure, scalable solutions with modern technologies. 
            From React frontends to Spring Boot backends, with a security-first mindset.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 md:mb-12 px-4">
          <Button 
            variant="hero" 
            size="lg" 
            className="animate-glow-pulse w-full sm:w-auto"
            asChild
          >
            <a href="/CV.pdf" download aria-label="Download CV">
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </Button>

          <Button 
            variant="outline" 
            size="lg" 
            className="border-primary/50 hover:border-primary w-full sm:w-auto"
            onClick={() => setIsModalOpen(true)}
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </Button>
        </div>

        <div className="flex gap-4 sm:gap-6 justify-center">
          <a 
            href="https://github.com/A2kmoise" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile"
            className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-full"
          >
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-300">
              <Github className="w-6 h-6" />
            </Button>
          </a>
          <a 
            href="https://rw.linkedin.com/in/abayo-moise-3568b7377" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile"
            className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-full"
          >
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-300">
              <Linkedin className="w-6 h-6" />
            </Button>
          </a>
          <a 
            href="mailto:abayomoise950@gmail.com" 
            aria-label="Send Email"
            className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-full"
          >
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all duration-300">
              <Mail className="w-6 h-6" />
            </Button>
          </a>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
