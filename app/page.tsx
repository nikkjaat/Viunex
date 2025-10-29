'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd, { organizationSchema, websiteSchema, serviceSchema } from './components/JsonLd';
import { 
  HiCode, 
  HiTrendingUp, 
  HiColorSwatch, 
  HiSearchCircle,
  HiArrowRight,
  HiStar,
  HiCheckCircle
} from 'react-icons/hi';
import styles from './page.module.css';

const services = [
  {
    icon: HiCode,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies for optimal performance.',
    features: ['Responsive Design', 'Fast Loading', 'SEO Optimized']
  },
  {
    icon: HiTrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns that drive traffic, engagement, and conversions.',
    features: ['Social Media', 'PPC Campaigns', 'Content Strategy']
  },
  {
    icon: HiSearchCircle,
    title: 'SEO Optimization',
    description: 'Improve your search rankings and organic visibility with proven SEO strategies.',
    features: ['Keyword Research', 'Technical SEO', 'Link Building']
  },
  {
    icon: HiColorSwatch,
    title: 'Branding',
    description: 'Create a memorable brand identity that resonates with your target audience.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity']
  }
];

const stats = [
  { number: '150+', label: 'Projects Completed' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '5+', label: 'Years Experience' },
  { number: '24/7', label: 'Support Available' }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    company: 'TechStart Inc.',
    text: 'Viunex transformed our online presence completely. Their attention to detail and technical expertise is unmatched.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    company: 'GrowthCorp',
    text: 'The SEO results speak for themselves. We saw a 300% increase in organic traffic within 6 months.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    company: 'Creative Studio',
    text: 'Professional, creative, and results-driven. Viunex exceeded all our expectations.',
    rating: 5
  }
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
              Transform Your Business with 
              <span className="gradient-text"> Digital Excellence</span>
            </motion.h1>
            
            <motion.p 
              className={styles.heroDescription}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We create stunning websites, drive digital growth, and build memorable brands 
              that help businesses thrive in the digital landscape.
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
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Digital transformation illustration"
                width={600}
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
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <p className={styles.sectionDescription}>
              Comprehensive digital solutions tailored to your business needs
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
                  <p className={styles.serviceDescription}>{service.description}</p>
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
            <h2 className={styles.sectionTitle}>What Our Clients Say</h2>
            <p className={styles.sectionDescription}>
              Don't just take our word for it - hear from our satisfied clients
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
            <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
            <p className={styles.ctaDescription}>
              Let's discuss how we can help you achieve your digital goals and drive growth.
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