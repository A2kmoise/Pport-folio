import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

        const sections = ["home", "skills", "certifications", "testimonials", "contact"];

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
        { label: "Testimonials", href: "/#testimonials", id: "testimonials" },
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
        <nav className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            isOpen ? "bg-background" : "bg-background/90 backdrop-blur-md"
        )}>
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
                    <div className="md:hidden fixed inset-0 z-50 bg-background w-screen h-screen animate-in fade-in duration-300">
                        <div className="flex flex-col h-full container px-6 py-6">
                            <div className="flex items-center justify-between h-20 sm:h-24 mb-8">
                                <Link
                                    to="/"
                                    onClick={() => { setActiveSection("home"); setIsOpen(false); }}
                                    className="text-2xl font-serif text-primary tracking-tight"
                                >
                                    MOISE <span className="italic opacity-80 font-normal">.dev</span>
                                </Link>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-4 -mr-4 text-primary focus:outline-none"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex flex-col items-center justify-center flex-1 space-y-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.id}
                                        to={link.href}
                                        onClick={() => handleNavClick(link.href, link.id)}
                                        className={cn(
                                            "text-lg tracking-[0.3em] uppercase py-2 transition-all duration-300 relative group font-sans font-medium",
                                            activeSection === link.id
                                                ? "text-primary"
                                                : "text-foreground/60 hover:text-primary"
                                        )}
                                    >
                                        {link.label}
                                        <span className={cn(
                                            "absolute -bottom-1 left-1/2 -translate-x-1/2 h-px bg-primary transition-all duration-500",
                                            activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                                        )} />
                                    </Link>
                                ))}
                            </div>

                            <div className="flex justify-center mt-auto pb-12">
                                <button
                                    onClick={toggleTheme}
                                    className="flex items-center gap-4 text-sm tracking-[0.3em] uppercase text-primary/70 hover:text-primary transition-all duration-300 font-medium"
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
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
