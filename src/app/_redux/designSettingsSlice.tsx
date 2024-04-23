import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Aures from "@/assets/auresModel.png";

interface SettingsState {
  displayPubImage: "article" | "imagePub" | "logo" | null;
  selectedImage: any;
  affArticleSwitch: boolean;
  imagePubSwitch: boolean;
  logoSwitch: boolean;
}

const initialState: SettingsState = {
  displayPubImage: null,
  selectedImage: Aures,
  affArticleSwitch: false,
  imagePubSwitch: false,
  logoSwitch: false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleDisplayImage: (
      state,
      action: PayloadAction<"article" | "imagePub" | "logo" | null>
    ) => {
      state.displayPubImage = action.payload;
      console.log(state.displayPubImage);
    },
    setSelectedImage: (state, action: PayloadAction<any>) => {
      state.selectedImage = action.payload;
    },
    setAffArticleSwitch: (state) => {
      state.affArticleSwitch = !state.affArticleSwitch;
      console.log(state.affArticleSwitch);
    },
    setImagePubSwitch: (state) => {
      state.imagePubSwitch = !state.imagePubSwitch;
      console.log(state.imagePubSwitch);
    },
    setLogoSwitch: (state) => {
      state.logoSwitch = !state.logoSwitch;
      console.log(state.logoSwitch);
    },
  },
});

export const {
  toggleDisplayImage,
  setSelectedImage,
  setAffArticleSwitch,
  setLogoSwitch,
  setImagePubSwitch,
} = settingsSlice.actions;
export default settingsSlice.reducer;
