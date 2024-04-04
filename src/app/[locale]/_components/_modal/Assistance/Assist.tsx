import React from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Aures from "@/assets/auresModel.png";
import "./Assist.css";

const Assist = ({
  isvisible,
  onClose,
}: {
  isvisible: boolean;
  onClose: () => void;
}) => {
  const router = useRouter();
  const t = useTranslations("page.checkout.assistModal");

  setTimeout(() => {
    onClose();
  }, 5000);

  if (!isvisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="pop">
        <div className="popContainer">
          <Image src={Aures} alt="" />
          <p className="titre">
            {t("title")} <br /> <b>{t("gras")}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assist;
