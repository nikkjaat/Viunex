"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiClock,
  HiCheckCircle,
  HiExclamationCircle,
} from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import styles from "./contact.module.css";

const contactInfo = [
  {
    icon: HiMail,
    title: "Email Us",
    details: ["support@viunex.com"],
    description: "Send us an email anytime",
    type: "email" as const,
  },
  {
    icon: FaWhatsapp,
    title: "Chat on WhatsApp",
    details: ["Quick responses"],
    description: "Start a conversation",
    type: "whatsapp" as const,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEmailClick = () => {
    const subject = encodeURIComponent("Inquiry About Digital Services");
    const body = encodeURIComponent(
      "Hi Viunex Team,\n\nI would like to learn more about your digital services and discuss my project requirements.\n\nBest regards,"
    );
    window.open(
      `mailto:support@viunex.com?subject=${subject}&body=${body}`,
      "_blank"
    );

    // Analytics tracking
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "contact_click", {
        contact_method: "email",
      });
    }
  };

  const handleWhatsAppClick = () => {
    const message =
      "Hi! I'm interested in your digital services. Can we discuss my project?";
    // Try the WhatsApp Business API link
    window.open(
      `https://api.whatsapp.com/send?phone=919779704162&text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || "Failed to send message");

      setSubmitStatus("success");

      // Optional: analytics tracking
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "form_submit", {
          form_name: "contact_form",
          service: formData.service,
          budget: formData.budget,
        });
      }

      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", {
          content_name: "Contact Form",
          content_category: "Lead Generation",
        });
      }

      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const handleContactClick = (type: "email" | "whatsapp") => {
    if (type === "email") {
      handleEmailClick();
    } else if (type === "whatsapp") {
      handleWhatsAppClick();
    }
  };

  return (
    <div className={styles.contactPage}>
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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className={styles.heroDescription}>
              Ready to transform your business? Let's discuss your project and
              create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Form Section */}
            <motion.div
              className={styles.formSection}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={`card ${styles.formCard}`}>
                <h2 className={styles.formTitle}>Send us a message</h2>
                <p className={styles.formDescription}>
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.formLabel}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={styles.formInput}
                        placeholder="John Doe"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={styles.formInput}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="company" className={styles.formLabel}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={styles.formInput}
                        placeholder="Your Company"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="service" className={styles.formLabel}>
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={styles.formSelect}
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="digital-marketing">
                          Digital Marketing
                        </option>
                        <option value="seo">SEO Optimization</option>
                        <option value="branding">Branding</option>
                        <option value="consultation">Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="budget" className={styles.formLabel}>
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={styles.formSelect}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="over-50k">Over $50,000</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={styles.formTextarea}
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn btn-primary ${styles.submitBtn} ${
                      isSubmitting ? styles.submitting : ""
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {submitStatus === "success" && (
                    <div className={styles.successMessage}>
                      <HiCheckCircle />
                      <span>
                        Message sent successfully! We'll get back to you soon.
                      </span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className={styles.errorMessage}>
                      <HiExclamationCircle />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Info Section */}
            <motion.div
              className={styles.infoSection}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className={styles.contactInfo}>
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      className={`card ${styles.infoCard} ${styles.clickableCard}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      onClick={() => handleContactClick(info.type)}
                    >
                      <div className={styles.infoIcon}>
                        <Icon />
                      </div>
                      <div className={styles.infoContent}>
                        <h3 className={styles.infoTitle}>{info.title}</h3>
                        <div className={styles.infoDetails}>
                          {info.details.map((detail, i) => (
                            <p key={i}>{detail}</p>
                          ))}
                        </div>
                        <p className={styles.infoDescription}>
                          {info.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
