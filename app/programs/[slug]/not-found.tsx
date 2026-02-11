import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProgramNotFound = () => {
  return (
    <div className="container text-center">
      <p className="text-5xl font-bold text-muted-foreground font-display tracking-widest mb-4">
        404
        <h1 className="heading mb-5">Program Not Found</h1>
      </p>
      <p className="text-muted-foreground text-lg">
        The program you searched for couldn&apos;t be found. Maybe you mistyped
        the URL or this program isn&apos;t offered by Nihareeka College as of
        now. Please check the URL and try again or explore our other programs.
      </p>
      <div className="flex md:flex-row flex-col gap-4 mt-5">
        <Button
          size={"lg"}
          asChild
          variant="secondary"
        >
          <Link href="/">Go to Home</Link>
        </Button>
        <Button
          size={"lg"}
          asChild
        >
          <Link href="/programs">Go to Programs</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProgramNotFound;
