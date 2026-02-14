import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import { baseMetadata, baseKeywords } from "@/lib/base-metadata";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Contact Us - Nihareeka College of Management & IT",
  description:
    "Get in touch with Nihareeka College. Fill out the contact form to send us your queries, feedback, or requests.",
  keywords: [
    ...baseKeywords,
    "Contact",
    "Support",
    "Feedback",
    "Inquiry",
    "College Contact",
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Contact Us - Nihareeka College",
    description:
      "Get in touch with Nihareeka College. Fill out the contact form to send us your queries, feedback, or requests.",
    url: "https://nihareeka-redesign.vercel.app/contact",
    images: [
      {
        url: "https://nihareeka-redesign.vercel.app/assets/images/contact-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Nihareeka College",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Contact Us - Nihareeka College",
    description:
      "Get in touch with Nihareeka College. Fill out the contact form to send us your queries, feedback, or requests.",
    images: [
      "https://nihareeka-redesign.vercel.app/assets/images/contact-banner.jpg",
    ],
  },
  alternates: {
    canonical: "https://nihareeka-redesign.vercel.app/contact",
  },
};

const ContactPage = () => {
  return (
    <div className="container">
      <h1 className="heading">Contact Us</h1>
      <div className="mt-10 flex flex-col gap-5 items-center w-full">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
