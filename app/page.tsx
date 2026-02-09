import WelcomeMessage from "@/components/home/welcome-message";
import Image from "next/image";
import HeroImage from "@/public/assets/hero.jpeg";
import Courses from "@/components/home/courses";
import Testimonials from "@/components/home/testimonials";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
          <Button
            asChild
            size={"lg"}
          >
            <Link href="/register">Register</Link>
          </Button>
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
