"use client";
import { useTranslations } from "next-intl";
import { RiArrowGoBackLine } from "react-icons/ri";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Counter from "@/_components/Counter";
import delice from "@/assets/delice.png";
import Webcam from "react-webcam";
import PropreButton from "../../_components/PropreButton";
import "./card.css";

const WebcamComponent = () => <Webcam />;

export default function SearchProduct({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("page.codePromo");
  const n = useTranslations("nav");

  return (
    <div className="m-3 h-[633px]">
      <div className="my-2 border-4 border-solid rounded-xl w-[100%] h-[100%] border-[#EDF1F5]">
        {/* Camera detection */}
        <div className="grid grid-cols-3 text-center my-4 text-xl">
          <Link href={`/${locale}/checkout`} className="flex items-center ml-4">
            <RiArrowGoBackLine size={35} />
          </Link>
          <b className="">
            Please hold your product up to the camera to scan it.
          </b>
          <div className=""></div>
        </div>
        <div className="grid grid-cols-2 h-[70%]">
          <div className="flex justify-center items-center">
            <Webcam height={400} width={420} />
          </div>
          <div className="flex justify-center items-center">
            {/* <div className="font-extrabold text-xl">No Product Detected</div> */}
            <div className="productcard m-2 border-2 border-solid rounded-xl w-[300px] h-[400px] border-[#EDF1F5] grid grid-rows-4">
              <div className="flex justify-center items-center">
                <Image
                  src={delice}
                  className=""
                  alt=""
                  width={150}
                  height={150}
                />
              </div>
              {/* <Image className="img flex justify-center items-center"></Image> */}
              <p className="flex justify-center items-center">
                Eau Delice 0.5L
              </p>
              <p className="border-solid rounded-xl bg-[#EDF1F5] text-xl flex justify-center items-center">
                0,500 DT
              </p>
              <Counter />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <PropreButton
            path={`/${locale}/rechercheProd/manually`}
            Classcss="min-w-56 normal-case mt-8 min-h-14 bg-[#9c699b] text-[#FFFFFF] hover:text-black font-bold text-2xl "
            Nom={"Search Manually"}
          />
        </div>
      </div>
    </div>
  );
}
