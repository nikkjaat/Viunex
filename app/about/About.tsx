// app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  HiUsers,
  HiLightBulb,
  HiTrendingUp,
  HiHeart,
  HiArrowRight,
  HiStar,
  HiGlobeAlt,
} from "react-icons/hi";
import styles from "./about.module.css";

const values = [
  {
    icon: HiLightBulb,
    title: "Innovation",
    description:
      "We stay ahead of the curve by embracing new technologies and creative solutions.",
  },
  {
    icon: HiUsers,
    title: "Collaboration",
    description:
      "We work closely with our clients as partners to achieve shared success.",
  },
  {
    icon: HiTrendingUp,
    title: "Excellence",
    description:
      "We deliver high-quality work that exceeds expectations and drives results.",
  },
  {
    icon: HiHeart,
    title: "Passion",
    description:
      "We love what we do and it shows in every project we undertake.",
  },
];

const team = [
  {
    name: "Pranita Alwadhi",
    role: "Founder & CEO",
    image:
      "https://res.cloudinary.com/dbexuvouv/image/upload/v1762320233/viunex/riya_c9lemv.jpg",
    bio: "Leading Viunex with strategic vision and business development expertise, driving growth and client success.",
  },
  {
    name: "Nikhil Choudhary",
    role: "Web Designer & Developer",
    image:
      "https://res.cloudinary.com/dbexuvouv/image/upload/v1762320464/viunex/WhatsApp_Image_2025-11-05_at_10.57.34_9b5163a2_cwk9ap.jpg",
    bio: "Creating stunning, responsive websites with modern technologies and exceptional user experiences.",
  },
  {
    name: "Monu",
    role: "Marketing Head",
    image: "https://res.cloudinary.com/dbexuvouv/image/upload/v1762437258/viunex/WhatsApp_Image_2025-11-06_at_12.02.28_9068d033_eihszm.jpg",
    bio: "Developing comprehensive digital marketing strategies to enhance brand visibility and drive business growth.",
  },
];

const stats = [
  { number: "150+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "5+", label: "Years Experience" },
  { number: "50+", label: "Happy Clients" },
];

export default function About() {
  return (
    <div className={styles.aboutPage}>
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
              About <span className={styles.gradientText}>Viunex</span>
            </h1>
            <p className={styles.heroDescription}>
              We're a passionate team of digital experts dedicated to
              transforming businesses through innovative web solutions and
              strategic digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <motion.div
              className={styles.storyContent}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <div className={styles.storyTextContainer}>
                <p className={styles.storyText}>
                  Founded in 2019, Viunex began as a small team of developers
                  and designers who shared a common vision: to help businesses
                  thrive in the digital age. What started as a passion project
                  has grown into a full-service digital agency that serves
                  clients worldwide.
                </p>
                <p className={styles.storyText}>
                  We believe that great digital experiences are born from the
                  perfect blend of creativity, technology, and strategy. Our
                  team combines technical expertise with creative thinking to
                  deliver solutions that not only look great but also drive real
                  business results.
                </p>
                <p className={styles.storyText}>
                  Today, we're proud to have helped over 150 businesses
                  transform their digital presence and achieve their goals. From
                  startups to established enterprises, we bring the same level
                  of dedication and expertise to every project.
                </p>
              </div>
            </motion.div>

            <motion.div
              className={styles.storyImage}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Team collaboration"
                width={600}
                height={400}
                className={styles.storyImg}
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.mission}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <motion.div
              className={`${styles.card} ${styles.missionCard}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <HiGlobeAlt className={styles.missionIcon} />
              <h3 className={styles.missionTitle}>Our Mission</h3>
              <p className={styles.missionText}>
                To empower businesses with innovative digital solutions that
                drive growth, enhance user experiences, and create lasting value
                in an ever-evolving digital landscape.
              </p>
            </motion.div>

            <motion.div
              className={`${styles.card} ${styles.missionCard}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <HiStar className={styles.missionIcon} />
              <h3 className={styles.missionTitle}>Our Vision</h3>
              <p className={styles.missionText}>
                To be the leading digital agency that businesses trust for
                transformative solutions, setting new standards for creativity,
                innovation, and client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <p className={styles.sectionDescription}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className={`${styles.card} ${styles.valueCard}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -3 }}
                >
                  <div className={styles.valueIcon}>
                    <Icon />
                  </div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={styles.statItem}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h3 className={styles.statNumber}>{stat.number}</h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className={styles.sectionTitle}>Meet Our Team</h2>
            <p className={styles.sectionDescription}>
              The talented individuals behind our success
            </p>
          </motion.div>

          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className={`${styles.card} ${styles.teamCard}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.memberImage}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={280}
                    height={280}
                    className={styles.memberImg}
                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <p className={styles.memberBio}>{member.bio}</p>
                </div>
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
            viewport={{ once: true, margin: "-50px" }}
          >
            <h2 className={styles.ctaTitle}>Ready to Work Together?</h2>
            <p className={styles.ctaDescription}>
              Let's discuss how we can help transform your business with our
              expertise and passion.
            </p>
            <Link
              href="/contact"
              className={`${styles.btn} ${styles.btnPrimary}`}
            >
              Get In Touch <HiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
