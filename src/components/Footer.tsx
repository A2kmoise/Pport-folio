const Footer = () => {
    return (
        <footer className="bg-background relative">
            <div className="container max-w-6xl mx-auto px-6 pt-12 pb-24 md:pb-12 relative z-10">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <p className="font-serif italic text-primary text-xl">
                        ABAYO Moise
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] tracking-[0.2em] uppercase text-foreground/30 font-medium text-center px-4">
                        <span>© 2026</span>
                        <span className="hidden xs:inline-block w-1 h-1 bg-primary/30 rounded-full" />
                        <span>Kigali, Rwanda</span>
                        <span className="hidden sm:inline-block w-1 h-1 bg-primary/30 rounded-full" />
                        <span className="w-full sm:w-auto mt-1 sm:mt-0">All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
