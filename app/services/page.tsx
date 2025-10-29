import type { Metadata } from 'next';
import Services from './Services';

export const metadata: Metadata = {
  title: "Services | Web Development, Digital Marketing & SEO | Vuinex",
  description: "Professional web development, digital marketing, SEO, and branding services. Custom solutions to grow your business online.",
};

export default function ServicesPage() {
  return <Services />;
}