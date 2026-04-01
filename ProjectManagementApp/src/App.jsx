import { useState } from 'react'

import './App.css'
import ProjectSidebar from './components/ProjectSidebar'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import { toast, ToastContainer } from 'react-toastify'
import SelectedProject from './components/SelectedProject'

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  })


  const handleSelectProject = (id) => {
    setProjectsState(prev => (
      {
        ...prev,
        selectedProjectId: id
      }
    ))
  }
  const handleStartAddProject = () => {
    setProjectsState(prev => (
      {
        ...prev,
        selectedProjectId: null
      }
    ))
  }

  const handleAddProject = (projectData) => {

    const isDuplicate = projectsState.projects.some(items => (
      items.title.toLowerCase().trim() === projectData.title.toLowerCase().trim()
    ))
    if (isDuplicate) {
      toast.error("Title Already Exists", {
        autoClose: 3000,
        style: { color: "red" },
        className: "toast-mobile"
      })
      return
    }
    setProjectsState(prevState => {
      const projectId = Math.random()

      const newProject = {
        ...projectData,
        id: projectId
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  const handleOnCancel = () => {
    setProjectsState(prevState => ({ ...prevState, selectedProjectId: undefined }))
  }
  console.log(projectsState)

  const renderContent = () => {
    // 1. Add new project
    if (projectsState.selectedProjectId === null) {
      return (
        <NewProject
          AddNewProject={handleAddProject}
          onCancel={handleOnCancel}
        />
      );
    }

    // 2. No project selected
    if (projectsState.selectedProjectId === undefined) {
      return (
        <NoProjectSelected
          handleStartAddProject={handleStartAddProject}
        />
      );
    }

    // 3. Project selected
    const selectedProject = projectsState.projects.find(
      project => project.id === projectsState.selectedProjectId
    );

    return <SelectedProject project={selectedProject} />;
  };

  return (
    <>
      <main className='h-screen my-8 flex gap-8'>
        <ProjectSidebar
          handleStartAddProject={handleStartAddProject}
          projects={projectsState.projects}
          OnSelectProject={handleSelectProject}
        />

        {renderContent()}
      </main>
      <ToastContainer />
    </>

  )
}

export default App
