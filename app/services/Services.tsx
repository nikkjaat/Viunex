// app/services/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  HiCode,
  HiTrendingUp,
  HiColorSwatch,
  HiSearchCircle,
  HiCheckCircle,
  HiArrowRight,
  HiGlobeAlt,
  HiDeviceMobile,
  HiLightningBolt,
  HiShieldCheck,
} from "react-icons/hi";
import styles from "./services.module.css";

const services = [
  {
    id: "web-development",
    icon: HiCode,
    title: "Web Development",
    subtitle: "Custom websites that perform",
    description:
      "We build fast, secure, and scalable websites using the latest technologies. From simple landing pages to complex web applications, we deliver solutions that drive results.",
    features: [
      "Responsive Design",
      "Fast Loading Speed",
      "SEO Optimized",
      "Mobile-First Approach",
      "Cross-Browser Compatible",
      "Security Best Practices",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
    ],
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    pricing: "Starting from $2,999",
  },
  {
    id: "digital-marketing",
    icon: HiTrendingUp,
    title: "Digital Marketing",
    subtitle: "Grow your online presence",
    description:
      "Strategic digital marketing campaigns that increase brand awareness, drive traffic, and generate leads. We use data-driven approaches to maximize your ROI.",
    features: [
      "Social Media Marketing",
      "Pay-Per-Click (PPC)",
      "Content Marketing",
      "Email Campaigns",
      "Analytics & Reporting",
      "Conversion Optimization",
    ],
    technologies: [
      "Google Ads",
      "Facebook Ads",
      "Google Analytics",
      "HubSpot",
      "Mailchimp",
      "SEMrush",
    ],
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
    pricing: "Starting from $1,499/month",
  },
  {
    id: "seo",
    icon: HiSearchCircle,
    title: "SEO Optimization",
    subtitle: "Rank higher on search engines",
    description:
      "Comprehensive SEO strategies that improve your search rankings and organic visibility. We focus on both technical SEO and content optimization.",
    features: [
      "Keyword Research",
      "On-Page Optimization",
      "Technical SEO Audit",
      "Link Building",
      "Local SEO",
      "Performance Monitoring",
    ],
    technologies: [
      "Google Search Console",
      "Ahrefs",
      "SEMrush",
      "Screaming Frog",
      "GTMetrix",
      "Schema.org",
    ],
    image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg",
    pricing: "Starting from $999/month",
  },
  {
    id: "branding",
    icon: HiColorSwatch,
    title: "Branding",
    subtitle: "Create a memorable identity",
    description:
      "Complete brand identity solutions that help you stand out in the market. From logo design to brand guidelines, we create cohesive visual identities.",
    features: [
      "Logo Design",
      "Brand Guidelines",
      "Visual Identity",
      "Marketing Materials",
      "Brand Strategy",
      "Brand Positioning",
    ],
    technologies: [
      "Adobe Creative Suite",
      "Figma",
      "Sketch",
      "InVision",
      "Canva Pro",
      "Brand.ai",
    ],
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    pricing: "Starting from $1,999",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start by understanding your business goals, target audience, and project requirements.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We develop a comprehensive strategy tailored to your specific needs and objectives.",
  },
  {
    step: "03",
    title: "Execution",
    description:
      "Our expert team implements the strategy with precision and attention to detail.",
  },
  {
    step: "04",
    title: "Optimization",
    description:
      "We continuously monitor and optimize performance to ensure maximum results.",
  },
];

// SEO Metadata for Canada
export const metadata = {
  title:
    "Digital Services in Canada | Web Development, SEO & Marketing | Viunex",
  description:
    "Professional web development, SEO optimization, and digital marketing services in Canada. Custom solutions for Canadian businesses to grow online. Free consultations available.",
  keywords:
    "web development Canada, SEO services Canada, digital marketing Canada, website design Toronto, Vancouver web development, Montreal digital agency",
  openGraph: {
    title: "Digital Services in Canada | Viunex",
    description:
      "Professional web development, SEO, and digital marketing services for Canadian businesses",
    type: "website",
    locale: "en_CA",
    siteName: "Viunex",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://viunex.com/services",
  },
};

