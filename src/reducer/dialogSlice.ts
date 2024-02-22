import { createSlice } from "@reduxjs/toolkit";

const initialState: DialogSlice = {
  isMessageDialogDisplay: false,
  isActionDialogDisplay: false,
  processItem: { createdDateTime: "" },
  actionType: "",
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    displayActionDialog: (state, action) => {
      state.actionType = action.payload.actionType;
      state.processItem = action.payload.dripItem;
      state.isActionDialogDisplay = true;
    },
    displayMessageDialog: (state, action) => {
      state.actionType = action.payload.actionType;
      state.processItem = action.payload.dripItem;
      state.isMessageDialogDisplay = true;
    },

    closeMessageDialog: (state) => {
      state.isMessageDialogDisplay = false;
      state.actionType = "";
    },
    closeActionDialog: (state) => {
      state.isActionDialogDisplay = false;
      state.actionType = "";
    },

    proceedConfirm: (state) => {
      state.isActionDialogDisplay = false;
      state.isMessageDialogDisplay = true;
    },
  },
});

export const {
  displayActionDialog,
  displayMessageDialog,
  closeMessageDialog,
  closeActionDialog,
  proceedConfirm,
} = dialogSlice.actions;
