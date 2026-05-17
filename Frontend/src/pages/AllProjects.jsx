import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {
  ExternalLink,
  Github,
} from 'lucide-react'

import '../styles/AllProjects.css'

export default function AllProjects() {

  const [projects, setProjects] = useState([])

  useEffect(() => {

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

    fetchProjects()

  }, [])

  return (

    <div className="all-projects-page">

      <div className="all-projects-header">

        <span className="all-projects-badge">
          PORTFOLIO PROJECTS
        </span>

        <h1>
          All Projects
        </h1>

        <p>
          Explore full-stack applications, MERN stack systems,
          AI projects, scalable backend architectures,
          and modern UI experiences.
        </p>

      </div>

      <div className="all-projects-grid">

        {projects.map((project, index) => (

          <div
            key={project._id}
            className="all-project-card"
          >

            <div className="all-project-image-wrapper">

              <img
                src={project.image}
                alt={project.title}
                className="all-project-image"
              />

            </div>

            <div className="all-project-content">

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              {project.tags?.length > 0 && (

                <div className="all-project-tags">

                  {project.tags.map((tag, index) => (

                    <span
                      key={index}
                      className="all-project-tag"
                    >
                      {tag}
                    </span>

                  ))}

                </div>

              )}

              <div className="all-project-links">

                {project.link && (

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="visit-project-btn"
                  >

                    <ExternalLink size={16} />

                    Visit Website

                  </a>

                )}

                {project.github && (

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-project-btn"
                  >

                    <Github size={16} />

                    GitHub

                  </a>

                )}

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}