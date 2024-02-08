import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDisplayed: false,
  registed: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    display: (state) => {
      state.isDisplayed = true;
    },
    hidden: (state) => {
      state.isDisplayed = false;
    },
  },
});

export const { display, hidden } = modalSlice.actions;
