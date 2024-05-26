import React, { useState } from "react";
import Switch from "@/_components/Switch";
import "./general.css";

export default function generalSettingsReglement() {
  return (
    <div className="m-1">
      <fieldset className="parametre_led border-2 p-2 my-5">
        <legend className="font-bold mx-4 px-8">Paramètre Led</legend>
        <div className="led-items">
          <div>Activer</div>
          <Switch />
          <div className="text-center">Com</div>
          <div className="grid grid-cols-2">
            <div></div>
            <button className="mx-1  border border-[white] rounded-md bg-[#01c701] text-[white] hover:text-white hover:bg-[#359b35]">
              Tester
            </button>
          </div>
        </div>
        <div className="led-items">
          <div>Suivi Impression</div>
          <Switch />
        </div>
      </fieldset>
      <fieldset className="mode-reglement border-2 p-2">
        <legend className="font-bold mx-4 px-8">Modes de Réglement</legend>
        <div className="regle-items">
          <div>Espèce</div>
          <Switch />
          <div className="text-center">Icone</div>
          <div></div>
          <button className="mx-1  border border-[Black] rounded-md bg-[white] text-[black] hover:text-white hover:bg-[black]">
            Ajouter
          </button>
        </div>
        {/* <div className="regle-items">
          <div>Au Comptoire</div>
          <Switch />
          <div className="text-center">Icone</div>
          <div></div>
          <button className="mx-1  border border-[Black] rounded-md bg-[white] text-[black] hover:text-white hover:bg-[black]">
            Ajouter
          </button>
        </div> */}
        <div className="regle-items">
          <div>Carte Bancaire</div>
          <Switch />
          <div className="text-center">Icone</div>
          <div></div>
          <button className="mx-1  border border-[Black] rounded-md bg-[white] text-[black] hover:text-white hover:bg-[black]">
            Ajouter
          </button>
        </div>
      </fieldset>
    </div>
  );
}
