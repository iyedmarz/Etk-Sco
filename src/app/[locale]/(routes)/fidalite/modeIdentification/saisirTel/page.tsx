/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useRouter } from "next/navigation";
import DiffFid from "../../../../_components/diffFidalite/diffFidalite";
import Numpad from "./../../../../_components/NumPad/NumPad";
import PropreButton from "../../../../_components/PropreButton";
import { useTranslations } from "next-intl";

export default function saisirManuel({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const router = useRouter();
  const t = useTranslations("page.saisieMan");
  const n = useTranslations("nav");

  const handleClientTel = () => {};

  return (
    <div className="flex justify-center items-center flex-col">
      <DiffFid title1={t("title1")} title2={t("titleTel")} />
      <Numpad placeholder={t("placeHolderTel")} onInput={handleClientTel} />
      <div className="flex flex-row">
        <PropreButton
          Classcss="min-w-56 normal-case min-h-16 mt-5 bg-[#F4F4F4] text-[#4E4E4E] hover:bg-[#9C699B] font-bold text-2xl mr-2"
          funct={() => router.back()}
          Nom={n("backBut")}
        />
        <PropreButton
          path={`/${locale}/fidalite/solde`}
          Classcss="min-w-56 normal-case  min-h-16 mt-5 bg-[#9c699b] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
          Nom={n("validBut")}
        />
      </div>
    </div>
  );
}
