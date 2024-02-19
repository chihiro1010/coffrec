import { createSlice } from "@reduxjs/toolkit";

const initialState: ModalSlice = {
  isDisplayed: false,
  modalState: "none",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    displayModal: (state, action) => {
      state.modalState = action.payload;
      state.isDisplayed = true;
    },
    closeModal: (state) => {
      state.isDisplayed = false;
    },
  },
});

export const { displayModal, closeModal } = modalSlice.actions;
