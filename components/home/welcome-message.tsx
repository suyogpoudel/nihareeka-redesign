import RupeshKhatiwada from "@/public/assets/people/rupesh_khatiwada.jpeg";
import DipeshBastola from "@/public/assets/people/dipesh_bastola.jpeg";
import AmitDhakal from "@/public/assets/people/amit_dhakal.jpeg";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { Quote } from "lucide-react";

const messages = [
  {
    image: RupeshKhatiwada,
    author: "Rupesh Khatiwada",
    post: "Chairman",
    message: `A quality education is essential for students to secure a good future for themselves, it not only enhance the lives of the students, but also contribute to the overall development of our country. Nihareeka College is committed to deliver quality education, outstanding research and international engagement in the globalized environment which makes it an institute that is energetic and vibrant. We do not force the education on our students as we encourage them to know their ambitions and to be more career-prospective which enlightens their inside to serve the nation whole heartedly with the latest technology and new ideas. I recommend all interested and deserving students to join B.Sc. CSIT, BCA, BIM, BHM, BBS or MBS programs run by Nihareeka College of IT and management; affiliated to Tribhuvan University .
    On behalf of Nihareeka College of IT and management, I welcome you all to Nihareeka and make sure that we give our best to make your dreams come true. `,
  },

  {
    image: DipeshBastola,
    author: "Dipesh Bastola",
    post: "Vice Chairman",
    message: `At the outset, Nihareeka College Family sincerely extends its best wishes for your safety, good health and happiness. In order to facilitate our students to realize their full potentials over the period of 4 years, we have plenty of support systems such as Labs, Library and so on and the Value-added programs to augment the all round development of their personalities. The success of our alumni being involved in highly prestigious national and international organizations and IT companies justify our vision and educational strategies giving us the confidence that the College is effectively moving in the right direction under the TU. Finally, I express my sincere thank-you to all the Directors of the Board, dignitaries of the TU, all the promoters and our beloved students for their positive contributions to take the College to this height of success and recommend all interested and deserving students to join B.Sc. CSIT, BCA, BIM, BHM, BBS or MBS programs run by Nihareeka College; affiliated to Tribhuvan University.`,
  },

  {
    image: AmitDhakal,
    author: "Amit Dhakal",
    post: "Campus Chief",
    message: `Welcome to Nihareeka College, where we have fostered excellence in education for the past decade. It is my pleasure to introduce you to our institution, where ambition meets opportunity, and dreams become reality. Since our establishment, Nihareeka has distinguished itself as a beacon of academic excellence and innovation. Our dedicated faculty, state-of-the-art facilities, and comprehensive curriculum provide the knowledge, skills, and experiences necessary to thrive in an ever-evolving world. Explore what Nihareeka has to offer and become part of a legacy dedicated to excellence, innovation, and making a difference. We are proud of our 100% internship and job placement rate with prestigious IT companies like F1 Soft, e-Sewa, and DiyaloTech. With a state-of-the-art learning environment, we offer a wide range of TU-affiliated programs in IT and management, such as B.Sc. CSIT, BCA, BIM, BHM, BBS, and MBS. Join us and be part of a thriving academic community dedicated to your success.`,
  },
];

const WelcomeMessage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="heading mb-10">Welcome Message</h2>

      <div className="grid sm:grid-cols-3 gap-5 max-md:gap-10 w-full">
        {messages.map((message) => (
          <Card key={message.author}>
            <CardHeader className="flex flex-col items-center text-center justify-center">
              <Image
                src={message.image}
                alt={`Picture of ${message.author}`}
                width={100}
                height={100}
                className="object-cover rounded-full shadow-lg"
              />
              <p className="max-md:text-lg text-xl font-display text-primary">
                {message.author}
              </p>
              <p className="text-muted-foreground max-md:text-sm">
                {message.post}
              </p>
            </CardHeader>
            <CardContent>
              <Separator />
              <div className="mt-4 md:text-lg text-center">
                <Quote className="text-primary rotate-180 shrink-0 mb-1" />
                <p>{message.message}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WelcomeMessage;
