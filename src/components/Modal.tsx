import DripTimer from "./DripTimer";
import coffeeBeanImg from "../assets/coffee_bean.png";
import particleSizeImg from "../assets/particle_size.png";
import scalesImg from "../assets/scales.png";
import waterImg from "../assets/water.png";
import thermometerImg from "../assets/thermometer.png";
import memoImg from "../assets/memo.png";
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

const Modal: React.FC = () => {
  const dispatch = useDispatch();

  const beanBrandState = useSelector((state) => state.dripData.beanBrand);
  const grindingState = useSelector((state) => state.dripData.grinding);
  const beanScalesState = useSelector((state) => state.dripData.beanScales);
  const waterScalesState = useSelector((state) => state.dripData.waterScales);
  const celsiusState = useSelector((state) => state.dripData.celsius);
  const memoState = useSelector((state) => state.dripData.memo);

  const memoLengthState = useSelector(
    (state) => state.dripData.countMemoLength
  );

  return (
    <div className="fixed top-0 bg-white rounded-t-2xl shadow-lg w-screen h-screen">
      <div className="flex justify-center">
        <div className="p-4">
          <div className="my-7">
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
          <div className="my-7">
            <img
              src={particleSizeImg}
              alt="挽目のアイコン"
              className="inline-block h-10 w-10"
            />
            <select
              name="grinding"
              className="rounded-md drop-shadow-md p-2 ml-3"
              value={grindingState}
              onChange={(e) => dispatch(updateGrinding(e.target.value))}
            >
              <option value="unknown">挽目を選択</option>
              <option value="very-finely">極細挽き</option>
              <option value="finely">細挽き</option>
              <option value="finely-medium">中細挽き</option>
              <option value="medium">中挽き</option>
              <option value="medium-coarsely">中粗挽き</option>
              <option value="coarsely">粗挽き</option>
              <option value="very-coarsely">極粗挽き</option>
            </select>
          </div>
          <div className="my-7">
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
              className="rounded-l-md drop-shadow-md w-28 p-2 ml-3"
            />
            <div className="inline-block bg-white py-2 px-3 rounded-r-md border-black drop-shadow-md">
              g
            </div>
          </div>
          <div className="my-7">
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
              className="rounded-l-md drop-shadow-md w-28 p-2 ml-3"
            />
            <div className="inline-block bg-white py-2 px-3 rounded-r-md border-black drop-shadow-md">
              ml
            </div>
          </div>
          <div className="my-7">
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
              onChange={(e) => dispatch(updateCelsius(e.target.valueAsNumber))}
              placeholder="湯温"
              className="rounded-l-md drop-shadow-md w-28 p-2 ml-3"
            />
            <div className="inline-block bg-white py-2 px-3 rounded-r-md border-black drop-shadow-md">
              ℃
            </div>
          </div>
          <div className="my-7">
            <img
              src={memoImg}
              alt="メモのアイコン"
              className="inline-block h-10 w-10 align-top"
            />
            <textarea
              className="rounded-l-m border-black drop-shadow-md p-2 ml-3 w-64 h-10 appearance-none"
              value={memoState}
              maxLength={1000}
              placeholder="メモ"
              onChange={(e) => dispatch(updateMemo(e.target.value))}
            ></textarea>
            <p className="ml-14 text-sm font-bold text-[#C8A99C]">
              {memoLengthState} / 1000
            </p>
          </div>
          <DripTimer />
        </div>
      </div>
    </div>
  );
};

export default Modal;
