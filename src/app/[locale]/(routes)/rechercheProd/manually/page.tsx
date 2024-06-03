"use client";
import { useTranslations } from "next-intl";
import { RiArrowGoBackLine } from "react-icons/ri";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Counter from "@/_components/Counter";
import search from "@/assets/searchIcon.svg";
import Webcam from "react-webcam";
import delice from "@/assets/delice.png";
import "./../card.css";

interface Product {
  barcode: string;
  brand: string;
  name: string;
  category: string;
  priceUnit: number;
  quantity: number;
  pts_fid: number;
  price_quantity: number;
  Img: string;
}

export default function SearchProduct({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("page.codePromo");
  const n = useTranslations("nav");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/product`);
        const responseData = await response.json();
        setProducts(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(products);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="absolute inset-y-0 left-0 flex items-center justify-center px-4 m-1 text-gray-700 bg-[#ffffff] border border-[#ffffff] rounded-3xl hover:bg-[#ffffff] focus:outline-none focus:ring-2 focus:ring-[#ffffff] focus:border-[#ffffff]">
                <Image src={search} alt="" height={30} width={30} />
              </button>
            </div>
          </div>
        </div>
        <div className="searchedcards my-2 border-2 border-solid rounded-xl w-[98%] h-[100%] border-[#EDF1F5] overflow-y-auto">
          {filteredProducts.map((product) => (
            <div
              key={product.barcode}
              className="productcardman m-2 border-2 border-solid rounded-xl w-[95%] h-[270px] border-[#EDF1F5] grid grid-rows-4 flex justify-center items-center"
            >
              <div className="flex justify-center items-center">
                <Image
                  src={product.Img}
                  className=""
                  alt={product.name}
                  width={100}
                  height={100}
                />
              </div>
              <p className="flex justify-center items-center text-center">
                {product.name}
              </p>
              <p className="border-solid rounded-xl bg-[#EDF1F5] text-xl flex justify-center items-center">
                {Intl.NumberFormat("fr-TN", {
                  style: "currency",
                  currency: "TND",
                }).format(product.priceUnit)}
              </p>
              <Counter barcode={product.barcode} />
            </div>
          ))}
          {/* <div className="productcardman m-2 border-2 border-solid rounded-xl w-[90%] h-[90%] border-[#EDF1F5] grid grid-rows-4 flex justify-center items-center">
             <div className="flex justify-center items-center">
              <Image
                src={delice}
                className=""
                alt=""
                width={100}
                height={100}
              />
            </div>
            <p className="flex justify-center items-center">Eau Delice 0.5L</p>
            <p className="border-solid rounded-xl bg-[#EDF1F5] text-xl flex justify-center items-center">
              0,500 DT
            </p>
            <Counter />
          </div>  */}
        </div>
      </div>
    </div>
  );
}
