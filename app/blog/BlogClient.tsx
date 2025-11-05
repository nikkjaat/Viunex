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
    title: "Web Development Trends in Canada 2025: Toronto to Vancouver",
    excerpt:
      "Explore the latest web development trends shaping Canadian businesses. From AI integration to responsive design for Canadian markets.",
    content: "Full article content would go here...",
    author: "Alex Johnson",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Web Development",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    tags: ["Web Development", "Canadian Tech", "Toronto", "Vancouver"],
    featured: true,
  },
  {
    id: 2,
    title: "SEO Strategies for Canadian Businesses: Rank Higher in Google.ca",
    excerpt:
      "Learn essential SEO strategies that help Canadian businesses rank higher in local search results and attract organic traffic.",
    content: "Full article content would go here...",
    author: "Sarah Chen",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "SEO Canada",
    image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg",
    tags: ["SEO Canada", "Canadian SEO", "Google.ca", "Local Ranking"],
    featured: true,
  },
  {
    id: 3,
    title: "Building Brand Identity for Canadian Companies",
    excerpt:
      "Discover how to create compelling brand identities that resonate with Canadian audience and stand out in local markets.",
    content: "Full article content would go here...",
    author: "Emily Davis",
    date: "2025-01-05",
    readTime: "5 min read",
    category: "Branding Canada",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
    tags: ["Branding Canada", "Canadian Brands", "Local Identity", "Marketing"],
    featured: false,
  },
  {
    id: 4,
    title: "Digital Marketing Strategies for Canadian Businesses",
    excerpt:
      "Proven digital marketing strategies that deliver real results for Canadian businesses of all sizes across provinces.",
    content: "Full article content would go here...",
    author: "Michael Rodriguez",
    date: "2024-12-28",
    readTime: "7 min read",
    category: "Digital Marketing Canada",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg",
    tags: ["Digital Marketing Canada", "Canadian Market", "ROI", "Growth"],
    featured: false,
  },
  {
    id: 5,
    title: "User Experience Design for Canadian Audiences",
    excerpt:
      "Understanding Canadian user psychology to create interfaces that drive conversions and engagement for local businesses.",
    content: "Full article content would go here...",
    author: "Sarah Chen",
    date: "2024-12-20",
    readTime: "9 min read",
    category: "UX Design Canada",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    tags: ["UX Design Canada", "Canadian Users", "Conversion", "Research"],
    featured: false,
  },
  {
    id: 6,
    title: "Website Performance Optimization for Canadian Markets",
    excerpt:
      "Advanced techniques to optimize web applications for speed and performance targeting Canadian audience.",
    content: "Full article content would go here...",
    author: "Alex Johnson",
    date: "2024-12-15",
    readTime: "10 min read",
    category: "Performance Canada",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
    tags: ["Performance Canada", "Optimization", "Speed", "Canadian Hosting"],
    featured: false,
  },
];

const categories = [
  "All",
  "Web Development Canada",
  "SEO Canada",
  "Branding Canada",
  "Digital Marketing Canada",
  "UX Design Canada",
  "Performance Canada",
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
      setNewsletterMessage("Successfully subscribed to our Canada insights!");
      setNewsletterEmail("");

      // Track successful newsletter subscription
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "newsletter_signup", {
          event_category: "engagement",
          event_label: "canada_blog",
        });
      }

      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Subscribe", {
          content_name: "Canada Newsletter",
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
              Canada <span className="gradient-text">Business Insights</span>
            </h1>
            <p className={styles.heroDescription}>
              Expert insights, tips, and industry knowledge for Canadian
              businesses. Learn from our experts and grow your business across
              Canada from Toronto to Vancouver.
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
            <h2 className={styles.sectionTitle}>Featured Canada Insights</h2>
            <p className={styles.sectionDescription}>
              Our most popular content for Canadian business growth
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
                    alt={`${post.title} - Canadian business insights`}
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
                    Read Canada Insights <HiArrowRight />
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
            <h2 className={styles.sectionTitle}>Latest Canada Articles</h2>
            <p className={styles.sectionDescription}>
              Stay updated with latest Canadian business insights and growth
              tips
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
                    alt={`${post.title} - Canadian business blog`}
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
                      Read Canada Article <HiArrowRight />
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
            <h2 className={styles.newsletterTitle}>Canada Business Updates</h2>
            <p className={styles.newsletterDescription}>
              Subscribe to our newsletter for latest Canadian market insights
              and business growth tips.
            </p>
            <form
              className={styles.newsletterForm}
              onSubmit={handleNewsletterSubmit}
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email for Canada insights"
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
                  : "Get Canada Insights"}
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
