"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PropreButton from "../../../../_components/PropreButton";
import DiffFid from "../../../../_components/diffFidalite/diffFidalite";
import ScanCarteImg from "./../../../../../../../public/Scannercarte.png";
import { useTranslations } from "next-intl";

export default function ScanCarte({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const router = useRouter();
  const t = useTranslations("page.modeIdentification");
  const n = useTranslations("nav");

  return (
    <div className="flex justify-center items-center flex-col">
      <DiffFid title1={t("title3")} title2={t("title4")} />
      <Image
        src={ScanCarteImg}
        className="m-6"
        alt=""
        width={250}
        height={250}
      />
      <div className="flex flex-row">
        <PropreButton
          Classcss="min-w-56 normal-case min-h-16 mt-6 bg-[#F4F4F4] text-[#4E4E4E] hover:bg-[#9C699B] font-bold text-2xl mr-2"
          funct={() => router.back()}
          Nom={n("backBut")}
        />
        <PropreButton
          path={`/${locale}/fidalite/modeIdentification/scanCarte/saisirManuel`}
          Classcss="min-w-56 normal-case  min-h-16 mt-6 bg-[#9c699b] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
          Nom={t("manuelBut2")}
        />
      </div>
    </div>
  );
}
