import React from "react";
import { useTranslations } from "next-intl";

function SaisirNum({ aSaisir }: any) {
  const t = useTranslations("page.codePromo.title");
  return (
    <div className="mt-12 flex flex-col justify-center items-center">
      <p className="text-5xl">
        {t("norm2")} <b>{aSaisir}</b>
      </p>
      <p>
        <input className="input" />
        <div className="simple-keyboard"></div>
      </p>
    </div>
  );
}

export default SaisirNum;
