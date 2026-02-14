import RegisterForm from "@/components/register-form";
import { baseMetadata, baseKeywords } from "@/lib/base-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...baseMetadata, // inherit base SEO settings
  title: "Register - Nihareeka College of Management & IT",
  description:
    "Register for your preferred program at Nihareeka College. Fill out our demo registration form to see how easy it is to enroll in BCA, BSc CSIT, BIM, BHM, BBS, or MBS programs.",
  keywords: [
    ...baseKeywords,
    "Register",
    "Admission",
    "Enrollment",
    "Application",
  ],
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Register - Nihareeka College",
    description:
      "Register for your preferred program at Nihareeka College. Fill out our demo registration form to see how easy it is to enroll.",
    url: "https://nihareeka-redesign.vercel.app/register",
    images: [
      {
        url: "https://nihareeka-redesign.vercel.app/assets/images/register-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Register at Nihareeka College",
      },
    ],
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Register - Nihareeka College",
    description:
      "Register for your preferred program at Nihareeka College. Fill out our demo registration form to see how easy it is to enroll.",
    images: [
      "https://nihareeka-redesign.vercel.app/assets/images/register-banner.jpg",
    ],
  },
  alternates: {
    canonical: "https://nihareeka-redesign.vercel.app/register",
  },
};

const RegisterPage = () => {
  return (
    <div className="container">
      <h1 className="heading">Register</h1>
      <p className="md:text-lg text-muted-foreground text-center mb-10">
        This is just a demo registration form. It has no real backend code
        attached to it.
      </p>
      <div className="mt-10 flex flex-col gap-5 items-center w-full">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
