import { useDispatch } from "react-redux";
import { proceedConfirm } from "../../../reducer/dialogSlice";
import { remove } from "../../../reducer/dripDataSlice";
import { useSelector } from "../../../reducer/store";
import ActionDialog from "./ActionDialog";

const DeleteActionDialog = () => {
  const dispatch = useDispatch();

  const processItem: DripItem = useSelector(
    (state) => state.dialog.processItem
  );
  const actionType: string = useSelector((state) => state.dialog.actionType);
  const display: boolean = useSelector((state) => state.dialog.isDisplayed);

  return actionType === "delete" && display ? (
    <ActionDialog
      actionButtonText="削除"
      message={`『${processItem.beanBrand}』の抽出データを削除します。よろしいですか？`}
      onClickAction={() => {
        dispatch(remove(processItem));
        dispatch(proceedConfirm());
      }}
    />
  ) : null;
};
export default DeleteActionDialog;
