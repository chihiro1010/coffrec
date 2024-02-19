interface ModalSlice {
  isDisplayed: boolean;
  modalState: string;
}

interface DialogSlice {
  isDisplayed: boolean;
  isConfirmed: boolean;
  processItem: DripItem;
  processType: string;
}

interface DripDataSlice {
  retentionDataArgs: DripItem[];
  countMemoLength: number;
  dripItem: DripItem;
  guide: boolean;
}

interface DripTimerSlice {
  dripping: boolean;
  displayTime: string;
  startTime: number;
  calcTime: number;
}

interface DripItem {
  createdDateTime: string;
  dripTimes?: string;
  beanBrand?: string;
  grinding?: string;
  beanScales?: number;
  waterScales?: number;
  celsius?: number;
  memo?: string;
}

interface DripItemProps {
  beanBrand?: string;
  dripItem: DripItem;
}

interface ProcessingMaterial {
  dripItem: DripItem;
  processType: string;
}
