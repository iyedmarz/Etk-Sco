import React from "react";
import PropreButton from "../PropreButton";
import "./Saisir.css";

function SaisirNum({ aSaisir }: any) {
  return (
    <div className="mt-[6.25rem] flex flex-col justify-center items-center">
      <p className="title">
        Veuillez saisir votre <b>{aSaisir}</b>
      </p>
      <p>
        <input className="input" />
        <div className="simple-keyboard"></div>
      </p>
    </div>
  );
}

export default SaisirNum;
