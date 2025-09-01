// src/components/StructuredData.jsx
import React, { useEffect } from "react";

const StructuredData = () => {
  useEffect(() => {
    // --- JSON-LD Structured Data ---
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "http://schema.org",
      "@type": "Organization",
      name: "Polymorphism Infotech",
      founder: "Dinesh Raywade",
      description:
        "Polymorphism Infotech is a leading IT solutions provider specializing in custom software development, enterprise applications, and digital transformation services.",
      url: "https://polymorphisminfotech.com",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Office No, 303, 313, HDFC Bank, A-WING, Laxmi Horizon, Bengaluru - Mumbai Hwy, Punvale Bazar, Punawale, Mumbai, Pune, Maharashtra 411033",
        addressLocality: "Pune",
        addressRegion: "MH",
        postalCode: "411033",
        addressCountry: "India",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 9156486909",
        contactType: "customer service",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "18.5913",
        longitude: "73.7389",
      },
    });
    document.head.appendChild(script);

    // --- Meta Tags ---
    document.title = "Polymorphism Infotech";

    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content =
      "Polymorphism Infotech is a leading IT solutions provider specializing in custom software development, enterprise applications, and digital transformation services.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement("meta");
    metaKeywords.name = "keywords";
    metaKeywords.content =
      "Polymorphism Infotech, IT company, software development, Java, Python, ReactJS, Angular, Microservices, Cloud, DevOps, enterprise solutions, digital transformation, polymorphism infotech";
    document.head.appendChild(metaKeywords);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
    };
  }, []);

  return null; // nothing to render in JSX
};

export default StructuredData;
