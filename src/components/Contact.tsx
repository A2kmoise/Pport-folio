import { Card, CardContent } from "@/components/ui/card";
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
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">
            Contact
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-primary mb-6">
            Let's Start a <span className="italic">Conversation</span>
          </h2>
          <div className="w-20 h-px bg-primary/30 mx-auto mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed font-light text-lg">
            Whether for collaboration or a security audit, reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left side - Contact Methods */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-6 p-6 border-l border-primary/10 group-hover:border-primary transition-all duration-700">
                  <div className="text-primary/40 group-hover:text-primary transition-colors duration-500">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[10px] tracking-[0.3em] font-medium text-foreground/40 uppercase mb-1">{method.title}</h3>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-foreground/70 hover:text-primary transition-all duration-300 font-serif italic text-lg truncate block"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-foreground/70 font-serif italic text-lg">{method.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm className="w-full animate-fade-in animation-delay-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;