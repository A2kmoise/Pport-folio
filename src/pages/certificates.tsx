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
    <div className="min-h-screen px-4 py-8 sm:py-16 bg-background text-foreground relative overflow-hidden pt-20 sm:pt-24">
      <div className="absolute top-20 right-0 w-96 h-96 bg-tech-security/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <button
          className="mt-20 sm:mt-24 mb-8 text-sm text-primary hover:text-primary-glow font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded px-3 py-2 hover:bg-primary/10 group"
          onClick={() => navigate(-1)}
          aria-label="Go back to previous page"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span> Go Back
        </button>

        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-primary leading-tight tracking-tight">
            Cybersecurity Certificates
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Here you can find a selection of my cybersecurity certificates,
            showcasing my skills and expertise in this field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl p-6 sm:p-8 transition-all duration-500 hover:border-tech-security/60 hover:shadow-tech-security/20 h-full flex flex-col overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-tech-security/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-6 flex flex-col sm:flex-row sm:items-start sm:gap-4">
                  <div className="p-3 bg-tech-security/20 rounded-lg group-hover:scale-120 group-hover:bg-tech-security/30 transition-all duration-500 flex-shrink-0 w-fit">
                    {cert.icon}
                  </div>
                  <div className="mt-4 sm:mt-0 flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-2">
                      {cert.title}
                    </h2>
                    <p className="text-sm text-muted-foreground font-medium">
                      <span className="text-foreground font-semibold">{cert.issuer}</span> • {cert.date}
                    </p>
                  </div>
                </div>

                <div className="mb-6 overflow-hidden rounded-lg border border-border/30">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <p className="text-sm text-foreground/85 leading-relaxed flex-grow font-light mb-6">
                  {cert.description}
                </p>

                <div className="pt-6 border-t border-border/50">
                  <span className="text-xs bg-success/25 text-success px-4 py-2 rounded-full border border-success/40 font-semibold inline-flex items-center gap-2">
                    <Award className="w-3.5 h-3.5" />
                    Verified Certificate
                  </span>
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
