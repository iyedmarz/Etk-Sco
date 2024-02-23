"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PropreButton from "../../../_components/PropreButton";
import Total from "./../../../_components/TotalCommande";
import cartbankImg from "./../../../../../../public/cartebancaire.png";

export default function CartReader() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <Total value={"Reste a payer"} />
      <p className="flex justify-center items-center flex-col text-5xl mt-16">
        <b>Suiver les indications</b>
        du lecteur de carte bancaire
      </p>
      <Image
        src={cartbankImg}
        className="m-16"
        alt=""
        width={200}
        height={200}
      />
      <div className="flex flex-row">
        <PropreButton
          Classcss="min-w-56 normal-case min-h-16 mt-10 bg-[#F4F4F4] text-[#4E4E4E] hover:bg-[#9C699B] font-bold text-2xl mr-2"
          funct={() => router.back()}
          Nom="Retour"
        />
        <PropreButton
          path=""
          Classcss="min-w-56 normal-case  min-h-16 mt-10 bg-[#9c699b] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
          Nom="Continuer votre Commande"
        />
      </div>
    </div>
  );
}
