import React, { useState } from "react";
import Switch from "@/_components/Switch";
import "./general.css";

export default function generalSettingsReglement() {
  return (
    <div className="m-2">
      <fieldset className="ecran-accueil border-2 p-2">
        <legend className="font-bold mx-4 px-8">Modes de Réglement</legend>
        <div className="ecran-items">
          <div>Espèce</div>
          <Switch />
          <div></div>
        </div>
        <div className="ecran-items">
          <div>Au Comptoire</div>
          <Switch />
        </div>
        <div className="ecran-items">
          <div>Carte Bancaire</div>
          <Switch />
        </div>
        {/** first feildset */}
        <fieldset className="temps-attente border-2 p-2 bg-[}">
          <legend className="font-bold mx-4 px-8">Manager</legend>
        </fieldset>
      </fieldset>
    </div>
  );
}
