"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import PropreButton from "@/_components/PropreButton";
import Total from "@/_components/TotalCommande";
import changeImg from "@/assets/change mahine.png";
import { useEffect, useState } from "react";
import Abientot from "@/_components/_modal/cancel/cancel";

export default function ChangeMachine({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const router = useRouter();
  const t = useTranslations("page.payment");
  const n = useTranslations("nav");

  const [abientot, setAbientot] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
        setAbientot(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="flex justify-center items-center flex-col mt-10">
      <Total value={t("reste")} />
      <p className="flex justify-center items-center flex-col text-5xl mt-10">
        <b>{t("title3")}</b>
        {t("title5")}
      </p>
      <Image src={changeImg} className="m-8" alt="" width={200} height={200} />
      <div className="flex flex-row">
        <PropreButton
          Classcss="min-w-56 normal-case min-h-16 mt-10 bg-[#F4F4F4] text-[#4E4E4E] hover:bg-[#9C699B] font-bold text-2xl mr-2"
          funct={() => router.back()}
          Nom={"Cancel"}
        />
        {/* <PropreButton
          path={`/${locale}/checkout`}
          Classcss="min-w-56 normal-case  min-h-16 mt-10 bg-[#9c699b] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
          Nom={n("continueBut")}
        /> */}
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg text-center h-[40%] w-[60%] flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold mb-4">{t("success")}</h2>
            <p className="mb-4 text-2xl">{t("thanku")}</p>
            {/* <button
              onClick={() => setShowPopup(false)}
              className="bg-[#9c699b] text-white px-4 py-2 rounded hover:bg-[#824e7a]"
            >
              Close
            </button> */}
          </div>
        </div>
      )}
      <Abientot isvisible={abientot} />
    </div>
  );
}
