"use client";
import DiffFid from "../../../_components/diffFidalite/diffFidalite";
import { IconButton } from "@mui/material";
import { Check } from "lucide-react";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Total from "../../../_components/TotalCommande";

export default function Fidalité() {
  const [pop, setpop] = useState(false);
  const router = useRouter();

  return (
    <div className="flex justify-center items-center flex-col">
      <DiffFid title1="Souhaitez-vous utiliser" title2="votre solde ?" />
      <Total value={"Votre Solde"} />
      <div className="m-16 flex flex-row justify-center items-center">
        <div
          className="min-h-44 min-w-52 mr-6 border-[3px] border-[#ff0000] rounded-[13px] flex flex-col justify-center
        hover:bg-gray-100 transition-colors duration-300"
        >
          <IconButton className="border rounded-md flex flex-col">
            <IoCloseSharp size={70} color="#ff0000" />
            <p className="text-[#ff0000] font-semibold">NON</p>
          </IconButton>
        </div>
        <div
          className="min-h-44 min-w-52 mr-6 border-[3px] border-[#946193] rounded-[13px] flex flex-col justify-center
        hover:bg-gray-100 transition-colors duration-300"
        >
          <IconButton
            className=" border rounded-md flex flex-col hover:bg-transparent"
            onClick={() => router.push("/payment")}
          >
            <Check size={70} color="#946193" />
            <p className="text-[#946193] font-semibold">OUI</p>
          </IconButton>
        </div>
        <b>Payer $$$$</b>
      </div>
    </div>
  );
}
