"use client";
import React, { useState } from "react";
import Switch from "@/_components/Switch";
import "./general.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/_redux/store";
import {
  toggleDisplayImage,
  setSelectedImage,
  setAffArticleSwitch,
  setImagePubSwitch,
  setLogoSwitch,
} from "@/_redux/designSettingsSlice";

export default function DesignSettings() {
  const { affArticleSwitch, imagePubSwitch, logoSwitch } = useSelector(
    (state: RootState) => state.designsettings
  );
  const dispatch: AppDispatch = useDispatch();

  const [affArticle, setaffArticle] = useState<boolean>(affArticleSwitch);
  console.log(affArticleSwitch);
  const [imagePub, setImagePub] = useState<boolean>(imagePubSwitch);
  const [logo, setLogo] = useState<boolean>(logoSwitch);

  const handleAffArticleSwitch = () => {
    dispatch(setAffArticleSwitch());
    setaffArticle(!affArticleSwitch);
    if (!affArticleSwitch) {
      dispatch(toggleDisplayImage("article"));
    } else {
      dispatch(toggleDisplayImage(null));
    }
  };

  const handleImagePubSwitch = () => {
    setImagePub(!imagePubSwitch);
    dispatch(setImagePubSwitch());
    if (!imagePubSwitch) {
      dispatch(toggleDisplayImage("imagePub"));
    } else {
      dispatch(toggleDisplayImage(null));
    }
  };

  const handleLogoSwitch = () => {
    setLogo(!logoSwitch);
    dispatch(setLogoSwitch());
    if (!logoSwitch) {
      dispatch(toggleDisplayImage("logo"));
    } else {
      dispatch(toggleDisplayImage(null));
    }
  };
  return (
    <div className="m-5">
      {/*  */}
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
      {/* Handling what to display in the checkout screen */}
      <fieldset className="Ecran-panier border-2 p-5 my-5">
        <legend className="font-bold mx-4 px-8">Ecran panier</legend>
        <div className="panier-items">
          <div>Affichage article scanné</div>
          {/* Affichage article scanné */}
          <Switch
            id="aff-article"
            checked={affArticle}
            onchange={handleAffArticleSwitch}
          />
        </div>
        <div className="panier-items">
          <div>Image publicitaire</div>
          {/* Image publicitaire */}
          <Switch
            id="image-pub"
            checked={imagePub}
            onchange={handleImagePubSwitch}
          />
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            value={undefined}
          />
          <button className="mx-1 border border-[Black] rounded-md bg-[white] text-[black] hover:text-white hover:bg-[black]">
            Ajouter
          </button>
        </div>
        <div className="panier-items">
          <div>Logo</div>
          {/* Logo */}
          <Switch id="logo" checked={logo} onchange={handleLogoSwitch} />
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
            value={undefined}
          />
          <button className="mx-1 border border-[Black] rounded-md bg-[white] text-[black] hover:text-white hover:bg-[black]">
            Ajouter
          </button>
        </div>
      </fieldset>
    </div>
  );
}
