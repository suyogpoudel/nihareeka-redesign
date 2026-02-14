import Link from "next/link";
import Logo from "@/public/assets/logo.png";
import Image from "next/image";
import NavLinks from "./nav-links";

const Navbar = () => {
  return (
    <nav className="w-full bg-card shadow-sm flex justify-between items-center px-6 py-5 md:px-10">
      <Link
        href="/"
        className="hover:opacity-80 transition-opacity duration-200"
      >
        <Image
          src={Logo}
          alt="Logo of Nihareeka College"
          width={300}
          height={100}
          className="w-40 sm:w-64 lg:w-72 h-auto"
        />
      </Link>

      <NavLinks />
    </nav>
  );
};

export default Navbar;
