import Contents from "./components/Contents";
import Dialog from "./components/Dialog/Dialog";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ModalButton from "./components/ModalButton";

function App() {
  return (
    <>
      <main>
        <Header />
        <ModalButton />
        <Contents />
        <Modal />
        <Dialog />
      </main>
    </>
  );
}

export default App;
