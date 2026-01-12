import React from "react";
import publicPulse from "@/assets/publicPulse.png";
import ecommerceAPI from "@/assets/e-commerce.png";
import snapLink from "@/assets/snaplink.png";
import Lumina from "@/assets/lumina.png";
import supaMenu from "@/assets/supamenu.png";
import { useNavigate } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";

const ProjectPage = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "PublicPulse",
      image: publicPulse,
      description: "A government transparency platform that helps citizens share their problems with the government to be solved.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/A2kmoise/PublicPusle-fullStuck",
      demo: "#"
    },
    {
      title: "E-commerce API",
      image: ecommerceAPI,
      description: "A RESTful API for an e-commerce platform, enabling product management, user authentication, and order processing with over 17 endpoints.",
      technologies: ["Nest.js", "Node.js", "PostgreSQL", "JWT"],
      github: "https://github.com/A2kmoise/E-commerce",
      demo: "#"
    },
    {
      title: "SnapLink",
      image: snapLink,
      description: "A modern URL shortener aimed at helping users shorten their links and share them easily.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/A2kmoise/url-shortener",
      demo: "#"
    },
        {
      title: "Lumina",
      image: Lumina,
      description: "A mobile app linking farmers and drivers in Rwanda to facilitate transportation and logistics (Backend).",
      technologies: ["ReactNative", "Nest.js", "PostgreSQL"],
      github: "https://github.com/A2kmoise/Lumina-API",
      demo: "#"
    },
        {
      title: "SupaMenu",
      image: supaMenu,
      description: "An ios mobile app for ordering food to the nearest restaurant.",
      technologies: ["Swift", "Node.js", "PostgreSQL", "SwiftUI"],
      github: "https://github.com/A2kmoise/swift-finApp",
      demo: "#"
    }
  ];

  return (
    <div className="min-h-screen px-4 py-8 sm:py-16 bg-background text-foreground relative overflow-hidden pt-20 sm:pt-24">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="mt-20 sm:mt-24 mb-8 text-sm text-primary hover:text-primary-glow font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded px-3 py-2 hover:bg-primary/10 group"
          aria-label="Go back to previous page"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-300 inline-block">←</span> Go Back
        </button>

        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight tracking-tight">
            My Projects
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Here you can find a selection of my work, showcasing my skills and expertise in various areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-6 sm:p-7 transition-all duration-500 hover:border-primary/60 hover:shadow-glow h-full flex flex-col overflow-hidden animate-fade-in opacity-0"
              style={{ animationDelay: `${index * 100}ms`, animation: `fadeIn 0.6s ease-out ${index * 100}ms forwards` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-card-foreground mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-gradient-primary after:w-0 group-hover:after:w-full after:transition-all after:duration-500">
                  {project.title}
                </h2>
                <div className="mb-6 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="rounded-lg w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm text-foreground/85 leading-relaxed mb-6 flex-grow font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-primary/15 text-primary border border-primary/30 px-3 py-1.5 rounded-full hover:bg-primary/25 hover:shadow-md transition-all duration-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-lg hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 group/btn"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-accent/10 text-accent border border-accent/30 rounded-lg hover:bg-accent/20 hover:border-accent/60 transition-all duration-300 group/btn"
                      aria-label={`View ${project.title} demo`}
                    >
                      <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
