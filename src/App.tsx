import Contents from "./components/Contents";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ModalButton from "./components/ModalButton";
import Dialog from "./components/Dialog";

function App() {
  return (
    <>
      <main>
        <Header />
        <ModalButton />
        <Contents />
        <Modal />
        <Dialog></Dialog>
      </main>
    </>
  );
}

export default App;
