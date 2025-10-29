// app/about/layout.tsx (or page.tsx)
import type { Metadata } from 'next';
import About from "./About";


export const metadata: Metadata = {
  title: "About | Web Development, Digital Marketing & SEO Services in Chandigarh | Vuinex",
  description: "Learn about Viunex — a passionate team of web designers, developers, and marketers helping businesses grow through innovative digital solutions.",
  
  openGraph: {
    title: "About Viunex | Web Design & SEO Experts",
    description: "Discover the story, mission, and team behind Viunex — your trusted digital partner for web development and SEO.",
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Viunex Team",
      },
    ],
  },
};

export default function AboutLayout(){
  return <About />;
}