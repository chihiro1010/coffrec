import dripImage from "../assets/home.png";
import deleteImg from "../assets/delete_icon.png";
import { remove } from "../reducer/dripDataSlice";
import { useDispatch } from "react-redux";

type Props = {
  beanBrand?: string;
  dateTime?: string;
};
// flex justify-between items-center wrap
const DripItem: React.FC<Props> = ({ beanBrand, dateTime }) => {
  const dispatch = useDispatch();
  return (
    <section>
      <button className="relative text-[#C8A99C] shadow-sm rounded-md w-[22rem] text-left py-3 px-3 my-2 border-l-8 border-[#C8A99C]">
        <h3 className="absolute text-sm right-2 top-1">{dateTime}</h3>
        <div className="inline-flex items-center">
          <img src={dripImage} alt="抽出アイコン" className="h-14 w-13" />
          <h1 className="text-xl font-bold ml-2 mt-2 w-[16.5rem] break-words">
            {beanBrand}
          </h1>
        </div>
        <button
          type="submit"
          onClick={() => dispatch(remove({ beanBrand, dateTime }))}
          className="absolute right-2 bottom-1 text-right"
        >
          <img src={deleteImg} alt="削除ボタン" className="h-4 w-4" />
        </button>
      </button>
    </section>
  );
};

export default DripItem;
