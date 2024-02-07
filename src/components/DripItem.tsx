import dripImage from "../assets/home.png";

type Props = {
  beanBrand?: string;
  dateTime?: string;
};

const DripItem: React.FC<Props> = ({ beanBrand, dateTime }) => {
  return (
    <div className="flex justify-between items-center wrap bg-white text-[#C8A99C] shadow-sm rounded-xl p-5 mt-3">
      <img src={dripImage} alt="抽出アイコン" className="h-14 w-13" />
      <h1 className="text-xl ">{beanBrand}</h1>
      <h3 className="mb-auto text-sm">{dateTime}</h3>
    </div>
  );
};

export default DripItem;
