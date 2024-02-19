import { useDispatch } from "react-redux";
import { closeAlert, closeDialog, displayAlert } from "../reducer/dialogSlice";
import { disableGuide, enableGuide, remove } from "../reducer/dripDataSlice";
import { useSelector } from "../reducer/store";

const Dialog = () => {
  const dispatch = useDispatch();

  const dripDataArr: DripItem[] = useSelector(
    (state) => state.dripData.retentionDataArgs
  );

  const confirmed: boolean = useSelector((state) => state.dialog.isConfirmed);
  const dialog: boolean = useSelector((state) => state.dialog.isDisplayed);
  const processItem: DripItem = useSelector(
    (state) => state.dialog.processItem
  );
  const processType: string = useSelector((state) => state.dialog.processType);

  switch (processType) {
    case "delete":
      return (
        <>
          {dialog ? (
            <>
              <div className="fixed top-0 h-screen w-screen bg-black z-[60] opacity-40"></div>
              <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  z-[100] rounded-xl drop-shadow-lg h-64 w-80">
                <div className="flex flex-col h-full">
                  <p className="text-center py-3 rounded-t-xl drop-shadow-md bg-opacity-90 bg-white text-md font-bold text-zinc-500">
                    『{processItem.beanBrand}』 <br />
                    の抽出データを削除しますか？
                  </p>

                  <button
                    className="py-6 rounded-b-xl drop-shadow-md bg-opacity-90 bg-white text-red-400 text-xl font-bold border-t-[1px] border-zinc-400 duration-200 hover:bg-opacity-70"
                    onClick={() => {
                      dispatch(remove(processItem));
                      dispatch(closeDialog());
                      dispatch(displayAlert());
                    }}
                  >
                    削除
                  </button>
                  <button
                    className="mt-4 py-6 rounded-xl drop-shadow-md bg-opacity-90 bg-white text-xl font-bold text-zinc-500 duration-200 hover:bg-opacity-70"
                    onClick={() => dispatch(closeDialog())}
                  >
                    キャンセル
                  </button>
                </div>
              </div>
            </>
          ) : null}
          {confirmed ? (
            <>
              <div className="fixed top-0 h-screen w-screen bg-black z-[60] opacity-40"></div>
              <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  z-[100] rounded-xl drop-shadow-lg h-64 w-80">
                <div className="flex flex-col h-full">
                  <p className="text-center py-3 rounded-t-xl drop-shadow-md bg-opacity-90 bg-white text-md font-bold text-zinc-500">
                    『{processItem.beanBrand}』<br />{" "}
                    の抽出データを削除しました。
                  </p>

                  <button
                    className="py-6 rounded-b-xl drop-shadow-md bg-opacity-90 bg-white text-zinc-500 text-xl font-bold border-t-[1px] border-zinc-400 duration-200 hover:bg-opacity-70"
                    onClick={() => {
                      dispatch(closeAlert());
                      dripDataArr.length !== 0
                        ? dispatch(enableGuide())
                        : dispatch(disableGuide());
                    }}
                  >
                    閉じる
                  </button>
                </div>
              </div>
            </>
          ) : null}
        </>
      );
    case "save":
      return (
        <>
          {dialog ? (
            <>
              <div className="fixed top-0 h-screen w-screen bg-black z-[60] opacity-40"></div>
              <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  z-[100] rounded-xl drop-shadow-lg h-64 w-80">
                <div className="flex flex-col h-full">
                  <p className="text-center py-3 rounded-t-xl drop-shadow-md bg-opacity-90 bg-white text-md font-bold text-zinc-500">
                    『{processItem.beanBrand}』 <br />
                    の抽出データを保存しました。
                  </p>

                  <button
                    className="py-6 rounded-b-xl drop-shadow-md bg-opacity-90 bg-white text-zinc-500 text-xl font-bold border-t-[1px] border-zinc-400 duration-200 hover:bg-opacity-70"
                    onClick={() => dispatch(closeDialog())}
                  >
                    閉じる
                  </button>
                </div>
              </div>
            </>
          ) : null}
        </>
      );
    default:
      break;
  }
};

export default Dialog;
