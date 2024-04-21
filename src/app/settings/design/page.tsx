import React, { useState } from "react";
import Switch from "@/_components/Switch";
import "./general.css";

export default function DesignSettings() {
  return (
    <div className="m-5">
      <fieldset className="general border-2 p-5 my-5">
        <legend className="font-bold mx-4 px-8">Géneral</legend>
        <div className="generalDesign-items">
          <div>Couleur principale :</div>
          <div></div>
        </div>
        <div className="generalDesign-items">
          <div>Couleur secondaire :</div>
          <div></div>
        </div>
      </fieldset>
      <fieldset className="Ecran-panier border-2 p-5 my-5">
        <legend className="font-bold mx-4 px-8">Ecran panier</legend>
        <div className="panier-items">
          <div>Affichage article scanné</div>
          <Switch />
        </div>
        <div className="panier-items">
          <div>Image publicitaire</div>
          <Switch />
        </div>
        <div className="panier-items">
          <div>Logo</div>
          <Switch />
        </div>
      </fieldset>
    </div>
  );
}
