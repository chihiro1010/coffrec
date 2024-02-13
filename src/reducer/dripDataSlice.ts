import { createSlice } from "@reduxjs/toolkit";

const initialState: DripDataSlice = {
  retentionDataArgs: [],
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
      const resetState = (prevState: DripDataSlice) => {
        prevState.beanBrand = "";
        prevState.grinding = "unknown";
        prevState.beanScales = 0;
        prevState.waterScales = 0;
        prevState.celsius = 0;
        prevState.memo = "";
        prevState.countMemoLength = 0;
      };

      const getCurrentDatetime = (): string => {
        const now = new Date();

        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const day = now.getDate();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");

        const formattedTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
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

      try {
        state.retentionDataArgs.push(registData);
        localStorage.setItem(
          "dripItem",
          JSON.stringify(state.retentionDataArgs)
        );
        alert("ドリップデータを保存しました");
        resetState(state);
      } catch (error) {
        alert("データの保存に失敗ました" + error);
      }
    },
    get: (state) => {
      const dataFromLocalStorage: string | null =
        localStorage.getItem("dripItem");
      if (dataFromLocalStorage) {
        state.retentionDataArgs = JSON.parse(dataFromLocalStorage);
      }
    },

    remove: (state, action) => {
      const result = window.confirm(
        `『${action.payload.beanBrand}』の抽出データを削除してもよろしいですか？`
      );

      try {
        if (result) {
          const currentData: DripItem[] = [...state.retentionDataArgs];

          state.retentionDataArgs = currentData.filter(
            (data) => data.createdDateTime !== action.payload.dateTime
          );

          localStorage.setItem(
            "dripItem",
            JSON.stringify(state.retentionDataArgs)
          );
          alert("対象のデータを削除しました");
        }
      } catch (error) {
        alert("対象データの削除に失敗しました" + error);
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
  remove,
} = dripDataSlice.actions;
