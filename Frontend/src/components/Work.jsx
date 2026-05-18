import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

import './Work.css'

export default function Work() {

  const [projects, setProjects] = useState([])

  useEffect(() => {

    const fetchProjects = async () => {

      try {

        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/projects`        )

        const featuredProjects = res.data.filter(
          (project) => project.featured
        )

        setProjects(featuredProjects)

      } catch (error) {

        console.log(error)

      }

    }

    fetchProjects()

  }, [])

  return (

    <section className="work-section" id="work">

      <div className="container">

        <div className="work-header">

          <span className="section-badge">
            FEATURED PROJECTS
          </span>

          <h2>
            Selected Work
          </h2>

          <p>
            Full-stack applications, scalable systems,
            modern interfaces, and developer-focused products.
          </p>

        </div>

        <div className="work-grid">

          {projects.map((project, index) => (

            <motion.div
              key={project._id}
              className="work-card"
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
            >

              <div className="work-image-wrapper">

                <img
                  src={project.image}
                  alt={project.title}
                  className="work-image"
                />

                <div className="image-overlay"></div>

              </div>

              <div className="work-content">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                <a
                  href={project.link || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >

                  Visit Website

                  <ExternalLink size={18} />

                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}