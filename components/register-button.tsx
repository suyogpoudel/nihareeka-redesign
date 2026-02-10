import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const RegisterButton = () => {
  return (
    <Button
      asChild
      size={"lg"}
    >
      <Link href="/register">Register</Link>
    </Button>
  );
};

export default RegisterButton;
