import { useDispatch } from "react-redux";
import {
  stopTimer,
  startTimer,
  setcalcTime,
  setdisplayTime,
} from "../reducer/dripTimerSlice";
import { useSelector } from "../reducer/store";
import { useEffect } from "react";
import timerImg from "../assets/timer.png";

const DripTimer: React.FC = () => {
  const dispatch = useDispatch();
  const dripState = useSelector((state) => state.dripTimer.dripping);
  const calcTime = useSelector((state) => state.dripTimer.calcTime);
  const displayTime = useSelector((state) => state.dripTimer.displayTime);

  useEffect(() => {
    let timerId: number | undefined = undefined;

    if (dripState) {
      timerId = setInterval(() => {
        dispatch(setcalcTime());
      }, 1000);
    }
    return () => clearInterval(timerId);
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
          src={timerImg}
          alt="時計のアイコン"
          className="inline-block h-10 w-10"
        />
        {dripState ? (
          <button
            className="inline-block text-white bg-[#C8A99C] rounded-3xl drop-shadow-md w-28 py-2 ml-3"
            onClick={() => dispatch(stopTimer())}
          >
            II 抽出停止
          </button>
        ) : (
          <button
            className="inline-block text-white bg-[#C8A99C] rounded-3xl drop-shadow-md w-28 py-2 ml-3"
            onClick={() => dispatch(startTimer())}
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
