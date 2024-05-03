// describe's total and rest to pay or # used in "solde" and payment Pages
"use client";
import { RootState } from "@/app/_redux/store";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";

function Total({ value }: any) {
  const t = useTranslations("page.payment");
  const { totalPrice } = useSelector((state: RootState) => state.cart);

  return (
    <div>
      <div className="flex flex-row justify-between space-x-4 space-x">
        <p className="text-3xl">{value}</p>
        <p className="text-3xl"> Dt</p>
      </div>
      <div className="w-[400px] border-2 rounded m-4 border-[#946193] bg-[#946193]" />
      {/* <hr className="w-48 h-1 mx-auto my-2 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
      <p className="text-3xl flex justify-between">
        <div>{t("total")}</div> <div>{totalPrice} Dt</div>
      </p>
    </div>
  );
}

export default Total;
