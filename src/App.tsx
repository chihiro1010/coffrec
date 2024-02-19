import Contents from "./components/Contents";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ModalButton from "./components/ModalButton";
import { useSelector } from "./reducer/store";
import Dialog from "./components/Dialog";

function App() {
  const displayModal = useSelector((state) => state.modal.isDisplayed);

  return (
    <>
      <main>
        <Header />
        <ModalButton />
        <Contents />
        {displayModal ? <Modal /> : null}
        <Dialog></Dialog>
      </main>
    </>
  );
}

export default App;
