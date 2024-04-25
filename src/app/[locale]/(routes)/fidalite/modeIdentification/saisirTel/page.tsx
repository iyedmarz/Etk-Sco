/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useTranslations } from "next-intl";
import DiffFid from "@/_components/diffFidalite/diffFidalite";
import Numpad from "@/_components/NumPad/NumPad";
import PropreButton from "@/_components/PropreButton";
import { useState } from "react";

export default function saisirManuel({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("page.saisieMan");
  const n = useTranslations("nav");

  const [numTel, setNumTel] = useState("");
  console.log("num tel : ", numTel);

  const handleClientTel = (Input: string) => {
    setNumTel(Input);
  };

  const handleLogin = async () => {
    try {
      if (!numTel) {
        console.log("Phone number Required");
        return;
      }

      const body = JSON.stringify({ num_tel: parseInt(numTel) });
      const response = await fetch("http://localhost:5000/auth/phone", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      });

      const data = await response.json();
      console.log(data);
      console.log(response.status);

      if (response.status === 201) {
        const { token } = data;
        localStorage.setItem("token", token);
        window.location.href = `/${locale}/fidalite/solde`; // Redirect to dashboard or desired page
      } else {
        console.log("invalid Phone number");
      }
    } catch (err) {
      console.error("An error occurred", err);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <DiffFid title1={t("title1")} title2={t("titleTel")} />
      <Numpad placeholder={t("placeHolderTel")} onInput={handleClientTel} />
      <div className="flex flex-row">
        <PropreButton
          Classcss="min-w-56 normal-case min-h-16 mt-5 bg-[#F4F4F4] text-[#4E4E4E] hover:bg-[#9C699B] font-bold text-2xl mr-2"
          path={"back"}
          Nom={n("backBut")}
        />
        {/* <PropreButton
          Classcss="min-w-56 normal-case  min-h-16 mt-5 bg-[#9c699b] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
          Nom={n("validBut")}
          // funct={handleLogin}
        /> */}
        <button
          onClick={handleLogin}
          className="min-w-56 normal-case  min-h-16 mt-5 bg-[#9c699b] text-[#FFFFFF] hover:text-black hover:bg-[#F4F4F4] font-bold text-2xl mr-2"
        >
          {n("validBut")}
        </button>
      </div>
    </div>
  );
}
