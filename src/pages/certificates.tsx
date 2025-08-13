import React from "react";
import { useNavigate } from "react-router-dom";

const CertificatePage = () => {
  const navigate = useNavigate();

  return (  
    <div className="min-h-screen px-4 py-16 bg-background text-foreground">
      <div className="max-w-4xl mx-auto text-center">

        <button className="mb-6 text-sm text-primary underline hover:text-primary/80 transition-colors" 
        onClick={() => navigate(-1)}
        >
      ← Go Back
        </button>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          My Cybersecurity Certificates
        </h1>

        <p className="text-lg text-muted-foreground mb-12">
          Here you can find a selection of my cybersecurity certificates,
          showcasing my skills and expertise in this field.
        </p>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example Certificate Card */}
          <div className="border border-primary/20 rounded-lg p-6 bg-card transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <h2 className="text-lg font-semibold text-primary mb-2">
              Certificate Title
            </h2>
            <p className="text-sm text-muted-foreground">
              Issued by Organization · Date
            </p>
          </div>

                    <div className="border border-primary/20 rounded-lg p-6 bg-card transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <h2 className="text-lg font-semibold text-primary mb-2">
              Certificate Title
            </h2>
            <p className="text-sm text-muted-foreground">
              Issued by Organization · Date
            </p>
          </div>

                    <div className="border border-primary/20 rounded-lg p-6 bg-card transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
            <h2 className="text-lg font-semibold text-primary mb-2">
              Certificate Title
            </h2>
            <p className="text-sm text-muted-foreground">
              Issued by Organization · Date
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
