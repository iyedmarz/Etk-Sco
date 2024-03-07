// describe's used in "solde" and payment Pages

import { useTranslations } from "next-intl";

function Total({ value }: any) {
  const t = useTranslations("page.payment");

  return (
    <div>
      <div className="flex flex-row space-x-4 space-x">
        <p className="text-3xl">{value}</p>
        <p className="text-3xl"> $$$$</p>
      </div>
      <div className="border-2 rounded m-4 border-[#946193] bg-[#946193]" />
      {/* <hr className="w-48 h-1 mx-auto my-2 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
      <p className="text-3xl">{t("total")}</p>
    </div>
  );
}

export default Total;