export default function Services() {
  // JSON-LD structured data for Canadian businesses
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Viunex Digital Services",
    description:
      "Professional web development, SEO optimization, and digital marketing services in Canada",
    areaServed: "Canada",
    availableLanguage: "English",
    serviceType: "Digital Marketing, Web Development, SEO",
    provider: {
      "@type": "Organization",
      name: "Viunex",
      address: {
        "@type": "PostalAddress",
        addressCountry: "CA",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          areaServed: "Canada",
        },
      })),
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className={styles.servicesPage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className={styles.heroTitle}>
                Digital Services in{" "}
                <span className={styles.gradientText}>Canada</span>
              </h1>
              <p className={styles.heroDescription}>
                Professional web development, SEO optimization, and digital
                marketing services tailored for Canadian businesses. Drive
                growth with our expert solutions across Canada.
              </p>
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <strong>50+</strong> Canadian Clients
                </div>
                <div className={styles.heroStat}>
                  <strong>98%</strong> Client Satisfaction
                </div>
                <div className={styles.heroStat}>
                  <strong>24/7</strong> Canadian Support
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className={styles.section}>
          <div className={styles.container}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <h2 className={styles.sectionTitle}>Our Canadian Services</h2>
              <p className={styles.sectionDescription}>
                Comprehensive digital solutions designed for Canadian businesses
                to succeed online
              </p>
            </motion.div>

            <div className={styles.servicesGrid}>
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.article
                    key={service.id}
                    id={service.id}
                    className={styles.serviceCard}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  >
                    <div className={styles.serviceContent}>
                      <header className={styles.serviceHeader}>
                        <div className={styles.serviceIcon}>
                          <Icon aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className={styles.serviceTitle}>
                            {service.title}
                          </h3>
                          <p className={styles.serviceSubtitle}>
                            {service.subtitle}
                          </p>
                        </div>
                      </header>

                      <p className={styles.serviceDescription}>
                        {service.description}
                      </p>

                      <div className={styles.serviceFeatures}>
                        <h4>What's Included:</h4>
                        <ul role="list">
                          {service.features.map((feature) => (
                            <li key={feature}>
                              <HiCheckCircle
                                className={styles.checkIcon}
                                aria-hidden="true"
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.serviceTechnologies}>
                        <h4>Technologies We Use:</h4>
                        <div className={styles.techTags}>
                          {service.technologies.map((tech) => (
                            <span key={tech} className={styles.techTag}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <footer className={styles.serviceFooter}>
                        <div className={styles.servicePricing}>
                          <span className={styles.priceLabel}>Pricing:</span>
                          <span className={styles.price}>
                            {service.pricing}
                          </span>
                        </div>
                        <Link
                          href="/contact"
                          className={`${styles.btn} ${styles.btnPrimary}`}
                          aria-label={`Get started with ${service.title}`}
                        >
                          Get Started <HiArrowRight aria-hidden="true" />
                        </Link>
                      </footer>
                    </div>

                    <div className={styles.serviceImage}>
                      <Image
                        src={service.image}
                        alt={`${service.title} services in Canada`}
                        width={500}
                        height={300}
                        className={styles.serviceImg}
                        loading={index < 2 ? "eager" : "lazy"}
                      />
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className={styles.process}>
          <div className={styles.container}>
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <h2 className={styles.sectionTitle}>Our Canadian Process</h2>
              <p className={styles.sectionDescription}>
                A proven methodology that ensures successful project delivery
                for Canadian businesses
              </p>
            </motion.div>

            <div className={styles.processGrid}>
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  className={styles.processStep}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                >
                  <div className={styles.stepNumber}>{step.step}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <motion.div
              className={styles.ctaContent}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <h2 className={styles.ctaTitle}>
                Serving Businesses Across Canada
              </h2>
              <p className={styles.ctaDescription}>
                From Toronto to Vancouver, Montreal to Calgary - we help
                Canadian businesses succeed online with tailored digital
                solutions.
              </p>
              <div className={styles.ctaActions}>
                <Link
                  href="/contact"
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  aria-label="Start your Canadian digital project"
                >
                  Start Your Project <HiArrowRight aria-hidden="true" />
                </Link>
                <Link
                  href="/projects"
                  className={`${styles.btn} ${styles.btnSecondary}`}
                  aria-label="View our Canadian client projects"
                >
                  View Canadian Work
                </Link>
              </div>
              <div className={styles.canadaCities}>
                <span>Toronto</span>
                <span>Vancouver</span>
                <span>Montreal</span>
                <span>Calgary</span>
                <span>Ottawa</span>
                <span>Edmonton</span>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
