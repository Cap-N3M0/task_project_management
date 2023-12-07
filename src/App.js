import { useState } from "react";

import "./App.css";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectSideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  function handleCreateAddProject() {
    setProjectState((prevProjectState) => ({
      ...prevProjectState,
      selectedProject: null,
    }));
  }

  function handleAddProject(newTitle, newDescription, newDueDate) {
    const newProjectData = {
      id: Math.random(),
      title: newTitle,
      description: newDescription,
      dueDate: newDueDate,
    };

    setProjectState((prevState) => ({
      ...prevState,
      selectedProject: undefined,
      projects: [...prevState.projects, newProjectData],
    }));
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProject: undefined,
    }));
  }

  function handleSelectProject(projectId) {
    setProjectState((prevProjectState) => ({
      ...prevProjectState,
      selectedProject: projectId,
    }));
  }

  let content;
  if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected onAddProject={handleCreateAddProject} />;
  } else if (projectState.selectedProject === null) {
    content = (
      <NewProject
        onSaveClick={handleAddProject}
        onCancelClick={handleCancelAddProject}
      />
    );
  } else {
    content = <SelectedProject project="" />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onAddProject={handleCreateAddProject}
        projectState={projectState}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
