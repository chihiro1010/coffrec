import Contents from "./components/Contents";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ModalButton from "./components/ModalButton";
import { useSelector } from "./reducer/store";

function App() {
  const displayModal = useSelector((state) => state.modal.isDisplayed);

  return (
    <>
      <main className="h-screen w-screen">
        <Header />
        <ModalButton />
        <Contents />
        {displayModal ? <Modal /> : null}
      </main>
    </>
  );
}

export default App;
