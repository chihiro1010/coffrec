import { combineReducers } from "redux";
import { dripTimerSlice } from "./dripTimerSlice";
import { modalSlice } from "./modalSlice";
import { dripDataSlice } from "./dripDataSlice";

export const rootReducer = combineReducers({
  dripTimer: dripTimerSlice.reducer,
  dripData: dripDataSlice.reducer,
  modal: modalSlice.reducer,
});
