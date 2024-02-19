import { combineReducers } from "redux";
import { dripTimerSlice } from "./dripTimerSlice";
import { modalSlice } from "./modalSlice";
import { dripDataSlice } from "./dripDataSlice";
import { dialogSlice } from "./dialogSlice";

export const rootReducer = combineReducers({
  dripTimer: dripTimerSlice.reducer,
  dripData: dripDataSlice.reducer,
  modal: modalSlice.reducer,
  dialog: dialogSlice.reducer,
});
