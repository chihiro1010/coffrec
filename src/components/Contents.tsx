import { useCallback, useEffect } from "react";
import DripItem from "./DripItem";
import { useDispatch } from "react-redux";
import { useSelector } from "../reducer/store";
import { disableGuide, enableGuide, get } from "../reducer/dripDataSlice";
import homeLogoImg from "../assets/home.webp";

const Contents: React.FC = () => {
  const dispatch = useDispatch();
  const dripDataList = useSelector<DripItem[]>(
    (state) => state.dripData.retentionDataArgs
  );
  const displayGuide = useSelector((state) => state.dripData.guide);

  const getData = useCallback(() => {
    dispatch(get());
  }, [dispatch]);

  useEffect(() => {
    getData(); // getData()の呼び出しはuseCallback内で定義されたものを使用
  }, [getData]); // getData()が変更された場合のみ再レンダリングをトリガー

  useEffect(() => {
    // dripDataListの長さに応じてガイドを有効または無効にする
    dripDataList.length !== 0
      ? dispatch(enableGuide())
      : dispatch(disableGuide());
  }, [dispatch, dripDataList]); // dripDataListが変更された場合のみ再レンダリングをトリガー

  return (
    <>
      {displayGuide ? (
        <article className="flex flex-col items-center">
          {dripDataList.map((item) => (
            <DripItem key={item.createdDateTime} dripItem={item} />
          ))}
        </article>
      ) : (
        <div className="flex flex-col items-center h-[90vh] justify-center mt-[-10vh]">
          <h1 className="text-[#C8A99C] text-lg">最初の一杯を淹れましょう。</h1>
          <img className="w-20 x-20 mt-5" src={homeLogoImg} alt="home-logo" />
        </div>
      )}
    </>
  );
};

export default Contents;
