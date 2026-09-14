import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Server,
  Check,
  Sparkles,
  Clock,
  ArrowRight,
  Layers,
  Lock,
  Zap,
  HelpCircle,
  Mail,
  Calendar,
  Code,
  Globe,
  FileCheck,
  Sliders,
  CheckCircle2,
  Smartphone,
  Database,
  Cpu,
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import ContactModal from "@/components/ContactModal";
import SEO from "@/components/SEO";

const pricingJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Software Development & Backend API Crafting Services",
  "provider": {
    "@type": "Person",
    "name": "ABAYO Moise"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Software & Backend Delivery Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "MVP & Core Web",
        "description": "Rapid, high-performance web applications and responsive UI for startups and MVPs.",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "1800",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "name": "Backend API Crafting",
        "description": "High-throughput, secure server-side architecture and RESTful APIs with Spring Boot, NestJS, and PostgreSQL.",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "2600",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "Offer",
        "name": "Full-Stack & Hardened Platform",
        "description": "Comprehensive full-stack web ecosystem with React frontend, Spring Boot backend, Docker CI/CD, and security hardening.",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "3800",
          "priceCurrency": "USD"
        }
      }
    ]
  }
};

type BillingMode = "project" | "retainer";

interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  tagline: string;
  projectPrice: string;
  projectPeriod: string;
  retainerPrice: string;
  retainerPeriod: string;
  description: string;
  features: string[];
  deliverables: string[];
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: "mvp",
    name: "MVP & Core Web",
    tagline: "Rapid Validation & Solid Foundation",
    projectPrice: "$1,800",
    projectPeriod: "Fixed Scope • 2-3 Weeks",
    retainerPrice: "$2,200",
    retainerPeriod: "/ Month • 20 hrs / wk",
    description:
      "Engineered for founders and teams needing a robust, production-grade application launched swiftly without cutting technical corners.",
    features: [
      "Custom responsive frontend (React / Next.js, Tailwind CSS)",
      "RESTful API backend (Express.js or Spring Boot core)",
      "Database schema & setup (PostgreSQL / MongoDB)",
      "Secure authentication & RBAC (JWT / OAuth2)",
      "Baseline security hardening (CORS, Rate Limiting, CSP)",
      "Production deployment setup (Vercel, Render, or Docker)",
      "14 days post-launch warranty & bug fixes",
      "100% source code ownership & documentation"
    ],
    deliverables: [
      "Production web app",
      "API documentation",
      "Deployment pipeline"
    ]
  },
  {
    id: "backend",
    name: "Backend API Crafting",
    badge: "CORE SPECIALIZATION",
    tagline: "High-Throughput, Secure & Scalable APIs",
    projectPrice: "$2,600",
    projectPeriod: "Fixed Scope • 3-4 Weeks",
    retainerPrice: "$3,000",
    retainerPeriod: "/ Month • Dedicated Backend Capacity",
    description:
      "Specialized high-performance server systems, microservices, and database optimization engineered with Java Spring Boot, NestJS, or Node.js.",
    features: [
      "Production RESTful or GraphQL API (Java Spring Boot, NestJS, or Express)",
      "Relational & NoSQL database schema design (PostgreSQL / MongoDB / MySQL)",
      "Advanced authentication & RBAC (JWT, OAuth2, session guards)",
      "Redis caching, background workers & rate limiting algorithms",
      "Comprehensive Swagger / OpenAPI documentation & Postman collections",
      "Input validation, sanitization & SQL injection defense",
      "Automated unit & integration test suites (JUnit / Jest)",
      "Docker containerization & cloud hosting setup (AWS / Render)"
    ],
    deliverables: [
      "Production backend API",
      "Interactive Swagger / OpenAPI docs",
      "Database schema & migrations",
      "Docker container pipeline"
    ]
  },
  {
    id: "fullstack",
    name: "Full-Stack & Security",
    badge: "MOST POPULAR",
    isPopular: true,
    tagline: "Complete End-to-End Ecosystem",
    projectPrice: "$3,800",
    projectPeriod: "Fixed Scope • 4-6 Weeks",
    retainerPrice: "$4,200",
    retainerPeriod: "/ Month • 40 hrs / wk",
    description:
      "Complete web ecosystem combining bespoke React/Next.js frontend with hardened Spring Boot / NestJS APIs, cloud DevOps, and production monitoring.",
    features: [
      "Everything in MVP & Backend API Crafting",
      "Seamless Full-Stack integration & real-time state synchronization",
      "Real-time communication (WebSockets, live streaming events)",
      "Optimized relational transactions, caching & database indexing",
      "Automated CI/CD workflows & Docker containerization",
      "Third-party integrations (Stripe, EmailJS, Webhooks, AI LLMs)",
      "OWASP security compliance & vulnerability defense",
      "30 days dedicated post-launch support & performance tuning"
    ],
    deliverables: [
      "Complete full-stack platform",
      "Architecture blueprint & API docs",
      "CI/CD deployment pipeline",
      "30 days post-launch warranty"
    ]
  }
];

