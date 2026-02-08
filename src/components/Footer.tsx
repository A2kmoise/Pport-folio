const Footer = () => {
    return (
        <footer className="bg-background border-t border-primary/10 relative">
            <div className="container max-w-6xl mx-auto px-6 py-12 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <p className="font-serif italic text-primary text-xl">
                        ABAYO Moise
                    </p>
                    <div className="flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-foreground/30 font-medium">
                        <span>© 2026</span>
                        <span className="w-1 h-1 bg-primary/30 rounded-full" />
                        <span>Kigali, Rwanda</span>
                        <span className="w-1 h-1 bg-primary/30 rounded-full" />
                        <span>All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
