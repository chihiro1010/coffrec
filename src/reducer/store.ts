import { configureStore } from "@reduxjs/toolkit";
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { rootReducer } from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
});

// 型付きuseSelectorの作成
type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
