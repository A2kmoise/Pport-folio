const Footer = () => {
    return (
        <footer className="bg-background border-t border-border/50 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none" />

            <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 relative z-10">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                    <span className="text-muted-foreground font-light text-xs">© 2026.</span>
                    <span className="font-semibold text-xs bg-gradient-primary bg-clip-text text-transparent">
                        ABAYO Moise
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
