import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dripping: false,
  displayTime: "00:00",
  startTime: 0,
  calcTime: 0,
};

export const dripSlice = createSlice({
  name: "drip",
  initialState,
  reducers: {
    start: (state) => {
      state.dripping = true;
      state.startTime = Date.now() - state.calcTime;
    },
    stop: (state) => {
      state.dripping = false;
    },
    setcalcTime: (state) => {
      state.calcTime = Date.now() - state.startTime;
    },
    setdisplayTime: (state) => {
      const currentTime: Date = new Date(state.calcTime);
      const m: string = String(currentTime.getMinutes()).padStart(2, "0");
      const s: string = String(currentTime.getSeconds()).padStart(2, "0");
      state.displayTime = `${m}:${s}`;
    },
    reset: (state) => {
      state.dripping = false;
      state.displayTime = "00:00";
      state.startTime = 0;
      state.calcTime = 0;
    },
  },
});

export const { start, stop, setcalcTime, setdisplayTime, reset } =
  dripSlice.actions;
