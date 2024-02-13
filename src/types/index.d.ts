interface ModalSlice {
  isDisplayed: boolean;
  modalState: string;
}

interface DripDataSlice {
  retentionDataArgs: DripItem[];
  beanBrand: string;
  grinding: string;
  beanScales: number;
  waterScales: number;
  celsius: number;
  memo: string;
  countMemoLength: number;
}

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
