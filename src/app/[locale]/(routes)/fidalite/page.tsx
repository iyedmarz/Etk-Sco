import { IconButton } from "@mui/material";
import { Check } from "lucide-react";
import { IoCloseSharp } from "react-icons/io5";
import DiffFid from "@/_components/diffFidalite/diffFidalite";
import PropreButton from "@/_components/PropreButton";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Fidalité({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("page.fidalite");
  const n = useTranslations("nav");

  return (
    <div className="flex justify-center items-center flex-col">
      <DiffFid title1={t("title1")} title2={t("title2")} />
      <div className="m-16 flex flex-row justify-center items-center">
        <Link href={`/${locale}/payment`}>
          <div
            className="min-h-44 min-w-52 mr-6 border-[3px] border-[#ff0000] rounded-[13px] flex flex-col justify-center
        hover:bg-gray-100 transition-colors duration-300"
          >
            <IconButton className="border rounded-md flex flex-col">
              <IoCloseSharp size={70} color="#ff0000" />
              <p className="text-[#ff0000] font-semibold">{t("no")}</p>
            </IconButton>
          </div>
        </Link>
        <Link href={`/${locale}/fidalite/modeIdentification`}>
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
      </div>
      <PropreButton
        path={"back"}
        Classcss="min-w-56 normal-case  min-h-16 mt-10 bg-[#9c699b] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
        Nom={n("continueBut")}
      />
    </div>
  );
}
