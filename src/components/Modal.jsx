import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const refDialogue = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        refDialogue.current.showModal();
      },
      close() {
        refDialogue.current.hideModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={refDialogue}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialoge" className="mt-4 text-right">
        <Button> {buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
