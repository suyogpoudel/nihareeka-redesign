import {
  GraduationCap,
  Laptop,
  Monitor,
  Coffee,
  BarChart2,
  BookOpen,
  Cpu,
  Briefcase,
  Book,
  RefreshCw,
  Shield,
  Star,
  UserCheck,
  Users,
  Home,
  Globe,
} from "lucide-react";

import RupeshKhatiwada from "@/public/assets/people/rupesh_khatiwada.jpeg";
import AmitDhakal from "@/public/assets/people/amit_dhakal.jpeg";
import DipeshBastola from "@/public/assets/people/dipesh_bastola.jpeg";
import TulsiKhatiwada from "@/public/assets/people/tulsi_khatiwada.jpeg";

// Program Lists
export const technicalPrograms = [
  {
    title: "B.Sc. CSIT",
    icon: GraduationCap,
    description: "4-year technical degree",
  },
  {
    title: "BIM",
    icon: Laptop,
    description: "Business IT program",
  },
  {
    title: "BCA",
    icon: Monitor,
    description: "Computer applications",
  },
];

export const managementPrograms = [
  {
    title: "BHM",
    icon: Coffee,
    description: "Hotel Management",
  },
  {
    title: "BBS",
    icon: BarChart2,
    description: "Business studies",
  },
  {
    title: "MBS",
    icon: GraduationCap,
    description: "Advanced management degree",
  },
];

// Founding Vision
export const foundingVision = [
  { title: "Science and Technology", icon: Cpu },
  { title: "Management", icon: Briefcase },
  { title: "Hotel Management", icon: Coffee },
  { title: "Humanities", icon: BookOpen },
];

// Faculty Excellence
export const facultyExcellence = [
  {
    title: "Teachers possess deep subject knowledge",
    icon: Book,
  },
  {
    title: "Faculty continuously improve their professional skills",
    icon: RefreshCw,
  },
  {
    title: "Teaching follows professional standards",
    icon: Shield,
  },
  {
    title: "Student achievement is prioritized",
    icon: Star,
  },
];

// Partnerships and Collaborations
export const partnerships = [
  {
    category: "Technical Faculties (B.Sc. CSIT, BIM, BCA)",
    items: [
      {
        title: "Personalized training with F1Soft International",
        icon: UserCheck,
      },
      { title: "Career support via eSewa and Sudrisya Academy", icon: Users },
    ],
  },
  {
    category: "Hotel Management Students",
    items: [
      { title: "Internships at Soaltee Crowne Plaza", icon: Home },
      {
        title: "Merit-based internships at Jaffair Grand Hotel, China",
        icon: Globe,
      },
    ],
  },
  {
    category: "Academic Partnership",
    items: [
      {
        title: "Courses designed in affiliation with Tribhuwan University",
        icon: BookOpen,
      },
    ],
  },
];

export const managementTeam = [
  {
    name: "Rupesh Khatiwada",
    post: "Chairman",
    image: RupeshKhatiwada,
    facebook: "/",
    whatsapp: "/",
    x: "/",
  },
  {
    name: "Dipesh Bastola",
    post: "Vice Chairman",
    image: DipeshBastola,
    facebook: "/",
    whatsapp: "/",
    x: "/",
  },
  {
    name: "Amit Dhakal",
    post: "Campus Chief",
    image: AmitDhakal,
    facebook: "/",
    whatsapp: "/",
    x: "/",
  },
  {
    name: "Tulsi Khatiwada",
    post: "Director",
    image: TulsiKhatiwada,
    facebook: "/",
    whatsapp: "/",
    x: "/",
  },
];
