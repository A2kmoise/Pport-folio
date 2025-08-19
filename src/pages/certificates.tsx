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
    <div className="min-h-screen px-4 py-8 sm:py-16 bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <button
          className="mb-6 text-sm text-primary underline hover:text-primary/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
          onClick={() => navigate(-1)}
          aria-label="Go back to previous page"
        >
          ← Go Back
        </button>

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            My Cybersecurity Certificates
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Here you can find a selection of my cybersecurity certificates,
            showcasing my skills and expertise in this field.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="border border-primary/20 rounded-lg p-4 sm:p-6 bg-card transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/40 group h-full flex flex-col"
            >
              <div className="mb-3 flex flex-col sm:flex-row sm:items-center sm:gap-3">
                <div className="group-hover:scale-110 transition-transform duration-300 mb-2 sm:mb-0">
                  {cert.icon}
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-primary mb-1">
                    {cert.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              </div>
               <img
                src={cert.image}
                alt={cert.title}
                className="rounded-md border border-border/30 shadow-sm max-w-full h-auto mb-3"
              />
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                {cert.description}
              </p>
              <div className="mt-4 pt-3 border-t border-border/50">
                <span className="text-xs bg-success/20 text-success px-2 py-1 rounded-full border border-success/30">
                  <Award className="w-3 h-3 inline mr-1" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
