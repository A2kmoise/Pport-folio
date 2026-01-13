import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LayoutDashboard, ServerCog, Smartphone, Boxes, Cloud, ShieldCheck, Zap, LayoutDashboardIcon } from "lucide-react";
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
    <section className="py-12 sm:py-14 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-10 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-primary leading-tight tracking-tight">
            Skills & Expertise
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Full-stack proficiency across modern web technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {techStacks.map((stack, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border border-border/40 hover:border-primary/60 transition-all duration-500 hover:shadow-glow group h-full overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="pb-2 sm:pb-3 relative z-10">
                <div className="mb-2 flex justify-center group-hover:scale-110 transition-transform duration-500">
                  {stack.icon}
                </div>
                <CardTitle className="text-base sm:text-lg text-card-foreground mb-1 font-bold text-center">{stack.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed text-xs text-center">
                  {stack.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 relative z-10">
                <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                  {stack.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15 hover:border-primary/35 hover:shadow-sm transition-all duration-200 text-xs font-medium"
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
            variant="hero"
            size="sm"
            className="font-semibold px-5 py-2 text-xs shadow-lg hover:shadow-glow-lg transition-all duration-300"
            onClick={() => navigate("/projects")}
          >
            <Zap className="w-3 h-3 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Skills;