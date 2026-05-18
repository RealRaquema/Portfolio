import React, {
  useEffect,
  useState,
} from 'react'

import axios from 'axios'

import { motion } from 'framer-motion'

import {
  ExternalLink,
  Github,
} from 'lucide-react'

import '../styles/AllProjects.css'

export default function AllProjects() {

  const [projects, setProjects] =
    useState([])

  useEffect(() => {

    fetchProjects()

  }, [])

  const fetchProjects = async () => {

    try {

      const res =
        await axios.get(
         `${import.meta.env.VITE_API_URL}/api/projects`
        )

      setProjects(res.data)

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <section className="all-projects-page">

      <div className="container">

        {/* HEADER */}

        <motion.div
          className="all-projects-header"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
        >

          <span className="section-tag">
            PORTFOLIO
          </span>

          <h1>
            All Projects
          </h1>

          <p>

            A collection of full-stack applications,
            modern web experiences, backend systems,
            and experimental projects built using
            MERN stack technologies and modern tools.

          </p>

        </motion.div>

        {/* PROJECTS */}

        <div className="all-projects-grid">

          {projects.map((project, index) => (

            <motion.div

              key={project._id}

              className="project-card"

              initial={{
                opacity: 0,
                y: 30,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: index * 0.05,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -10,
              }}
            >

              {/* IMAGE */}

              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

              </div>

              {/* CONTENT */}

              <div className="project-content">

                <h2>
                  {project.title}
                </h2>

                <p>
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}

                {project.technologies &&
                  project.technologies
                    .length > 0 && (

                  <div className="project-tech-list">

                    {project.technologies.map(
                      (tech, i) => (

                        <span
                          key={i}
                          className="project-tech-pill"
                        >

                          {tech}

                        </span>

                      )
                    )}

                  </div>

                )}

                {/* BUTTONS */}

                <div className="project-buttons">

                  {/* LIVE SITE */}

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

                      className="project-btn"
                    >

                      <ExternalLink
                        size={18}
                      />

                      Go To Site

                    </a>

                  )}

                  {/* GITHUB */}

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

                      className="project-btn secondary-btn"
                    >

                      <Github
                        size={18}
                      />

                      GitHub

                    </a>

                  )}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}