import ProgramCard from "@/components/program-card";
import { programs } from "@/data/programs";
import { Calendar, Check, CheckCircle, Clock, School } from "lucide-react";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";

const ProgramPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const lowercaseSlug = slug.toLowerCase();

  if (slug !== lowercaseSlug) {
    redirect(`/programs/${lowercaseSlug}`);
  }

  const program = programs.find((program) => program.link === lowercaseSlug);

  if (!program) {
    notFound();
  }

  const programCardData = [
    { icon: Calendar, title: "Duration", value: program.duration },
    {
      icon: Clock,
      title: "Credit Hours",
      value: program.creditHour.toString(),
    },
    { icon: School, title: "Affiliation", value: program.affiliation },
  ];

  return (
    <div className="container">
      <div className="flex items-center justify-between w-full gap-8 max-md:flex-col-reverse">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="heading">{program.title}</h1>
          <p className="text-muted-foreground">{program.description}</p>
          <h2 className="text-primary text-xl font-semibold">
            Career Outcomes
          </h2>
          <div className="flex flex-wrap justify-center gap-4 ">
            {program.careerOutcomes.map((outcome) => (
              <div
                key={outcome}
                className="text-primary text-sm px-4 py-2 rounded-full bg-primary/20 border-2 border-primary/75 hover:bg-primary/30 transition-colors hover:border-primary/50"
              >
                {outcome}
              </div>
            ))}
          </div>
        </div>
        <Image
          src={program.image}
          alt={program.title}
          width={600}
          height={400}
          className="rounded-r-4xl shadow-lg object-cover max-md:rounded-2xl"
        />
      </div>

      <div className="flex flex-wrap justify-center gap-8 my-10">
        {programCardData.map((data) => (
          <div
            key={data.title}
            className="
        flex-grow
        basis-full
        sm:basis-[45%]
        lg:basis-[30%]
        max-w-sm
      "
          >
            <ProgramCard
              key={data.title}
              {...data}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-5 w-full">
        <h3 className="text-2xl text-primary font-display font-semibold text-center">
          Entry Requirements
        </h3>
        <ul className="flex flex-col gap-3">
          {program.requirements.map((requirement) => (
            <li
              key={requirement}
              className="flex items-center gap-4"
            >
              <CheckCircle className="text-primary shrink-0" />
              <span className="text-muted-foreground text-lg">
                {requirement}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgramPage;
