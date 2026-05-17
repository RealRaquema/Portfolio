import React from 'react'

import {
  Link,
  useLocation,
} from 'react-router-dom'

import './Navigation.css'

export default function Navigation() {

  const location = useLocation()

  return (

    <nav className="navbar">

      <div className="nav-logo">
        Faisal Sajjad
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

        <Link
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
        </Link>

      </div>

    </nav>

  )
}