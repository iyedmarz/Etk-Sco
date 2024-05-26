import React from "react";
import { useTranslations } from "next-intl";
import Led from "@/_components/LedControl";
import Image from "next/image";
import Aures from "@/assets/assistance.png";
import { LuHelpingHand } from "react-icons/lu";
import "./Assist.css";

const Assist = ({
  isvisible,
  onClose,
}: {
  isvisible: boolean;
  onClose: () => void;
}) => {
  const t = useTranslations("page.checkout.assistModal");

  /* Close pop up after 10s */
  setTimeout(() => {
    onClose();
    /* Turn OFF Orange led Light */
    Led({ state: "off", color: "orange" });
  }, 10000);

  if (!isvisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="pop">
        <div className="popContainer">
          {/* <Image src={Aures} alt="" width={400} height={400} /> */}
          <LuHelpingHand size={300} />
          <p className="titre">
            {t("title")} <br /> <b>{t("gras")}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assist;
