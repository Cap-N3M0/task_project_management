import Button from "./Button";

export default function ProjectSideBar({
  onAddProject,
  projectState,
  onSelectProject,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projectState.projects ? (
          projectState.projects.map((project) => {
            let buttonCssClasses =
              "w-full text-left px-2 py-1 rounded-sm my-1 hover:bg-stone-800";
            if (project.id === projectState.selectedProject) {
              buttonCssClasses += " bg-stone-800 text-stone-200";
            } else {
              buttonCssClasses += " text-stone-400";
            }
            return (
              <li key={project.id}>
                <button
                  className={buttonCssClasses}
                  onClick={() => onSelectProject(project.id)}
                >
                  {project.title}
                </button>
              </li>
            );
          })
        ) : (
          <p>Currently no projects are present</p>
        )}
      </ul>
    </aside>
  );
}