const COMPARISON_FEATURES = [
  { feature: "Responsive Frontend UI (React / Next.js)", mvp: true, backend: "API Docs / Client SDK", fullstack: true },
  { feature: "Backend API Engine (Spring Boot / NestJS)", mvp: "Express Core", backend: "Enterprise Core", fullstack: "Enterprise Core" },
  { feature: "Database Architecture & Migrations", mvp: "Basic", backend: "Optimized & Indexed", fullstack: "Optimized & Indexed" },
  { feature: "Role-Based Access Control & Auth (JWT / OAuth)", mvp: true, backend: true, fullstack: true },
  { feature: "Redis Caching & Queue Management", mvp: false, backend: true, fullstack: true },
  { feature: "Interactive Swagger / OpenAPI Documentation", mvp: "Basic", backend: "Comprehensive", fullstack: "Comprehensive" },
  { feature: "Third-party Integrations (Payments / APIs / AI)", mvp: "Standard", backend: "Advanced", fullstack: "Unlimited" },
  { feature: "Automated CI/CD & Docker Containerization", mvp: false, backend: true, fullstack: true },
  { feature: "OWASP Security Hardening & Rate Limiting", mvp: "Baseline", backend: "Hardened Endpoints", fullstack: "Full-Stack Defense" },
  { feature: "Post-Launch Warranty", mvp: "14 Days", backend: "30 Days", fullstack: "45 Days" },
  { feature: "100% Source Code & IP Transfer", mvp: true, backend: true, fullstack: true }
];

const FAQ_ITEMS = [
  {
    q: "How are project payments and milestones structured?",
    a: "Fixed-scope projects are typically divided into clear, milestone-based installments: 40% initial deposit to reserve engineering sprints, 30% at the mid-point demo review, and 30% upon final delivery and production deployment. For monthly retainers, invoices are processed at the beginning of each billing cycle."
  },
  {
    q: "Will you sign a Non-Disclosure Agreement (NDA)?",
    a: "Yes, without hesitation. All client discussions, business concepts, source code, and API architecture specifications are handled under strict confidentiality. Mutual NDAs can be executed prior to any discovery call."
  },
  {
    q: "What backend frameworks and databases do you specialize in?",
    a: "My primary backend specializations include Java & Spring Boot, NestJS, and Node.js / Express. For data persistence, I work with PostgreSQL, MongoDB, MySQL, and Redis for caching and high-concurrency message queues. APIs are delivered with interactive Swagger / OpenAPI documentation."
  },
  {
    q: "Can I hire you solely for Backend API Crafting?",
    a: "Yes, absolutely! The Backend API Crafting tier is designed specifically for teams who already have a frontend team or mobile developers and need a robust, scalable, and documented server-side API with Spring Boot or NestJS."
  },
  {
    q: "Can I customize a package to match specific budget constraints?",
    a: "Absolutely. The tiers provide structured starting points, but every business problem has unique nuances. We can tailor a scoped roadmap that targets your highest-leverage features first within your timeline and capital constraints."
  },
  {
    q: "What warranty and post-delivery support do you provide?",
    a: "Every project includes a complimentary warranty period (ranging from 14 to 45 days based on tier) during which any bugs or regressions related to the agreed scope are patched immediately at zero extra cost. For long-term continuity, monthly maintenance retainers are also available."
  },
  {
    q: "How do you handle collaboration across different time zones?",
    a: "I work with clients worldwide from Kigali, Rwanda (UTC+2). I maintain seamless asynchronous communication through detailed progress logs, recorded video demos, and GitHub pull requests, coupled with scheduled live syncs aligned with US, European, and Asian business hours."
  }
];

