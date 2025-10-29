"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiGlobeAlt } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const footerLinks = {
  services: [
    { label: "Web Development", href: "/services#web-development" },
    { label: "Digital Marketing", href: "/services#digital-marketing" },
    { label: "SEO Optimization", href: "/services#seo" },
    { label: "Branding", href: "/services#branding" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { icon: FaFacebook, href: "https://facebook.com/viunex", label: "Facebook" },
  { icon: FaTwitter, href: "https://twitter.com/viunex", label: "Twitter" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/company/viunex",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/viunex",
    label: "Instagram",
  },
  { icon: FaGithub, href: "https://github.com/viunex", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* Company Info */}
          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className={styles.footerLogo}>
              <span className="gradient-text">Viunex</span>
            </Link>
            <p className={styles.footerDescription}>
              Transforming businesses through innovative web development,
              digital marketing, and strategic branding solutions.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <HiMail className={styles.contactIcon} />
                <span>hello@viunex.com</span>
              </div>
              <div className={styles.contactItem}>
                <HiPhone className={styles.contactIcon} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <HiLocationMarker className={styles.contactIcon} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.footerTitle}>Services</h3>
            <ul className={styles.footerLinks}>
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.footerTitle}>Company</h3>
            <ul className={styles.footerLinks}>
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.footerTitle}>Legal</h3>
            <ul className={styles.footerLinks}>
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          className={styles.footerBottom}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className={styles.socialLinks}>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>

          <div className={styles.copyright}>
            <p>
              &copy; {new Date().getFullYear()} Viunex. All rights reserved.
            </p>
            <p>
              Crafted with ❤️ by <strong>Nikhil Choudhary</strong> —
              <a href="mailto:nikhilmeharwal@gmail.com"> Get in touch</a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
