import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Award, Lock, Eye, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Certifications = () => {
  const navigate = useNavigate();
  const certifications = [
    {
      icon: <Shield className="w-8 h-8 text-tech-security" />,
      title: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      date: "2024",
      description: "Advanced penetration testing and vulnerability assessment skills",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Network Security", "Web Application Security"],
      verified: true
    },
    {
      icon: <Lock className="w-8 h-8 text-tech-security" />,
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2023",
      description: "Foundation-level cybersecurity knowledge and practical skills",
      skills: ["Risk Management", "Cryptography", "Identity Management", "Network Security"],
      verified: true
    },
    {
      icon: <Eye className="w-8 h-8 text-tech-security" />,
      title: "CISSP Associate",
      issuer: "(ISC)²",
      date: "2024",
      description: "Information security leadership and architecture expertise",
      skills: ["Security Architecture", "Asset Security", "Security Engineering", "Risk Assessment"],
      verified: true
    },
    {
      icon: <Award className="w-8 h-8 text-tech-security" />,
      title: "AWS Security Specialty",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Cloud security architecture and best practices",
      skills: ["Cloud Security", "AWS IAM", "Data Protection", "Incident Response"],
      verified: true
    }
  ];

  return (
    <section className="py-12 sm:py-14 bg-background relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-tech-security/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-10 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent leading-tight tracking-tight">
            Cybersecurity Certifications
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Industry-recognized credentials demonstrating security expertise and commitment to best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-card/40 backdrop-blur-md border border-border/50 hover:border-tech-security/60 transition-all duration-500 hover:shadow-glow group relative overflow-hidden h-full animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-tech-security/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-tech-security/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="pb-2 sm:pb-3 relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <div className="p-2 bg-tech-security/20 rounded-lg group-hover:scale-110 group-hover:bg-tech-security/30 transition-all duration-500">
                    {cert.icon}
                  </div>
                  {cert.verified && (
                    <Badge variant="secondary" className="bg-success/30 text-success border border-success/50 text-xs font-semibold px-2 py-0.5">
                      <Award className="w-2 h-2 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg sm:text-xl text-card-foreground mb-1 font-bold">{cert.title}</CardTitle>
                <CardDescription className="text-xs sm:text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{cert.issuer}</span> <span className="text-muted-foreground">• {cert.date}</span>
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0 space-y-2 sm:space-y-3 relative z-10">
                <p className="text-xs text-foreground/85 leading-relaxed font-light">{cert.description}</p>

                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="border-tech-security/40 text-tech-security bg-tech-security/10 hover:bg-tech-security/20 hover:shadow-md transition-all duration-200 text-xs font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full mt-2 text-tech-security hover:text-tech-security hover:bg-tech-security/15 transition-all duration-300 font-medium text-xs"
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 animate-fade-in">
          <p className="text-muted-foreground mb-4 leading-relaxed text-xs sm:text-sm font-light">
            Continuously learning and staying updated with the latest security trends and technologies
          </p>
          <Button
            variant="hero"
            size="sm"
            className="font-semibold px-5 py-2 text-xs shadow-lg hover:shadow-glow-lg transition-all duration-300"
            onClick={() => navigate("/certificates")}
          >
            <Award className="w-3 h-3 mr-1" />
            View All Certifications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;