import { programs } from "@/data/programs";
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

  return <div>Program Page for slug: {slug}</div>;
};

export default ProgramPage;
