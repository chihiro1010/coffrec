import { useSelector } from "../../../reducer/store";
import MessageDialog from "./MessageDialog";

const DeleteMessageDialog = () => {
  const processItem: DripItem = useSelector(
    (state) => state.dialog.processItem
  );
  const actionType: string = useSelector((state) => state.dialog.actionType);
  const display: boolean = useSelector((state) => state.dialog.isDisplayed);

  return actionType === "delete" && !display ? (
    <MessageDialog
      message={`『${processItem.beanBrand}』の抽出データを削除しました。`}
    />
  ) : null;
};
export default DeleteMessageDialog;
