import { useEffect } from "react";
import DripItem from "./DripItem";
import { useDispatch } from "react-redux";
import { useSelector } from "../reducer/store";
import { get } from "../reducer/dripDataSlice";
import homeLogoImg from "../assets/home.png";

const Contents: React.FC = () => {
  const dispatch = useDispatch();

  const dripDataList = useSelector<DripItem[]>(
    (state) => state.dripData.retentionDataArgs
  );

  useEffect(() => {
    dispatch(get());
  }, []);

  return (
    <>
      {dripDataList.length !== 0 ? (
        <article className="flex flex-col text-center mt-24">
          {dripDataList.map((item) => (
            <DripItem
              key={item.createdDateTime}
              dateTime={item.createdDateTime}
              beanBrand={item.beanBrand}
            />
          ))}
        </article>
      ) : (
        <div className="flex flex-col items-center h-screen justify-center mt-[-10vh]">
          <h1 className="text-[#8F8F8F] text-lg">最初の一杯を淹れましょう。</h1>
          <img className="w-20 x-20 mt-5" src={homeLogoImg} alt="home-logo" />
        </div>
      )}
    </>
  );
};

export default Contents;
