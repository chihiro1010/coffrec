import { createSlice } from "@reduxjs/toolkit";

const initialState: DialogSlice = {
  isDisplayed: false,
  isConfirmed: false,
  processItem: { createdDateTime: "" },
  processType: "",
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    displayDialog: (state, action) => {
      state.processType = action.payload.processType;
      state.processItem = action.payload.dripItem;
      state.isDisplayed = true;
    },
    closeDialog: (state) => {
      state.isDisplayed = false;
    },
    displayAlert: (state) => {
      state.isConfirmed = true;
    },
    closeAlert: (state) => {
      state.isConfirmed = false;
    },
  },
});

export const { displayDialog, closeDialog, displayAlert, closeAlert } =
  dialogSlice.actions;
