import { createSlice } from "@reduxjs/toolkit";

interface DripItem {
  createdDateTime: string;
  dripTimes: string;
  beanBrand: string;
  grinding: string;
  beanScales: number;
  waterScales: number;
  celsius: number;
  memo: string;
}

interface dripDataSlice {
  retentionDataArgs: DripItem[];
  registed: boolean;
  beanBrand: string;
  grinding: string;
  beanScales: number;
  waterScales: number;
  celsius: number;
  memo: string;
  countMemoLength: number;
}

const initialState: dripDataSlice = {
  retentionDataArgs: [],
  registed: false,
  beanBrand: "",
  grinding: "unknown",
  beanScales: 0,
  waterScales: 0,
  celsius: 0,
  memo: "",
  countMemoLength: 0,
};

export const dripDataSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    updateBeanBrand: (state, action) => {
      state.beanBrand = action.payload;
    },
    updateGrinding: (state, action) => {
      state.grinding = action.payload;
    },
    updateBeanScales: (state, action) => {
      const payloadToStr = String(action.payload);
      state.beanScales = Number(payloadToStr.slice(0, 2));
    },
    updateWaterScales: (state, action) => {
      const payloadToStr = String(action.payload);
      state.waterScales = Number(payloadToStr.slice(0, 3));
    },
    updateCelsius: (state, action) => {
      const payloadToStr = String(action.payload);
      state.celsius = Number(payloadToStr.slice(0, 3));
    },
    updateMemo: (state, action) => {
      state.memo = action.payload;
      state.countMemoLength = action.payload.length;
    },
    save: (state, action) => {
      const getCurrentDatetime = () => {
        const now = new Date();

        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        const formattedTime = `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`;
        return formattedTime;
      };

      const registData: DripItem = {
        createdDateTime: getCurrentDatetime(),
        dripTimes: action.payload,
        beanBrand: state.beanBrand,
        grinding: state.grinding,
        beanScales: state.beanScales,
        waterScales: state.waterScales,
        celsius: state.celsius,
        memo: state.memo,
      };

      state.retentionDataArgs.push(registData);

      localStorage.setItem("dripItem", JSON.stringify(state.retentionDataArgs));
      state.registed = false;
    },
    get: (state) => {
      const dataFromLocalStorage = localStorage.getItem("dripItem");
      if (dataFromLocalStorage) {
        state.retentionDataArgs = JSON.parse(dataFromLocalStorage);
      }
    },
  },
});

export const {
  updateBeanBrand,
  updateGrinding,
  updateBeanScales,
  updateWaterScales,
  updateCelsius,
  updateMemo,
  save,
  get,
} = dripDataSlice.actions;
