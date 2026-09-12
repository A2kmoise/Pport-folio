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
    "Professional portfolio of ABAYO Moise — Senior Full-Stack Developer & Cybersecurity Expert specializing in React, Node.js, NestJS, Spring Boot, and penetration testing. Based in Kigali, Rwanda.",
  keywords:
    "ABAYO Moise, Full-Stack Developer, Cybersecurity Expert, React Developer, Spring Boot Developer, NestJS, Software Engineer Rwanda, Penetration Testing, Web Security, Java Developer, TypeScript Developer, Kigali Tech, Rwanda Developer, REST API, PostgreSQL, MongoDB, Web Development Portfolio",
  siteUrl: "https://abmoise.vercel.app",
  ogImage: "https://abmoise.vercel.app/favicon.png",
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
    const canonicalUrl = `${DEFAULT_SEO.siteUrl}${location.pathname}`;
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
    updateMetaTag('meta[property="og:image:width"]', "content", "1200");
    updateMetaTag('meta[property="og:image:height"]', "content", "630");
    updateMetaTag('meta[property="og:image:alt"]', "content", fullTitle);
    updateMetaTag('meta[property="og:site_name"]', "content", "ABAYO Moise Portfolio");
    updateMetaTag('meta[property="og:locale"]', "content", "en_US");

    // Twitter Card Meta Tags
    updateMetaTag('meta[name="twitter:card"]', "content", "summary_large_image");
    updateMetaTag('meta[name="twitter:title"]', "content", fullTitle);
    updateMetaTag('meta[name="twitter:description"]', "content", metaDescription);
    updateMetaTag('meta[name="twitter:image"]', "content", metaOgImage);
    updateMetaTag('meta[name="twitter:image:alt"]', "content", fullTitle);
    updateMetaTag('meta[name="twitter:site"]', "content", "@abayomoise");
    updateMetaTag('meta[name="twitter:creator"]', "content", "@abayomoise");

    // Canonical URL
    updateLinkTag("canonical", canonicalUrl);

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
