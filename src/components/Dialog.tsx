import { useDispatch } from "react-redux";
import { closeAlert, closeDialog, openAlert } from "../reducer/dialogSlice";
import { disableGuide, enableGuide, remove } from "../reducer/dripDataSlice";
import { useSelector } from "../reducer/store";

const Dialog = () => {
  const dispatch = useDispatch();

  const displayAlert = useSelector((state) => state.dialog.isConfirmed);
  const displayDialog = useSelector((state) => state.dialog.isDisplayed);
  const dripDataArr = useSelector((state) => state.dripData.retentionDataArgs);

  const deleteItem = useSelector((state) => state.dialog.deleteItem);
  const dialogType = useSelector((state) => state.dialog.dialogType);

  const savedItem = useSelector((state) => state.dialog.savedItem);

  switch (dialogType) {
    case "deleteConfirm":
      return (
        <>
          {displayDialog ? (
            <>
              <div className="fixed top-0 h-screen w-screen bg-black z-[60] opacity-40"></div>
              <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  z-[100] rounded-xl drop-shadow-lg h-64 w-80">
                <div className="flex flex-col h-full">
                  <p className="text-center py-3 rounded-t-xl drop-shadow-md bg-opacity-90 bg-white text-md font-bold text-zinc-600">
                    『{deleteItem.beanBrand}』 の抽出データを削除しますか？
                  </p>

                  <button
                    className="py-6 rounded-b-xl drop-shadow-md bg-opacity-90 bg-white text-red-600 text-xl font-bold border-t-[1px] border-zinc-400 duration-200 hover:bg-opacity-70"
                    onClick={() => {
                      dispatch(remove(deleteItem));
                      dispatch(closeDialog());
                      dispatch(openAlert());
                    }}
                  >
                    削除
                  </button>
                  <button
                    className="mt-4 py-6 rounded-xl drop-shadow-md bg-opacity-90 bg-white text-xl font-bold text-zinc-600 duration-200 hover:bg-opacity-70"
                    onClick={() => dispatch(closeDialog())}
                  >
                    キャンセル
                  </button>
                </div>
              </div>
            </>
          ) : null}
          {displayAlert ? (
            <>
              <div className="fixed top-0 h-screen w-screen bg-black z-[60] opacity-40"></div>
              <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  z-[100] rounded-xl drop-shadow-lg h-64 w-80">
                <div className="flex flex-col h-full">
                  <p className="text-center py-3 rounded-t-xl drop-shadow-md bg-opacity-90 bg-white text-md font-bold text-zinc-600">
                    『{deleteItem.beanBrand}』 の抽出データを削除しました。
                  </p>

                  <button
                    className="py-6 rounded-b-xl drop-shadow-md bg-opacity-90 bg-white text-zinc-600 text-xl font-bold border-t-[1px] border-zinc-400 duration-200 hover:bg-opacity-70"
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
    case "saved":
      return (
        <>
          {displayDialog ? (
            <>
              <div className="fixed top-0 h-screen w-screen bg-black z-[60] opacity-40"></div>
              <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  z-[100] rounded-xl drop-shadow-lg h-64 w-80">
                <div className="flex flex-col h-full">
                  <p className="text-center py-3 rounded-t-xl drop-shadow-md bg-opacity-90 bg-white text-md font-bold text-zinc-600">
                    『{savedItem}』 の抽出データを保存しました。
                  </p>

                  <button
                    className="py-6 rounded-b-xl drop-shadow-md bg-opacity-90 bg-white text-zinc-600 text-xl font-bold border-t-[1px] border-zinc-400 duration-200 hover:bg-opacity-70"
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
