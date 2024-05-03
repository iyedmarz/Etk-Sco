import { IconButton } from "@mui/material";
import { Check } from "lucide-react";
import { IoCloseSharp } from "react-icons/io5";
import { useTranslations } from "next-intl";
import DiffFid from "@/_components/diffFidalite/diffFidalite";
import Total from "@/_components/TotalCommande";
import Link from "next/link";

export default function Fidalité({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("page.fidalite");

  return (
    <div className="flex justify-center items-center flex-col">
      <DiffFid title1={t("title3")} title2={t("title4")} />
      <Total value={t("solde")} />
      <div className="m-16 flex flex-row justify-center items-center">
        <Link href={`/${locale}/payment`}>
          <div
            className="min-h-44 min-w-52 mr-6 border-[3px] border-[#ff0000] rounded-[13px] flex flex-col justify-center
        hover:bg-gray-100 transition-colors duration-300"
          >
            <IconButton className="border rounded-md flex flex-col">
              <IoCloseSharp size={70} color="#ff0000" />
              <p className="text-[#ff0000] font-semibold">{t("no")} </p>
            </IconButton>
          </div>
        </Link>
        <Link href={`/${locale}/payment`}>
          <div
            className="min-h-44 min-w-52 mr-6 border-[3px] border-[#946193] rounded-[13px] flex flex-col justify-center
        hover:bg-gray-100 transition-colors duration-300"
          >
            <IconButton className=" border rounded-md flex flex-col hover:bg-transparent">
              <Check size={70} color="#946193" />
              <p className="text-[#946193] font-semibold">{t("yes")}</p>
            </IconButton>
          </div>
        </Link>
        <b>{t("payBut")} Dt</b>
      </div>
    </div>
  );
}
