"use client";

import Esewa from "@/public/assets/testimonials/esewa.png";
import KrishnaDevBahardar from "@/public/assets/testimonials/krishna_dev_bahardar.jpg";
import HareramKamat from "@/public/assets/testimonials/hareram_kamat.jpg";
import NehaKoirala from "@/public/assets/testimonials/neha_koirala.jpeg";
import AmanRajbanshi from "@/public/assets/testimonials/aman_rajbanshi.jpg";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Esewa",
    image: Esewa,
    feedback:
      "The graduates we’ve hired from Nihareeka College are well-prepared and demonstrate a strong work ethic. The college clearly emphasizes practical skills and innovation.",
  },
  {
    name: "Krishna Dev Bahardar (Co-ordinator, BIM)",
    image: KrishnaDevBahardar,
    feedback:
      "Being a faculty member at Nihareeka College is incredibly fulfilling. The institution's commitment to academic excellence and innovation allows me to inspire and mentor students to reach their full potential.",
  },
  {
    name: "Hareram Kamat (HOD, B.Sc. CSIT)",
    image: HareramKamat,
    feedback:
      "The education and training I received at Nihareeka College equipped me with the skills and confidence to excel in my career. The college's focus on practical learning has been instrumental in my professional growth.",
  },
  {
    name: "Neha Koirala (Student)",
    image: NehaKoirala,
    feedback:
      "Nihareeka College provided me with a strong foundation in both academics and extracurricular activities. The supportive environment and quality education helped me achieve my goals.",
  },
  {
    name: "Aman Rajbanshi (Student)",
    image: AmanRajbanshi,
    feedback:
      "The college's emphasis on innovation and critical thinking has shaped my approach to problem-solving. I'm grateful for the opportunities and experiences that Nihareeka College offered.",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-20">
      <h2 className="heading mb-10">Testimonials</h2>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 7500,
          }),
        ]}
        className="relative w-full max-w-xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.name}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 text-center sm:text-left">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      placeholder="blur"
                      width={75}
                      height={75}
                      className="rounded-full object-cover aspect-square border-2 border-primary"
                    />
                    <div className="flex flex-col gap-2">
                      <p className="text-lg font-semibold tracking-widest text-primary">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground font-medium">
                        {testimonial.feedback}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default Testimonials;
