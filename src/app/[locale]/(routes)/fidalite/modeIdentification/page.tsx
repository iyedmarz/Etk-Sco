"use client";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import DiffFid from "../../../_components/diffFidalite/diffFidalite";
import PropreButton from "../../../_components/PropreButton";
import scannerCarte from "../../../../../../public/Scannercarte.png";
import numTel from "../../../../../../public/telnumero.png";

export default function Fidalité({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const [pop, setpop] = useState(false);
  const router = useRouter();

  return (
    <div className="flex justify-center items-center flex-col">
      <DiffFid title1="Veuillez choisir votre" title2="mode d'identification" />
      <div className="m-16  flex flex-row justify-center items-center flex-initial w-64">
        <div className="mr-6  border-[3px]  border-[#00000029] rounded-lg drop-shadow-xl min-w-52 min-h-44 flex justify-center items-center hover:bg-gray-100 transition-colors duration-300 ">
          <IconButton
            onClick={() =>
              router.push(`/${locale}/fidalite/modeIdentification/scanCarte`)
            }
            className=" flex flex-col justify-center items-center hover:bg-transparent"
          >
            <Image src={scannerCarte} width={100} height={200} alt="" />
            <p className="text-[#9C699B] font-semibold">Scanner Carte</p>
          </IconButton>
        </div>
        <div className="mr-6  border-[3px]  border-[#00000029] rounded-lg drop-shadow-xl min-w-52 min-h-44 flex justify-center items-center hover:bg-gray-100 transition-colors duration-300 ">
          <IconButton
            onClick={() =>
              router.push(`/${locale}/fidalite/modeIdentification/saisirTel`)
            }
            className=" flex flex-col justify-center items-center hover:bg-transparent"
          >
            <Image src={numTel} width={100} height={200} alt="" />
            <p className="text-[#9C699B] font-semibold">Saisir N° tél</p>
          </IconButton>
        </div>
      </div>
      <PropreButton
        funct={() => router.back()}
        Classcss="min-w-56 normal-case  min-h-16 mt-10 bg-[#ac6aac] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
        Nom="Retour"
      />
    </div>
  );
}
