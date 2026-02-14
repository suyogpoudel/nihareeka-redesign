import WelcomeMessage from "@/components/home/welcome-message";
import Image from "next/image";
import HeroImage from "@/public/assets/hero.jpeg";
import Courses from "@/components/home/courses";
import Testimonials from "@/components/home/testimonials";
import RegisterButton from "@/components/register-button";
import { baseKeywords, baseMetadata } from "@/lib/base-metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Nihareeka College of Management & Information Technology",
  description:
    "Nihareeka College of Management & Information Technology in Biratnagar is known for producing outstanding students with practical skills in IT and Management. Join us to excel in your career.",
  keywords: [
    ...baseKeywords,
    "Home",
    "Admissions",
    "Programs",
    "Biratnagar College",
  ],

  openGraph: {
    ...baseMetadata.openGraph,
    title: "Nihareeka College of Management & IT - Home",
    description:
      "Nihareeka College of Management & Information Technology in Biratnagar is known for producing outstanding students with practical skills in IT and Management.",
    url: "https://nihareeka-redesign.vercel.app",
    images: [
      {
        url: "https://nihareeka-redesign.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nihareeka College - Students and Campus",
      },
    ],
  },

  twitter: {
    ...baseMetadata.twitter,
    title: "Nihareeka College of Management & IT - Home",
    description:
      "Nihareeka College of Management & Information Technology in Biratnagar is known for producing outstanding students with practical skills in IT and Management.",
    images: ["https://nihareeka-redesign.vercel.app/images/og-image.png"],
  },

  alternates: {
    canonical: "https://nihareeka-redesign.vercel.app",
  },
};

const Home = () => {
  return (
    <div className="container">
      <div className="flex justify-between w-full mb-20 items-center max-md:flex-col gap-10">
        <div className="md:w-[50%] max-md:flex flex-col max-md:items-center">
          <div className="max-md:text-center mb-2">
            <h1 className="text-2xl lg:text-3xl font-display text-primary uppercase tracking-widest">
              Nihareeka College
            </h1>
            <p className="text-primary sm:text-xl">
              College of Management & Information Technology
            </p>
          </div>
          <p className="text-muted-foreground max-md:text-sm max-md:text-center mb-3">
            Nihareeka College of Management & Information Technology is a
            college in Biratnagar which is known for producing outstanding
            students.
          </p>
          <RegisterButton />
        </div>

        <Image
          src={HeroImage}
          alt="Picture of students of Nihareeka College"
          width={500}
          height={750}
          placeholder="blur"
        />
      </div>

      <WelcomeMessage />
      <Courses />
      <Testimonials />
    </div>
  );
};

export default Home;
