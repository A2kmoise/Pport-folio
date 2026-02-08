import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Award, Lock, Eye, ExternalLink, ArrowRight } from "lucide-react";
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
    <section id="certifications" className="py-24 bg-background relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">
            Recognition
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-primary mb-6">
            CyberSecurity <span className="italic opacity-80">Certifications</span>
          </h2>
          <div className="w-20 h-px bg-primary/30 mx-auto mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed font-light text-lg">
            Professional credentials in cybersecurity and cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-none hover:border-primary/40 transition-all duration-700 group relative overflow-hidden h-full animate-fade-in shadow-none"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4 relative z-10 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors duration-500">
                    {Object.assign({}, cert.icon, {
                      props: { ...cert.icon.props, className: "w-6 h-6 text-primary opacity-80 group-hover:opacity-100 transition-all duration-500" }
                    })}
                  </div>
                  {cert.verified && (
                    <Badge variant="outline" className="rounded-none border-primary/20 text-primary text-[10px] tracking-widest uppercase font-medium px-3 py-1">
                      VERIFIED
                    </Badge>
                  )}
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-2xl font-serif italic text-foreground group-hover:text-primary transition-colors duration-500">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/50 leading-relaxed font-sans text-sm">
                    <span className="text-primary/70">{cert.issuer}</span> • {cert.date}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="pb-8 relative z-10 space-y-6">
                <p className="text-foreground/60 leading-relaxed font-sans text-sm italic">
                  "{cert.description}"
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="rounded-none bg-transparent text-foreground/70 border-primary/10 group-hover:border-primary/30 transition-all duration-500 px-3 py-1 text-[10px] tracking-widest uppercase font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full rounded-none border border-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 tracking-widest text-[10px] h-12 uppercase"
                >
                  <ExternalLink className="w-3 h-3 mr-2" />
                  View Certification
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button
            variant="outline"
            size="lg"
            className="rounded-none px-12 h-14 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 tracking-wider text-xs"
            onClick={() => navigate("/certificates")}
          >
            ALL CREDENTIALS
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;