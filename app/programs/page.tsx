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
import { Calendar } from "lucide-react";
import Link from "next/link";

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
          <Card key={program.title}>
            <CardHeader className="flex justify-between">
              <CardTitle className="text-primary font-semibold text-lg">
                {program.title}
              </CardTitle>
              <p className="text-muted-foreground">{program.affiliation}</p>
            </CardHeader>
            <CardContent className="h-full">
              <p className="text-[16px] h-full"> {program.description}</p>
              <Button
                asChild
                size={"lg"}
              >
                <Link href={program.link}>Read More</Link>
              </Button>
              <Separator />
            </CardContent>
            <CardFooter className="flex justify-between items-center h-full">
              <div className="flex items-center">
                <Calendar />
                <p>Duration: {program.duration}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Programs;
