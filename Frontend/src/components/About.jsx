import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaLinux,
  FaAws,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa'

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostman,
  SiCloudflare,
  SiJira,
  SiPrisma,
  SiCplusplus,
} from 'react-icons/si'

import './About.css'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-content',
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%',
          },
        }
      )
    }, aboutRef)

    return () => ctx.revert()
  }, [])

  const techStack = [
    {
      title: 'Languages',
      items: [
        { icon: <SiCplusplus />, name: 'C++' },
        { icon: <FaJava />, name: 'Java' },
        { icon: <SiJavascript />, name: 'JavaScript' },
        { icon: <FaPython />, name: 'Python' },
      ],
    },

    {
      title: 'Frontend',
      items: [
        { icon: <FaHtml5 />, name: 'HTML' },
        { icon: <FaCss3Alt />, name: 'CSS' },
        { icon: <FaReact />, name: 'React' },
        { icon: <SiNextdotjs />, name: 'Next.js' },
        { icon: <SiTailwindcss />, name: 'Tailwind' },
      ],
    },

    {
      title: 'Backend',
      items: [
        { icon: <FaNodeJs />, name: 'Node.js' },
        { icon: <SiExpress />, name: 'Express' },
        { icon: <SiPostman />, name: 'REST APIs' },
      ],
    },

    {
      title: 'Databases',
      items: [
        { icon: <SiMongodb />, name: 'MongoDB' },
        { icon: <SiMysql />, name: 'MySQL' },
        { icon: <SiPostgresql />, name: 'PostgreSQL' },
        { icon: <SiPrisma />, name: 'PrismaORM' },
      ],
    },

    {
      title: 'Tools & Platforms',
      items: [
        { icon: <FaGitAlt />, name: 'Git' },
        { icon: <FaGithub />, name: 'GitHub' },
        { icon: <FaDocker />, name: 'Docker' },
        { icon: <FaLinux />, name: 'Linux' },
        { icon: <FaAws />, name: 'AWS' },
        { icon: <SiCloudflare />, name: 'Cloudflare' },
        { icon: '🧠', name: 'DSA' },
        { icon: '⚙️', name: 'OOPs' },
      ],
    },
  ]

  const stats = [
    { value: '15+', label: 'Projects Built' },
    { value: 'MERN', label: 'Tech Stack' },
    { value: 'AI/ML', label: 'Learning' },
    { value: 'DSA', label: 'Problem Solving' },
  ]

  return (
    <section className="about-section" id="about" ref={aboutRef}>
      <div className="container">

        <motion.div
          className="about-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="about-header">

            <span className="section-tag">
              ABOUT ME
            </span>

            <h2>
              MERN Stack Developer &
              <span> Software Engineer</span>
            </h2>

            <p className="about-intro">
              Full-stack developer specializing in scalable MERN stack
              applications, responsive frontend interfaces, backend systems,
              and performance-focused software engineering with strong
              foundations in DSA and modern web technologies.
            </p>

          </div>

          <div className="about-grid">

            <motion.div
              className="glass about-card large"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Who I Am</h3>

              <p>
                I build scalable full-stack applications using React,
                Node.js, Express, and MongoDB while focusing on clean UI,
                efficient backend systems, and optimized performance.
              </p>

              <p>
                I’m also exploring Machine Learning, cloud technologies,
                and advanced software engineering concepts to create
                smarter digital experiences.
              </p>

            </motion.div>

            <div className="stats-grid">

              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass stat-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}

            </div>
          </div>

          <div className="tech-section">

            <div className="tech-header">
              <h3>Tech Stack & Skills</h3>

              <p>
                Technologies and tools I use to build modern scalable applications.
              </p>
            </div>

            <div className="tech-category-wrapper">

              {techStack.map((category, categoryIndex) => (
                <div key={categoryIndex} className="tech-category">

                  <h4>{category.title}</h4>

                  <div className="tech-grid">

                    {category.items.map((tech, index) => (
                      <motion.div
                        key={index}
                        className="glass tech-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.04 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                      >

                        <div className="tech-icon">
                          {tech.icon}
                        </div>

                        <span>{tech.name}</span>

                      </motion.div>
                    ))}

                  </div>

                </div>
              ))}

            </div>

          </div>

        </motion.div>
      </div>
    </section>
  )
}