import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import ContactForm from "./ContactForm";

interface ContactProps {
  isModalOpen?: boolean;
  setIsModalOpen?: (open: boolean) => void;
}

const Contact = ({ isModalOpen = false, setIsModalOpen = () => { } }: ContactProps) => {
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
    <section className="py-8 sm:py-10 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent leading-tight tracking-tight">
            Let's Connect
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Ready to collaborate on your next project or discuss cybersecurity challenges
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left side - Contact Methods */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="bg-card/40 backdrop-blur-md border border-border/50 hover:border-primary/60 transition-all duration-500 hover:shadow-glow group overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardContent className="p-4 relative z-10 h-full flex flex-col justify-center">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-500 flex-shrink-0">
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-card-foreground text-sm sm:text-base">{method.title}</h3>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200 text-xs sm:text-sm break-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${method.title}: ${method.value}`}
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-xs sm:text-sm">{method.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right side - Contact Form */}
          <div className="flex items-start">
            <ContactForm className="w-full animate-fade-in animation-delay-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;