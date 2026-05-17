import React from 'react'

import { motion } from 'framer-motion'

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGithub,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from 'react-icons/fa'

import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
} from 'react-icons/si'

import './About.css'

export default function About() {

  const techStack = [

    {
      title: 'Languages',

      items: [

        { name: 'C++', icon: 'C++' },
        { name: 'Java', icon: <FaJava /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'JavaScript', icon: <FaJs /> },

      ],
    },

    {
      title: 'Frontend',

      items: [

        { name: 'React', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },

      ],
    },

    {
      title: 'Backend & Database',

      items: [

        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },

      ],
    },

    {
      title: 'Tools & CS',

      items: [

        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'DSA', icon: 'DSA' },
        { name: 'OS', icon: 'OS' },
        { name: 'DBMS', icon: 'DB' },

      ],
    },

  ]

  return (

    <section className="about-section" id="about">

      <div className="container">

        <div className="about-content">

          {/* HEADER */}

          <div className="about-header">

            <span className="section-tag">
              ABOUT ME
            </span>

            <h2>
              About Me
            </h2>

            <p className="about-intro">

              Full-stack developer focused on scalable MERN stack applications,
              responsive UI/UX, backend systems, and intelligent digital experiences.
              Passionate about clean architecture, performance optimization,
              Machine Learning, and solving real-world problems through modern technology.

            </p>

          </div>

          {/* STATS */}

          <div className="about-grid">

            <div className="stats-grid">

              <motion.div
                className="stat-card"
                whileHover={{ y: -8 }}
              >
                <h3>15+</h3>
                <p>Projects Built</p>
              </motion.div>

              <motion.div
                className="stat-card"
                whileHover={{ y: -8 }}
              >
                <h3>MERN</h3>
                <p>Modern Full-Stack</p>
              </motion.div>

              <motion.div
                className="stat-card"
                whileHover={{ y: -8 }}
              >
                <h3>AI/ML</h3>
                <p>Learning & Building</p>
              </motion.div>

              <motion.div
                className="stat-card"
                whileHover={{ y: -8 }}
              >
                <h3>DSA</h3>
                <p>Problem Solving</p>
              </motion.div>

            </div>

          </div>

          {/* TECH STACK */}

          <div className="tech-section">

            <div className="tech-header">

              <h3>
                Tech Stack & Skills
              </h3>

              <p>
                Technologies and tools I use to build
                modern scalable applications.
              </p>

            </div>

            <div className="tech-category-wrapper">

              {techStack.map((category, categoryIndex) => (

                <div
                  key={categoryIndex}
                  className="tech-category"
                >

                  <h4>
                    {category.title}
                  </h4>

                  <div className="tech-grid">

                    {category.items.map((tech, index) => (

                      <motion.div
                        key={index}
                        className="glass tech-card"
                        initial={{
                          opacity: 0,
                          y: 20,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay: index * 0.04,
                        }}
                        viewport={{
                          once: true,
                        }}
                        whileHover={{
                          y: -8,
                        }}
                      >

                        <div className="tech-icon">
                          {tech.icon}
                        </div>

                        <span>
                          {tech.name}
                        </span>

                      </motion.div>

                    ))}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}