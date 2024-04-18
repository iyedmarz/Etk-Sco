"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Abientot from "@/_components/_modal/cancel/cancel";
import Assist from "@/_components/_modal/Assistance/Assist";
import Cart from "./Cart/cart";
import Led from "@/_components/LedControl";
import promo from "@/assets/codePromoIcon.svg";
import assistImg from "@/assets/assistIcon.svg";
import cancelImg from "@/assets/CancelIcon.svg";
import supprimer from "@/assets/deleteIcon.svg";
import manager from "@/assets/managerIcon.svg";
import search from "@/assets/searchIcon.svg";
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

  /* to close Assist pop up*/
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
            <Image src={promo} alt="" height={50} width={50} />
            <p>{t("promoBut")} </p>
          </button>
          <button
            className="but"
            id=""
            onClick={() => {
              setAssist(true); //turning on orange light to indcate that client need assistance
              Led({ state: "on", color: "orange" });
            }}
          >
            <Image src={assistImg} alt="" height={50} width={50} />
            <p>{t("assistBut")}</p>
          </button>
          <button className="but" id="cancel" onClick={() => setAbientot(true)}>
            <Image src={cancelImg} alt="" height={50} width={50} />
            <p>{t("cancelBut")}</p>
          </button>
          <button className="but" id="">
            <Image src={supprimer} alt="" height={40} width={40} />
            <p>{t("deleteBut")}</p>
          </button>
          {/* <button className="but" id="">
            <Image src={manager} alt="" height={45} width={45} />
            <p>{t("managerBut")}</p>
          </button> */}
          <button
            className="but span-2"
            id=""
            onClick={() => {
              router.push(`/${locale}/rechercheProd`);
            }}
          >
            <Image src={search} alt="" height={45} width={45} />
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
