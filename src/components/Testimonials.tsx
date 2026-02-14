import { useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Dr. Elena Vance",
    role: "Lead Cybersecurity Architect",
    content: "Moise's attention to security detail is unparalleled. He doesn't just build features; he builds fortresses. His Spring Boot implementations are clean, efficient, and robust.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
  },
  {
    name: "Marcus Holloway",
    role: "Senior Full-Stack Engineer",
    content: "Working with Moise was a breeze. His ability to bridge the gap between complex backend logic and sleek React frontends is impressive. A true professional in every sense.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
  },
  {
    name: "Sarah Chen",
    role: "CTO, TechGuard Solutions",
    content: "The penetration testing Moise performed on our systems uncovered critical vulnerabilities we hadn't even considered. His report was thorough, actionable, and vital to our security.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  }
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="py-24 bg-background relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm">
              Voices of Collaboration
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight">
              Testimonials <br />
              <span className="italic opacity-80 text-foreground">That Define Excellence</span>
            </h2>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-none border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground text-primary bg-transparent w-12 h-12 transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-none border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground text-primary bg-transparent w-12 h-12 transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-6 first:pl-0"
              >
                <div className="h-full group relative">
                  {/* Card Main Body */}
                  <div className="border border-primary/10 bg-card p-10 h-full flex flex-col justify-between transition-all duration-500 group-hover:border-primary/30 group-hover:bg-card/80">
                    <div className="space-y-8">
                      <Quote className="w-10 h-10 text-primary/20 group-hover:text-primary/40 transition-colors duration-500" />

                      <p className="text-lg text-foreground/80 leading-relaxed italic font-serif">
                        "{testimonial.content}"
                      </p>
                    </div>

                    <div className="mt-12 flex items-center gap-4">
                      <div className="relative w-14 h-14 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                        <div className="absolute inset-0 border border-primary/20" />
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                        />
                      </div>
                      <div>
                        <h4 className="font-serif text-primary text-lg">{testimonial.name}</h4>
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-2 right-2 w-px h-4 bg-primary/40" />
                      <div className="absolute top-2 right-2 w-4 h-px bg-primary/40" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
