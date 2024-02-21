import { useDispatch } from "react-redux";
import { closeDialog } from "../../../reducer/dialogSlice";

const MessageDialog = (props: DialogProps) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="fixed top-0 h-screen w-screen bg-black z-[60] opacity-40"></div>
      <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  z-[100] rounded-xl drop-shadow-lg h-64 w-80">
        <div className="flex flex-col h-full">
          <p className="text-center py-3 rounded-t-xl drop-shadow-md bg-opacity-90 bg-white text-md font-bold text-zinc-500">
            {props.message}
          </p>

          <button
            className="py-6 rounded-b-xl drop-shadow-md bg-opacity-90 bg-white text-zinc-500 text-xl font-bold border-t-[1px] border-zinc-400 duration-200 hover:bg-opacity-70"
            onClick={() => {
              dispatch(closeDialog());
            }}
          >
            閉じる
          </button>
        </div>
      </div>
    </>
  );
};

export default MessageDialog;
