import { combineReducers } from "redux";
import { dripSlice } from "./dripSlice";
import { modalSlice } from "./modalSlice";

export const rootReducer = combineReducers({
  drip: dripSlice.reducer,
  modal: modalSlice.reducer,
});
