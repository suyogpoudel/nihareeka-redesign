import { Clock } from "lucide-react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Separator } from "../ui/separator";

const courses = [
  {
    image: "/assets/courses/bca.jpeg",
    faculty: "BCA",
    description:
      "Bachelor of Computer Application is a four years program spread over eight semesters. It is a program that helps to produce software developers and programmers.",
    duration: "4 Years | 8 Semesters",
  },

  {
    image: "/assets/courses/csit.jpeg",
    faculty: "Bsc. CSIT",
    description:
      "Bachelor of Science in Computer Science and Information technology (B.Sc.CSIT) provides knowledge about principles of Computer Science and Information technology.",
    duration: "4 Years | 8 Semesters",
  },

  {
    image: "/assets/courses/bim.jpeg",
    faculty: "BIM",
    description:
      "Bachelor of Information Management is four years program of Tribhuvan University that provides knowledge of Management Information and Communication System.",
    duration: "4 Years | 8 Semesters",
  },

  {
    image: "/assets/courses/bhm.jpeg",
    faculty: "BHM",
    description:
      "Bachelor of Hotel Management is an undergraduate program that produces technical and social skills based on hospitality industries and catering services.",
    duration: "4 Years | 8 Semesters",
  },

  {
    image: "/assets/courses/bbs.jpeg",
    faculty: "BBS",
    description:
      "Bachelor of Business Studies or BBS is an undergraduate degree based on semesterwise program that provides in depth studies of business and helps to build the set of business related skills.",
    duration: "4 Years",
  },

  {
    image: "/assets/courses/mbs.jpg",
    faculty: "MBS",
    description:
      "Masters of Business Studies is a two years graduate level program in Business and Management.",
    duration: "2 Years | 4 Semesters",
  },
];

const Courses = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-20">
      <h2 className="heading mb-10">Courses</h2>

      <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 grid-cols-3 gap-5 w-full">
        {courses.map((course) => (
          <Card key={course.faculty}>
            <CardContent className="flex flex-col gap-2 h-full">
              <img
                src={course.image}
                alt={`Picture of ${course.faculty}`}
                className="w-full aspect-video rounded-t-lg shadow-lg"
              />
              <p className="text-xl text-primary font-display">
                {course.faculty}
              </p>

              <p className="text-muted-foreground">{course.description}</p>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 items-start">
              <Separator />
              <p className="text-muted-foreground text-left flex items-center gap-2">
                <Clock />
                Duration: {course.duration}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
