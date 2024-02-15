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
import startImg from "../assets/start.png";
import stopImg from "../assets/stop.png";

const DripTimer: React.FC = () => {
  const dispatch = useDispatch();
  const dripState = useSelector((state) => state.dripTimer.dripping);
  const calcTime = useSelector((state) => state.dripTimer.calcTime);
  const displayTime = useSelector((state) => state.dripTimer.displayTime);

  const dripTimesState = useSelector(
    (state) => state.dripData.dripItem.dripTimes
  );

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

  const modalState = useSelector((state) => state.modal.modalState);

  useEffect(() => {
    dispatch(setdisplayTime());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calcTime]);

  return (
    <>
      <div className="inline-block my-8">
        <img
          src={timerImg}
          alt="時計のアイコン"
          className="inline-block h-10 w-10"
        />

        {modalState === "create" ? (
          <>
            {dripState ? (
              <button
                className="inline-block text-white bg-[#C8A99C] rounded-3xl drop-shadow-md w-28 py-2 ml-3"
                onClick={() => dispatch(stopTimer())}
              >
                <img
                  src={stopImg}
                  alt="停止アイコン"
                  className="inline h-5 w-5 mb-[0.15rem] mr-[0.15rem]"
                />
                抽出停止
              </button>
            ) : (
              <button
                className="inline-block text-white bg-[#C8A99C] rounded-3xl drop-shadow-md w-28 py-2 ml-3"
                onClick={() => dispatch(startTimer())}
              >
                <img
                  src={startImg}
                  alt="開始アイコン"
                  className="inline h-5 w-5 mb-[0.15rem]"
                />{" "}
                抽出開始
              </button>
            )}
            <div className="inline-block text-3xl text-[#C8A99C] font-bold ml-10 h-10 align-middle">
              {displayTime}
            </div>
          </>
        ) : (
          <div className="inline-block text-3xl text-[#C8A99C] font-bold ml-10 h-10 align-middle">
            {dripTimesState}
          </div>
        )}
      </div>
    </>
  );
};

export default DripTimer;
