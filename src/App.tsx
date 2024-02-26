import Contents from "./components/Contents";
import RootDialog from "./components/Dialog/RootDialog";
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
        <RootDialog />
      </main>
    </>
  );
}

export default App;
