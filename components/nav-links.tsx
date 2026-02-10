"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Separator } from "./ui/separator";
import RegisterButton from "./register-button";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Programs",
    href: "/programs",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const renderLinks = () =>
    links.map((link) => (
      <li
        key={link.href}
        className={`hover:text-primary text-foreground transition-colors duration-150 px-1 ${
          pathname === link.href ? "border-b-2 border-primary text-primary" : ""
        }`}
      >
        <Link
          href={link.href}
          onClick={() => setIsOpen(false)}
        >
          {link.title}
        </Link>
      </li>
    ));

  return (
    <div>
      {/* Desktop Nav */}
      <div className="gap-4 items-center hidden md:flex">
        <ul className="flex gap-4">{renderLinks()}</ul>
        <Separator orientation="vertical" />
        <RegisterButton />
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <motion.button
          whileTap={{
            scale: 0.85,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            scale: 1.15,
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
          className="relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 z-30 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 right-0 bg-card h-full w-[75%] flex flex-col gap-10 justify-center items-center z-40 shadow-2xl px-5"
              >
                <ul className="flex flex-col gap-10 items-center justify-center">
                  {renderLinks()}
                </ul>
                <RegisterButton />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavLinks;
