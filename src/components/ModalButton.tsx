import React from "react";
import { useDispatch } from "react-redux";
import { display, hidden } from "../reducer/modalSlice";
import { reset } from "../reducer/dripTimerSlice";
import { useSelector } from "../reducer/store";
import saveImg from "../assets/save.png";
import { save } from "../reducer/dripDataSlice";

const ModalButton: React.FC = () => {
  const dispatch = useDispatch();
  const displayModal = useSelector((state) => state.modal.isDisplayed);
  const dripTime = useSelector((state) => state.dripTimer.displayTime);
  return (
    <>
      {displayModal ? (
        <>
          <button
            className="fixed left-1/3 ml-[-2rem] bottom-8 z-10"
            onClick={() => {
              dispatch(hidden());
              dispatch(reset());
            }}
          >
            <div className="rounded-full bg-[#777777] h-16 w-16 pt-[0.2rem] font-bold text-white shadow-sm hover:bg-[#888888] text-5xl flex justify-center">
              ×
            </div>
          </button>
          <button
            className="fixed left-2/3 ml-[-2rem] bottom-8 z-10"
            // save
            onClick={() => {
              dispatch(save(dripTime));
              dispatch(hidden());
              dispatch(reset());
            }}
          >
            <div className="rounded-full bg-[#C8A99C] h-16 w-16 pt-[0.2rem] font-bold text-white shadow-sm hover:bg-[#d2b5a7] text-5xl flex justify-center">
              <img
                src={saveImg}
                alt="セーブアイコン"
                className="inline-block h-7 w-7 mt-[0.9rem]"
              />
            </div>
          </button>
        </>
      ) : (
        <button
          className="fixed left-1/2 ml-[-2rem] bottom-8"
          onClick={() => dispatch(display("create"))}
        >
          <div className="rounded-full bg-[#C8A99C] h-16 w-16 pt-[0.2rem] font-bold text-white shadow-sm hover:bg-[#cdb5ab] text-5xl flex justify-center">
            +
          </div>
        </button>
      )}
    </>
  );
};

export default ModalButton;
