import React from "react";
import publicPulse from "@/assets/publicPulse.png";
import ecommerceAPI from "@/assets/e-commerce.png";
import snapLink from "@/assets/snapLink.png";
import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen px-4 py-16 bg-background text-foreground">
      <div className="max-w-6xl mx-auto text-center">

           <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm text-primary underline hover:text-primary/80 transition-colors"
        >
          ← Go Back
        </button>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">My Projects</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Here you can find a selection of my work, showcasing my skills and expertise in various areas.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Project Card 1 */}
          <div className="border border-primary/20 rounded-lg p-6 bg-card transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-primary mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-\[3000ms\] cursor-pointer">
              PublicPulse
            </h2>
            <img src={publicPulse} alt="PublicPulse" className="rounded-lg mb-4 w-full h-auto" />
            <p className="text-sm text-muted-foreground">
              A government transparency platform that helps citizens share their problems with the government to be solved.
            </p>
          </div>

          {/* Project Card 2 */}
          <div className="border border-primary/20 rounded-lg p-6 bg-card transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-primary mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-\[3000ms\] cursor-pointer">
              E-commerce API
            </h2>
            <img src={ecommerceAPI} alt="E-commerce API" className="rounded-lg mb-4 w-full h-auto" />
            <p className="text-sm text-muted-foreground">
              A RESTful API for an e-commerce platform, enabling product management, user authentication, and order processing with over 17 endpoints.
            </p>
          </div>

          {/* Project Card 3 */}
          <div className="border border-primary/20 rounded-lg p-6 bg-card transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-semibold text-primary mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-primary after:w-0 hover:after:w-full after:transition-all after:duration-\[3000ms\] cursor-pointer">
              SnapLink
            </h2>
            <img src={snapLink} alt="SnapLink" className="rounded-lg mb-4 w-full h-auto" />
            <p className="text-sm text-muted-foreground">
              A modern urlShortner aimed at helping users shorten their links and share them easily.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
