import { useSelector } from "../../../reducer/store";
import MessageDialog from "./MessageDialog";

const SaveMessageDialog = () => {
  const processItem: DripItem = useSelector(
    (state) => state.dialog.processItem
  );

  return (
    <MessageDialog
      message={`『${processItem.beanBrand}』の抽出データを保存しました。`}
      actionType="save"
    />
  );
};
export default SaveMessageDialog;
