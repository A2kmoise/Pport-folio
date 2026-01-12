import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NavbarProps {
    onOpenContact?: () => void;
}

const Navbar = ({ onOpenContact }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("home");
    const [isDark, setIsDark] = useState(true);
    const location = useLocation();

    useEffect(() => {
        // Initialize theme from localStorage or system preference
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark;
        setIsDark(shouldBeDark);
        updateTheme(shouldBeDark);
    }, []);

    const updateTheme = (dark: boolean) => {
        const html = document.documentElement;
        if (dark) {
            html.classList.remove("light");
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            html.classList.remove("dark");
            html.classList.add("light");
            localStorage.setItem("theme", "light");
        }
    };

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        updateTheme(newTheme);
    };

    useEffect(() => {
        // Only use scroll spy on home page
        if (location.pathname !== "/") {
            if (location.pathname === "/projects") {
                setActiveSection("projects");
            } else if (location.pathname === "/certificates") {
                setActiveSection("certificates");
            }
            return;
        }

        // Scroll spy for home page sections
        const handleScroll = () => {
            const sections = ["home", "skills", "certifications", "contact"];
            let currentSection = "home";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if section is in the upper portion of the viewport
                    if (rect.top <= 100) {
                        currentSection = section;
                    }
                }
            }

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    const navLinks = [
        { label: "Home", href: "/#home", id: "home" },
        { label: "Skills", href: "/#skills", id: "skills" },
        { label: "Certifications", href: "/#certifications", id: "certifications" },
        { label: "Projects", href: "/projects", id: "projects" },
        { label: "Contact", href: "/#contact", id: "contact" },
    ];

    const handleNavClick = (href: string, id: string) => {
        setActiveSection(id);
        setIsOpen(false);
        if (href.startsWith("/#")) {
            const sectionId = href.slice(2);
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 0);
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
            <div className="container max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={() => setActiveSection("home")}
                        className="text-xl sm:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-300"
                    >
                        A2kdev
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1 lg:gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                to={link.href}
                                onClick={() => handleNavClick(link.href, link.id)}
                                className={`px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 relative group font-medium text-sm lg:text-base ${activeSection === link.id
                                    ? "text-primary bg-primary/10"
                                    : "text-muted-foreground hover:text-primary"
                                    }`}
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-primary group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="hidden md:flex items-center gap-2 p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
                        aria-label="Toggle theme"
                    >
                        {isDark ? (
                            <Sun className="w-5 h-5" />
                        ) : (
                            <Moon className="w-5 h-5" />
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-primary hover:bg-primary/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
                        aria-label="Toggle navigation menu"
                    >
                        {isOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg animate-fade-in">
                        <div className="px-4 py-4 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.id}
                                    to={link.href}
                                    onClick={() => handleNavClick(link.href, link.id)}
                                    className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium ${activeSection === link.id
                                        ? "text-primary bg-primary/10 border border-primary/20"
                                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <button
                                onClick={toggleTheme}
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium"
                            >
                                {isDark ? (
                                    <>
                                        <Sun className="w-5 h-5" />
                                        Light Mode
                                    </>
                                ) : (
                                    <>
                                        <Moon className="w-5 h-5" />
                                        Dark Mode
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
