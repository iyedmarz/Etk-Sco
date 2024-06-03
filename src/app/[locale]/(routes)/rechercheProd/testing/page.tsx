"use client";
import { useEffect, useRef } from "react";
import * as tmImage from "@teachablemachine/image";

const TeachableMachinePage = () => {
  const URL = "https://teachablemachine.withgoogle.com/models/PM8Cuz19V/";
  const modelRef = useRef<tmImage.CustomMobileNet | null>(null);
  const webcamRef = useRef<tmImage.Webcam | null>(null);
  const labelContainerRef = useRef<HTMLDivElement>(null);

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

    const predict = async () => {
      if (webcamRef.current && modelRef.current) {
        const prediction = await modelRef.current.predict(
          webcamRef.current.canvas
        );
        if (labelContainerRef.current) {
          for (let i = 0; i < prediction.length; i++) {
            const classPrediction =
              prediction[i].className +
              ": " +
              prediction[i].probability.toFixed(2);
            labelContainerRef.current.childNodes[i].innerHTML = classPrediction;
          }
        }
      }
    };

    init();

    return () => {
      // Cleanup the webcam and model when the component unmounts
      if (webcamRef.current) {
        webcamRef.current.stop();
      }
    };
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
    </div>
  );
};

export default TeachableMachinePage;
