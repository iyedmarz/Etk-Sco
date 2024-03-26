"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { RiArrowGoBackLine } from "react-icons/ri";
import React from "react";
import Image from "next/image";
import search from "../../../../../public/searchIcon.svg";

export default function CodePromo({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const router = useRouter();
  const t = useTranslations("page.codePromo");
  const n = useTranslations("nav");

  return (
    <div className="m-3 h-[633px]">
      <div className="flex items-center flex-col border-4 border-solid rounded-xl w-[100%] h-[100%] border-[#EDF1F5]">
        {/* Search header */}
        <div className="grid grid-cols-3 gap-4 w-[100%] h-[10%] bg-[#EDF1F5]">
          {/* Back Button */}
          <div className="flex items-center ml-6 ">
            <button
              onClick={() => {
                router.back();
              }}
            >
              <RiArrowGoBackLine size={30} />
            </button>
          </div>
          {/* Search input field */}
          <div className="flex justify-center items-center">
            <div className="relative w-[100%] h-[85%]">
              <input
                className="w-full h-full py-2 px-4 border text-center border-[#EDF1F5] rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9c699b] focus:border-[#9c699b]"
                placeholder="Search Product"
              />
              <button className="absolute inset-y-0 left-0 flex items-center justify-center px-4 m-1 text-gray-700 bg-[#ffffff] border border-[#ffffff] rounded-3xl hover:bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#ffffff] focus:border-[#ffffff]">
                <Image src={search} alt="" height={32} width={32} />
              </button>
            </div>
          </div>
        </div>
        {/* Categorie Carousel */}
        <div className="mt-2 border-4 border-solid rounded-xl w-[98%] h-[15%] border-[#EDF1F5]">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
