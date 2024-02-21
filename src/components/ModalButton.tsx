import React from "react";
import { useDispatch } from "react-redux";
import { displayModal, closeModal } from "../reducer/modalSlice";
import { resetTimer } from "../reducer/dripTimerSlice";
import { useSelector } from "../reducer/store";
import saveImg from "../assets/save.png";
import closeImg from "../assets/close.png";
import plusImg from "../assets/plus.png";
import { get, resetState, save } from "../reducer/dripDataSlice";
import { displayDialog } from "../reducer/dialogSlice";

const ModalButton: React.FC = () => {
  const dispatch = useDispatch();
  const isDisplayModal: boolean = useSelector(
    (state) => state.modal.isDisplayed
  );
  const modalState: string = useSelector((state) => state.modal.modalState);
  const dripTimes: string = useSelector((state) => state.dripTimer.displayTime);
  const dripItem: DripItem = useSelector((state) => state.dripData.dripItem);

  const saveActionItem: ProcessingMaterial = {
    dripItem,
    actionType: "save",
  };

  return (
    <>
      {isDisplayModal ? (
        <>
          <div className="relative mx-auto w-[23rem] h-screen">
            <button
              className="absolute left-1/4 bottom-24 ml-[-2rem] z-30"
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
              className="absolute right-1/4 translate-x-1/2 bottom-24 ml-[-2rem] z-30"
              onClick={() => {
                dispatch(save({ modalState, dripTimes }));
                dispatch(displayDialog(saveActionItem));
                dispatch(get());
                dispatch(closeModal());
                dispatch(resetState());
                dispatch(resetTimer());
              }}
            >
              <div className="rounded-full bg-main h-16 w-16 pt-[0.2rem] font-bold text-white shadow-sm hover:bg-[#d2b5a7] text-5xl flex justify-center">
                <img
                  src={saveImg}
                  alt="保存アイコン"
                  className="inline-block h-7 w-7 mt-[0.9rem]"
                />
              </div>
            </button>
          </div>
        </>
      ) : (
        <div className="fixed inset-0 mx-auto w-[23rem] h-screen">
          <button
            className="absolute right-1/2 translate-x-1/2 bottom-24 z-10"
            onClick={() => dispatch(displayModal("create"))}
          >
            <div className="rounded-full bg-main h-16 w-16 pt-[0.2rem] font-bold text-white shadow-sm hover:bg-[#cdb5ab] text-5xl flex justify-center">
              <img
                src={plusImg}
                alt="追加アイコン"
                className="inline-block h-9 w-9 mt-[0.7rem]"
              />
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default ModalButton;
