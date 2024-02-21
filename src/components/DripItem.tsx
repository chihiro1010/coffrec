import dripImage from "../assets/home.webp";
import deleteImg from "../assets/delete.png";
import { modalUpdateMode } from "../reducer/dripDataSlice";
import { useDispatch } from "react-redux";

import { displayModal } from "../reducer/modalSlice";
import { displayDialog } from "../reducer/dialogSlice";

const DripItem: React.FC<DripItemProps> = ({ dripItem }) => {
  const dispatch = useDispatch();

  const deleteActionItem: ProcessingMaterial = {
    dripItem,
    actionType: "delete",
  };

  return (
    <>
      <section className="relative">
        <div className="relative text-main shadow-sm rounded-md w-[22rem] text-left py-3 px-3 my-2 border-l-8 border-main">
          <button
            onClick={() => {
              dispatch(modalUpdateMode(dripItem));
              dispatch(displayModal("update"));
            }}
          >
            <h3 className="absolute text-sm right-2 top-1">
              {dripItem.createdDateTime}
            </h3>
            <div className="inline-flex flex-row items-center text-start">
              <img src={dripImage} alt="抽出アイコン" className="h-14 w-13" />
              <h1 className="text-xl font-bold ml-2 mt-2 w-[16.5rem] break-words">
                {dripItem.beanBrand}
              </h1>
            </div>
          </button>
          <button
            type="submit"
            onClick={() => dispatch(displayDialog(deleteActionItem))}
            className="absolute right-2 bottom-1 text-right"
          >
            <img src={deleteImg} alt="削除ボタン" className="h-4 w-4" />
          </button>
        </div>
      </section>
    </>
  );
};

export default DripItem;
