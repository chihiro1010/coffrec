import Dexie, { Table } from "dexie";

export class MySubClassedDexie extends Dexie {
  dripItems!: Table<DripItem>;

  constructor() {
    super("coffrecDatabase");
    this.version(1).stores({
      dripItems:
        "++createdDateTime, dripTimes, beanBrand, grinding, beanScales, waterScales, celsius, memo", // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();
