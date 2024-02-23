"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PropreButton from "../../../../_components/PropreButton";
import DiffFid from "../../../../_components/diffFidalite/diffFidalite";
import ScanCarteImg from "./../../../../../../../public/Scannercarte.png";

export default function ScanCarte() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center flex-col">
      <DiffFid title1="Scannez votre" title2="carte de fidalié" />
      <Image
        src={ScanCarteImg}
        className="m-10"
        alt=""
        width={250}
        height={250}
      />
      <div className="flex flex-row">
        <PropreButton
          Classcss="min-w-56 normal-case min-h-16 mt-10 bg-[#F4F4F4] text-[#4E4E4E] hover:bg-[#9C699B] font-bold text-2xl mr-2"
          funct={() => router.back()}
          Nom="Retour"
        />
        <PropreButton
          path="/fidalite/modeIdentification/scanCarte/saisirManuel"
          Classcss="min-w-56 normal-case  min-h-16 mt-10 bg-[#9c699b] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
          Nom="Saisir le N° de la carte"
        />
      </div>
    </div>
  );
}
