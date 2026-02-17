import React from "react";
import publicPulse from "@/assets/publicPulse.png";
import ecommerceAPI from "@/assets/ecommerce-tech.png";
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
    <div className="min-h-screen px-6 py-24 bg-background text-foreground relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <button
          onClick={() => navigate(-1)}
          className="mb-16 text-[10px] tracking-[0.3em] uppercase text-primary hover:text-primary/70 font-medium transition-all duration-300 flex items-center gap-4 group"
        >
          <span className="group-hover:-translate-x-2 transition-transform duration-500">←</span>
          BACK TO PORTFOLIO
        </button>

        <div className="text-center mb-24 animate-fade-in">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">
            Curated Works
          </p>
          <h1 className="text-5xl sm:text-7xl font-serif text-primary mb-8 tracking-tight">
            Selected <span className="italic opacity-80">Projects</span>
          </h1>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-8" />
          <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed font-light text-xl italic">
            "Design and engineering converge to create seamless digital architecture."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 150}ms`, animation: `fadeIn 1s ease-out ${index * 150}ms forwards` }}
            >
              {/* Project Image Box */}
              <div className="relative overflow-hidden mb-8 border border-primary/10 group-hover:border-primary/40 transition-all duration-1000">
                <div className="aspect-[16/10]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-1000 ease-in-out"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80" />


              </div>

              {/* Project Details */}
              <div className="space-y-6 px-2">
                <div className="flex items-center justify-between border-b border-primary/10 pb-4">
                  <h2 className="text-3xl font-serif italic text-primary group-hover:text-primary transition-colors duration-500">
                    {project.title}
                  </h2>
                </div>

                <p className="text-foreground/60 leading-relaxed font-sans text-lg italic pr-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-[10px] tracking-[0.2em] uppercase font-medium text-foreground/40 border border-primary/10 px-4 py-1.5 transition-all duration-500 group-hover:border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-8 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary/70 hover:text-primary transition-all duration-300 flex items-center gap-3 text-xs tracking-widest font-medium uppercase"
                  >
                    <Github className="w-4 h-4" />
                    REPOSITORY
                  </a>
                  {project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary/70 hover:text-primary transition-all duration-300 flex items-center gap-3 text-xs tracking-widest font-medium uppercase"
                    >
                      <ExternalLink className="w-4 h-4" />
                      LIVE PREVIEW
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
