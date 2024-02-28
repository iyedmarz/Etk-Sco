"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import PropreButton from "../../../_components/PropreButton";
import SaisirNum from "../../../_components/SaisirNumero/SaisirNum";
import NumPad from "../../../_components/NumPad/NumPad";

export default function SaisirCodePromo({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const router = useRouter();
  const t = useTranslations("page.codePromo");
  const n = useTranslations("nav");

  return (
    <div className="flex flex-col justify-center items-center ">
      <SaisirNum aSaisir={t("title.gras")} />
      <NumPad placeholder={"Saisir Code Promo"} />
      <div>
        <PropreButton
          Classcss="min-w-56 normal-case min-h-16 mt-10 bg-[#F4F4F4] text-[#4E4E4E] hover:bg-[#9C699B] font-bold text-2xl mr-2"
          funct={() => router.back()}
          Nom={n("backBut")}
        />
        <PropreButton
          funct={() => router.back()}
          Classcss="min-w-56 normal-case  min-h-16 mt-10 bg-[#9c699b] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
          Nom={n("validBut")}
        />
      </div>
    </div>
  );
}
