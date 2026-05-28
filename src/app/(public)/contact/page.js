import ContactClient from "@/features/public/contact/ContactClient";

export const metadata = {
  title: "Let's Connect",
  description: "Get in touch with Gaber Usef. Discuss front-end engineering, full-stack development using Next.js & Supabase, custom web solutions, or technical consulting.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Let's Connect | Gaber Usef",
    description: "Get in touch with Gaber Usef. Discuss front-end engineering, full-stack development using Next.js & Supabase, custom web solutions, or technical consulting.",
    url: "https://gaberuseff.info/contact",
  },
  twitter: {
    title: "Let's Connect | Gaber Usef",
    description: "Get in touch with Gaber Usef. Discuss front-end engineering, full-stack development using Next.js & Supabase, custom web solutions, or technical consulting.",
  }
};

function ContactPage() {
  return <ContactClient />;
}

export default ContactPage;
