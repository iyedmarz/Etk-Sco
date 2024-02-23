import React from "react";
import { useTranslations } from "next-intl";

import "./Saisir.css";

function SaisirNum({ aSaisir }: any) {
  const t = useTranslations("page.codePromo.title");
  return (
    <div className="mt-[6.25rem] flex flex-col justify-center items-center">
      <p className="title">
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
