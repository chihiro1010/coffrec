import { createSlice } from "@reduxjs/toolkit";

const initialState: ModalSlice = {
  isDisplay: false,
  modalState: "none",
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    displayModal: (state, action) => {
      state.modalState = action.payload;
      state.isDisplay = true;
    },
    closeModal: (state) => {
      state.isDisplay = false;
    },
  },
});

export const { displayModal, closeModal } = modalSlice.actions;
