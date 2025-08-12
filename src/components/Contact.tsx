import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const Contact = () => {
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
      value: "https://linkedin.com/in/ABAYO Moise",
      href: "https://linkedin.com/in/ABAYO Moise"
    },
    {
      icon: <Github className="w-6 h-6 text-primary" />,
      title: "GitHub",
      value: "github.com/A2kdev",
      href: "https://github.com/A2kdev"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Location",
      value: "Bugesera, Rwanda",
      href: null
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project or discuss cybersecurity challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-card-foreground">{method.title}</h3>
                    {method.href ? (
                      <a 
                        href={method.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{method.value}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="bg-card/30 backdrop-blur-sm border-border">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-card-foreground">Ready to Start a Project?</CardTitle>
            <CardDescription className="text-muted-foreground">
              Whether you need a full-stack application, security audit, or need to hire me for any software engineering job.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Mail className="w-5 h-5" />
                Send Message
              </Button>
              <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary">
                <Phone className="w-5 h-5" />
                Schedule Call
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;