import React, { useEffect, useState } from 'react'

import {
  Moon,
  Sun,
} from 'lucide-react'

import {
  Link,
  useLocation,
} from 'react-router-dom'

import './Navigation.css'

export default function Navigation() {

  const location = useLocation()

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {

    if (darkMode) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }

  }, [darkMode])

  return (

    <div className="nav-wrapper">

      <nav className="navbar">

       <div className="nav-logo">

  Faisal

  <span className="last-name">
    Sajjad
  </span>

</div>

        <div className="nav-links">

          <Link
            to="/"
            className={
              location.pathname === '/'
                ? 'active-link'
                : ''
            }
          >
            Home
          </Link>

          <Link
            to="/allProjects"
            className={
              location.pathname === '/allProjects'
                ? 'active-link'
                : ''
            }
          >
            All Projects
          </Link>

          {/* <Link
            to="/addProject"
            className={
              location.pathname === '/addProject'
                ? 'active-link'
                : ''
            }
          >
            Add Project
          </Link>

          <Link
            to="/manageProjects"
            className={
              location.pathname === '/manageProjects'
                ? 'active-link'
                : ''
            }
          >
            Manage
          </Link> */}

        </div>

      </nav>

      <button
        className="theme-toggle"
        onClick={() =>
          setDarkMode(!darkMode)
        }
      >

        {darkMode
          ? <Sun size={18} />
          : <Moon size={18} />
        }

      </button>

    </div>
  )
}