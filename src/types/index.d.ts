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
