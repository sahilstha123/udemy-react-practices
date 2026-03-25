import { useState } from 'react'

import './App.css'
import ProjectSidebar from './components/ProjectSidebar'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import { toast, ToastContainer } from 'react-toastify'

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  const handleStartAddProject = () => {
    setProjectsState(prev => (
      {
        ...prev,
        selectedProjectId: null
      }
    ))
  }

  const handleAddProject = (projectData) => {

   
    setProjectsState(prevState => {
      const isDuplicate = prevState.projects.some(items => (
        items.title.toLowerCase().trim() === projectData.title.toLowerCase().trim()
      ))
      if (isDuplicate) {
        toast("Title already exist")
        return prevState
      }
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }
  console.log(projectsState)

  return (
    <>
      <main className='h-screen my-8 flex gap-8'>
        <ProjectSidebar handleStartAddProject={handleStartAddProject} />
        {projectsState.selectedProjectId === null ? (<NewProject AddNewProject={handleAddProject} />) : (
          <NoProjectSelected handleStartAddProject={handleStartAddProject} />
        )}
      </main>
      <ToastContainer />
    </>

  )
}

export default App
