import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface RegisterButtonProps {
  onClick?: () => void;
}

const RegisterButton = ({ onClick }: RegisterButtonProps) => {
  return (
    <Button
      asChild
      size={"lg"}
      onClick={onClick}
    >
      <Link href="/register">Register</Link>
    </Button>
  );
};

export default RegisterButton;
