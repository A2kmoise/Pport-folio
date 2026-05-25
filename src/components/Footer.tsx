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
                        <span className="flex items-center gap-1.5">
                            Kigali, Rwanda
                            <svg className="w-4 h-3 inline-block rounded-xs shadow-xs" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="flag-icons-rw" viewBox="0 0 640 480">
                                <path fill="#20603d" d="M0 0h640v480H0z"/>
                                <path fill="#fad201" d="M0 0h640v360H0z"/>
                                <path fill="#00a1de" d="M0 0h640v240H0z"/>
                                <g transform="translate(511 125.4)scale(.66667)">
                                    <g id="rw-b">
                                        <path id="rw-a" fill="#e5be01" d="M116.1 0 35.7 4.7l76.4 25.4-78.8-16.3L100.6 58l-72-36.2L82 82.1 21.9 28.6l36.2 72-44.3-67.3L30 112 4.7 35.7 0 116.1-1-1z"/>
                                        <use xlinkHref="#rw-a" width="100%" height="100%" transform="scale(1 -1)"/>
                                    </g>
                                    <use xlinkHref="#rw-b" width="100%" height="100%" transform="scale(-1 1)"/>
                                    <circle r="34.3" fill="#e5be01" stroke="#00a1de" strokeWidth={3.4}/>
                                </g>
                            </svg>
                        </span>
                        <span className="hidden sm:inline-block w-1 h-1 bg-primary/30 rounded-full" />
                        <span className="w-full sm:w-auto mt-1 sm:mt-0">All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
