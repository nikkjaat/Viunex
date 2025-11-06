"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import JsonLd, {
  organizationSchema,
  websiteSchema,
  serviceSchema,
} from "./components/JsonLd";
import {
  HiCode,
  HiTrendingUp,
  HiColorSwatch,
  HiSearchCircle,
  HiArrowRight,
  HiStar,
  HiCheckCircle,
} from "react-icons/hi";
import styles from "./page.module.css";

const services = [
  {
    icon: HiCode,
    title: "Web Development",
    description:
      "Professional website development services for Canadian businesses. Responsive, fast-loading websites optimized for Canadian audience.",
    features: ["Mobile-First Design", "Fast Loading", "SEO Optimized"],
  },
  {
    icon: HiTrendingUp,
    title: "Digital Marketing",
    description:
      "Canadian digital marketing strategies that drive results. SEO, social media, and PPC campaigns tailored for Canadian market.",
    features: ["Social Media", "PPC Campaigns", "Content Strategy"],
  },
  {
    icon: HiSearchCircle,
    title: "SEO",
    description:
      "Top-ranking SEO services for Canadian businesses. Optimize for Canadian search engines and reach local customers effectively.",
    features: ["Keyword Research", "Technical SEO", "Link Building"],
  },
  {
    icon: HiColorSwatch,
    title: "Branding",
    description:
      "Create memorable brand identities that resonate with Canadian audience and build strong market presence.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity"],
  },
];

const stats = [
  { number: "150+", label: "Projects" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "5+", label: "Years" },
  { number: "24/7", label: "Support" },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "",
    text: "Viunex transformed our online presence completely for Canadian market. Their attention to detail and technical expertise is unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "",
    text: "The SEO results for our Canadian business speak for themselves. We saw a 300% increase in organic traffic within 6 months.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "",
    text: "Professional, creative, and results-driven. Viunex exceeded all our expectations for Canadian digital solutions.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={serviceSchema} />
      <div className={styles.homepage}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className={styles.heroTitle}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Driving Digital Growth for
                <span className="gradient-text"> Canadian Businesses</span>
              </motion.h1>

              <motion.p
                className={styles.heroDescription}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We specialize in web development, digital marketing, SEO, and
                branding tailored to the Canadian market. Our mission: to
                deliver measurable results and long-term digital success for
                every client we work with.
              </motion.p>

              <motion.div
                className={styles.heroActions}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link href="/contact" className="btn btn-primary">
                  Get Started <HiArrowRight />
                </Link>
                <Link href="/projects" className="btn btn-secondary">
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className={styles.heroImage}>
                <Image
                  src="https://res.cloudinary.com/dbexuvouv/image/upload/v1762437191/viunex/WhatsApp_Image_2025-11-06_at_12.00.17_b08037a3_dz0xav.jpg"
                  alt="Digital transformation for Canadian businesses"
                  width={500}
                  height={400}
                  priority
                  className={styles.heroImg}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.stats}>
          <div className="container">
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={styles.statItem}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className={styles.statNumber}>{stat.number}</h3>
                  <p className={styles.statLabel}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section">
          <div className="container">
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.sectionTitle}>Our Services for Canada</h2>
              <p className={styles.sectionDescription}>
                Comprehensive digital solutions tailored for Canadian business
                needs
              </p>
            </motion.div>

            <div className={styles.servicesGrid}>
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    className={`card ${styles.serviceCard}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                  >
                    <div className={styles.serviceIcon}>
                      <Icon />
                    </div>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>
                      {service.description}
                    </p>
                    <ul className={styles.serviceFeatures}>
                      {service.features.map((feature) => (
                        <li key={feature}>
                          <HiCheckCircle className={styles.checkIcon} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <div className="container">
            <motion.div
              className={styles.sectionHeader}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.sectionTitle}>What Canadian Clients Say</h2>
              <p className={styles.sectionDescription}>
                Don't just take our word for it - hear from our satisfied
                Canadian clients
              </p>
            </motion.div>

            <div className={styles.testimonialsGrid}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  className={`card ${styles.testimonialCard}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.testimonialRating}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <HiStar key={i} className={styles.starIcon} />
                    ))}
                  </div>
                  <p className={styles.testimonialText}>"{testimonial.text}"</p>
                  <div className={styles.testimonialAuthor}>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.company}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className="container">
            <motion.div
              className={styles.ctaContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={styles.ctaTitle}>
                Ready to Grow Your Canadian Business?
              </h2>
              <p className={styles.ctaDescription}>
                Let's discuss how we can help you achieve your digital goals and
                drive growth in Canada.
              </p>
              <Link href="/contact" className="btn btn-primary">
                Start Your Project <HiArrowRight />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
