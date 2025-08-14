import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Globe, Shield, Database, Code, Layers } from "lucide-react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const navigate = useNavigate();
  const techStacks = [
    {
      icon: <Globe className="w-8 h-8 text-tech-react" />,
      title: "Frontend Development",
      description: "Building responsive, interactive user interfaces",
      skills: ["React", "TypeScript", "Tailwind CSS", "Bootstrap CSS", "Next.js", "Redux"],
      color: "tech-react"
    },
    {
      icon: <Server className="w-8 h-8 text-tech-node" />,
      title: "Backend Development",
      description: "Scalable server-side applications and APIs",
      skills: ["Express.js", "Node.js", "RESTful APIs", "GraphQL", "WebSocket", "PHP", "Laravel", "Django"],
      color: "tech-node"
    },
    {
      icon: <Layers className="w-8 h-8 text-tech-nest" />,
      title: "Enterprise Frameworks",
      description: "Enterprise-grade applications and microservices",
      skills: ["NestJS", "Spring Boot", "Java", "Microservices", "Docker"],
      color: "tech-nest"
    },
    {
      icon: <Database className="w-8 h-8 text-tech-spring" />,
      title: "Database & Infrastructure",
      description: "Data management and cloud deployment",
      skills: ["PostgreSQL", "MongoDB", "MySQL"],
      color: "tech-spring"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-secondary">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Skills & Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Full-stack proficiency across modern web technologies and frameworks
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {techStacks.map((stack, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group h-full"
            >
              <CardHeader className="text-center pb-4">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stack.icon}
                </div>
                <CardTitle className="text-xl text-card-foreground mb-2">{stack.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {stack.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 justify-center">
                  {stack.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-200 text-xs sm:text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10 sm:mt-12">
          <Button 
            variant="outline" 
            className="border-primary/50 hover:border-primary transition-all duration-200" 
            onClick={() => navigate("/projects")}
          >
            View my projects
          </Button>
        </div>  
      </div>
    </section>
  );
};

export default Skills;