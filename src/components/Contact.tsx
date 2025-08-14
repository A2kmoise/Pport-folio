import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      value: "abayomoise950@gmail.com",
      href: "mailto:abayomoise950@gmail.com"
    },
    {
      icon: <Linkedin className="w-6 h-6 text-primary" />,
      title: "LinkedIn",
      value: "linkedin.com/in/abayo-moise",
      href: "https://rw.linkedin.com/in/abayo-moise-3568b7377"
    },
    {
      icon: <Github className="w-6 h-6 text-primary" />,
      title: "GitHub",
      value: "github.com/A2kmoise",
      href: "https://github.com/A2kmoise"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Location",
      value: "Bugesera, Rwanda",
      href: null
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-secondary">
      <div className="container max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Let's Connect
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on your next project or discuss cybersecurity challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group h-full"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {method.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-card-foreground text-sm sm:text-base mb-1">{method.title}</h3>
                    {method.href ? (
                      <a 
                        href={method.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm break-all"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${method.title}: ${method.value}`}
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm">{method.value}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-card/30 backdrop-blur-sm border-border">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl sm:text-2xl text-card-foreground mb-2">Ready to Start a Project?</CardTitle>
            <CardDescription className="text-muted-foreground leading-relaxed">
              Whether you need a full-stack application, security audit, or need to hire me for any software engineering job.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center pt-0">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto"
              >
                <Mail className="w-5 h-5" />
                Send Message
              </Button>

              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/50 hover:border-primary transition-all duration-200 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" />
                Schedule Call
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Contact;