// describe's used in "solde" and payment Pages

import { useTranslations } from "next-intl";

function Total({ value }: any) {
  const t = useTranslations("page.payment");

  return (
    <div>
      <p className="text-4xl">{value} $$$$</p>
      <div className="border-b-4 m-5 border-[#946193]" />
      <p className="text-4xl">{t("total")}</p>
    </div>
  );
}

export default Total;
