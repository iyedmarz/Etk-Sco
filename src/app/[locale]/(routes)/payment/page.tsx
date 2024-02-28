"use client";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Abientot from "../../_components/_modal/cancel/cancel";
import Total from "../../_components/TotalCommande";
import PropreButton from "../../_components/PropreButton";
import especeImg from "./../../../../../public/especes.png";
import carteBankImg from "./../../../../../public/cartebancaire.png";
import caisseImg from "./../../../../../public/caisse.png";
import autreImg from "./../../../../../public/autres.png";

export default function Payement({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const [abientot, setAbientot] = useState(false);
  const router = useRouter();

  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <Total value={"Reste a payer"} />
      <div>
        <p className="flex justify-center items-center flex-col text-6xl mt-16">
          Choisissez votre <b>mode de paiement</b>
        </p>
      </div>
      <div className="m-16  flex flex-row justify-center items-center flex-initial w-64">
        <div className="mr-6  border-[3px]  border-[#00000029] rounded-lg drop-shadow-xl min-w-52 min-h-44 flex justify-center items-center hover:bg-gray-100 transition-colors duration-300 ">
          <IconButton className=" flex flex-col justify-center items-center hover:bg-transparent">
            <Image src={especeImg} width={100} height={200} alt="" />
            <p className="text-[#9C699B] font-semibold">Espèces</p>
          </IconButton>
        </div>
        <div className="mr-6  border-[3px]  border-[#00000029] rounded-lg drop-shadow-xl min-w-52 min-h-44 flex justify-center items-center hover:bg-gray-100 transition-colors duration-300 ">
          <IconButton
            onClick={() => router.push(`/${locale}/payment/cartReader`)}
            className=" flex flex-col justify-center items-center hover:bg-transparent"
          >
            <Image src={carteBankImg} width={100} height={200} alt="" />
            <p className="text-[#9C699B] font-semibold">Carte Bancaire</p>
          </IconButton>
        </div>
        <div className="mr-6  border-[3px]  border-[#00000029] rounded-lg drop-shadow-xl min-w-52 min-h-44 flex justify-center items-center hover:bg-gray-100 transition-colors duration-300 ">
          <IconButton className=" flex flex-col justify-center items-center hover:bg-transparent">
            <Image src={caisseImg} width={100} height={200} alt="" />
            <p className="text-[#9C699B] font-semibold">A la caisse</p>
          </IconButton>
        </div>
        <div className="mr-6  border-[3px]  border-[#00000029] rounded-lg drop-shadow-xl min-w-52 min-h-44 flex justify-center items-center hover:bg-gray-100 transition-colors duration-300 ">
          <IconButton className=" flex flex-col justify-center items-center hover:bg-transparent">
            <Image src={autreImg} width={100} height={200} alt="" />
            <p className="text-[#9C699B] font-semibold">Autre</p>
          </IconButton>
        </div>
      </div>
      <div>
        <PropreButton
          funct={() => router.back()}
          Classcss="min-w-56 normal-case  min-h-16 mt-10 bg-[#ac6aac] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
          Nom="Retour"
        />
        <PropreButton
          funct={() => setAbientot(true)}
          Classcss="min-w-56 normal-case  min-h-16 mt-10 bg-[#ac6aac] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
          Nom="Abandonner"
        />
        <PropreButton
          funct={() => router.push("/checkout")}
          Classcss="min-w-56 normal-case  min-h-16 mt-10 bg-[#ac6aac] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
          Nom="Continuer ma commande"
        />
      </div>
      <Abientot isvisible={abientot} />
    </div>
  );
}
