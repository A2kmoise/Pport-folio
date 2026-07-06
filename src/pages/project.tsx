import React, { useState } from "react";
import publicPulse from "@/assets/publicPulse.png";
import ecommerceAPI from "@/assets/ecommerce-tech.png";
import snapLink from "@/assets/snaplink.png";
import Lumina from "@/assets/lumina.png";
import supaMenu from "@/assets/supamenu.png";
import Cconnect from "@/assets/Cconnect.png";
import Bora from "@/assets/bora.png";
import menya from "@/assets/menya.png";
import { useNavigate } from "react-router-dom";
import { Github, ExternalLink, ChevronRight, Pointer } from "lucide-react";
const ProjectPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Frontend", "Backend", "Fullstack"];

  const projects = [
    {
      title: "PublicPulse",
      category: "Fullstack",
      image: publicPulse,
      description: "A government transparency platform that helps citizens share their problems with the government to be solved.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/A2kmoise/PublicPusle-fullStuck",
      demo: "https://publicpulse-eosin.vercel.app/"
    },
    {
      title: "E-commerce API",
      category: "Backend",
      image: ecommerceAPI,
      description: "A RESTful API for an e-commerce platform, for both buyer and vendor  with over 17 endpoints.",
      technologies: ["Nest.js", "Node.js", "PostgreSQL", "JWT"],
      github: "https://github.com/A2kmoise/E-commerce",
      demo: "https://rento-api-p2bt.onrender.com"
    },
    {
      title: "SnapLink",
      category: "Fullstack",
      image: snapLink,
      description: "A modern URL shortener aimed at helping users shorten their links and share them easily.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/A2kmoise/url-shortener",
      demo: "#"
    },
    {
      title: "C-connect",
      category: "Fullstack",
      image:Cconnect,
      description: "A web based platform for best campus announcements for a professional communication",
      technologies: ["JSP", "Java", "Mysql", "Servlet"],
      github: "https://github.com/A2kmoise/C-connect",
      demo: "#"
    },

    {
      title: "Lumina",
      category: "Backend",
      image: Lumina,
      description: "A mobile app linking farmers and drivers in Rwanda to facilitate transportation and logistics (Backend).",
      technologies: ["ReactNative", "Nest.js", "PostgreSQL"],
      github: "https://github.com/A2kmoise/Lumina-API",
      demo: "https://rento-api-p2bt.onrender.com"
    },
    {
      title: "SupaMenu",
      category: "Frontend",
      image: supaMenu,
      description: "An ios mobile app for ordering food to the nearest restaurant.",
      technologies: ["Swift", "Vapor", "PostgreSQL", "SwiftUI"],
      github: "https://github.com/A2kmoise/swift-finApp",
      demo: "#"
    },
    {
title:"BORA",
category: "Backend",
image:Bora,
description:"Bora is an AI powered app that helps companies post jobs and automatically upload the applicants CVs for the AI to rank and filter the best candidates. (Backend and AI integration)",
technologies:["Nest.js","Gemini AI","PostgreSQL","JWT","Redis","typescript"],
github:"#",
demo:"https://bora-ai-web.vercel.app/"
    },
    {
      title: "Menya",
      category: "Frontend",
      image: menya,
      description: "A blog management app designed for author and blog readers as a platform for sharing news and updates",
      technologies: ["React","typescript", "TailwindCSS"],
      github: "https://github.com/A2kmoise/ibihe",
      demo: "https://project-ylyx8.vercel.app/"
    }
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "All" || project.category.toLowerCase() === activeFilter.toLowerCase()
  );

  return (
    <div className="min-h-screen px-6 py-24 bg-background text-foreground relative overflow-hidden">

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
          <h1 className="text-4xl sm:text-7xl font-serif text-primary mb-8 tracking-tight">
            Selected <span className="italic opacity-80">Projects</span>
          </h1>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-8" />
          <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed font-light text-lg sm:text-xl italic mb-12">
            "Design and engineering converge to create seamless digital architecture."
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 text-xs tracking-widest uppercase transition-all duration-300 border ${
                  activeFilter === filter
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-primary/20 text-foreground/60 hover:border-primary/60 hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Custom scrollbar styles for mobile swipe */}
        <style>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          @keyframes swipeGesture {
            0%, 100% { transform: translateX(0) rotate(-90deg); opacity: 0.8; }
            50% { transform: translateX(-20px) rotate(-90deg); opacity: 0.3; }
          }
          .animate-swipe {
            animation: swipeGesture 2.5s infinite ease-in-out;
          }
        `}</style>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex items-center justify-end gap-2 mb-6 text-primary/60 pr-2">
          <span className="text-xs tracking-widest uppercase font-medium mr-2">Swipe</span>
          <div className="flex items-center -space-x-1 opacity-70">
            <ChevronRight className="w-4 h-4 animate-pulse" style={{ animationDelay: '0ms' }} />
            <ChevronRight className="w-4 h-4 animate-pulse" style={{ animationDelay: '150ms' }} />
            <ChevronRight className="w-4 h-4 animate-pulse" style={{ animationDelay: '300ms' }} />
          </div>
          <Pointer className="w-5 h-5 animate-swipe text-primary" />
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory pb-12 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 md:gap-16 hide-scrollbar md:overflow-visible">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col animate-fade-in min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center"
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
