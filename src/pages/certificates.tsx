import React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Award, Lock, Eye } from "lucide-react";
import intro_Cyber from "../assets/intro-Cyber.png";

const CertificatePage = () => {
  const navigate = useNavigate();

  const certificates = [
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
      date: "2025",
      icon: <Shield className="w-6 h-6 text-tech-security" />,
      description: "Advanced understanding on Cybersecurity and improved skills on Ethical hacking",
      image: intro_Cyber
    },
  ];

  return (
    <div className="min-h-screen px-6 py-24 bg-background text-foreground relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="mb-16 text-[10px] tracking-[0.3em] uppercase text-primary hover:text-primary/70 font-medium transition-all duration-300 flex items-center gap-4 group"
        >
          <span className="group-hover:-translate-x-2 transition-transform duration-500">←</span>
          BACK TO PORTFOLIO
        </button>

        <div className="text-center mb-24 animate-fade-in">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">
            Credentials
          </p>
          <h1 className="text-5xl sm:text-7xl font-serif text-primary mb-8 tracking-tight">
            CyberSecurity <span className="italic opacity-80">Certifications</span>
          </h1>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-8" />
          <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed font-light text-xl italic">
            "A commitment to excellence and continuous technical advancement."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Certificate Image Box */}
              <div className="relative overflow-hidden mb-8 border border-primary/10 group-hover:border-primary/40 transition-all duration-1000">
                <div className="aspect-[4/3]">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-1000 ease-in-out"
                  />
                </div>
                <div className="absolute inset-0 bg-background/5 opacity-80 group-hover:opacity-0 transition-opacity duration-1000" />
              </div>

              {/* Certificate Details */}
              <div className="space-y-6 px-2">
                <div className="flex items-start justify-between border-b border-primary/10 pb-4">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-serif italic text-primary group-hover:text-primary transition-colors duration-500 leading-tight">
                      {cert.title}
                    </h2>
                    <p className="text-[10px] tracking-[0.2em] uppercase font-medium text-foreground/40">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                  <div className="text-primary/40 group-hover:text-primary transition-colors duration-500">
                    {/* Applying primary color to the icon */}
                    {Object.assign({}, cert.icon, {
                      props: { ...cert.icon.props, className: "w-8 h-8" }
                    })}
                  </div>
                </div>

                <p className="text-foreground/60 leading-relaxed font-sans text-lg italic pr-8">
                  {cert.description}
                </p>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-success/70 flex items-center gap-3">
                    <Award className="w-4 h-4" />
                    VERIFIED CREDENTIAL
                  </span>

                  <button className="text-[10px] tracking-[0.3em] uppercase font-bold text-primary/60 hover:text-primary transition-colors duration-300">
                    VIEW ORIGINAL
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
