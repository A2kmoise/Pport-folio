import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Award, Lock, Eye, ExternalLink } from "lucide-react";

const Certifications = () => {
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
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Cybersecurity Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials demonstrating security expertise and commitment to best practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-tech-security/50 transition-all duration-300 hover:shadow-glow group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-primary opacity-10 rounded-bl-full" />
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  {cert.verified && (
                    <Badge variant="secondary" className="bg-success/20 text-success border-success/30">
                      <Award className="w-3 h-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-card-foreground">{cert.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  <span className="font-medium">{cert.issuer}</span> • {cert.date}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-foreground/80">{cert.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="outline"
                      className="border-tech-security/30 text-tech-security hover:bg-tech-security/10 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full mt-4 text-primary hover:text-primary-glow hover:bg-primary/10"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Continuously learning and staying updated with the latest security trends and technologies
          </p>
          <Button variant="outline" className="border-primary/50 hover:border-primary">
            View All Certifications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;