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

// Schema.org structured data generators
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Viunex",
  "url": "https://viunex.com",
  "logo": "https://viunex.com/logo.png",
  "description": "Professional web development, digital marketing, SEO optimization, and branding services.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Business Ave",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94105",
    "addressCountry": "US"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service",
    "email": "hello@viunex.com"
  },
  "sameAs": [
    "https://facebook.com/viunex",
    "https://twitter.com/viunex",
    "https://linkedin.com/company/viunex",
    "https://instagram.com/viunex"
  ],
  "foundingDate": "2019",
  "numberOfEmployees": "10-50",
  "industry": "Web Development and Digital Marketing"
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Viunex",
  "url": "https://viunex.com",
  "description": "Professional web development, digital marketing, SEO optimization, and branding services.",
  "publisher": {
    "@type": "Organization",
    "name": "Viunex"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://viunex.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Development Services",
  "description": "Custom websites and web applications built with modern technologies for optimal performance.",
  "provider": {
    "@type": "Organization",
    "name": "Viunex"
  },
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Marketing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Optimization"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Branding"
        }
      }
    ]
  }
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
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
  "headline": article.title,
  "description": article.description,
  "image": article.image,
  "author": {
    "@type": "Person",
    "name": article.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Viunex",
    "logo": {
      "@type": "ImageObject",
      "url": "https://viunex.com/logo.png"
    }
  },
  "datePublished": article.datePublished,
  "dateModified": article.dateModified || article.datePublished,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": article.url
  }
});