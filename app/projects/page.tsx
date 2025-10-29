import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title:
    "Projects | Web Development, Digital Marketing & SEO Portfolio | Vuinex",
  description:
    "Explore our portfolio of successful projects in web development, digital marketing, SEO, and branding. See how we've helped businesses achieve remarkable results.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
