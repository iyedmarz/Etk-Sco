import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Aures from "@/assets/auresModel.png";
import ABientot from "@/assets/Abientot.png";
import "./cancel.css";

const Abientot = ({ isvisible }: { isvisible: boolean }) => {
  const router = useRouter();
  const t = useTranslations("page.checkout.cancelModal");

  if (!isvisible) return null;

  setTimeout(() => {
    router.push("/");
  }, 5000);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="pop">
        <div className="popContainer">
          <Image src={Aures} alt="" />
          <p className="titre">
            {t("title")} <br /> <b>{t("gras")}</b>
          </p>
          <Image src={ABientot} alt="" className="mb-5" />
        </div>
      </div>
    </div>
  );
};

export default Abientot;
