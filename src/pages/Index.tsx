import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
