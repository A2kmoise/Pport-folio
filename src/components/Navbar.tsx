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
        // Handle routes that aren't the home page
        if (location.pathname !== "/") {
            if (location.pathname === "/projects") {
                setActiveSection("projects");
            } else if (location.pathname === "/certificates") {
                setActiveSection("certificates");
            } else {
                setActiveSection("");
            }
            return;
        }

        const sections = ["home", "skills", "certifications", "contact"];

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px', // Adjusted to trigger when section is in the upper-mid viewport
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => {
            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element) observer.unobserve(element);
            });
        };
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/10">
            <div className="container max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20 sm:h-24">
                    {/* Logo */}
                    <Link
                        to="/"
                        onClick={() => setActiveSection("home")}
                        className="text-2xl font-serif text-primary tracking-tight hover:opacity-80 transition-opacity duration-300"
                    >
                        MOISE <span className="italic opacity-80 font-normal">.dev</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 lg:gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                to={link.href}
                                onClick={() => handleNavClick(link.href, link.id)}
                                className={`py-1 transition-all duration-300 relative group text-xs lg:text-sm tracking-[0.2em] uppercase ${activeSection === link.id
                                    ? "text-primary"
                                    : "text-foreground/50 hover:text-primary"
                                    }`}
                            >
                                {link.label}
                                <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-500 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="hidden md:flex p-2 text-foreground/40 hover:text-primary transition-all duration-300 focus:outline-none"
                        aria-label="Toggle theme"
                    >
                        {isDark ? (
                            <Sun className="w-5 h-5 flex-shrink-0" />
                        ) : (
                            <Moon className="w-5 h-5 flex-shrink-0" />
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-primary focus:outline-none"
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
