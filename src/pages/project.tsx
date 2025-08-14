import React from "react";
import publicPulse from "@/assets/publicPulse.png";
import ecommerceAPI from "@/assets/e-commerce.png";
import snapLink from "@/assets/snaplink.png";
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
    const navigate = useNavigate();
    
    const projects = [
      {
        title: "PublicPulse",
        image: publicPulse,
        description: "A government transparency platform that helps citizens share their problems with the government to be solved.",
        technologies: ["React", "Node.js", "MongoDB", "Express"]
      },
      {
        title: "E-commerce API",
        image: ecommerceAPI,
        description: "A RESTful API for an e-commerce platform, enabling product management, user authentication, and order processing with over 17 endpoints.",
        technologies: ["Spring Boot", "Java", "PostgreSQL", "JWT"]
      },
      {
        title: "SnapLink",
        image: snapLink,
        description: "A modern URL shortener aimed at helping users shorten their links and share them easily.",
        technologies: ["React", "Node.js", "MongoDB", "Express"]
      }
    ];

  return (
    <div className="min-h-screen px-4 py-8 sm:py-16 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm text-primary underline hover:text-primary/80 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded px-2 py-1"
          aria-label="Go back to previous page"
        >
          ← Go Back
        </button>

        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            My Projects
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Here you can find a selection of my work, showcasing my skills and expertise in various areas.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="border border-primary/20 rounded-lg p-4 sm:p-6 bg-card transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-primary/40 group h-full flex flex-col"
            >
              <h2 className="text-lg sm:text-xl font-semibold text-primary mb-3 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:w-0 group-hover:after:w-full after:transition-all after:duration-300 cursor-pointer">
                {project.title}
              </h2>
              <div className="mb-4 flex-shrink-0">
                <img 
                  src={project.image} 
                  alt={`${project.title} project screenshot`} 
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
