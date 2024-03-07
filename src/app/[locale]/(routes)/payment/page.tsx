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
import { useTranslations } from "next-intl";

export default function Payement({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const [abientot, setAbientot] = useState(false);
  const router = useRouter();
  const t = useTranslations("page.payment");
  const n = useTranslations("nav");

  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <Total value={t("reste")} />
      <div>
        <p className="flex justify-center items-center flex-col text-5xl mt-10">
          {t("title1")} <b>{t("title2")}</b>
        </p>
      </div>
      <div className="m-14  flex flex-row justify-center items-center flex-initial w-64">
        <div className="mr-6  border-[3px]  border-[#00000029] rounded-lg drop-shadow-xl min-w-52 min-h-44 flex justify-center items-center hover:bg-gray-100 transition-colors duration-300 ">
          <IconButton className=" flex flex-col justify-center items-center hover:bg-transparent">
            <Image src={especeImg} width={100} height={200} alt="" />
            <p className="text-[#9C699B] font-semibold">{t("espece")}</p>
          </IconButton>
        </div>
        <div className="mr-6  border-[3px]  border-[#00000029] rounded-lg drop-shadow-xl min-w-52 min-h-44 flex justify-center items-center hover:bg-gray-100 transition-colors duration-300 ">
          <IconButton
            onClick={() => router.push(`/${locale}/payment/cartReader`)}
            className=" flex flex-col justify-center items-center hover:bg-transparent"
          >
            <Image src={carteBankImg} width={100} height={200} alt="" />
            <p className="text-[#9C699B] font-semibold">{t("bankCard")}</p>
          </IconButton>
        </div>
        <div className="mr-6  border-[3px]  border-[#00000029] rounded-lg drop-shadow-xl min-w-52 min-h-44 flex justify-center items-center hover:bg-gray-100 transition-colors duration-300 ">
          <IconButton className=" flex flex-col justify-center items-center hover:bg-transparent">
            <Image src={caisseImg} width={100} height={200} alt="" />
            <p className="text-[#9C699B] font-semibold">{t("aCaisse")}</p>
          </IconButton>
        </div>
        <div className="mr-6  border-[3px]  border-[#00000029] rounded-lg drop-shadow-xl min-w-52 min-h-44 flex justify-center items-center hover:bg-gray-100 transition-colors duration-300 ">
          <IconButton className=" flex flex-col justify-center items-center hover:bg-transparent">
            <Image src={autreImg} width={100} height={200} alt="" />
            <p className="text-[#9C699B] font-semibold">{t("other")}</p>
          </IconButton>
        </div>
      </div>
      <div>
        <PropreButton
          funct={() => router.back()}
          Classcss="min-w-56 normal-case  min-h-16 mt-4 bg-[#ac6aac] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
          Nom={n("backBut")}
        />
        <PropreButton
          funct={() => setAbientot(true)}
          Classcss="min-w-56 normal-case  min-h-16 mt-4 bg-[#ac6aac] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
          Nom={n("cancelBut")}
        />
        <PropreButton
          funct={() => router.push(`/${locale}/checkout`)}
          Classcss="min-w-56 normal-case  min-h-16 mt-4 bg-[#ac6aac] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
          Nom={n("continueBut")}
        />
      </div>
      <Abientot isvisible={abientot} />
    </div>
  );
}
