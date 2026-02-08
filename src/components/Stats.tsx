import { useEffect, useRef, useState } from "react";
import { Code2, Zap, Award } from "lucide-react";

interface StatItemProps {
    icon: React.ReactNode;
    value: number;
    suffix: string;
    label: string;
}

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let current = 0;
                    const duration = 2000;
                    const steps = 60;
                    const increment = target / steps;
                    const startTime = performance.now();

                    const animate = (currentTime: number) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);

                        // Easing function for smoother count
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                        const currentCount = Math.floor(easeOutQuart * target);

                        setCount(currentCount);

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(target);
                        }
                    };

                    requestAnimationFrame(animate);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => {
            if (countRef.current) {
                observer.unobserve(countRef.current);
            }
        };
    }, [target]);

    return (
        <span ref={countRef} className="font-serif italic text-5xl sm:text-6xl text-primary">
            {count}
            <span className="text-3xl sm:text-4xl ml-1 not-italic opacity-60 font-sans">{suffix}</span>
        </span>
    );
};

const StatItem = ({ icon, value, suffix, label }: StatItemProps) => {
    return (
        <div className="flex flex-col items-center animate-fade-in group py-8 border-x border-primary/5 last:border-r-0 first:border-l-0">
            <div className="text-primary/40 mb-6 group-hover:text-primary transition-colors duration-500">
                {icon}
            </div>
            <AnimatedCounter target={value} suffix={suffix} />
            <p className="text-foreground/50 text-[10px] sm:text-xs tracking-[0.3em] uppercase mt-6 font-medium">{label}</p>
        </div>
    );
};

const Stats = () => {
    const stats = [
        {
            icon: <Zap className="w-5 h-5" />,
            value: 2,
            suffix: "+",
            label: "Years Professional"
        },
        {
            icon: <Code2 className="w-5 h-5" />,
            value: 12,
            suffix: "+",
            label: "Systems Deployed"
        },
        {
            icon: <Award className="w-5 h-5" />,
            value: 4,
            suffix: "",
            label: "Global Credentials"
        }
    ];

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />

            <div className="container max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-y border-primary/10">
                    {stats.map((stat, index) => (
                        <div key={index} style={{ animationDelay: `${index * 150}ms` }}>
                            <StatItem
                                icon={stat.icon}
                                value={stat.value}
                                suffix={stat.suffix}
                                label={stat.label}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
