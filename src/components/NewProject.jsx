import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-full p-24">
      <menu className="flex flex-row justify-end">
        <li>
          <button className="text-slate-950 m-3 py-2 px-5 rounded-lg w-1/2">
            Cancel
          </button>
        </li>
        <li>
          <button className="bg-slate-950 text-slate-100 m-3 py-2 px-5 rounded-lg w-full">
            Save
          </button>
        </li>
      </menu>
      <div className="flex flex-col mt-24">
        <Input label="Title" type="text" />
        <Input label="Description" textarea={true} />
        <Input label="Due Date" type="date" placeholder="dd.mm.yyyy" />
      </div>
    </div>
  );
}
