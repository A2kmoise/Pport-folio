import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LayoutDashboard, ServerCog, Smartphone, Boxes, Cloud, ShieldCheck, Zap, LayoutDashboardIcon, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const navigate = useNavigate();
  const techStacks = [
    {
      icon: <LayoutDashboardIcon className="w-10 h-10 text-tech-react" />,
      title: "Frontend Development",
      description: "Building responsive, interactive user interfaces",
      skills: ["React", "TypeScript", "Tailwind CSS", "Bootstrap CSS", "Next.js", "Redux"],
      color: "tech-react"
    },
    {
      icon: <ServerCog className="w-10 h-10 text-tech-node" />,
      title: "Backend Development",
      description: "Scalable server-side applications and APIs",
      skills: ["Express.js", "Node.js", "RESTful APIs", "GraphQL", "WebSocket", "PHP", "Laravel", "Django"],
      color: "tech-node"
    },
    {
      icon: <Smartphone className="w-10 h-10 text-tech-nest" />,
      title: "Mobile Development",
      description: "Cross-platform and native mobile applications",
      skills: ["React Native", "Swift", "Expo"],
      color: "tech-nest"
    },
    {
      icon: <Boxes className="w-10 h-10 text-tech-spring" />,
      title: "Enterprise Frameworks",
      description: "Enterprise-grade applications and microservices",
      skills: ["NestJS", "Spring Boot", "Java", "Microservices", "Docker"],
      color: "tech-spring"
    },
    {
      icon: <Cloud className="w-10 h-10 text-tech-security" />,
      title: "Database & Infrastructure",
      description: "Data management and cloud deployment",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "AWS", "Google Cloud"],
      color: "tech-security"
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: "Cybersecurity",
      description: "Security-first development and infrastructure hardening",
      skills: ["Ethical Hacking", "Penetration Testing", "Security Audits"],
      color: "primary"
    }
  ];


  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/5 to-transparent" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">
            Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif text-primary mb-6">
            Technical Proficiency
          </h2>
          <div className="w-20 h-px bg-primary/30 mx-auto mb-6" />
          <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed font-light text-lg">
            A comprehensive suite of tools and frameworks for modern enterprise development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {techStacks.map((stack, index) => (
            <Card
              key={index}
              className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-none hover:border-primary/40 transition-all duration-700 group h-full overflow-hidden animate-fade-in shadow-none"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4 relative z-10 space-y-4">
                <div className="w-14 h-14 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-colors duration-500">
                  {/* Clone icon to apply primary color */}
                  {Object.assign({}, stack.icon, {
                    props: { ...stack.icon.props, className: "w-6 h-6 text-primary opacity-80 group-hover:opacity-100 transition-all duration-500" }
                  })}
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-xl font-serif italic text-foreground group-hover:text-primary transition-colors duration-500">
                    {stack.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/50 leading-relaxed font-sans text-sm">
                    {stack.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pb-8 relative z-10">
                <div className="flex flex-wrap gap-2 mt-2">
                  {stack.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="rounded-none bg-transparent text-foreground/70 border-primary/10 group-hover:border-primary/30 transition-all duration-500 px-3 py-1 text-[10px] tracking-widest uppercase font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button
            variant="outline"
            size="lg"
            className="rounded-none px-12 h-14 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 tracking-wider text-xs"
            onClick={() => navigate("/projects")}
          >
            VIEW FULL PORTFOLIO
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Skills;