const PricingPage: React.FC = () => {
  const navigate = useNavigate();
  const [billingMode, setBillingMode] = useState<BillingMode>("project");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Estimator State
  const [platformType, setPlatformType] = useState<string>("backend");
  const [backendComplexity, setBackendComplexity] = useState<string>("microservices");
  const [databaseType, setDatabaseType] = useState<string>("postgres");
  const [timelineSpeed, setTimelineSpeed] = useState<string>("standard");

  const estimatedTotal = useMemo(() => {
    let total = 0;

    // Platform
    if (platformType === "landing") total += 1200;
    else if (platformType === "mvp") total += 1800;
    else if (platformType === "backend") total += 2600;
    else if (platformType === "fullstack") total += 3800;
    else if (platformType === "mobile") total += 3200;

    // Backend Complexity
    if (backendComplexity === "rest") total += 0;
    else if (backendComplexity === "microservices") total += 800;
    else if (backendComplexity === "enterprise") total += 1500;

    // Database
    if (databaseType === "postgres") total += 400;
    else if (databaseType === "distributed") total += 900;
    else if (databaseType === "serverless") total += 200;

    // Timeline
    if (timelineSpeed === "expedited") {
      total = Math.round(total * 1.25);
    }

    return total;
  }, [platformType, backendComplexity, databaseType, timelineSpeed]);

  return (
    <div className="min-h-screen px-6 py-24 bg-background text-foreground relative overflow-hidden">
      <SEO
        title="Software Delivery & Backend API Crafting Pricing"
        description="Transparent pricing packages for backend API crafting, Spring Boot microservices, React full-stack applications, and secure systems by ABAYO Moise."
        keywords="ABAYO Moise Pricing, Backend API Crafting, Spring Boot Developer Rates, NestJS API Development, Full-Stack Software Packages, PostgreSQL API Developer, Freelance Backend Engineer"
        jsonLd={pricingJsonLd}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Navigation */}
        <button
          onClick={() => navigate(-1)}
          className="mb-16 text-[10px] tracking-[0.3em] uppercase text-primary hover:text-primary/70 font-medium transition-all duration-300 flex items-center gap-4 group"
        >
          <span className="group-hover:-translate-x-2 transition-transform duration-500">←</span>
          BACK TO PORTFOLIO
        </button>

        {/* Page Header */}
        <div className="text-center mb-16 sm:mb-20 animate-fade-in">
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">
            Investment & Delivery Plans
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-primary mb-6 tracking-tight">
            Transparent <span className="italic opacity-80">Pricing</span>
          </h1>
          <div className="w-24 h-px bg-primary/30 mx-auto mb-6" />
          <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light text-base sm:text-lg">
            Engineering excellence, robust backend API crafting, and secure full-stack architecture. Clear scopes, predictable investments, and zero surprises.
          </p>

          {/* Billing Mode Toggle */}
          <div className="mt-10 inline-flex items-center p-1.5 border border-primary/20 bg-card/60 backdrop-blur-sm rounded-none">
            <button
              onClick={() => setBillingMode("project")}
              className={`px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${billingMode === "project"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground/60 hover:text-primary"
                }`}
            >
              Fixed Project Scope
            </button>
            <button
              onClick={() => setBillingMode("retainer")}
              className={`px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${billingMode === "retainer"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground/60 hover:text-primary"
                }`}
            >
              Monthly Retainer / Advisory
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-stretch">
          {PRICING_TIERS.map((tier, index) => {
            const isFeatured = tier.isPopular;
            const price = billingMode === "project" ? tier.projectPrice : tier.retainerPrice;
            const period = billingMode === "project" ? tier.projectPeriod : tier.retainerPeriod;

            return (
              <div
                key={tier.id}
                className={`relative flex flex-col justify-between border transition-all duration-500 animate-fade-in p-8 sm:p-10 ${isFeatured
                    ? "border-primary bg-card/80 shadow-glow lg:-translate-y-2"
                    : "border-primary/20 bg-card/40 hover:border-primary/50"
                  }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Featured Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge
                      className={`text-[9px] tracking-[0.25em] uppercase font-semibold px-3 py-1 rounded-none ${isFeatured
                          ? "bg-primary text-primary-foreground border-none"
                          : "bg-background text-primary border border-primary/40"
                        }`}
                    >
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <div>
                  {/* Tier Title & Tagline */}
                  <div className="border-b border-primary/10 pb-6 mb-6">
                    <h2 className="text-2xl sm:text-3xl font-serif text-primary mb-2">
                      {tier.name}
                    </h2>
                    <p className="text-xs uppercase tracking-wider text-foreground/50 font-medium">
                      {tier.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-serif text-foreground font-semibold">
                        {price}
                      </span>
                    </div>
                    <p className="text-[11px] tracking-[0.15em] uppercase text-primary/80 mt-2 font-medium">
                      {period}
                    </p>
                  </div>

                  <p className="text-sm text-foreground/70 leading-relaxed font-light mb-8">
                    {tier.description}
                  </p>

                  {/* Deliverables summary */}
                  <div className="mb-8 p-4 bg-background/50 border border-primary/10">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-primary mb-2 font-semibold flex items-center gap-2">
                      <FileCheck className="w-3.5 h-3.5" /> Key Deliverables:
                    </p>
                    <ul className="space-y-1">
                      {tier.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="text-xs text-foreground/80 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary/60 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mb-10">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-semibold mb-3">
                      Included Capabilities:
                    </p>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  variant={isFeatured ? "default" : "outline"}
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full rounded-none tracking-wider text-xs uppercase h-12 transition-all duration-300 ${isFeatured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
                >
                  Book Package
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Button>
              </div>
            );
          })}
        </div>

        {/* Interactive Custom Cost Estimator */}
        <div className="mb-24 p-8 sm:p-12 border border-primary/20 bg-card/30 relative overflow-hidden">
          <div className="max-w-3xl mb-12">
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-medium mb-3 flex items-center gap-2">
              <Sliders className="w-4 h-4" /> Interactive Scoping Calculator
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary mb-4">
              Estimate Your Custom Project
            </h2>
            <p className="text-foreground/70 font-light text-sm sm:text-base leading-relaxed">
              Select your required architectural parameters to compute a live, realistic baseline investment estimate for your product.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Control 1: Core Platform */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-medium block">
                1. System / Platform Architecture
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: "backend", label: "Backend API Crafting", cost: "$2,600" },
                  { id: "fullstack", label: "Fullstack Platform", cost: "$3,800" },
                  { id: "mvp", label: "Web MVP & API", cost: "$1,800" },
                  { id: "mobile", label: "React Native Mobile", cost: "$3,200" },
                  { id: "landing", label: "Marketing & Landing", cost: "$1,200" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPlatformType(item.id)}
                    className={`p-3 text-left border transition-all text-xs flex flex-col justify-between ${platformType === item.id
                        ? "border-primary bg-primary/10 text-primary font-medium"
                        : "border-primary/10 bg-background/40 text-foreground/70 hover:border-primary/30"
                      }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] opacity-60 mt-1 font-mono">{item.cost}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Backend & Security Complexity */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-medium block">
                2. Backend Architecture & Hardening Depth
              </label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { id: "rest", label: "Standard RESTful API & Authentication (JWT)", cost: "+$0" },
                  { id: "microservices", label: "Microservices Architecture & Redis Caching", cost: "+$800" },
                  { id: "enterprise", label: "Enterprise Concurrency, Queues & Security Hardening", cost: "+$1,500" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setBackendComplexity(item.id)}
                    className={`p-3 text-left border transition-all text-xs flex items-center justify-between ${backendComplexity === item.id
                        ? "border-primary bg-primary/10 text-primary font-medium"
                        : "border-primary/10 bg-background/40 text-foreground/70 hover:border-primary/30"
                      }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] opacity-70 font-mono shrink-0 ml-2">{item.cost}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 3: Database & Caching */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-medium block">
                3. Database & Caching Setup
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: "postgres", label: "PostgreSQL / MySQL", cost: "+$400" },
                  { id: "distributed", label: "Redis + Clusters", cost: "+$900" },
                  { id: "serverless", label: "Serverless DB", cost: "+$200" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setDatabaseType(item.id)}
                    className={`p-3 text-left border transition-all text-xs flex flex-col justify-between ${databaseType === item.id
                        ? "border-primary bg-primary/10 text-primary font-medium"
                        : "border-primary/10 bg-background/40 text-foreground/70 hover:border-primary/30"
                      }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] opacity-60 mt-1 font-mono">{item.cost}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Control 4: Speed */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.2em] text-foreground/60 font-medium block">
                4. Delivery Urgency
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "standard", label: "Standard Sprint (3-5 Wks)", cost: "Normal Rate" },
                  { id: "expedited", label: "Fast-Track Priority (2-3 Wks)", cost: "+25% Acceleration" }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTimelineSpeed(item.id)}
                    className={`p-3 text-left border transition-all text-xs flex flex-col justify-between ${timelineSpeed === item.id
                        ? "border-primary bg-primary/10 text-primary font-medium"
                        : "border-primary/10 bg-background/40 text-foreground/70 hover:border-primary/30"
                      }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] opacity-60 mt-1 font-mono">{item.cost}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Calculator Output */}
          <div className="mt-12 pt-8 border-t border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-foreground/50 font-medium">
                Estimated Project Investment
              </p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl sm:text-5xl font-serif text-primary font-bold">
                  ${estimatedTotal.toLocaleString()}
                </span>
                <span className="text-xs text-foreground/60 uppercase tracking-widest font-mono">
                  USD
                </span>
              </div>
              <p className="text-xs text-foreground/60 mt-1 font-light">
                *Subject to final technical requirement review and scope confirmation.
              </p>
            </div>

            <Button
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto rounded-none px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 text-xs uppercase tracking-wider"
            >
              Request Custom Proposal
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Feature Comparison Table */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-medium mb-3">
              Transparency
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary">
              Detailed Deliverables Breakdown
            </h2>
          </div>

          <div className="border border-primary/20 overflow-x-auto bg-card/40">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-primary/20 bg-primary/5">
                  <th className="p-4 sm:p-5 text-foreground/80 font-medium tracking-wider uppercase text-xs">
                    Capability / Deliverable
                  </th>
                  <th className="p-4 sm:p-5 text-foreground/80 font-medium tracking-wider uppercase text-xs text-center">
                    MVP & Core Web
                  </th>
                  <th className="p-4 sm:p-5 text-primary font-semibold tracking-wider uppercase text-xs text-center bg-primary/10">
                    Backend API Crafting
                  </th>
                  <th className="p-4 sm:p-5 text-foreground/80 font-medium tracking-wider uppercase text-xs text-center">
                    Full-Stack Suite
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10">
                {COMPARISON_FEATURES.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-primary/[0.02] transition-colors">
                    <td className="p-4 sm:p-5 font-light text-foreground/90">{row.feature}</td>
                    <td className="p-4 sm:p-5 text-center">
                      {typeof row.mvp === "boolean" ? (
                        row.mvp ? (
                          <Check className="w-4 h-4 text-primary mx-auto" />
                        ) : (
                          <span className="text-foreground/30 font-mono">—</span>
                        )
                      ) : (
                        <span className="text-foreground/70 font-mono text-xs">{row.mvp}</span>
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center bg-primary/[0.03]">
                      {typeof row.backend === "boolean" ? (
                        row.backend ? (
                          <Check className="w-4 h-4 text-primary mx-auto" />
                        ) : (
                          <span className="text-foreground/30 font-mono">—</span>
                        )
                      ) : (
                        <span className="text-primary font-medium font-mono text-xs">
                          {row.backend}
                        </span>
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-center">
                      {typeof row.fullstack === "boolean" ? (
                        row.fullstack ? (
                          <Check className="w-4 h-4 text-primary mx-auto" />
                        ) : (
                          <span className="text-foreground/30 font-mono">—</span>
                        )
                      ) : (
                        <span className="text-foreground/70 font-mono text-xs">
                          {row.fullstack}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Specialized Add-ons */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-medium mb-3">
              Modular Additions
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary">
              Specialized Add-On Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                title: "Microservices & API Migration",
                price: "$1,100",
                description: "Refactor legacy monoliths into distributed Spring Boot / NestJS microservices with gRPC or REST communication."
              },
              {
                icon: Server,
                title: "Cloud & DevOps Automation",
                price: "$950",
                description: "Dockerization, multi-stage CI/CD pipelines, SSL certificates, reverse proxies (Nginx), and scalable server provisioning."
              },
              {
                icon: Database,
                title: "Database Tuning & Query Optimization",
                price: "$850",
                description: "PostgreSQL query optimization, schema indexing, Redis caching layers, connection pooling, and latency reduction."
              }
            ].map((addon, aIdx) => (
              <div
                key={aIdx}
                className="p-6 border border-primary/20 bg-card/40 hover:border-primary/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <addon.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-serif text-primary mb-1">{addon.title}</h3>
                  <p className="text-sm font-semibold text-foreground mb-3 font-mono">
                    {addon.price}
                  </p>
                  <p className="text-xs text-foreground/70 leading-relaxed font-light mb-6">
                    {addon.description}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsModalOpen(true)}
                  className="rounded-none border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground text-xs uppercase tracking-wider w-full"
                >
                  Add to Project
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-medium mb-3">
              Client Guidance
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif text-primary">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-primary/20 px-6 py-2 bg-card/30 data-[state=open]:border-primary/60 transition-colors"
              >
                <AccordionTrigger className="text-left font-serif text-base sm:text-lg text-primary hover:no-underline py-4">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 font-light text-sm sm:text-base leading-relaxed pt-2 pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom Call to Action */}
        <div className="border border-primary/30 bg-card/60 p-8 sm:p-14 text-center relative overflow-hidden shadow-glow">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <p className="text-primary text-xs uppercase tracking-[0.3em] font-semibold">
              Ready to Build?
            </p>
            <h2 className="text-3xl sm:text-5xl font-serif text-primary leading-tight">
              Need a Tailored API Architecture or Full-Stack Build?
            </h2>
            <p className="text-foreground/70 font-light text-base sm:text-lg leading-relaxed">
              Reach out today to discuss your endpoints, data model, and technical requirements, and receive a formal milestone proposal.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="rounded-none px-10 h-14 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-xs uppercase tracking-widest w-full sm:w-auto"
              >
                Request Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-none px-10 h-14 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs uppercase tracking-widest w-full sm:w-auto"
              >
                <a href="mailto:abayomoise950@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Directly
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Global Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default PricingPage;