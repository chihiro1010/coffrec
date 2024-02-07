import DripTimer from "./DripTimer";
import coffeeBeanImg from "../assets/coffee_bean.png";
import particleSizeImg from "../assets/particle_size.png";
import scalesImg from "../assets/scales.png";
import waterImg from "../assets/water.png";
import thermometerImg from "../assets/thermometer.png";
import memoImg from "../assets/memo.png";
import { useSelector } from "../reducer/store";
import { useState } from "react";

const Modal: React.FC = () => {
  const dripTimes = useSelector((state) => state.drip.displayTime);
  const [beanBrandState, setBeanBrandState] = useState("");
  const [grindingState, setGrindingState] = useState("unknown");
  const [beanScalesState, setBeanScalesState] = useState("");
  const [waterScalesState, setWaterScalesState] = useState("");
  const [thermometerState, setThermometerState] = useState("");
  const [memoState, setMemoState] = useState("");
  const [counterMemoLengthState, setCounterMemoLengthState] = useState(0);

  const changedTextarea = (value: string) => {
    setMemoState(value);
    setCounterMemoLengthState(value.length);
  };

  return (
    <div className="fixed top-0 bg-white rounded-t-2xl shadow-lg w-screen h-screen">
      <div className="p-4">
        値確認用 --------------------
        <br />
        {dripTimes}
        <br />
        {beanBrandState}
        <br />
        {grindingState}
        <br />
        {beanScalesState}
        <br />
        {waterScalesState}
        <br />
        {thermometerState}
        <br />
        {memoState}
        -----------------------------
        <div className="my-7">
          <img
            src={coffeeBeanImg}
            alt="豆のアイコン"
            className="inline-block h-10 w-10"
          />
          <input
            type="text"
            value={beanBrandState}
            onChange={(e) => setBeanBrandState(e.target.value)}
            placeholder="豆の銘柄を記入"
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
            onChange={(e) => setGrindingState(e.target.value)}
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
            type="text"
            value={beanScalesState}
            onChange={(e) => setBeanScalesState(e.target.value)}
            placeholder="粉量を記入"
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
            type="text"
            value={waterScalesState}
            onChange={(e) => setWaterScalesState(e.target.value)}
            placeholder="湯量を記入"
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
            type="text"
            value={thermometerState}
            onChange={(e) => setThermometerState(e.target.value)}
            placeholder="湯温を記入"
            className="rounded-l-md drop-shadow-md w-28 p-2 ml-3"
          />
          <div className="inline-block bg-white py-2 px-3 rounded-r-md border-black drop-shadow-md">
            ℃
          </div>
        </div>
        <DripTimer />
        <div className="my-7">
          <img
            src={memoImg}
            alt="メモのアイコン"
            className="inline-block h-10 w-10 align-top"
          />
          <textarea
            className="rounded-l-md drop-shadow-md p-2 ml-3 w-64 h-40"
            value={memoState}
            maxLength={1000}
            onChange={(e) => changedTextarea(e.target.value)}
          ></textarea>
          <p className="ml-14 text-sm font-bold text-[#C8A99C]">
            {counterMemoLengthState} 文字（ 最大1000文字 ）
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
