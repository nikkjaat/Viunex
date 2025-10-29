"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  HiCalendar,
  HiUser,
  HiClock,
  HiArrowRight,
  HiTag,
  HiCheckCircle,
  HiExclamationCircle,
} from "react-icons/hi";
import styles from "./blog.module.css";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2025",
    excerpt:
      "Explore the latest trends shaping web development, from AI integration to progressive web apps and the evolution of user experience design.",
    content: "Full article content would go here...",
    author: "Alex Johnson",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Web Development",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    tags: ["Web Development", "Trends", "AI", "PWA"],
    featured: true,
  },
  {
    id: 2,
    title: "SEO Best Practices for Modern Websites",
    excerpt:
      "Learn the essential SEO strategies that will help your website rank higher in search results and attract more organic traffic.",
    content: "Full article content would go here...",
    author: "Sarah Chen",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "SEO",
    image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg",
    tags: ["SEO", "Marketing", "Google", "Rankings"],
    featured: true,
  },
  {
    id: 3,
    title: "Building Brand Identity in the Digital Age",
    excerpt:
      "Discover how to create a compelling brand identity that resonates with your audience and stands out in the digital marketplace.",
    content: "Full article content would go here...",
    author: "Emily Davis",
    date: "2025-01-05",
    readTime: "5 min read",
    category: "Branding",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    tags: ["Branding", "Design", "Identity", "Marketing"],
    featured: false,
  },
  {
    id: 4,
    title: "Digital Marketing Strategies That Actually Work",
    excerpt:
      "Cut through the noise with proven digital marketing strategies that deliver real results for businesses of all sizes.",
    content: "Full article content would go here...",
    author: "Michael Rodriguez",
    date: "2024-12-28",
    readTime: "7 min read",
    category: "Digital Marketing",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
    tags: ["Digital Marketing", "Strategy", "ROI", "Growth"],
    featured: false,
  },
  {
    id: 5,
    title: "The Psychology of User Experience Design",
    excerpt:
      "Understanding user psychology is key to creating interfaces that not only look great but also drive conversions and engagement.",
    content: "Full article content would go here...",
    author: "Sarah Chen",
    date: "2024-12-20",
    readTime: "9 min read",
    category: "UX Design",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    tags: ["UX Design", "Psychology", "Conversion", "User Research"],
    featured: false,
  },
  {
    id: 6,
    title: "Performance Optimization for Modern Web Apps",
    excerpt:
      "Learn advanced techniques to optimize your web applications for speed, performance, and better user experience.",
    content: "Full article content would go here...",
    author: "Alex Johnson",
    date: "2024-12-15",
    readTime: "10 min read",
    category: "Performance",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    tags: ["Performance", "Optimization", "Speed", "Core Web Vitals"],
    featured: false,
  },
];

const categories = [
  "All",
  "Web Development",
  "SEO",
  "Branding",
  "Digital Marketing",
  "UX Design",
  "Performance",
];

export default function BlogClient() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.slice(0, 6);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsletterStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to subscribe");
      }

      setNewsletterStatus("success");
      setNewsletterMessage("Successfully subscribed to our newsletter!");
      setNewsletterEmail("");

      // Track successful newsletter subscription
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "newsletter_signup", {
          event_category: "engagement",
          event_label: "blog_page",
        });
      }

      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Subscribe", {
          content_name: "Newsletter",
          content_category: "Email Marketing",
        });
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      setNewsletterStatus("error");
      setNewsletterMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setNewsletterStatus("idle");
      setNewsletterMessage("");
    }, 5000);
  };

  return (
    <div className={styles.blogPage}>
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
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className={styles.heroDescription}>
              Insights, tips, and industry knowledge to help you stay ahead in
              the digital landscape. Learn from our experts and grow your
              business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section">
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>Featured Articles</h2>
            <p className={styles.sectionDescription}>
              Our most popular and insightful content
            </p>
          </motion.div>

          <div className={styles.featuredGrid}>
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className={styles.featuredPost}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={styles.postImage}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={300}
                    className={styles.postImg}
                  />
                  <div className={styles.postCategory}>{post.category}</div>
                </div>

                <div className={styles.postContent}>
                  <div className={styles.postMeta}>
                    <div className={styles.metaItem}>
                      <HiUser className={styles.metaIcon} />
                      <span>{post.author}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <HiCalendar className={styles.metaIcon} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <HiClock className={styles.metaIcon} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className={styles.postTitle}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

                  <p className={styles.postExcerpt}>{post.excerpt}</p>

                  <div className={styles.postTags}>
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className={styles.tag}>
                        <HiTag className={styles.tagIcon} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href={`/blog/${post.id}`} className={styles.readMore}>
                    Read More <HiArrowRight />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className={styles.allPosts}>
        <div className="container">
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.sectionTitle}>Latest Articles</h2>
            <p className={styles.sectionDescription}>
              Stay updated with our latest insights and tips
            </p>
          </motion.div>

          <div className={styles.postsGrid}>
            {recentPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className={`card ${styles.postCard}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.cardImage}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className={styles.cardImg}
                  />
                  <div className={styles.cardCategory}>{post.category}</div>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardAuthor}>{post.author}</span>
                    <span className={styles.cardDate}>
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>

                  <h3 className={styles.cardTitle}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

                  <p className={styles.cardExcerpt}>{post.excerpt}</p>

                  <div className={styles.cardFooter}>
                    <span className={styles.readTime}>
                      <HiClock className={styles.clockIcon} />
                      {post.readTime}
                    </span>
                    <Link href={`/blog/${post.id}`} className={styles.cardLink}>
                      Read More <HiArrowRight />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className={styles.newsletter}>
        <div className="container">
          <motion.div
            className={styles.newsletterContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.newsletterTitle}>Stay Updated</h2>
            <p className={styles.newsletterDescription}>
              Subscribe to our newsletter and get the latest insights delivered
              to your inbox.
            </p>
            <form
              className={styles.newsletterForm}
              onSubmit={handleNewsletterSubmit}
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={newsletterStatus === "loading"}
                className={styles.newsletterInput}
              />
              <button
                type="submit"
                disabled={newsletterStatus === "loading"}
                className="btn btn-primary"
              >
                {newsletterStatus === "loading"
                  ? "Subscribing..."
                  : "Subscribe"}
              </button>
            </form>

            {newsletterStatus === "success" && (
              <div className={styles.successMessage}>
                <HiCheckCircle />
                <span>{newsletterMessage}</span>
              </div>
            )}

            {newsletterStatus === "error" && (
              <div className={styles.errorMessage}>
                <HiExclamationCircle />
                <span>{newsletterMessage}</span>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
