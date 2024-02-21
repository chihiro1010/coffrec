import { useEffect } from "react";
import DripItem from "./DripItem";
import { useDispatch } from "react-redux";
import { useSelector } from "../reducer/store";
import { get } from "../reducer/dripDataSlice";
import homeLogoImg from "../assets/home.webp";

const Contents: React.FC = () => {
  const dispatch = useDispatch();
  const dripDataList: DripItem[] = useSelector(
    (state) => state.dripData.retentionDataArgs
  );

  useEffect(() => {
    dispatch(get());
  }, []);

  return (
    <>
      {dripDataList.length === 0 ? (
        <div className="flex flex-col items-center h-[90vh] justify-center mt-[-10vh]">
          <h1 className="text-main text-lg">最初の一杯を淹れましょう。</h1>
          <img className="w-20 x-20 mt-5" src={homeLogoImg} alt="home-logo" />
        </div>
      ) : (
        <article className="flex flex-col items-center">
          {dripDataList.map((item) => (
            <DripItem key={item.createdDateTime} dripItem={item} />
          ))}
        </article>
      )}{" "}
    </>
  );
};

export default Contents;
