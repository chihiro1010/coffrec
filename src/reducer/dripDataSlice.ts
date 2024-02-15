import { createSlice } from "@reduxjs/toolkit";

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

export const dripDataSlice = createSlice({
  name: "modal",
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
          state.retentionDataArgs.push(registData);
          localStorage.setItem(
            "dripItem",
            JSON.stringify(state.retentionDataArgs)
          );
          alert("ドリップデータを保存しました");
        } catch (error) {
          alert("データの保存に失敗ました" + error);
          alert("登録画面を閉じ、ページの再読み込みを実行します。");
          window.location.reload();
        }
      }
      //更新モードの場合（createdDateTime:作成日時が空でない）
      else if (action.payload.modalState === "update") {
        try {
          const currentData: DripItem[] = [...state.retentionDataArgs];
          const updateData: DripItem[] = currentData.map((data) => {
            if (data.createdDateTime === state.dripItem.createdDateTime) {
              return {
                ...data,
                beanBrand: state.dripItem.beanBrand,
                grinding: state.dripItem.grinding,
                beanScales: state.dripItem.beanScales,
                waterScales: state.dripItem.waterScales,
                celsius: state.dripItem.celsius,
                memo: state.dripItem.memo,
              };
            } else {
              return { ...data };
            }
          });
          localStorage.setItem("dripItem", JSON.stringify(updateData));
          alert("ドリップデータを保存しました");
        } catch (error) {
          alert("データの保存に失敗ました" + error);
          alert("登録画面を閉じ、ページの再読み込みを実行します。");
          window.location.reload();
        }
      } else {
        alert("データの保存に失敗ました。モーダルの状態が不正です。");
        alert("登録画面を閉じ、ページの再読み込みを実行します。");
        window.location.reload();
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
            (data) => data.createdDateTime !== action.payload.createdDateTime
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
