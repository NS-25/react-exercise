import ReactDom from "react-dom";

const Modal = ({ children }) => {
  const modalRoot = document.getElementById("modal-root");

  return ReactDom.createPortal(
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      {children}
    </div>,
    modalRoot
  );
};
export default Modal;
