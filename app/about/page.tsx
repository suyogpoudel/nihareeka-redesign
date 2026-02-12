import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  facultyExcellence,
  foundingVision,
  managementPrograms,
  managementTeam,
  partnerships,
  technicalPrograms,
} from "@/data/about";
import collegeHighlights from "@/data/college-highlights";
import {
  IconBrandFacebook,
  IconBrandWhatsapp,
  IconBrandX,
} from "@tabler/icons-react";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="container">
      <h1 className="heading mb-5">About</h1>
      <p className="md:text-lg text-muted-foreground text-center mb-10">
        What is it like to study in one of the best management and IT colleges
        in Biratnagar? Students at Nihareeka College of Management and IT will
        know. First, get to know more about the college.
      </p>

      <Button
        asChild
        size="lg"
        className="mb-10"
      >
        <Link
          href="https://drive.google.com/file/d/1-DXX92l76rabFbY403qEn4o-5SglchkY/view"
          target="_blank"
          className="flex gap-2 items-center"
        >
          <Download />
          Download Brochure
        </Link>
      </Button>

      <div className="flex flex-col mb-4 w-full">
        <h2 className="sub-heading">About Nihareeka College</h2>
        <p className="md:text-lg text-muted-foreground mb-3">
          Nihareeka College of Management and IT, located at Bargachhi,
          Biratnagar, is the top college of Koshi Province. The college offers
          the following programs:
        </p>

        <ul className="flex flex-col gap-3 text-left md:ml-3">
          <li className="flex flex-col gap-2">
            <p className="text-primary text-lg font-semibold">
              Technical Programs
            </p>
            <ul className="flex flex-col gap-1 ml-4">
              {technicalPrograms.map((program) => {
                const Icon = program.icon;
                return (
                  <li
                    key={program.title}
                    className="flex items-center gap-2 text-primary"
                  >
                    <Icon />
                    <p className="font-semibold">{program.title}: </p>
                    <p className="text-muted-foreground">
                      {program.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="flex flex-col gap-2">
            <p className="text-primary text-lg font-semibold">
              Management Programs
            </p>
            <ul className="flex flex-col gap-1 ml-4">
              {managementPrograms.map((program) => {
                const Icon = program.icon;
                return (
                  <li
                    key={program.title}
                    className="flex items-center gap-2 text-primary"
                  >
                    <Icon />
                    <p className="font-semibold">{program.title}: </p>
                    <p className="text-muted-foreground">
                      {program.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>

        <p className="md:text-lg text-muted-foreground mt-3">
          All programs have 100% success results and 100% internship and job
          placement with partners including F1Soft International, e-Sewa,
          VritTech, Diyalo, Dursikshya, Kodiary, YAJ Tech, and more.
        </p>
      </div>

      <div className="flex flex-col mb-4 w-full">
        <h2 className="sub-heading">Founding Vision</h2>
        <p className="md:text-lg text-muted-foreground mb-3">
          Nihareeka was founded by academicians and entrepreneurs to meet the
          rising demand for skilled manpower in:
        </p>

        <ul className="flex flex-col gap-3 text-left md:ml-3">
          {foundingVision.map(({ title, icon: Icon }) => (
            <li
              key={title}
              className="flex items-center gap-2 text-primary"
            >
              <Icon />
              <p className="font-semibold">{title}</p>
            </li>
          ))}
        </ul>

        <p className="md:text-lg text-muted-foreground mt-3">
          Since its inception, Nihareeka has been an invitation to learning
          through both theory and practice.
        </p>
      </div>
      <div className="flex flex-col mb-4 w-full">
        <h2 className="sub-heading">Faculty Excellence</h2>
        <p className="md:text-lg text-muted-foreground mb-3">
          At Nihareeka, teachers are expected to be highly qualified, ensuring
          students perform at their best. Key principles:
        </p>

        <ul className="flex flex-col gap-3 text-left md:ml-3">
          {facultyExcellence.map(({ title, icon: Icon }) => (
            <li
              key={title}
              className="flex items-center gap-2 text-primary"
            >
              <Icon />
              <p className="font-semibold">{title}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col mb-4 w-full">
        <h2 className="sub-heading">Partnerships and Collaborations</h2>
        <p className="md:text-lg text-muted-foreground mb-3">
          Nihareeka collaborates with national and international organizations
          to ensure students excel during and after their studies.
        </p>

        <ul className="flex flex-col gap-3 text-left md:ml-3">
          {partnerships.map((partnership) => (
            <li
              className="flex flex-col gap-2"
              key={partnership.category}
            >
              <p className="text-primary text-lg font-semibold">
                {partnership.category}
              </p>
              <ul className="flex flex-col gap-1 ml-4">
                {partnership.items.map(({ title, icon: Icon }) => {
                  return (
                    <li
                      key={title}
                      className="flex items-center gap-2 text-primary"
                    >
                      <Icon />
                      <p className="font-semibold">{title}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col mb-4 w-full">
        <h2 className="sub-heading">Why Choose Nihareeka?</h2>
        <p className="md:text-lg text-muted-foreground mb-3">
          Nihareeka College is recognized across Nepal for its quality
          education, practical learning, and strong industry connections. We
          prepare students to excel academically and professionally, providing
          the skills, mentorship, and opportunities needed to succeed in today’s
          competitive world.
        </p>
        <div className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 w-full gap-8">
          {collegeHighlights.map(({ title, icon: Icon, text }) => (
            <div
              key={title}
              className="bg-primary/20 border-2 border-primary/75 hover:bg-primary/30 transition-colors hover:border-primary/50 px-8 py-4 rounded-lg items-center flex flex-col gap-2 max-sm:flex-row max-sm:gap-4"
            >
              <Icon
                className="text-primary shrink-0"
                size={32}
              />
              <div className="flex flex-col gap-4 items-center text-center max-sm:items-start max-sm:text-left max-sm:gap-2">
                <p className="font-semibold text-primary text-lg">{title}</p>
                <p className="text-primary/90">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col mb-4 w-full">
        <h2 className="sub-heading">Management Team</h2>
        <div className="grid grid-cols-4 max-md:grid-cols-2 w-full gap-4">
          {managementTeam.map((item) => (
            <Card key={item.name}>
              <CardHeader className="flex flex-col items-center justify-center text-center">
                <Image
                  src={item.image}
                  alt={`Picture of ${item.name}`}
                  width={100}
                  height={100}
                  className="rounded-full aspect-square border-2 border-primary"
                />
                <CardTitle className="text-muted-foreground">
                  {item.name}
                </CardTitle>
                <CardDescription className="text-primary tracking-wider">
                  {item.post}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-evenly">
                <Link
                  href={item.facebook}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <IconBrandFacebook />
                </Link>

                <Link
                  href={item.x}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <IconBrandX />
                </Link>

                <Link
                  href={item.whatsapp}
                  target="_blank"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <IconBrandWhatsapp />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
