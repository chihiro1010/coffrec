import { createSlice } from "@reduxjs/toolkit";
import { db } from "../db";

const initialState: DripDataSlice = {
  retentionDataArgs: [],
  dripItem: {
    beanBrand: "",
    grinding: "unknown",
    beanScales: 0,
    waterScales: 0,
    celsius: 0,
    memo: "",
    createdDateTime: "",
    dripTimes: "00:00",
  },
  countMemoLength: 0,
};

async function addData(data: DripItem) {
  await db.dripItems.add(data);
}
async function updateData(data: DripItem) {
  await db.dripItems.put(data);
}
async function deleteData(key: string) {
  const id = await db.dripItems.delete(key);
  return id;
}
export const dripDataSlice = createSlice({
  name: "dripData",
  initialState,
  reducers: {
    updateBeanBrand: (state, action) => {
      state.dripItem.beanBrand = action.payload;
    },
    updateGrinding: (state, action) => {
      state.dripItem.grinding = action.payload;
    },
    updateBeanScales: (state, action) => {
      const payloadToStr: string = String(action.payload);
      state.dripItem.beanScales = Number(payloadToStr.slice(0, 2));
    },
    updateWaterScales: (state, action) => {
      const payloadToStr: string = String(action.payload);
      state.dripItem.waterScales = Number(payloadToStr.slice(0, 3));
    },
    updateCelsius: (state, action) => {
      const payloadToStr: string = String(action.payload);
      state.dripItem.celsius = Number(payloadToStr.slice(0, 3));
    },
    updateMemo: (state, action) => {
      state.dripItem.memo = action.payload;
      state.countMemoLength = action.payload.length;
    },
    get: (state, action) => {
      state.retentionDataArgs = action.payload;
    },
    save: (state, action) => {
      const getCurrentDatetime = (): string => {
        const now: Date = new Date();

        const year: number = now.getFullYear();
        const month: number = now.getMonth() + 1;
        const day: number = now.getDate();
        const hours: string = String(now.getHours()).padStart(2, "0");
        const minutes: string = String(now.getMinutes()).padStart(2, "0");
        const seconds: string = String(now.getSeconds()).padStart(2, "0");

        const formattedTime: string = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
        return formattedTime;
      };

      //新規作成モードの場合
      if (action.payload.modalState === "create") {
        const registData: DripItem = {
          createdDateTime: getCurrentDatetime(),
          dripTimes: action.payload.dripTimes,
          beanBrand: state.dripItem.beanBrand,
          grinding: state.dripItem.grinding,
          beanScales: state.dripItem.beanScales,
          waterScales: state.dripItem.waterScales,
          celsius: state.dripItem.celsius,
          memo: state.dripItem.memo,
        };
        try {
          addData(registData);
        } catch (error) {
          alert("データの保存に失敗ました" + error);
          alert("登録画面を閉じ、ページの再読み込みを実行します。");
          location.reload();
        }
      }
      //更新モードの場合
      else if (action.payload.modalState === "update") {
        const updateDataItem: DripItem = {
          createdDateTime: state.dripItem.createdDateTime,
          dripTimes: state.dripItem.dripTimes,
          beanBrand: state.dripItem.beanBrand,
          grinding: state.dripItem.grinding,
          beanScales: state.dripItem.beanScales,
          waterScales: state.dripItem.waterScales,
          celsius: state.dripItem.celsius,
          memo: state.dripItem.memo,
        };
        try {
          updateData(updateDataItem);
        } catch (error) {
          alert("データの保存に失敗ました" + error);
          alert("登録画面を閉じ、ページの再読み込みを実行します。");
          location.reload();
        }
      } else {
        alert("データの保存に失敗ました。モーダルの状態が不正です。");
        alert("登録画面を閉じ、ページの再読み込みを実行します。");
        location.reload();
      }
    },

    remove: (state, action) => {
      try {
        deleteData(action.payload.createdDateTime);
      } catch (error) {
        alert("対象データの削除に失敗しました" + error);
      }
    },

    resetState: (state) => {
      state.dripItem.beanBrand = initialState.dripItem.beanBrand;
      state.dripItem.grinding = initialState.dripItem.grinding;
      state.dripItem.beanScales = initialState.dripItem.beanScales;
      state.dripItem.waterScales = initialState.dripItem.waterScales;
      state.dripItem.celsius = initialState.dripItem.celsius;
      state.dripItem.memo = initialState.dripItem.memo;
      state.countMemoLength = initialState.countMemoLength;
    },

    modalUpdateMode: (state, action) => {
      state.dripItem.beanBrand = action.payload.beanBrand;
      state.dripItem.grinding = action.payload.grinding;
      const beanScalesToStr = String(action.payload.beanScales);
      state.dripItem.beanScales = Number(beanScalesToStr.slice(0, 2));
      const waterScalesToStr = String(action.payload.waterScales);
      state.dripItem.waterScales = Number(waterScalesToStr.slice(0, 3));
      const celsiusToStr = String(action.payload.celsius);
      state.dripItem.celsius = Number(celsiusToStr.slice(0, 3));
      state.dripItem.memo = action.payload.memo;
      state.countMemoLength = action.payload.memo.length;
      state.dripItem.dripTimes = action.payload.dripTimes;
      state.dripItem.createdDateTime = action.payload.createdDateTime;
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
  resetState,
  modalUpdateMode,
} = dripDataSlice.actions;
