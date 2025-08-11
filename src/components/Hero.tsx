import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Full-Stack Developer
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
            & Cybersecurity Expert
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting secure, scalable solutions with modern technologies. 
            From React frontends to Spring Boot backends, with a security-first mindset.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button variant="hero" size="lg" className="animate-glow-pulse">
            <Download className="w-5 h-5" />
            Download CV
          </Button>
          <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary">
            <Mail className="w-5 h-5" />
            Contact Me
          </Button>
        </div>
        
        <div className="flex gap-6 justify-center">
          <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
            <Github className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
            <Linkedin className="w-6 h-6" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
            <Mail className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;