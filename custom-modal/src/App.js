import { useEffect, useState } from "react";
import Modal from "./Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler  = () => {
    setIsModalOpen(true);
  }

  const closeModalHandler  = () => {
    setIsModalOpen(false);
  }

  return (
    <div>
    <button onClick={openModalHandler}>Modal Laucher</button>
    <Modal 
    isModalOpen={isModalOpen}
    openModalHandler={openModalHandler}
    closeModalHandler={closeModalHandler}
    >
      <p>This is modal</p>
    </Modal>
    
    </div>
  );
}

export default App;
