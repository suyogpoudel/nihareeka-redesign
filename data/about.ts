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
