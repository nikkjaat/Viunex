import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog | Web Development, SEO & Digital Marketing Insights | Vuinex",
  description:
    "Stay updated with the latest insights on web development, SEO, digital marketing, and business growth from our expert team.",
};

export default function BlogPage() {
  return <BlogClient />;
}