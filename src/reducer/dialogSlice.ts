import { createSlice } from "@reduxjs/toolkit";

const initialState: DialogSlice = {
  isDisplayed: false,
  isConfirmed: false,
  processItem: { createdDateTime: "" },
  actionType: "",
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    displayDialog: (state, action) => {
      state.actionType = action.payload.actionType;
      state.processItem = action.payload.dripItem;
      state.isDisplayed = true;
    },

    closeDialog: (state) => {
      state.isDisplayed = false;
      state.actionType = "";
    },
    proceedConfirm: (state) => {
      state.isDisplayed = false;
    },
  },
});

export const { displayDialog, closeDialog, proceedConfirm } =
  dialogSlice.actions;
