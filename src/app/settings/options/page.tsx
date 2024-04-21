import React, { useState } from "react";
import Switch from "@/_components/Switch";
import "./general.css";

export default function generalSettings() {
  return (
    <div className="grid grid-cols-2">
      <div className="m-2">
        <fieldset className="fidalitDesign border-2 p-2 my-5">
          <legend className="font-bold mx-4 px-8">
            <div className="flex">
              <div className="mr-12">Fidalité</div>
              <Switch />
            </div>
          </legend>
          <div className="fidalitDesign-items">
            <div>Icone</div>
            <div></div>
            <div></div>
          </div>
          <div className="fidalitDesign-items-switch">
            <div>Authentifcation par Scan de carte fidalité</div>
            <Switch />
          </div>
          <div className="fidalitDesign-items-switch">
            <div>Authentifcation par Saisie de code de la carte</div>
            <Switch />
          </div>
          <div className="fidalitDesign-items-switch">
            <div>Authentifcation par N° de téléphone</div>
            <Switch />
          </div>
        </fieldset>
        <fieldset className="code-postal-design border-2 p-2 my-5">
          <legend className="font-bold mx-4 px-8">
            <div className="flex">
              <div className="mr-12">Code Postal</div>
              <Switch />
            </div>
          </legend>
          <div className="postalDesign-items">
            <div>Saisie du code Obligatoire</div>
            <Switch />
          </div>
          <div className="postalDesign-items">
            <div>Controle de saisie sur code</div>
            <Switch />
          </div>
        </fieldset>
      </div>
      <div className="m-2">
        <fieldset className="code-promo-design border-2 p-2 my-5">
          <legend className="font-bold mx-4 px-8">
            <div className="flex">
              <div className="mr-12">Code Promo</div>
              <Switch />
            </div>
          </legend>
          <div className="promoDesign-items">
            <div>Authentification par saisie de N° de la carte</div>
            <Switch />
          </div>
        </fieldset>
        <fieldset className="rech-article border-2 p-2 my-5">
          <legend className="font-bold mx-4 px-8">Recherche Article</legend>
          <div className="rech-items">
            <div>Activer</div>
            <Switch />
          </div>
        </fieldset>
      </div>
    </div>
  );
}
