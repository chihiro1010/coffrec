import { useEffect } from "react";
import DripItem from "./DripItem";
import { useDispatch } from "react-redux";
import { useSelector } from "../reducer/store";
import { get } from "../reducer/dripDataSlice";

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

const Contents: React.FC = () => {
  const dispatch = useDispatch();

  const dripDataList = useSelector<DripItem[]>(
    (state) => state.dripData.retentionDataArgs
  );

  // const dummyJsonData = [
  //   {
  //     createdDateTime: "2024/2/1 16:19",
  //     beanBrand: "エチオピア ナチュラル",
  //     grinding: "中細挽き",
  //     beanScales: 16,
  //     waterScales: 256,
  //     celsius: 87,
  //     dripTimes: "03:20",
  //     memo: "落ち切り",
  //   },
  //   {
  //     createdDateTime: "2024/2/12 09:25",
  //     beanBrand: "マンデリン スマトラ",
  //     grinding: "中細挽き",
  //     beanScales: 16,
  //     waterScales: 256,
  //     celsius: 87,
  //     dripTimes: "03:20",
  //     memo: "落ち切り",
  //   },
  // ];

  useEffect(() => {
    dispatch(get());
  }, []);

  return (
    <>
      {dripDataList.length !== 0 ? (
        <div className="flex justify-center">
          <div className="mt-7 w-96">
            {dripDataList.map((item) => (
              <DripItem
                key={item.createdDateTime}
                dateTime={item.createdDateTime}
                beanBrand={item.beanBrand}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center h-screen justify-center mt-[-10vh]">
          <h1 className="text-[#8F8F8F] text-lg">最初の一杯を淹れましょう。</h1>
          <img
            className="w-20 x-20 mt-5"
            src="src/assets/home.png"
            alt="home-logo"
          />
        </div>
      )}
    </>
  );
};

export default Contents;
