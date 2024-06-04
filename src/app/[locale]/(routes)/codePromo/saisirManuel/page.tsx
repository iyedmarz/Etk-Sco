"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState, useCallback, useRef, useEffect } from "react";
import { Button, Modal } from "react-daisyui";
import React from "react";
import PropreButton from "@/_components/PropreButton";
import SaisirNum from "@/_components/SaisirNumero/SaisirNum";
import NumPad from "@/_components/NumPad/NumPad";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/_redux/store";
import { addDiscount } from "@/_redux/cartSlice";

import "./modals.css";

// interface promoDiscount {
//   codePromo: string;
//   discount: number;
//   brand: string;
// }

interface Promo {
  codePromo: string;
  libelle: string;
  percentage: number;
  totalNumberOfUse: number;
  leftToUse: number;
  offerDate: string;
  offerValidity: string;
  offeredBybrand: string;
}

export default function SaisirCodePromo({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const t = useTranslations("page.codePromo");
  const n = useTranslations("nav");
  const [data, setData] = useState<Promo | undefined>();
  const [promocode, setPromocode] = useState("");
  const refnotfound = useRef<HTMLDialogElement>(null);
  const ref = useRef<HTMLDialogElement>(null);
  let i = 0;

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
  // const fetchData = async () => {
  //   try {
  //     console.log(promocode);
  //     const response = await fetch(`http://localhost:5000/promo/${promocode}`);
  //     const responseData = await response.json();
  //     setData(responseData);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // console.log(data);

  // let promoDiscount: promoDiscount;
  async function handlePromoCheck() {
    try {
      console.log(promocode);
      const response = await fetch(
        `http://localhost:5000/promo/one/${promocode}`
      );
      const responseData = await response.json();
      setData(responseData);
      if (data) {
        console.log("Valid Promo Code");
        handleShow();
        // promoDiscount = {
        //   codePromo: data.codePromo,
        //   discount: data.percentage,
        //   brand: data.offeredBybrand,
        // };
        let promoDiscount = data.percentage;
        dispatch(addDiscount(promoDiscount)); // Dispatching promoDiscount to Redux store
        setTimeout(() => {
          router.push(`/${locale}/checkout`);
        }, 3000);
      } else {
        console.log("not Valid Promo Code");
        // handleShowNotFound();
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

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
          funct={() => {
            handlePromoCheck();
          }}
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
            <b className="flex justify-center items-center">{data?.libelle}</b>
          </p>
          <button onClick={() => router.push(`/${locale}/checkout`)}></button>
        </div>
      </Modal>
    </div>
  );
}
