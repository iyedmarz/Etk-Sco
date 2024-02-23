"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import PropreButton from "../../_components/PropreButton";
import Promo from "../../../../../public/BigPromo.png";

export default function CodePromo() {
  const t = useTranslations("page.codePromo");
  const n = useTranslations("nav");

  return (
    <div className="flex justify-center items-center flex-col mt-20">
      <p className="text-5xl">
        {t("title.norm1")} <b>{t("title.gras")}</b>
      </p>
      <Image src={Promo} className="m-16" alt="" width={400} height={400} />
      <div className="flex flex-row">
        <PropreButton
          Classcss="min-w-56 normal-case min-h-16 mt-10 bg-[#F4F4F4] text-[#4E4E4E] hover:bg-[#9C699B] font-bold text-2xl mr-2"
          path="/checkout"
          Nom={n("ignoreBut")}
        />
        <PropreButton
          path="/codePromo/saisirManuel"
          Classcss="min-w-56 normal-case  min-h-16 mt-10 bg-[#9c699b] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
          Nom={n("manuelBut")}
        />
      </div>
    </div>
  );
}
