"use client";
import { useRouter } from "next/navigation";
import DiffFid from "../../../../_components/diffFidalite/diffFidalite";
import Numpad from "./../../../../_components/NumPad/NumPad";
import PropreButton from "../../../../_components/PropreButton";

export default function saisirManuel() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  return (
    <div className="flex justify-center items-center flex-col">
      <DiffFid title1="Saisissez le numéro de" title2="votre téléphone" />
      <Numpad placeholder={"Saisir N° Tél"} />
      <div className="flex flex-row">
        <PropreButton
          Classcss="min-w-56 normal-case min-h-16 mt-10 bg-[#F4F4F4] text-[#4E4E4E] hover:bg-[#9C699B] font-bold text-2xl mr-2"
          funct={() => router.back()}
          Nom="Retour"
        />
        <PropreButton
          path="/fidalite/solde"
          Classcss="min-w-56 normal-case  min-h-16 mt-10 bg-[#9c699b] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
          Nom="Valider"
        />
      </div>
    </div>
  );
}
