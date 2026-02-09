import Link from "next/link";
import { Button } from "./ui/button";
import NavLinks from "./nav-links";
import Logo from "@/public/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-card shadow-sm flex justify-between items-center px-10 py-5">
      <Link
        href="/"
        className="hover:opacity-80 transition-opacity duration-200"
      >
        <Image
          src={Logo}
          alt="Logo of Nihareeka College"
          width={300}
          height={100}
        />
      </Link>

      <NavLinks />
    </nav>
  );
};

export default Navbar;
