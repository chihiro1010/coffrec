import React from "react";
import { useDispatch } from "react-redux";
import { displayModal, closeModal } from "../reducer/modalSlice";
import { resetTimer } from "../reducer/dripTimerSlice";
import { useSelector } from "../reducer/store";
import saveImg from "../assets/save.png";
import closeImg from "../assets/close.png";
import plusImg from "../assets/plus.png";
import { resetState, save } from "../reducer/dripDataSlice";
import { displayMessageDialog } from "../reducer/dialogSlice";
import { CSSTransition } from "react-transition-group";

const ModalButton: React.FC = () => {
  const dispatch = useDispatch();
  const isDisplayModal: boolean = useSelector((state) => state.modal.isDisplay);
  const modalState: string = useSelector((state) => state.modal.modalState);
  const dripTimes: string = useSelector((state) => state.dripTimer.displayTime);
  const dripItem: DripItem = useSelector((state) => state.dripData.dripItem);

  const saveActionItem: ProcessingMaterial = {
    dripItem,
    actionType: "save",
  };

  return (
    <>
      <div className="fixed inset-0 mx-auto w-[23rem] h-screen z-30 pointer-events-none">
        <CSSTransition
          in={isDisplayModal}
          timeout={500}
          classNames={{
            enter: "animate-slide-top",
            exit: "animate-slide-bottom",
          }}
          unmountOnExit
        >
          <button
            className="absolute left-1/4 bottom-28 ml-[-2rem] pointer-events-auto"
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
        </CSSTransition>
        <CSSTransition
          in={isDisplayModal}
          timeout={500}
          classNames={{
            enter: "animate-slide-top",
            exit: "animate-slide-bottom",
          }}
          unmountOnExit
        >
          <button
            className="absolute left-3/4 bottom-28 ml-[-2rem] pointer-events-auto"
            onClick={() => {
              dispatch(save({ modalState, dripTimes }));
              dispatch(displayMessageDialog(saveActionItem));
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
        </CSSTransition>
      </div>
      <div className="fixed inset-0 mx-auto w-[23rem] h-screen">
        <button
          className="absolute left-[42%] bottom-28 z-10"
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
    </>
  );
};

export default ModalButton;
