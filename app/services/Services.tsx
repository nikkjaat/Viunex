'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
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
  HiShieldCheck
} from 'react-icons/hi';
import styles from './services.module.css';

const services = [
  {
    id: 'web-development',
    icon: HiCode,
    title: 'Web Development',
    subtitle: 'Custom websites that perform',
    description: 'We build fast, secure, and scalable websites using the latest technologies. From simple landing pages to complex web applications, we deliver solutions that drive results.',
    features: [
      'Responsive Design',
      'Fast Loading Speed',
      'SEO Optimized',
      'Mobile-First Approach',
      'Cross-Browser Compatible',
      'Security Best Practices'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg',
    pricing: 'Starting from $2,999'
  },
  {
    id: 'digital-marketing',
    icon: HiTrendingUp,
    title: 'Digital Marketing',
    subtitle: 'Grow your online presence',
    description: 'Strategic digital marketing campaigns that increase brand awareness, drive traffic, and generate leads. We use data-driven approaches to maximize your ROI.',
    features: [
      'Social Media Marketing',
      'Pay-Per-Click (PPC)',
      'Content Marketing',
      'Email Campaigns',
      'Analytics & Reporting',
      'Conversion Optimization'
    ],
    technologies: ['Google Ads', 'Facebook Ads', 'Google Analytics', 'HubSpot', 'Mailchimp', 'SEMrush'],
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    pricing: 'Starting from $1,499/month'
  },
  {
    id: 'seo',
    icon: HiSearchCircle,
    title: 'SEO Optimization',
    subtitle: 'Rank higher on search engines',
    description: 'Comprehensive SEO strategies that improve your search rankings and organic visibility. We focus on both technical SEO and content optimization.',
    features: [
      'Keyword Research',
      'On-Page Optimization',
      'Technical SEO Audit',
      'Link Building',
      'Local SEO',
      'Performance Monitoring'
    ],
    technologies: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog', 'GTMetrix', 'Schema.org'],
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg',
    pricing: 'Starting from $999/month'
  },
  {
    id: 'branding',
    icon: HiColorSwatch,
    title: 'Branding',
    subtitle: 'Create a memorable identity',
    description: 'Complete brand identity solutions that help you stand out in the market. From logo design to brand guidelines, we create cohesive visual identities.',
    features: [
      'Logo Design',
      'Brand Guidelines',
      'Visual Identity',
      'Marketing Materials',
      'Brand Strategy',
      'Brand Positioning'
    ],
    technologies: ['Adobe Creative Suite', 'Figma', 'Sketch', 'InVision', 'Canva Pro', 'Brand.ai'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    pricing: 'Starting from $1,999'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We start by understanding your business goals, target audience, and project requirements.'
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'We develop a comprehensive strategy tailored to your specific needs and objectives.'
  },
  {
    step: '03',
    title: 'Execution',
    description: 'Our expert team implements the strategy with precision and attention to detail.'
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'We continuously monitor and optimize performance to ensure maximum results.'
  }
];

export default function Services() {
  return (
    <div className={styles.servicesPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.heroTitle}>
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className={styles.heroDescription}>
              Comprehensive digital solutions designed to transform your business 
              and drive sustainable growth in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className={styles.servicesGrid}>
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  className={styles.serviceCard}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.serviceContent}>
                    <div className={styles.serviceHeader}>
                      <div className={styles.serviceIcon}>
                        <Icon />
                      </div>
                      <div>
                        <h2 className={styles.serviceTitle}>{service.title}</h2>
                        <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className={styles.serviceDescription}>{service.description}</p>
                    
                    <div className={styles.serviceFeatures}>
                      <h3>What's Included:</h3>
                      <ul>
                        {service.features.map((feature) => (
                          <li key={feature}>
                            <HiCheckCircle className={styles.checkIcon} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.serviceTechnologies}>
                      <h3>Technologies We Use:</h3>
                      <div className={styles.techTags}>
                        {service.technologies.map((tech) => (
                          <span key={tech} className={styles.techTag}>{tech}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className={styles.serviceFooter}>
                      <div className={styles.servicePricing}>
                        <span className={styles.priceLabel}>Pricing:</span>
                        <span className={styles.price}>{service.pricing}</span>
                      </div>
                      <Link href="/contact" className="btn btn-primary">
                        Get Started <HiArrowRight />
                      </Link>
                    </div>
                  </div>
                  
                  <div className={styles.serviceImage}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={500}
                      height={300}
                      className={styles.serviceImg}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.process}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>Our Process</h2>
            <p className={styles.sectionDescription}>
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>
          
          <div className={styles.processGrid}>
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className={styles.processStep}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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
        <div className="container">
          <motion.div 
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
            <p className={styles.ctaDescription}>
              Let's discuss your project and create a custom solution that drives results.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">
                Start Your Project <HiArrowRight />
              </Link>
              <Link href="/projects" className="btn btn-secondary">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}