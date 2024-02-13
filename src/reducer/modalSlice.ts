import { createSlice } from "@reduxjs/toolkit";

const initialState: ModalSlice = {
  isDisplayed: false,
  modalState: "none",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    display: (state, action) => {
      state.modalState = action.payload;
      state.isDisplayed = true;
    },
    hidden: (state) => {
      state.isDisplayed = false;
    },
  },
});

export const { display, hidden } = modalSlice.actions;
