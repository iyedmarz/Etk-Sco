"use client";
import { useTranslations } from "next-intl";
import { RiArrowGoBackLine } from "react-icons/ri";
import React from "react";
import Link from "next/link";
import Carousel from "react-elastic-carousel";
import Image from "next/image";
import Counter from "@/_components/Counter";
import search from "@/assets/searchIcon.svg";
import { items } from "@/public/Items.json";
import "./styles.css";

const categoryBreakPoints = [{ width: 1, itemsToShow: 5 }];
const productsBreakPoints = [{ width: 1, itemsToShow: 4 }];

export default function SearchProduct({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("page.codePromo");
  const n = useTranslations("nav");
  const { elastic } = items;

  return (
    <div className="m-3 h-[633px]">
      <div className="flex items-center flex-col border-4 border-solid rounded-xl w-[100%] h-[100%] border-[#EDF1F5]">
        {/* Search header */}
        <div className=" grid grid-cols-3 gap-4 w-[100%] h-[9%] bg-[#EDF1F5]">
          {/* Back Button */}
          <div className="flex items-center ml-6 ">
            <Link href={`/${locale}/checkout`}>
              <RiArrowGoBackLine size={35} />
            </Link>
          </div>
          {/* Search input field */}
          <div className="flex justify-center items-center">
            <div className="relative w-[100%] h-[80%]">
              <input
                className="w-full h-full py-2 px-4 border text-center border-[#EDF1F5] rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#9c699b] focus:border-[#9c699b]"
                placeholder="Search Product"
              />
              <button className="absolute inset-y-0 left-0 flex items-center justify-center px-4 m-1 text-gray-700 bg-[#ffffff] border border-[#ffffff] rounded-3xl hover:bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#ffffff] focus:border-[#ffffff]">
                <Image src={search} alt="" height={30} width={30} />
              </button>
            </div>
          </div>
        </div>
        {/* Categorie Carousel */}
        <div className="mt-2 border-2 border-solid rounded-xl w-[98%] h-[17%] border-[#EDF1F5]">
          <div className="categoryCarousel mt-5 mx-2">
            <Carousel breakPoints={categoryBreakPoints}>
              {elastic.map((item) => (
                <button
                  key={item.id}
                  className="border-2 rounded-xl py-2 h-full w-[90%] bg-[#9c699b] "
                >
                  <p className="text-[#ffffff] ">{item.title} </p>
                </button>
              ))}
            </Carousel>
          </div>
        </div>
        {/* Searched Products Carousel */}
        <div className="my-2 border-2 border-solid rounded-xl w-[98%] h-[100%] border-[#EDF1F5]">
          <div className="productCarousel  mt-2 mx-2 h-full">
            <Carousel breakPoints={productsBreakPoints}>
              <div className="product m-2 border-2 border-solid rounded-xl w-[200px] h-[250px] border-[#EDF1F5] flex justify-center items-center flex-col">
                <p className="">Cheeses Nuggets 4Pcs</p>
                <p className="border-solid rounded-xl w-[95%] h-[10%] bg-[#EDF1F5] text-xl flex justify-center items-center">
                  Price
                </p>
                <Counter />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
