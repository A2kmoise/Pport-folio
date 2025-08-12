import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Globe, Shield, Database, Code, Layers } from "lucide-react";
import { Button } from "./ui/button";

const Skills = () => {
  const techStacks = [
    {
      icon: <Globe className="w-8 h-8 text-tech-react" />,
      title: "Frontend Development",
      description: "Building responsive, interactive user interfaces",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux"],
      color: "tech-react"
    },
    {
      icon: <Server className="w-8 h-8 text-tech-node" />,
      title: "Backend Development",
      description: "Scalable server-side applications and APIs",
      skills: ["Express.js", "Node.js", "RESTful APIs", "GraphQL", "WebSocket"],
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
      skills: ["PostgreSQL", "MongoDB", "Mysql"],
      color: "tech-spring"
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Skills && Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full-stack proficiency across modern web technologies and frameworks
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techStacks.map((stack, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
            >
              <CardHeader className="text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stack.icon}
                </div>
                <CardTitle className="text-xl text-card-foreground">{stack.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {stack.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {stack.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" className="border-primary/50 hover:border-primary">
            View my projects
          </Button>
           </div>  
      </div>
    </section>
  );
};

export default Skills;