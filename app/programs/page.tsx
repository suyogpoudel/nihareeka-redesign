import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { programs } from "@/data/programs";
import { baseMetadata, baseKeywords } from "@/lib/base-metadata";
import { Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Programs at Nihareeka College of Management & IT",
  description:
    "Explore the academic programs offered by Nihareeka College of Management & Information Technology in Biratnagar, including BCA, BSc. CSIT, BIM, BHM, BBS, and MBS. Designed to prepare students for successful careers in IT, Management, and Hospitality.",
  keywords: [
    ...baseKeywords,
    "Programs",
    "BCA",
    "BSc CSIT",
    "BIM",
    "BHM",
    "BBS",
    "MBS",
    "IT Education",
    "Management Education",
    "Hospitality Education",
    "Biratnagar College",
  ],

  openGraph: {
    ...baseMetadata.openGraph,
    title: "Programs - Nihareeka College of Management & IT",
    description:
      "Check out the BCA, BSc CSIT, BIM, BHM, BBS, and MBS programs at Nihareeka College of Management & IT in Biratnagar. Prepare for success in IT, Management, and Hospitality fields.",
    url: "https://nihareeka-redesign.vercel.app/programs",
    images: [
      {
        url: "https://nihareeka-redesign.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nihareeka College Programs Overview",
      },
    ],
  },

  twitter: {
    ...baseMetadata.twitter,
    title: "Programs at Nihareeka College of Management & IT",
    description:
      "Check out the BCA, BSc CSIT, BIM, BHM, BBS, and MBS programs at Nihareeka College of Management & IT in Biratnagar. Prepare for success in IT, Management, and Hospitality fields.",
    images: ["https://nihareeka-redesign.vercel.app/images/og-image.png"],
  },

  alternates: {
    canonical: "https://nihareeka-redesign.vercel.app/programs",
  },
};

const Programs = () => {
  return (
    <div className="container">
      <h1 className="heading mb-5">Programs</h1>
      <p className="md:text-lg text-muted-foreground text-center mb-10">
        We offer 5 Bachelor programs and 1 Master program specifically designed
        to prepare our students for successful careers in today's competitive
        marketplace
      </p>

      <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 gap-5 w-full">
        {programs.map((program) => (
          <Card
            key={program.title}
            className="h-full"
          >
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="text-primary font-semibold text-lg">
                {program.title}
              </CardTitle>
              <p className="text-muted-foreground">{program.affiliation}</p>
            </CardHeader>
            <CardContent className="h-full flex flex-col justify-between">
              <p className="text-[16px] h-full mb-4 text-justify">
                {program.description}
              </p>
              <Button
                asChild
                size={"lg"}
              >
                <Link href={`programs/${program.link}`}>Learn More</Link>
              </Button>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 items-start">
              <Separator />
              <div className="flex items-center justify-between text-muted-foreground w-full">
                <div className="flex items-center gap-2">
                  <Calendar />
                  <span>Duration: </span>
                </div>
                <p>{program.duration}</p>
              </div>
              <div className="flex items-center justify-between text-muted-foreground w-full">
                <div className="flex items-center gap-2">
                  <Clock />
                  <span>Credit Hours: </span>
                </div>
                <p>{program.creditHour}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Programs;
