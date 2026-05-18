// ManageProjects.jsx

import React, {
  useEffect,
  useState,
} from 'react'

import axios from 'axios'

import {
  useNavigate,
} from 'react-router-dom'

import {
  Pencil,
  Trash2,
  ExternalLink,
  Github,
} from 'lucide-react'

import './ManageProjects.css'

export default function ManageProjects() {

  const [projects, setProjects] =
    useState([])

  const navigate =
    useNavigate()

  useEffect(() => {

    fetchProjects()

  }, [])

  /* FETCH */

  const fetchProjects = async () => {

    try {

      const res =
        await axios.get(

          `${import.meta.env.VITE_API_URL}/api/projects`

        )

      /* SAFE ARRAY FIX */

      const safeProjects =
        res.data.map(
          (project) => ({

            ...project,

            technologies:
              Array.isArray(
                project.technologies
              )
                ? project.technologies
                : [],

          })
        )

      setProjects(
        safeProjects
      )

    } catch (error) {

      console.log(error)

    }

  }

  /* DELETE */

  const handleDelete = async (
    id
  ) => {

    const confirmDelete =
      window.confirm(
        'Delete this project?'
      )

    if (!confirmDelete)
      return

    try {

      await axios.delete(

        `${import.meta.env.VITE_API_URL}/api/projects/${id}`

      )

      fetchProjects()

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <section className="manage-projects-page">

      <div className="container">

        {/* HEADER */}

        <div className="manage-header">

          <span className="section-tag">
            ADMIN PANEL
          </span>

          <h1>
            Manage Projects
          </h1>

          <p>

            Edit, organize,
            and manage all
            portfolio projects.

          </p>

        </div>

        {/* GRID */}

        <div className="manage-grid">

          {projects.map(
            (project) => (

              <div
                key={project._id}
                className="manage-card"
              >

                {/* IMAGE */}

                <div className="manage-image-wrapper">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="manage-image"
                  />

                </div>

                {/* CONTENT */}

                <div className="manage-content">

                  <div className="manage-top">

                    <h2>
                      {project.title}
                    </h2>

                    {project.featured && (

                      <span className="featured-badge">

                        Featured

                      </span>

                    )}

                  </div>

                  <p>
                    {project.description}
                  </p>

                  {/* TECH */}

                  <div className="project-tech-list">

                    {Array.isArray(
                      project.technologies
                    ) &&

                      project.technologies.map(
                        (
                          tech,
                          index
                        ) => (

                          <span
                            key={index}
                            className="project-tech-pill"
                          >

                            {tech}

                          </span>

                        )
                      )
                    }

                  </div>

                  {/* LINKS */}

                  <div className="manage-links">

                    {project.liveLink && (

                      <a

                        href={
                          project.liveLink.startsWith(
                            'http'
                          )
                            ? project.liveLink
                            : `https://${project.liveLink}`
                        }

                        target="_blank"

                        rel="noreferrer"

                        className="manage-link-btn"
                      >

                        <ExternalLink
                          size={16}
                        />

                        Live

                      </a>

                    )}

                    {project.github && (

                      <a

                        href={
                          project.github.startsWith(
                            'http'
                          )
                            ? project.github
                            : `https://${project.github}`
                        }

                        target="_blank"

                        rel="noreferrer"

                        className="manage-link-btn secondary-btn"
                      >

                        <Github
                          size={16}
                        />

                        GitHub

                      </a>

                    )}

                  </div>

                  {/* ACTIONS */}

                  <div className="manage-actions">

                    <button

                      className="edit-btn"

                      onClick={() =>

                        navigate(
                          `/edit/${project._id}`
                        )

                      }
                    >

                      <Pencil
                        size={16}
                      />

                      Edit

                    </button>

                    <button

                      className="delete-btn"

                      onClick={() =>
                        handleDelete(
                          project._id
                        )
                      }
                    >

                      <Trash2
                        size={16}
                      />

                      Delete

                    </button>

                  </div>

                </div>

              </div>

            )
          )}

        </div>

      </div>

    </section>
  )
}