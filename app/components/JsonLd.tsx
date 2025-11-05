interface JsonLdProps {
  data: any;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Schema.org structured data generators for Canada
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Viunex",
  url: "https://viunex.ca",
  logo: "https://viunex.ca/logo.png",
  description:
    "Professional web development, digital marketing, SEO optimization, and branding services for Canadian businesses. Serving Toronto, Vancouver, Montreal and all Canada.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 King Street West",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M5V 1J5",
    addressCountry: "CA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-416-123-4567",
    contactType: "customer service",
    email: "hello@viunex.ca",
    areaServed: "CA",
    availableLanguage: ["English", "French"],
  },
  sameAs: [
    "https://facebook.com/viunex",
    "https://twitter.com/viunex",
    "https://linkedin.com/company/viunex",
    "https://instagram.com/viunex",
  ],
  foundingDate: "2019",
  numberOfEmployees: "10-50",
  industry: "Web Development and Digital Marketing Canada",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Viunex",
  url: "https://viunex.ca",
  description:
    "Professional web development, digital marketing, SEO optimization, and branding services for Canadian businesses. Serving Toronto, Vancouver, Montreal.",
  publisher: {
    "@type": "Organization",
    name: "Viunex",
  },
  inLanguage: ["en-CA", "fr-CA"],
  potentialAction: {
    "@type": "SearchAction",
    target: "https://viunex.ca/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development Services",
  description:
    "Custom websites and web applications built with modern technologies for optimal performance for Canadian businesses.",
  provider: {
    "@type": "Organization",
    name: "Viunex",
  },
  areaServed: "Canada",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Web Development",
          description:
            "Professional web development services for Canadian businesses",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Marketing",
          description:
            "Digital marketing strategies tailored for Canadian market",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Optimization",
          description: "SEO services optimized for Canadian search engines",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Branding",
          description: "Branding solutions for Canadian companies",
        },
      },
    ],
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Viunex",
  description:
    "Web development and digital marketing services for Canadian businesses",
  url: "https://viunex.ca",
  telephone: "+1-416-123-4567",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 King Street West",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M5V 1J5",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "43.6532",
    longitude: "-79.3832",
  },
  openingHours: "Mo-Fr 09:00-17:00",
  areaServed: "Canada",
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Web Development",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "SEO",
      },
    },
  ],
};

export const breadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const articleSchema = (article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: article.title,
  description: article.description,
  image: article.image,
  author: {
    "@type": "Person",
    name: article.author,
  },
  publisher: {
    "@type": "Organization",
    name: "Viunex",
    logo: {
      "@type": "ImageObject",
      url: "https://viunex.ca/logo.png",
    },
  },
  datePublished: article.datePublished,
  dateModified: article.dateModified || article.datePublished,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": article.url,
  },
  inLanguage: "en-CA",
});
