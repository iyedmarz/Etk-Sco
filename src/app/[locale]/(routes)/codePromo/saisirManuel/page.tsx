"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState, useCallback, useRef } from "react";
import { Button, Modal } from "react-daisyui";
import React from "react";
import PropreButton from "@/_components/PropreButton";
import SaisirNum from "@/_components/SaisirNumero/SaisirNum";
import NumPad from "@/_components/NumPad/NumPad";
import "./modals.css";

export default function SaisirCodePromo({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const router = useRouter();
  const t = useTranslations("page.codePromo");
  const n = useTranslations("nav");
  const [data, setData] = useState(null);
  const [promocode, setPromocode] = useState("");
  const refnotfound = useRef<HTMLDialogElement>(null);
  const ref = useRef<HTMLDialogElement>(null);

  // POP UP MODAL unvalid promo code on call
  const handleShowNotFound = useCallback(() => {
    refnotfound.current?.showModal();
  }, [refnotfound]);

  // POP UP MODAL valid promo code on call and it takes back to checkout page
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);

  // to get the input value from NumPad Component
  const handlePromoCode = (Input: string) => {
    setPromocode(Input);
  };

  console.log(promocode);

  // Fetching the wanted Promo Code if found
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/promo/${promocode}`);
      const responseData = await response.json();
      if (responseData.length > 1) {
        setData(null);
      } else {
        setData(responseData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();

  console.log(data);

  const handlePromoCheck = () => {
    if (data === null) {
      // if Unvalid Promo Code : pop Unvalid
      console.log("not Valid Promo Code");
      handleShowNotFound();
    } else {
      // if Valid Promo Code : pop valid && after 5s route to checkout
      console.log("Valid Promo Code");
      handleShow();
      setTimeout(() => {
        router.push(`/${locale}/checkout`);
      }, 5000);
    }
  };

  return (
    <div className="flex flex-col justify-around items-center size-full">
      <SaisirNum aSaisir={t("title.gras")} />
      <div className="mt-5 mb-5">
        <NumPad placeholder={t("title.gras")} onInput={handlePromoCode} />
      </div>
      <div>
        <PropreButton
          Classcss="min-w-56 normal-case min-h-16 mt-10 bg-[#F4F4F4] text-[#4E4E4E] hover:bg-[#9C699B] font-bold text-2xl mr-2"
          path="back"
          Nom={n("backBut")}
        />
        <PropreButton
          funct={handlePromoCheck}
          Classcss="min-w-56 normal-case  min-h-16 mt-10 bg-[#9c699b] text-[#FFFFFF] hover:text-black font-bold text-2xl mr-2"
          Nom={n("validBut")}
        />
      </div>
      {/* Modals for Handling Promo Code Validation (Valid or Not) to Pop Up when Called */}
      <Modal
        ref={refnotfound}
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      >
        <div className="popNotFound">
          <p className="titreNotFound">
            <b>Unvalid Promo Code!!</b>
          </p>
          <Modal.Actions>
            <form method="dialog">
              <Button className="min-w-56 normal-case  min-h-16 mt-10 bg-[#9c699b] text-[#FFFFFF] hover:text-black hover:bg-[#F4F4F4] font-bold text-2xl mr-2">
                Close
              </Button>
            </form>
          </Modal.Actions>
        </div>
      </Modal>
      <Modal
        ref={ref}
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      >
        <div className="popNotFound">
          <p className="titreNotFound">
            <b>Valid Promo Code!!</b>
          </p>
        </div>
      </Modal>
    </div>
  );
}
