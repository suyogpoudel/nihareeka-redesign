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
import { Calendar, Clock } from "lucide-react";
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
