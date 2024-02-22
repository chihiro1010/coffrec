import { useSelector } from "../../../reducer/store";
import MessageDialog from "./MessageDialog";

const DeleteMessageDialog = () => {
  const processItem: DripItem = useSelector(
    (state) => state.dialog.processItem
  );

  return (
    <MessageDialog
      message={`『${processItem.beanBrand}』の抽出データを削除しました。`}
      actionType="delete"
    />
  );
};
export default DeleteMessageDialog;
