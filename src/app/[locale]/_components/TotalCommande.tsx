// describe's total and rest to pay or # used in "solde" and payment Pages
"use client";
import { RootState } from "@/app/_redux/store";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";

function Total({ value }: any) {
  const t = useTranslations("page.payment");
  const { totalPrice, balance, lefttopay } = useSelector(
    (state: RootState) => state.cart
  );
  const pathname = usePathname();

  let displayValue;
  if (
    pathname === "/en/payment" ||
    pathname === "/fr/payment" ||
    pathname === "/en/payment/changemachine" ||
    pathname === "/fr/payment/changemachine" ||
    pathname === "/en/payment/cartReader" ||
    pathname === "/fr/payment/cartReader"
  ) {
    displayValue = Intl.NumberFormat("fr-TN", {
      style: "currency",
      currency: "TND",
    }).format(lefttopay);
  } else {
    displayValue = Intl.NumberFormat("fr-TN", {
      style: "currency",
      currency: "TND",
    }).format(balance);
  }

  return (
    <div>
      <div className="flex flex-row justify-between space-x-4 space-x">
        <p className="text-3xl">{value}</p>
        <p className="text-3xl">
          {/* {Intl.NumberFormat("fr-TN", {
            style: "currency",
            currency: "TND",
          }).format(balance)} */}
          {displayValue}
        </p>
      </div>
      <div className="w-[400px] border-2 rounded m-4 border-[#946193] bg-[#946193]" />
      {/* <hr className="w-48 h-1 mx-auto my-2 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
      <p className="text-3xl flex justify-between">
        <div>{t("total")}</div>
        <div>
          {Intl.NumberFormat("fr-TN", {
            style: "currency",
            currency: "TND",
          }).format(totalPrice)}
        </div>
      </p>
    </div>
  );
}
/*{totalPrice}*/

export default Total;
