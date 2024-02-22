import { useDispatch } from "react-redux";
import { closeActionDialog } from "../../../reducer/dialogSlice";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "../../../reducer/store";

const ActionDialog = (props: DialogProps) => {
  const isDisplay: boolean = useSelector(
    (state) => state.dialog.isActionDialogDisplay
  );
  const currentActionType: string = useSelector(
    (state) => state.dialog.actionType
  );
  const dispatch = useDispatch();
  return (
    <>
      {isDisplay ? (
        <div className="fixed top-0 h-screen w-screen bg-black z-[60] opacity-40"></div>
      ) : null}
      <CSSTransition
        in={isDisplay && props.actionType === currentActionType}
        timeout={500}
        classNames={{
          enter: "transition-opacity animate-slide-top",
          enterActive: "opacity-100",
          exit: "transition-opacity animate-slide-bottom",
          exitActive: "opacity-0",
        }}
        unmountOnExit
      >
        <div className="fixed inset-x-0 mx-auto mb-8 bottom-0 z-[100] rounded-xl drop-shadow-lg w-80">
          <div className="flex flex-col h-full">
            <p className="text-center py-3 rounded-t-xl drop-shadow-md bg-opacity-90 bg-white text-md font-bold text-zinc-500">
              {props.message}
            </p>

            <button
              className="py-6 rounded-b-xl drop-shadow-md bg-opacity-90 bg-white text-red-400 text-xl font-bold border-t-[1px] border-zinc-400 duration-200 hover:bg-opacity-70"
              onClick={props.onClickAction}
            >
              {props.actionButtonText}
            </button>
            <button
              className="mt-4 py-6 rounded-xl drop-shadow-md bg-opacity-90 bg-white text-xl font-bold text-zinc-500 duration-200 hover:bg-opacity-70"
              onClick={() => dispatch(closeActionDialog())}
            >
              キャンセル
            </button>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default ActionDialog;
