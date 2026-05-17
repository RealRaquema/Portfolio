import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {
  Trash2,
  Pencil,
  ExternalLink,
  Github,
  Star,
} from 'lucide-react'

import '../styles/ManageProjects.css'

export default function ManageProjects() {

  const [projects, setProjects] = useState([])

  const fetchProjects = async () => {

    try {

      const res = await axios.get(
        'http://localhost:5000/api/projects'
      )

      setProjects(res.data)

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    fetchProjects()

  }, [])

  const deleteProject = async (id) => {

    try {

      await axios.delete(
        `http://localhost:5000/api/projects/${id}`
      )

      fetchProjects()

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <div className="manage-page">

      <div className="manage-header">

        <span className="manage-badge">
          ADMIN DASHBOARD
        </span>

        <h1>
          Manage Projects
        </h1>

        <p>
          Edit, organize, feature, and remove projects
          from your portfolio.
        </p>

      </div>

      <div className="manage-grid">

        {projects.map((project, index) => (

          <div
            key={project._id}
            className="manage-card"
          >

            <div className="manage-image-wrapper">

              <img
                src={project.image}
                alt={project.title}
                className="manage-image"
              />

              {project.featured && (

                <div className="featured-badge">

                  <Star size={14} />

                  Featured

                </div>

              )}

            </div>

            <div className="manage-content">

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              {project.tags?.length > 0 && (

                <div className="manage-tags">

                  {project.tags.map((tag, index) => (

                    <span
                      key={index}
                      className="manage-tag"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              )}

              <div className="manage-links">

                {project.link && (

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="visit-btn"
                  >

                    <ExternalLink size={16} />

                    Live

                  </a>

                )}

                {project.github && (

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >

                    <Github size={16} />

                    GitHub

                  </a>

                )}

              </div>

              <div className="manage-actions">

                <button className="edit-btn">

                  <Pencil size={16} />

                  Edit

                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteProject(project._id)}
                >

                  <Trash2 size={16} />

                  Delete

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}