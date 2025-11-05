"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "./ThemeProvider";
import styles from "./Navigation.module.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  // { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme } = useTheme();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close menu when clicking outside navbar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <motion.nav
      ref={navRef}
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
      data-theme={theme}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            <Image
              src={`${
                theme === "light"
                  ? "/vuinex_logo_2.png"
                  : "/vuinex_logo_2_white.png"
              }`}
              alt="Viunex Logo"
              width={120}
              height={40}
              className={styles.logoImage}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  pathname === item.href ? styles.active : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className={styles.navActions}>
            {/* <button
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <HiMoon /> : <HiSun />}
            </button> */}

            <button
              className={styles.mobileToggle}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={styles.mobileNav}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.mobileNavLink} ${
                    pathname === item.href ? styles.active : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
