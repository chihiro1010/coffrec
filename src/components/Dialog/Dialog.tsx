import DeleteActionDialog from "./ActionDialog/DeleteActionDialog";
import SaveMessageDialog from "./MessageDialog/SaveMessageDialog";
import DeleteMessageDialog from "./MessageDialog/DeleteMessageDialog";

const Dialog = () => {
  return (
    <>
      <DeleteActionDialog />
      <DeleteMessageDialog />
      <SaveMessageDialog />
    </>
  );
};

export default Dialog;
