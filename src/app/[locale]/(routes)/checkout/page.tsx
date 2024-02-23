"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { TbBasketSearch } from "react-icons/tb";
import { useTranslations } from "next-intl";
import Abientot from "../../_components/_modal/cancel/cancel";
import Assist from "../../_components/_modal/Assistance/Assist";
import Cart from "../../_components/Cart/cart";
import promo from "../../../../../public/promo.png";
import assistImg from "../../../../../public/assistance.png";
import cancelImg from "../../../../../public/abandonner.png";
import supprimer from "../../../../../public/supprimer.png";
import manager from "../../../../../public/manegment.png";
import "./checkout.css";

export default function Checkout({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const router = useRouter();
  const [abientot, setAbientot] = useState(false);
  const [assist, setAssist] = useState(false);
  const t = useTranslations("page.checkout");
  const handleCloseAssist = () => {
    setAssist(false);
  };

  return (
    <div className="checkoutContainer">
      <div className="screenButtons">
        <div className="screen"></div>
        <div className="buttons">
          <button
            className="but"
            id=""
            onClick={() => {
              router.push(`/${locale}/codePromo`);
            }}
          >
            <Image src={promo} alt="" height={60} width={60} />
            <p>{t("promoBut")} </p>
          </button>
          <button className="but" id="" onClick={() => setAssist(true)}>
            <Image src={assistImg} alt="" height={60} width={60} />
            <p>{t("assistBut")}</p>
          </button>
          <button className="but" id="cancel" onClick={() => setAbientot(true)}>
            <Image src={cancelImg} alt="" height={60} width={60} />
            <p>{t("cancelBut")}</p>
          </button>
          <button className="but" id="">
            <Image src={supprimer} alt="" height={50} width={50} />
            <p>{t("deleteBut")}</p>
          </button>
          <button className="but" id="">
            <Image src={manager} alt="" height={50} width={50} />
            <p>{t("managerBut")}</p>
          </button>
          <button className="but" id="">
            <TbBasketSearch size={50} />
            <p>{t("searchBut")}</p>
          </button>
        </div>
      </div>
      <div className="cartpay">
        <Cart locale={locale} />
      </div>
      <Abientot isvisible={abientot} />
      <Assist isvisible={assist} onClose={handleCloseAssist} />
    </div>
  );
}
