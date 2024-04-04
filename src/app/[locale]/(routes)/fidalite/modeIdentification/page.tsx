import { IconButton } from "@mui/material";
import Image from "next/image";
import DiffFid from "@/_components/diffFidalite/diffFidalite";
import PropreButton from "@/_components/PropreButton";
import scannerCarte from "@/assets/Scannercarte.png";
import numTel from "@/assets/telnumero.png";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Fidalité({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("page.modeIdentification");
  const n = useTranslations("nav");

  return (
    <div className="flex justify-center items-center flex-col">
      <DiffFid title1={t("title1")} title2={t("title2")} />
      <div className="m-16  flex flex-row justify-center items-center flex-initial w-64">
        <div className="mr-6  border-[3px]  border-[#00000029] rounded-lg drop-shadow-xl min-w-52 min-h-44 flex justify-center items-center hover:bg-gray-100 transition-colors duration-300 ">
          <Link href={`/${locale}/fidalite/modeIdentification/scanCarte`}>
            <IconButton className=" flex flex-col justify-center items-center hover:bg-transparent">
              <Image src={scannerCarte} width={100} height={200} alt="" />
              <p className="text-[#9C699B] font-semibold">{t("scanCart")}</p>
            </IconButton>
          </Link>
        </div>
        <div className="mr-6  border-[3px]  border-[#00000029] rounded-lg drop-shadow-xl min-w-52 min-h-44 flex justify-center items-center hover:bg-gray-100 transition-colors duration-300 ">
          <Link href={`/${locale}/fidalite/modeIdentification/saisirTel`}>
            <IconButton className=" flex flex-col justify-center items-center hover:bg-transparent">
              <Image src={numTel} width={100} height={200} alt="" />
              <p className="text-[#9C699B] font-semibold">{t("saisirTel")}</p>
            </IconButton>
          </Link>
        </div>
      </div>
      <PropreButton
        path={"back"}
        Classcss="min-w-56 normal-case  min-h-16 mt-10 bg-[#ac6aac] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
        Nom={n("backBut")}
      />
    </div>
  );
}
