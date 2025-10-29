import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { GoogleAnalytics, FacebookPixel } from "./components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Viunex | Web Development, Digital Marketing & SEO Services in Chandigarh | Vuinex",
    template: "%s | Viunex",
  },
  description:
    "Get in touch with Vuinex for website design, SEO, and digital marketing services in Chandigarh. Let's build your online presence together.",

  keywords: [
    "web development",
    "digital marketing",
    "SEO",
    "branding",
    "website design",
  ],
  authors: [{ name: "Viunex Team" }],
  creator: "Viunex",
  publisher: "Viunex",
  metadataBase: new URL("https://viunex.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://viunex.com",
    siteName: "Viunex",
    title: "Viunex - Web Development, Digital Marketing & SEO Services",
    description:
      "Professional web development, digital marketing, SEO optimization, and branding services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Viunex - Web Development, Digital Marketing & SEO Services",
    description:
      "Professional web development, digital marketing, SEO optimization, and branding services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "theme-color": "#1E40AF",
    "color-scheme": "light dark",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <GoogleAnalytics />
        <FacebookPixel />
        <link rel="icon" href="/title_icon.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
