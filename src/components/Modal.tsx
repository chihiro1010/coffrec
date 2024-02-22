import DripTimer from "./DripTimer";
import coffeeBeanImg from "../assets/bean.webp";
import particleSizeImg from "../assets/particle_size.webp";
import scalesImg from "../assets/scales.webp";
import waterImg from "../assets/water.webp";
import thermometerImg from "../assets/thermometer.webp";
import memoImg from "../assets/memo.webp";
import { useSelector } from "../reducer/store";
import {
  updateBeanBrand,
  updateGrinding,
  updateBeanScales,
  updateWaterScales,
  updateCelsius,
  updateMemo,
} from "../reducer/dripDataSlice";
import { useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";

const Modal: React.FC = () => {
  const dispatch = useDispatch();

  const beanBrandState = useSelector(
    (state) => state.dripData.dripItem.beanBrand
  );
  const grindingState = useSelector(
    (state) => state.dripData.dripItem.grinding
  );
  const beanScalesState = useSelector(
    (state) => state.dripData.dripItem.beanScales
  );
  const waterScalesState = useSelector(
    (state) => state.dripData.dripItem.waterScales
  );
  const celsiusState = useSelector((state) => state.dripData.dripItem.celsius);
  const memoState = useSelector((state) => state.dripData.dripItem.memo);
  const memoLengthState = useSelector(
    (state) => state.dripData.countMemoLength
  );
  const modalState = useSelector((state) => state.modal.modalState);
  const createdDateTime = useSelector(
    (state) => state.dripData.dripItem.createdDateTime
  );
  const displayModal: boolean = useSelector((state) => state.modal.isDisplay);

  return (
    <CSSTransition
      in={displayModal}
      timeout={500}
      classNames={{
        enter: "transition-opacity animate-slide-top",
        enterActive: "opacity-100",
        exit: "transition-opacity animate-slide-bottom",
        exitActive: "opacity-0",
      }}
      unmountOnExit
    >
      <div className="fixed top-0 inset-0 mx-auto mt-3 shadow-lg-top bg-white rounded-t-3xl w-[22rem] h-screen z-20">
        <div className="flex justify-center text-[#c8a99ca2]">
          <div>
            {modalState === "update" ? (
              <p className="fixed text-sm right-2">
                作成日時：{createdDateTime}
              </p>
            ) : null}
            <DripTimer />
            <div className="my-5">
              <img
                src={coffeeBeanImg}
                alt="豆のアイコン"
                className="inline-block h-10 w-10"
              />
              <input
                type="text"
                value={beanBrandState}
                onChange={(e) => dispatch(updateBeanBrand(e.target.value))}
                maxLength={30}
                placeholder="豆の銘柄"
                className="rounded-md drop-shadow-md w-64 p-2 ml-3"
              />
            </div>
            <div className="flex justify-between">
              <div className="my-5">
                <img
                  src={particleSizeImg}
                  alt="挽目のアイコン"
                  className="inline-block h-10 w-10"
                />
                <select
                  name="grinding"
                  className="rounded-md drop-shadow-md p-2 ml-3 w-20"
                  value={grindingState}
                  onChange={(e) => dispatch(updateGrinding(e.target.value))}
                >
                  <option value="unknown">挽目</option>
                  <option value="very-finely">極細</option>
                  <option value="finely">細</option>
                  <option value="finely-medium">中細</option>
                  <option value="medium">中</option>
                  <option value="medium-coarsely">中粗</option>
                  <option value="coarsely">粗</option>
                  <option value="very-coarsely">極粗</option>
                </select>
              </div>
              <div className="my-5">
                <img
                  src={scalesImg}
                  alt="秤のアイコン"
                  className="inline-block h-10 w-10"
                />
                <input
                  type="number"
                  step="1"
                  min="0"
                  max="99"
                  pattern="[0-9]"
                  value={beanScalesState === 0 ? "" : beanScalesState}
                  onChange={(e) =>
                    dispatch(updateBeanScales(e.target.valueAsNumber))
                  }
                  placeholder="粉量"
                  className="rounded-md drop-shadow-md w-16 p-2 ml-3"
                />
                <div className="inline-block ml-2">g</div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="my-5">
                <img
                  src={waterImg}
                  alt="ビーカーのアイコン"
                  className="inline-block h-10 w-10"
                />
                <input
                  type="number"
                  step="10"
                  min="0"
                  max="999"
                  pattern="[0-9]"
                  value={waterScalesState === 0 ? "" : waterScalesState}
                  onChange={(e) =>
                    dispatch(updateWaterScales(e.target.valueAsNumber))
                  }
                  placeholder="湯量"
                  className="rounded-md drop-shadow-md  appearance-none w-16 p-2 ml-3 focus:ring-2 focus:ring-main"
                />
                <div className="inline-block ml-2">ml</div>
              </div>
              <div className="my-5">
                <img
                  src={thermometerImg}
                  alt="温度計のアイコン"
                  className="inline-block h-10 w-10"
                />
                <input
                  type="number"
                  step="1"
                  min="0"
                  max="100"
                  pattern="[0-9]"
                  value={celsiusState === 0 ? "" : celsiusState}
                  onChange={(e) =>
                    dispatch(updateCelsius(e.target.valueAsNumber))
                  }
                  placeholder="湯温"
                  className="rounded-md drop-shadow-md w-16 p-2 ml-3"
                />
                <div className="inline-block ml-2">℃</div>
              </div>
            </div>
            <div className="my-5">
              <img
                src={memoImg}
                alt="メモのアイコン"
                className="inline-block h-10 w-10 align-top"
              />
              <textarea
                className="rounded-l-m border-black drop-shadow-md p-2 ml-3 w-64 h-32 appearance-none"
                value={memoState}
                maxLength={1000}
                placeholder="メモ"
                onChange={(e) => dispatch(updateMemo(e.target.value))}
              ></textarea>
              <p className="ml-14 text-sm font-bold ">
                {memoLengthState} / 1000
              </p>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
