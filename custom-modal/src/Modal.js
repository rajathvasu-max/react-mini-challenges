import { useEffect } from "react";
import "./modal.css";

function Modal({isModalOpen, closeModalHandler, children }) {
  useEffect(() => {
    const handleKeydown = (e) => {
      if(e.key == "Escape" && isModalOpen) {
        closeModalHandler()
      }
    }
      document.addEventListener("keydown", handleKeydown)
      return () => {
        document.removeEventListener("keydown", handleKeydown)
      }
  },[isModalOpen])

  return (
    <div 
      className= {isModalOpen ? "modal-display": "modal-hide"}
      onClick={() => closeModalHandler()}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
  );
}

export default Modal;
