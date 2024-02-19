import { createSlice } from "@reduxjs/toolkit";

const initialState: DialogSlice = {
  isDisplayed: false,
  isConfirmed: false,
  deleteItem: { createdDateTime: "" },
  savedItem: "",
  dialogType: "",
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    deleteDialog: (state, action) => {
      state.isDisplayed = true;
      state.dialogType = "deleteConfirm";
      state.deleteItem = action.payload;
    },
    savedDialog: (state, action) => {
      state.isDisplayed = true;
      state.dialogType = "saved";
      state.savedItem = action.payload;
    },
    closeDialog: (state) => {
      state.isDisplayed = false;
    },
    openAlert: (state) => {
      state.isConfirmed = true;
    },
    closeAlert: (state) => {
      state.isConfirmed = false;
    },
  },
});

export const { deleteDialog, savedDialog, closeDialog, openAlert, closeAlert } =
  dialogSlice.actions;
