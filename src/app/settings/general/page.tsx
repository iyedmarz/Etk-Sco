/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState } from "react";
import Switch from "@/_components/Switch";
import Reglement from "./reglement";
import "./general.css";

export default function generalSettings() {
  // ****** Ecran General Settings ******

  // ** show "ecran publicitaire"  oui: choose image or video : Logo
  const [ecranPub, setEcranPub] = useState(true);

  const handleEcranPubChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setEcranPub(checked);
    console.log(`Switch ecranPub checked: ${ecranPub} `);
  };

  // ** show "logo" in place of "ecran publicitaire"  oui: choose Logo : ecran pub
  const [logoPub, setLogoPub] = useState(false);

  const handleLogoPubChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setLogoPub(checked);
    console.log(`Switch logo checked: ${logoPub}`);
  };

  // ** Multilingue YES/NO
  const [multiLang, setMultiLang] = useState(false);

  const handleMultiLangChange = (
    checked: boolean | ((prevState: boolean) => boolean)
  ) => {
    setMultiLang(checked);
    console.log(`Switch multiLang checked: ${multiLang}`);
  };

  return (
    <div className="grid grid-cols-2">
      <div className="m-1">
        <fieldset className="ecran-accueil border-2 py-2 px-1 my-5">
          <legend className="font-bold mx-4 px-8">Ecran D&apos;accueil</legend>
          <div className="ecran-items">
            <div>Ecran publicitaire</div>
            <Switch
              id="general"
              checked={ecranPub}
              onchange={handleEcranPubChange}
            />
            <div>Image, video</div>
            <div className="grid grid-cols-2">
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                value={undefined}
              />
              <button className="mx-1 border border-[Black] rounded-md bg-[white] text-[black] hover:text-white hover:bg-[black]">
                Ajouter
              </button>
            </div>
          </div>
          <div className="ecran-items">
            <div>Logo</div>
            <Switch
              id="logo"
              checked={logoPub}
              onchange={handleLogoPubChange}
            />
            <div>Logo</div>
            <div className="grid grid-cols-2">
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                value={undefined}
              />
              <button className="mx-1 border border-[Black] rounded-md bg-[white] text-[black] hover:text-white hover:bg-[black]">
                Ajouter
              </button>
            </div>
          </div>
          <div className="ecran-items">
            <div>Multilingue</div>
            <Switch
              id="general"
              checked={multiLang}
              onchange={handleMultiLangChange}
            />
            <div>Par défaut</div>
          </div>
        </fieldset>
        <fieldset className="temps-attente border-2 p-2 my-5">
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
            <Switch id="general" value={ecranPub} />
          </div>
          <div className="aide-items">
            <div>Sonnerie d&apos;alerte avec le message</div>
            <Switch id="general" value={ecranPub} />
          </div>
          <div className="aide-items">
            <form className="flex justify-center">
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="N° de la Borne"
                className="text-center border border-black"
              />
            </form>
            <form className="flex justify-center">
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Emplacement"
                className="text-center border border-black"
              />
            </form>
          </div>
          <div className="aide-items">
            <form>
              <input type="checkbox" id="Server" value="Server" />
              <label> Server</label>
            </form>
          </div>
        </fieldset>
      </div>
      {/* Second part of genral page includes "parametre led" et "mode reglement"*/}
      <Reglement />
    </div>
  );
}
