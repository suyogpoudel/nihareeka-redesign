import { Separator } from "@/components/ui/separator";
import { programs } from "@/data/programs";
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

  return (
    <div className="container">
      <div className="flex items-center justify-between w-full gap-8 max-md:flex-col-reverse mb-4">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="heading">{program.title}</h1>
          <p className="text-muted-foreground">{program.description}</p>
          <h2 className="text-primary text-xl font-semibold">
            Career Outcomes
          </h2>
          <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-4">
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
      <Separator />
    </div>
  );
};

export default ProgramPage;
