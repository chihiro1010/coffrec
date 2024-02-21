import { useSelector } from "../../../reducer/store";
import MessageDialog from "./MessageDialog";

const SaveMessageDialog = () => {
  const processItem: DripItem = useSelector(
    (state) => state.dialog.processItem
  );
  const actionType: string = useSelector((state) => state.dialog.actionType);
  const display: boolean = useSelector((state) => state.dialog.isDisplayed);

  return actionType === "save" && display ? (
    <MessageDialog
      message={`『${processItem.beanBrand}』の抽出データを保存しました。`}
    />
  ) : null;
};
export default SaveMessageDialog;
