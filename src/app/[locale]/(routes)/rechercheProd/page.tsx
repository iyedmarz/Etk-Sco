"use client";
import { useTranslations } from "next-intl";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useEffect, useRef, useState } from "react";
import * as tmImage from "@teachablemachine/image";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Counter from "@/_components/Counter";
import PropreButton from "../../_components/PropreButton";
import "./card.css";

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

  const URL = "https://teachablemachine.withgoogle.com/models/0hf-nRah3/";
  const modelRef = useRef<tmImage.CustomMobileNet | null>(null);
  const webcamRef = useRef<tmImage.Webcam | null>(null);
  const webcamContainerRef = useRef<HTMLDivElement>(null);
  const labelContainerRef = useRef<HTMLDivElement>(null);
  const [product, setProduct] = useState<Product[]>([]);

  const fetchProduct = async (product: string) => {
    try {
      const response = await fetch(`http://localhost:5000/product/${product}`);
      const productInfo = await response.json();
      console.log("Fetched product info:", productInfo);
      setProduct(productInfo);
    } catch (error) {
      console.error("Error fetching product info:", error);
    }
  };

  useEffect(() => {
    const init = async () => {
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      // Load the model and metadata
      const model = await tmImage.load(modelURL, metadataURL);
      modelRef.current = model;
      const maxPredictions = model.getTotalClasses();

      // Setup the webcam
      const flip = true; // whether to flip the webcam
      const webcam = new tmImage.Webcam(300, 300, flip); // width, height, flip
      await webcam.setup(); // request access to the webcam
      await webcam.play();
      webcamRef.current = webcam;

      // Append elements to the DOM
      if (webcamContainerRef.current) {
        webcamContainerRef.current.appendChild(webcam.canvas);
      }

      // Start the prediction loop
      window.requestAnimationFrame(loop);
    };

    const loop = async () => {
      if (webcamRef.current && modelRef.current) {
        webcamRef.current.update(); // update the webcam frame
        await predict();
        window.requestAnimationFrame(loop);
      }
    };

    let prev = "";
    const predict = async () => {
      if (webcamRef.current && modelRef.current) {
        const prediction = await modelRef.current.predict(
          webcamRef.current.canvas
        );
        let maxProbability = 0;
        let predictedClass = "";

        for (let i = 0; i < prediction.length; i++) {
          if (prediction[i].probability > maxProbability) {
            maxProbability = prediction[i].probability;
            predictedClass = prediction[i].className;
          }
        }
        let checkint = parseInt(predictedClass);
        if (!isNaN(checkint) || predictedClass != prev) {
          fetchProduct(predictedClass);
          prev = predictedClass;
        }

        // if (labelContainerRef.current) {
        //   labelContainerRef.current.innerHTML = predictedClass;
        // }
      }
    };

    init();
  }, []);

  let content = null;
  if (product.length != 0) {
    content = (
      <div
        key={product.barcode}
        className="productcard m-2 border-2 border-solid rounded-xl w-[300px] h-[400px] border-[#EDF1F5] grid grid-rows-4"
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
    );
  } else {
    content = <div className="font-extrabold text-xl">No Product Detected</div>;
  }

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
            {/* **Webcam */}
            <div id="webcam-container" ref={webcamContainerRef}></div>
            <div id="label-container" ref={labelContainerRef}></div>
            {/* <button
              type="button"
              onClick={() => {
                if (webcamRef.current && !webcamRef.current.isPlaying) {
                  webcamRef.current.play();
                  window.requestAnimationFrame(loop);
                }
              }}
            >
              Start
            </button> */}
          </div>
          <div className="flex justify-center items-center">{content}</div>
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
