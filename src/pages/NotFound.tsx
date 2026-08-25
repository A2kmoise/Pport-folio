import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <SEO
        title="404 - Page Not Found"
        description="The requested page could not be found."
      />
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-serif text-primary">404</h1>
        <p className="text-xl text-foreground/60">Oops! Page not found</p>
        <a href="/" className="inline-block text-primary hover:underline uppercase tracking-widest text-xs font-medium">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

