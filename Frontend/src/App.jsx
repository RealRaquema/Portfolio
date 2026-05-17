import {
  Routes,
  Route,
} from 'react-router-dom'

import Navigation from './components/Navigation'

import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'

import AllProjects from './pages/AllProjects'
import AddProject from './pages/AddProject'
import ManageProjects from './pages/ManageProjects'

function HomePage() {

  return (
    <>
      <Hero />
      <Work />
      <About />
    </>
  )
}

export default function App() {

  return (

    <>

      <Navigation />

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/allProjects"
          element={<AllProjects />}
        />

        <Route
          path="/addProject"
          element={<AddProject />}
        />

        <Route
          path="/manageProjects"
          element={<ManageProjects />}
        />

      </Routes>

    </>

  )
}