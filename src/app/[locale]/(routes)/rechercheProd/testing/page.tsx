"use client";
import { useEffect, useRef, useState } from "react";
import * as tmImage from "@teachablemachine/image";
import Image from "next/image";
import Counter from "@/_components/Counter";

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

const TeachableMachinePage = () => {
  const URL = "https://teachablemachine.withgoogle.com/models/0hf-nRah3/";
  const modelRef = useRef<tmImage.CustomMobileNet | null>(null);
  const webcamRef = useRef<tmImage.Webcam | null>(null);
  const labelContainerRef = useRef<HTMLDivElement>(null);
  const [product, setProduct] = useState<Product[]>([]);

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
      const webcam = new tmImage.Webcam(200, 200, flip); // width, height, flip
      await webcam.setup(); // request access to the webcam
      await webcam.play();
      webcamRef.current = webcam;

      // Append elements to the DOM
      if (webcamRef.current && labelContainerRef.current) {
        document.getElementById("webcam-container")?.appendChild(webcam.canvas);
        for (let i = 0; i < maxPredictions; i++) {
          labelContainerRef.current.appendChild(document.createElement("div"));
        }
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

    const fetchProduct = async (product: string) => {
      try {
        const response = await fetch(
          `http://localhost:5000/product/${product}`
        );
        const productInfo = await response.json();
        console.log("Fetched product info:", productInfo);
        setProduct(productInfo);
      } catch (error) {
        console.error("Error fetching product info:", error);
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

        if (labelContainerRef.current) {
          labelContainerRef.current.innerHTML = predictedClass;
        }
      }
    };

    // const predict = async () => {
    //   if (webcamRef.current && modelRef.current) {
    //     const prediction = await modelRef.current.predict(
    //       webcamRef.current.canvas
    //     );
    //     if (labelContainerRef.current) {
    //       for (let i = 0; i < prediction.length; i++) {
    //         const classPrediction =
    //           prediction[i].className +
    //           ": " +
    //           prediction[i].probability.toFixed(2);
    //         labelContainerRef.current.childNodes[i].innerHTML = classPrediction;
    //       }
    //     }
    //   }
    // };

    init();

    // return () => {
    //   // Cleanup the webcam and model when the component unmounts
    //   if (webcamRef.current) {
    //     webcamRef.current.stop();
    //   }
    // };
  }, []);

  return (
    <div>
      <div>Teachable Machine Image Model</div>
      <button
        type="button"
        onClick={() => {
          if (webcamRef.current && !webcamRef.current.isPlaying) {
            webcamRef.current.play();
            window.requestAnimationFrame(loop);
          }
        }}
      >
        Start
      </button>
      <div id="webcam-container"></div>
      <div id="label-container" ref={labelContainerRef}></div>
      <div>
        predected Product :{/* {product.map((row) => ( */}
        <div
          key={product.barcode}
          className="productcardman m-2 border-2 border-solid rounded-xl w-[95%] h-[270px] border-[#EDF1F5] grid grid-products-4 flex justify-center items-center"
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
        {/* ))} */}
      </div>
    </div>
  );
};

export default TeachableMachinePage;
