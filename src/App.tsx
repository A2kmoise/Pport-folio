import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectPage from "./pages/project";
import CertificatePage from "./pages/certificates";
import ScrollToTop from "./components/ScrollToTop";
import Terminal from "@/components/Terminal";
import { Terminal as TerminalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import MatrixRain from "./components/MatrixRain";

const queryClient = new QueryClient();

const App = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <MatrixRain />
        <BrowserRouter>
          <ScrollToTop />
          <Navbar onOpenContact={() => setIsContactModalOpen(true)} />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/certificates" element={<CertificatePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>

        {/* Global Terminal Toggle Button */}
        {!isTerminalOpen && (
          <Button
            onClick={() => setIsTerminalOpen(true)}
            variant="outline"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full border-primary/40 text-primary bg-background/80 backdrop-blur-sm shadow-xl hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            size="icon"
          >
            <TerminalIcon className="w-6 h-6 stroke-[1.5]" />
          </Button>
        )}

        {/* Global Terminal Component */}
        <Terminal
          isOpen={isTerminalOpen}
          onClose={() => setIsTerminalOpen(false)}
        />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
