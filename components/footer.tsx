import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary text-primary-foreground py-8 px-8">
      <div className="flex justify-between items-start max-md:flex-col max-md:gap-5 max-md:justify-center max-md:items-center mb-4">
        <div className="flex flex-col gap-3 max-md:text-center">
          <h2 className="font-display text-lg tracking-wider">
            Contact Information
          </h2>
          <Link
            href={"mailto:nihareekacollegebrt@gmail.com"}
            target="_blank"
            className="flex items-center gap-2 hover:underline underline-offset-4 transition"
          >
            <Mail />
            <span>nihareekacollegebrt@gmail.com</span>
          </Link>
          <div className="flex gap-2 items-center">
            <Phone />
            <Link
              href={"tel:021-512863"}
              target="_blank"
              className="hover:underline underline-offset-4 transition"
            >
              <span>021-512863</span>
            </Link>
            ,
            <Link
              href={"tel:021-512864"}
              target="_blank"
              className="hover:underline underline-offset-4 transition"
            >
              <span>021-512864</span>
            </Link>
          </div>
          <p className="flex items-center gap-2">
            <MapPin />
            <span>Chadani Marg,Bargachhi</span>
          </p>
          <p className="flex items-center gap-2">
            <Clock />
            <span>06:15 - 12:00</span>
          </p>
        </div>
        <div className="flex flex-col gap-3 max-md:text-center">
          <h2 className="font-display text-lg tracking-wider">Faculties</h2>
          <Link
            href={"/programs/bca"}
            className="hover:underline underline-offset-4 transition"
          >
            BCA
          </Link>
          <Link
            href={"/programs/csit"}
            className="hover:underline underline-offset-4 transition"
          >
            BSc. CSIT
          </Link>
          <Link
            href={"/programs/bim"}
            className="hover:underline underline-offset-4 transition"
          >
            BIM
          </Link>
          <Link
            href={"/programs/bhm"}
            className="hover:underline underline-offset-4 transition"
          >
            BHM
          </Link>
          <Link
            href={"/programs/bbs"}
            className="hover:underline underline-offset-4 transition"
          >
            BBS
          </Link>
          <Link
            href={"/programs/mbs"}
            className="hover:underline underline-offset-4 transition"
          >
            MBS
          </Link>
        </div>
      </div>
      <div className="bg-card px-8 py-4 rounded-full flex justify-between max-sm:flex-col items-center gap-3 inset-shadow-sm">
        <p className="text-muted-foreground">&copy; 2026 | Nihareeka College</p>
        <p className="text-muted-foreground flex items-center gap-1">
          Developed By:
          <Link
            href="https://suyogpoudel.com.np"
            target="_blank"
            className="text-primary hover:underline underline-offset-4 transition"
          >
            Suyog Poudel
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
