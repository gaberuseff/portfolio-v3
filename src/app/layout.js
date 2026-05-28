import Providers from "@/Providers";
import { Geist, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://gaberuseff.info"),
  title: {
    default: "Gaber Usef | Front-End & Full-Stack Engineer",
    template: "%s | Gaber Usef",
  },
  description: "Professional Front-End and Full-Stack Web Engineer specializing in high-performance React and Next.js applications, turning complex ideas into elegant digital solutions.",
  keywords: [
    "Gaber Usef",
    "Gaber Useff",
    "Frontend Engineer",
    "Front-End Developer",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Supabase Developer",
    "Prisma ORM",
    "Tailwind CSS",
    "Web Developer Egypt",
    "Portfolio website",
    "Clean code"
  ],
  authors: [{ name: "Gaber Usef", url: "https://gaberuseff.info" }],
  creator: "Gaber Usef",
  publisher: "Gaber Usef",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gaberuseff.info",
    title: "Gaber Usef | Front-End & Full-Stack Engineer",
    description: "Professional Front-End and Full-Stack Web Engineer portfolio. Specialized in highly responsive, accessible, and visually striking applications with React and Next.js.",
    siteName: "Gaber Usef Portfolio",
    images: [
      {
        url: "/mee.webp",
        width: 1200,
        height: 630,
        alt: "Gaber Usef - Front-End & Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaber Usef | Front-End & Full-Stack Engineer",
    description: "Professional Front-End and Full-Stack Web Engineer portfolio. Specialized in highly responsive, accessible, and visually striking applications with React and Next.js.",
    images: ["/mee.webp"],
    creator: "@gaberuseff",
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
};

export default function RootLayout({children}) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Gaber Usef",
    "url": "https://gaberuseff.info",
    "image": "https://gaberuseff.info/mee.webp",
    "sameAs": [
      "https://github.com/gaberuseff",
      "https://linkedin.com/in/gaberuseff",
      "https://facebook.com/gaberuseff"
    ],
    "jobTitle": "Front-End & Full-Stack Engineer",
    "knowsAbout": [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "CSS",
      "Tailwind CSS",
      "Prisma",
      "Supabase",
      "SQL",
      "Git",
      "REST APIs",
      "Web Performance",
      "Accessibility"
    ],
    "description": "Professional Front-End and Full-Stack Web Engineer specializing in high-performance React and Next.js applications."
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Gaber Usef Portfolio",
    "url": "https://gaberuseff.info",
    "description": "Portfolio website showcasing web development projects, front-end architecture, and verified engineering certifications."
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c') 
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(websiteJsonLd).replace(/</g, '\\u003c') 
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>
          {children}
        </Providers>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wxtv1qnpek");
          `}
        </Script>
      </body>
    </html>
  );
}