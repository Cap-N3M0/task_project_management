import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onSaveClick, onCancelClick }) {
  const refTitle = useRef();
  const refDescription = useRef();
  const refDueDate = useRef();
  const refModal = useRef();

  function handleSave() {
    const enteredTitle = refTitle.current.value;
    const enteredDescription = refDescription.current.value;
    const enteredDueDate = refDueDate.current.value;

    //validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      refDueDate === ""
    ) {
      refModal.current.open();
    } else {
      onSaveClick(enteredTitle, enteredDescription, enteredDueDate);
    }
  }

  return (
    <>
      <Modal ref={refModal} buttonCaption="Okay">
        <h2 className="text-xl text-stone-500 font-bold my-4">
          OOps! You broke the code congrats.
        </h2>
        <p className="text-stone-400 mb-4">Please Enter valid input</p>
        <p className="text-stone-400 mb-4">
          Great! Now, I have to work to fix this.
        </p>
      </Modal>
      <div className="w-full p-24">
        <menu className="flex flex-row justify-end">
          <li>
            <button
              className="text-slate-950 m-3 py-2 px-5 rounded-lg w-1/2"
              onClick={onCancelClick}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="bg-slate-950 text-slate-100 m-3 py-2 px-5 rounded-lg w-full"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div className="flex flex-col mt-24">
          <Input label="Title" type="text" ref={refTitle} />
          <Input label="Description" textarea={true} ref={refDescription} />
          <Input
            label="Due Date"
            type="date"
            placeholder="dd.mm.yyyy"
            ref={refDueDate}
          />
        </div>
      </div>
    </>
  );
}
