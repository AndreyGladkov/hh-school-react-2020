import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const modalRoot = props.modalRoot || document.body;
  return ReactDOM.createPortal(
    <div className="modal">{props.children}</div>,
    modalRoot
  );
}
export default Modal;
