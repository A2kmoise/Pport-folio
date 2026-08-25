import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const DEFAULT_SEO = {
  title: "ABAYO Moise | Senior Full-Stack Developer & Cybersecurity Expert",
  description:
    "Professional portfolio of ABAYO Moise — Senior Full-Stack Developer & Cybersecurity Expert specializing in React, Node.js, NestJS, Spring Boot, and penetration testing.",
  keywords:
    "ABAYO Moise, Full-Stack Developer, Cybersecurity Expert, React Developer, Spring Boot Developer, NestJS, Software Engineer Rwanda, Penetration Testing, Web Security",
  siteUrl: "https://abayo-moise.vercel.app", // Fallback URL
  ogImage: "/favicon.png",
};

export const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = "website",
  jsonLd,
}: SEOProps) => {
  const location = useLocation();

  useEffect(() => {
    const fullTitle = title ? `${title} | ABAYO Moise` : DEFAULT_SEO.title;
    const metaDescription = description || DEFAULT_SEO.description;
    const metaKeywords = keywords || DEFAULT_SEO.keywords;
    const metaOgImage = ogImage || DEFAULT_SEO.ogImage;
    const currentUrl = `${window.location.origin}${location.pathname}`;

    // Update document title
    document.title = fullTitle;

    // Helper to update meta tag
    const updateMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement("meta");
        const match = selector.match(/\[(name|property)="([^"]+)"\]/);
        if (match) {
          element.setAttribute(match[1], match[2]);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Helper to update link tag
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // Standard Meta Tags
    updateMetaTag('meta[name="description"]', "content", metaDescription);
    updateMetaTag('meta[name="keywords"]', "content", metaKeywords);
    updateMetaTag('meta[name="author"]', "content", "ABAYO Moise");
    updateMetaTag('meta[name="robots"]', "content", "index, follow");

    // Open Graph Tags
    updateMetaTag('meta[property="og:title"]', "content", fullTitle);
    updateMetaTag('meta[property="og:description"]', "content", metaDescription);
    updateMetaTag('meta[property="og:type"]', "content", ogType);
    updateMetaTag('meta[property="og:url"]', "content", currentUrl);
    updateMetaTag('meta[property="og:image"]', "content", metaOgImage);
    updateMetaTag('meta[property="og:site_name"]', "content", "ABAYO Moise Portfolio");

    // Twitter Card Meta Tags
    updateMetaTag('meta[name="twitter:card"]', "content", "summary_large_image");
    updateMetaTag('meta[name="twitter:title"]', "content", fullTitle);
    updateMetaTag('meta[name="twitter:description"]', "content", metaDescription);
    updateMetaTag('meta[name="twitter:image"]', "content", metaOgImage);

    // Canonical URL
    updateLinkTag("canonical", currentUrl);

    // Structured Data (JSON-LD)
    const scriptId = "json-ld-seo";
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    
    if (jsonLd) {
      if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.id = scriptId;
        scriptElement.type = "application/ld+json";
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(jsonLd);
    } else if (scriptElement) {
      scriptElement.remove();
    }
  }, [title, description, keywords, ogImage, ogType, jsonLd, location.pathname]);

  return null;
};

export default SEO;
