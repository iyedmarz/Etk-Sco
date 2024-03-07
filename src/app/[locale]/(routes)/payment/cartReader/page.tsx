"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PropreButton from "../../../_components/PropreButton";
import Total from "./../../../_components/TotalCommande";
import cartbankImg from "./../../../../../../public/cartebancaire.png";
import { useTranslations } from "next-intl";

export default function CartReader({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const router = useRouter();
  const t = useTranslations("page.payment");
  const n = useTranslations("nav");

  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <Total value={t("reste")} />
      <p className="flex justify-center items-center flex-col text-5xl mt-10">
        <b>{t("title3")}</b>
        {t("title4")}
      </p>
      <Image
        src={cartbankImg}
        className="m-14"
        alt=""
        width={200}
        height={200}
      />
      <div className="flex flex-row">
        <PropreButton
          Classcss="min-w-56 normal-case min-h-16 mt-10 bg-[#F4F4F4] text-[#4E4E4E] hover:bg-[#9C699B] font-bold text-2xl mr-2"
          funct={() => router.back()}
          Nom={n("backBut")}
        />
        <PropreButton
          path={`/${locale}/checkout`}
          Classcss="min-w-56 normal-case  min-h-16 mt-10 bg-[#9c699b] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
          Nom={n("continueBut")}
        />
      </div>
    </div>
  );
}
