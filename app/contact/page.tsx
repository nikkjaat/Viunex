import Contact from "./ContactClient";

export const metadata = {
  title: "Contact | Web Development, Digital Marketing & SEO Services in Chandigarh | Vuinex",
  description:
    "Get in touch with Vuinex for website design, SEO, and digital marketing services in Chandigarh. Let's build your online presence together.",
  openGraph: {
    title: "Contact | Web Design & SEO Services in Chandigarh | Vuinex",
    description:
      "Reach out to Vuinex for expert web design, SEO, and marketing solutions in Chandigarh.",
    url: "https://www.viunex.com/contact",
    siteName: "Vuinex",
    images: [
      {
        url: "https://www.viunex.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vuinex Web Design and SEO",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactPage() {
  return <Contact />;
}
