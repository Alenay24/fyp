import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AppointmentSchedulingComponent from './view/home/AppointmentSchedulingComponent'
import ProjectIdeaCard from './view/home/ProjectIdeaCard'
import SearchFilterComponent from './view/home/SearchFilterComponent'
import StudentDashboardCard from './view/home/StudentDashboardCard'
import SupervisorProfileCard from './view/home/SupervisorProfileCard'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AppointmentSchedulingComponent/>
     <ProjectIdeaCard/>
     <SearchFilterComponent/>
     <StudentDashboardCard/>
     <SupervisorProfileCard/>
     
    </>
  )
}

export default App
