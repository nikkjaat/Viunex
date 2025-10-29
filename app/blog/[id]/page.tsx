'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  HiCalendar, 
  HiUser, 
  HiClock, 
  HiArrowLeft,
  HiTag,
  HiShare
} from 'react-icons/hi';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin 
} from 'react-icons/fa';
import styles from './blog-post.module.css';

// Mock blog post data - in a real app, this would come from a CMS or API
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Explore the latest trends shaping web development, from AI integration to progressive web apps and the evolution of user experience design.',
    content: `
      <h2>Introduction</h2>
      <p>The web development landscape is constantly evolving, and 2025 promises to bring exciting new trends and technologies that will reshape how we build and interact with websites. From artificial intelligence integration to advanced performance optimization techniques, developers need to stay ahead of the curve to create exceptional user experiences.</p>
      
      <h2>AI-Powered Development</h2>
      <p>Artificial intelligence is revolutionizing web development in unprecedented ways. AI-powered code generation tools are becoming more sophisticated, helping developers write cleaner, more efficient code faster than ever before. Machine learning algorithms are being integrated directly into websites to provide personalized user experiences, predictive analytics, and intelligent content recommendations.</p>
      
      <h2>Progressive Web Apps (PWAs)</h2>
      <p>Progressive Web Apps continue to gain momentum as they bridge the gap between web and native mobile applications. PWAs offer offline functionality, push notifications, and app-like experiences while maintaining the accessibility and reach of web applications. Major companies are investing heavily in PWA technology to provide seamless cross-platform experiences.</p>
      
      <h2>Performance Optimization</h2>
      <p>Core Web Vitals and performance optimization remain critical factors for both user experience and search engine rankings. New techniques like edge computing, advanced caching strategies, and optimized asset delivery are becoming standard practices for modern web applications.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is bright and full of opportunities. By staying informed about these trends and continuously learning new technologies, developers can create innovative solutions that meet the evolving needs of users and businesses alike.</p>
    `,
    author: 'Alex Johnson',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg',
    tags: ['Web Development', 'Trends', 'AI', 'PWA'],
    featured: true
  },
  // Add more posts as needed
];

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === parseInt(params.id));
  
  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className={styles.blogPostPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/blog" className={styles.backLink}>
              <HiArrowLeft /> Back to Blog
            </Link>
            
            <div className={styles.postCategory}>{post.category}</div>
            
            <h1 className={styles.postTitle}>{post.title}</h1>
            
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
            
            <div className={styles.socialShare}>
              <span>Share:</span>
              <div className={styles.shareButtons}>
                <a href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className={styles.shareBtn}>
                  <FaFacebook />
                </a>
                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className={styles.shareBtn}>
                  <FaTwitter />
                </a>
                <a href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className={styles.shareBtn}>
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className={styles.featuredImage}>
        <div className="container">
          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className={styles.postImage}
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className={styles.articleContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            <motion.article 
              className={styles.mainContent}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div 
                className={styles.articleBody}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className={styles.articleFooter}>
                <div className={styles.tags}>
                  {post.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      <HiTag className={styles.tagIcon} />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className={styles.shareSection}>
                  <h4>Share this article</h4>
                  <div className={styles.shareButtons}>
                    <a href={`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className={styles.shareBtn}>
                      <FaFacebook />
                    </a>
                    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className={styles.shareBtn}>
                      <FaTwitter />
                    </a>
                    <a href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className={styles.shareBtn}>
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
            
            <motion.aside 
              className={styles.sidebar}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className={`card ${styles.authorCard}`}>
                <h3>About the Author</h3>
                <div className={styles.authorInfo}>
                  <div className={styles.authorAvatar}>
                    <Image
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                      alt={post.author}
                      width={80}
                      height={80}
                      className={styles.avatarImg}
                    />
                  </div>
                  <div>
                    <h4>{post.author}</h4>
                    <p>Senior Web Developer and Digital Strategy Expert with over 10 years of experience in creating innovative web solutions.</p>
                  </div>
                </div>
              </div>
              
              <div className={`card ${styles.relatedCard}`}>
                <h3>Related Articles</h3>
                <div className={styles.relatedPosts}>
                  {relatedPosts.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className={styles.relatedPost}>
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        width={80}
                        height={60}
                        className={styles.relatedImg}
                      />
                      <div className={styles.relatedContent}>
                        <h4>{relatedPost.title}</h4>
                        <span className={styles.relatedDate}>
                          {new Date(relatedPost.date).toLocaleDateString()}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
}