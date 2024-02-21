"use client";
import PropreButton from "../../../_components/PropreButton";
import SaisirNum from "../../../_components/SaisirNumero/SaisirNum";
import NumPad from "../../../_components/NumPad/NumPad";
import { useRouter } from "next/navigation";

export default function SaisirCodePromo() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center ">
      <SaisirNum aSaisir="Code Promo" />
      <NumPad placeholder={"Saisir Code Promo"} />
      <div>
        <PropreButton
          Classcss="min-w-56 normal-case min-h-16 mt-10 bg-[#F4F4F4] text-[#4E4E4E] hover:bg-[#9C699B] font-bold text-2xl mr-2"
          path="/codePromo"
          Nom="Retour"
        />
        <PropreButton
          funct={() => router.back()}
          Classcss="min-w-56 normal-case  min-h-16 mt-10 bg-[#9c699b] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
          Nom="Valider"
        />
      </div>
    </div>
  );
}
