"use client";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

type variable = {
  Classcss?: any;
  funct?: any;
  path?: any;
  Nom?: any;
};
function PropreButton({ Classcss, funct, path, Nom }: any) {
  const handleClick = () => {
    if (path) {
      router.push(path);
    } else {
      funct();
    }
  };
  const router = useRouter();
  return (
    // <Button onClick={funct} className={Classcss}>
    <Button onClick={handleClick} className={Classcss}>
      {Nom}
    </Button>
  );
}

export default PropreButton;
