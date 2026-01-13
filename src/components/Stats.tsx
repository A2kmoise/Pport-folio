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
                    const increment = target / 50;
                    const interval = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            setCount(target);
                            clearInterval(interval);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, 30);

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
        <span ref={countRef} className="font-bold text-3xl sm:text-4xl text-primary">
            {count}
            {suffix}
        </span>
    );
};

const StatItem = ({ icon, value, suffix, label }: StatItemProps) => {
    return (
        <div className="flex flex-col items-center animate-fade-in">
            <div className="mb-3 group hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                <div className="text-primary w-6 h-6">{icon}</div>
            </div>
            <AnimatedCounter target={value} suffix={suffix} />
            <p className="text-muted-foreground text-xs sm:text-sm font-medium mt-2">{label}</p>
        </div>
    );
};

const Stats = () => {
    const stats = [
        {
            icon: <Zap className="w-8 h-8" />,
            value: 1,
            suffix: "+",
            label: "Years of Experience"
        },
        {
            icon: <Code2 className="w-8 h-8" />,
            value: 15,
            suffix: "+",
            label: "Projects Completed"
        },
        {
            icon: <Award className="w-8 h-8" />,
            value: 1,
            suffix: "",
            label: "Security Certification"
        }
    ];

    return (
        <section className="py-12 sm:py-14 bg-background relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-8 sm:mb-10 animate-fade-in">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-primary">
                        Experience
                    </h2>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                        Proven track record of delivering high-quality solutions
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8">
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
