import React from "react";
import { useDispatch } from "react-redux";
import { openModal, closeModal } from "../reducer/modalSlice";
import { resetTimer } from "../reducer/dripTimerSlice";
import { useSelector } from "../reducer/store";
import saveImg from "../assets/save.png";
import closeImg from "../assets/close.png";
import plusImg from "../assets/plus.png";
import { get, resetState, save } from "../reducer/dripDataSlice";
import { savedDialog } from "../reducer/dialogSlice";

const ModalButton: React.FC = () => {
  const dispatch = useDispatch();
  const displayModal = useSelector((state) => state.modal.isDisplayed);
  const modalState = useSelector((state) => state.modal.modalState);

  const dripTimes = useSelector((state) => state.dripTimer.displayTime);

  const savedBeanBrand = useSelector(
    (state) => state.dripData.dripItem.beanBrand
  );

  return (
    <>
      {displayModal ? (
        <>
          <button
            className="fixed left-1/3 ml-[-2rem] bottom-5 z-30"
            onClick={() => {
              dispatch(closeModal());
              dispatch(resetState());
              dispatch(resetTimer());
            }}
          >
            <div className="rounded-full bg-[#999999] h-16 w-16 pt-[0.2rem] font-bold text-white shadow-sm hover:bg-[#888888] text-5xl flex justify-center">
              <img
                src={closeImg}
                alt="閉じるアイコン"
                className="inline-block h-7 w-7 mt-[0.9rem]"
              />
            </div>
          </button>
          <button
            className="fixed left-2/3 ml-[-2rem] bottom-5 z-30"
            onClick={() => {
              dispatch(save({ modalState, dripTimes }));
              dispatch(savedDialog(savedBeanBrand));
              dispatch(get());
              dispatch(closeModal());
              dispatch(resetState());
              dispatch(resetTimer());
            }}
          >
            <div className="rounded-full bg-[#C8A99C] h-16 w-16 pt-[0.2rem] font-bold text-white shadow-sm hover:bg-[#d2b5a7] text-5xl flex justify-center">
              <img
                src={saveImg}
                alt="保存アイコン"
                className="inline-block h-7 w-7 mt-[0.9rem]"
              />
            </div>
          </button>
        </>
      ) : (
        <button
          className="fixed left-1/2 ml-[-2rem] bottom-5 z-10"
          onClick={() => dispatch(openModal("create"))}
        >
          <div className="rounded-full bg-[#C8A99C] h-16 w-16 pt-[0.2rem] font-bold text-white shadow-sm hover:bg-[#cdb5ab] text-5xl flex justify-center">
            <img
              src={plusImg}
              alt="追加アイコン"
              className="inline-block h-9 w-9 mt-[0.7rem]"
            />
          </div>
        </button>
      )}
    </>
  );
};

export default ModalButton;
