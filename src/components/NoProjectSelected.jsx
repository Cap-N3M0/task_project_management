import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onAddProject }) {
  return (
    <div className="flex flex-col w-2/3 items-center text-center mt-24 gap-8">
      <img
        src={noProjectImage}
        alt="an empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl text-stone-500 font-bold my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onAddProject}>Create new Project</Button>
      </p>
    </div>
  );
}
