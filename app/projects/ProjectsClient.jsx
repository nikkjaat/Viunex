'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  HiExternalLink, 
  HiCode, 
  HiTrendingUp, 
  HiColorSwatch, 
  HiSearchCircle,
  HiArrowRight
} from 'react-icons/hi';
import styles from './projects.module.css';

const projects = [
  {
    id: 1,
    title: 'TechStart E-commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration, featuring real-time inventory management and advanced analytics.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    results: ['300% increase in conversions', '50% faster page load times', '99.9% uptime'],
    link: '#',
    featured: true
  },
  {
    id: 2,
    title: 'GrowthCorp Digital Campaign',
    category: 'Digital Marketing',
    description: 'Comprehensive digital marketing strategy that increased brand awareness and generated high-quality leads across multiple channels.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
    technologies: ['Google Ads', 'Facebook Ads', 'Analytics', 'HubSpot'],
    results: ['400% ROI increase', '250% more qualified leads', '180% social engagement boost'],
    link: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Creative Studio Rebrand',
    category: 'Branding',
    description: 'Complete brand identity redesign including logo, visual guidelines, and marketing materials for a creative agency.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    technologies: ['Adobe Creative Suite', 'Figma', 'Brand Strategy'],
    results: ['90% brand recognition increase', '60% more client inquiries', 'Award-winning design'],
    link: '#',
    featured: false
  },
  {
    id: 4,
    title: 'HealthTech SEO Optimization',
    category: 'SEO',
    description: 'Technical SEO audit and optimization that dramatically improved search rankings for a healthcare technology company.',
    image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg',
    technologies: ['Technical SEO', 'Content Strategy', 'Schema Markup'],
    results: ['500% organic traffic increase', 'Top 3 rankings for key terms', '85% click-through rate improvement'],
    link: '#',
    featured: false
  },
  {
    id: 5,
    title: 'FinanceApp Mobile Experience',
    category: 'Web Development',
    description: 'Progressive web application for financial services with advanced security features and real-time data visualization.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    technologies: ['React', 'PWA', 'Chart.js', 'Security APIs'],
    results: ['95% user satisfaction', '40% increase in daily active users', 'Bank-grade security'],
    link: '#',
    featured: false
  },
  {
    id: 6,
    title: 'RetailChain Marketing Automation',
    category: 'Digital Marketing',
    description: 'Automated marketing workflows and customer segmentation strategy for a national retail chain.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    technologies: ['Marketing Automation', 'CRM Integration', 'Email Marketing'],
    results: ['320% email open rate increase', '150% customer retention', '200% revenue per customer'],
    link: '#',
    featured: false
  }
];

const categories = ['All', 'Web Development', 'Digital Marketing', 'SEO', 'Branding'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className={styles.projectsPage}>
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
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className={styles.heroDescription}>
              Explore our portfolio of successful projects and see how we've helped 
              businesses transform their digital presence and achieve remarkable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <p className={styles.sectionDescription}>
              Our most impactful work that showcases our expertise and results
            </p>
          </motion.div>
          
          <div className={styles.featuredGrid}>
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={styles.featuredProject}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={styles.projectImage}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={styles.projectImg}
                  />
                  <div className={styles.projectOverlay}>
                    <Link href={project.link} className={styles.projectLink}>
                      <HiExternalLink />
                    </Link>
                  </div>
                </div>
                
                <div className={styles.projectContent}>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectCategory}>{project.category}</span>
                  </div>
                  
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                  
                  <div className={styles.projectTech}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                  
                  <div className={styles.projectResults}>
                    <h4>Key Results:</h4>
                    <ul>
                      {project.results.map((result, i) => (
                        <li key={i}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className={styles.allProjects}>
        <div className="container">
          <motion.div 
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>All Projects</h2>
            <p className={styles.sectionDescription}>
              Browse our complete portfolio by category
            </p>
          </motion.div>
          
          {/* Category Filter */}
          <motion.div 
            className={styles.categoryFilter}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${styles.categoryBtn} ${
                  selectedCategory === category ? styles.active : ''
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          
          {/* Projects Grid */}
          <motion.div 
            className={styles.projectsGrid}
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`card ${styles.projectCard}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                layout
              >
                <div className={styles.cardImage}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className={styles.cardImg}
                  />
                  <div className={styles.cardOverlay}>
                    <Link href={project.link} className={styles.cardLink}>
                      <HiExternalLink />
                    </Link>
                  </div>
                </div>
                
                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardCategory}>{project.category}</span>
                  </div>
                  
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>{project.description}</p>
                  
                  <div className={styles.cardTech}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className={styles.cardTechTag}>{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={styles.cardTechMore}>
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            <h2 className={styles.ctaTitle}>Ready to Start Your Project?</h2>
            <p className={styles.ctaDescription}>
              Let's create something amazing together. Get in touch to discuss your vision.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Start Your Project <HiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}