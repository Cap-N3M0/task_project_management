import { useState } from "react";

import "./App.css";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectState((prevProjectState) => ({
      ...prevProjectState,
      selectedProject: null,
    }));
  }

  let content;
  if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onAddProject={handleAddProject} />;
  } else {
    content = <NewProject />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onAddProject={handleAddProject} />
      {content}
    </main>
  );
}

export default App;
