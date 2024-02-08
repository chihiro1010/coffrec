import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dripping: false,
  displayTime: "00:00",
  startTime: 0,
  calcTime: 0,
};

export const dripTimerSlice = createSlice({
  name: "dripTimer",
  initialState,
  reducers: {
    startTimer: (state) => {
      state.dripping = true;
      state.startTime = Date.now() - state.calcTime;
    },
    stopTimer: (state) => {
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

export const { startTimer, stopTimer, setcalcTime, setdisplayTime, reset } =
  dripTimerSlice.actions;
