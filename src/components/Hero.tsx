import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profileImage from "@/assets/profile.jpg";
import ContactModal from "./ContactModal";
import { useState } from "react";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-32 sm:pt-20">
      {/* Refined Background Treatment */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 filter grayscale contrast-125"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 container max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">

        {/* Profile Column */}
        <div className="md:col-span-5 order-1 md:order-1 flex justify-center md:justify-end">
          <div className="relative group">
            {/* Decorative minimalist accents for photo */}
            <div className="absolute -inset-4 border border-primary/20 scale-95 group-hover:scale-100 transition-transform duration-700" />
            <div className="absolute -inset-2 border border-primary/40 scale-90 group-hover:scale-105 transition-transform duration-700 delay-100" />

            <div className="relative w-64 h-80 sm:w-72 sm:h-96 overflow-hidden">
              <img
                src={profileImage}
                alt="ABAYO Moise"
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 sm:scale-110 hover:scale-100"
              />
            </div>
          </div>
        </div>

        {/* Text Content Column */}
        <div className="md:col-span-7 order-2 md:order-2 text-center md:text-left space-y-8">
          <div className="space-y-4">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm animate-fade-in">
              Portfolio
            </p>
            <h1 className="text-[2.5rem] xs:text-5xl sm:text-7xl lg:text-8xl font-serif text-primary leading-[1.1] animate-fade-in animation-delay-300">
              ABAYO <br />
              <span className="italic opacity-90">Moise</span>
            </h1>
          </div>

          <div className="space-y-6 animate-fade-in animation-delay-500">
            <div className="inline-block relative">
              <h2 className="text-xl sm:text-3xl font-serif italic text-foreground/90">
                Full-Stack Developer <span className="mx-2 not-italic text-primary/30">|</span> Cybersecurity Enthusiast
              </h2>
              {/* Optional: Add back the small line under title if requested, but user said 'lines on photo only' mostly. I'll stick to photo lines. Wait, user said 'put those lines you used earlier on the photo only' which implies removing them from elsewhere and putting them there. I already removed them from elsewhere. */}
            </div>

            <div className="space-y-4">
              <p className="text-lg sm:text-primary sm:font-serif sm:italic sm:text-xl tracking-wide flex items-center justify-center md:justify-start gap-3">
                Secure. Scalable. Battle-tested.
              </p>

              <p className="text-base sm:text-lg text-foreground/70 max-w-xl leading-relaxed font-light font-sans">
                Java & Spring Boot specialist with hands-on penetration testing expertise, delivering high-performance backends and secure React-driven digital experiences.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 animate-fade-in animation-delay-700">
            <Button
              variant="default"
              size="lg"
              className="group rounded-none px-10 h-14 bg-primary text-primary-foreground hover:bg-primary/80 transition-all duration-500 w-full sm:w-auto"
              asChild
            >
              <a href="/Professional CV.pdf" download>
                DOWNLOAD CV
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-none px-10 h-14 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 tracking-wider w-full sm:w-auto"
              onClick={() => setIsModalOpen(true)}
            >
              GET IN TOUCH
            </Button>
          </div>

          <div className="flex justify-center md:justify-start gap-8 pt-8 animate-fade-in animation-delay-1000">
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
