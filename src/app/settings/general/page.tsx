import React, { useState } from "react";
import Switch from "@/_components/Switch";
import Reglement from "./reglement";
import "./general.css";

export default function generalSettings() {
  return (
    <div className="grid grid-cols-2">
      <div className="m-2">
        <fieldset className="ecran-accueil border-2 p-2">
          <legend className="font-bold mx-4 px-8">Ecran D&apos;accueil</legend>
          <div className="ecran-items">
            <div>Ecran publicitaire</div>
            <Switch />
            <div>Image, video</div>
          </div>
          <div className="ecran-items">
            <div>Logo</div>
            <Switch />
          </div>
          <div className="ecran-items">
            <div>Multilingue</div>
            <Switch />
          </div>
        </fieldset>
        <fieldset className="temps-attente border-2 p-2 bg-[}">
          <legend className="font-bold mx-4 px-8">Temps D&apos;attente</legend>
          <div className="temps-items">
            <div>
              Temps d&apos;affichages des pop-ups informatifs en secondes
            </div>
            <div className="ml-4 border-2 rounded-md px-4 py-1">**</div>
          </div>
          <div className="temps-items">
            <div>Temps de mise en veille en secondes</div>
            <div className="ml-4 border-2 rounded-md px-4 py-1">**</div>
          </div>
        </fieldset>
        <fieldset className="message_aide border-2 p-2">
          <legend className="font-bold mx-4 px-8">Message D&apos;aide</legend>
          <div className="aide-items">
            <div>Message d&apos;aide</div>
            <Switch />
          </div>
          <div className="aide-items">
            <div>Sonnerie d&apos;alerte avec le message</div>
            <Switch />
          </div>
          <div className="aide-items">
            <div>Nom de la borne</div>
            <div>Emplacement</div>
          </div>
          <div className="aide-items">
            <div>server</div>
          </div>
        </fieldset>
        <fieldset className="parametre_led border-2 p-2">
          <legend className="font-bold mx-4 px-8">Paramètre Led</legend>
          <div className="led-items">
            <div>Activer</div>
            <Switch />
            <div>Com</div>
          </div>
          <div className="led-items">
            <div>Suivi Impression</div>
            <Switch />
          </div>
        </fieldset>
      </div>
      <Reglement />
    </div>
  );
}
