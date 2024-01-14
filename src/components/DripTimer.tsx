import { useDispatch } from "react-redux";
import { stop, start, setcalcTime, setdisplayTime } from "../reducer/dripSlice";
import { useSelector } from "../reducer/store";
import { useEffect } from "react";

const DripTimer: React.FC = () => {
  const dispatch = useDispatch();
  const dripState = useSelector((state) => state.drip.dripping);
  const calcTime = useSelector((state) => state.drip.calcTime);
  const displayTime = useSelector((state) => state.drip.displayTime);

  useEffect(() => {
    let timerInterval: number | undefined = undefined;
    if (dripState) {
      timerInterval = setInterval(() => {
        dispatch(setcalcTime());
      }, 1000);
    }
    return () => {
      clearInterval(timerInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dripState]);

  useEffect(() => {
    dispatch(setdisplayTime());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calcTime]);

  return (
    <>
      <div className="inline-block my-1">
        <img
          src="src/assets/timer.png"
          alt="時計のアイコン"
          className="inline-block h-10 w-10"
        />
        {dripState ? (
          <button
            className="inline-block text-white bg-[#C8A99C] rounded-3xl drop-shadow-md w-28 py-2 ml-3"
            onClick={() => dispatch(stop())}
          >
            II 抽出停止
          </button>
        ) : (
          <button
            className="inline-block text-white bg-[#C8A99C] rounded-3xl drop-shadow-md w-28 py-2 ml-3"
            onClick={() => dispatch(start())}
          >
            ▶ 抽出開始
          </button>
        )}
      </div>
      <div className="inline-block text-3xl text-[#C8A99C] font-bold ml-10 h-10 align-middle">
        {displayTime}
      </div>
    </>
  );
};

export default DripTimer;
