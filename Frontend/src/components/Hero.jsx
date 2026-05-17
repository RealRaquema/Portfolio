import React from 'react'
import { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import './Hero.css'

export default function Hero() {
const roles = [

  'Software Engineer',
  'MERN Stack Developer',
  'Machine Learning Engineer',
  'Full Stack Developer',
  'AI Developer',

]

const [currentRole, setCurrentRole] =
  useState(0)

useEffect(() => {

  const interval = setInterval(() => {

    setCurrentRole((prev) =>
      (prev + 1) % roles.length
    )

  }, 2500)

  return () => clearInterval(interval)

}, [])
  return (

    <section
      className="hero"
      id="hero"
    >

      <div className="hero-container">

        <div className="hero-content">

          <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>

  <span className="hero-static-text">
    Faisal Sajjad
  </span>

  <br />

  <motion.span
    key={roles[currentRole]}
    className="gradient-text animated-role"
    initial={{
      opacity: 0,
      y: 30,
      filter: 'blur(10px)',
    }}
    animate={{
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
    }}
    exit={{
      opacity: 0,
      y: -30,
      filter: 'blur(10px)',
    }}
    transition={{
      duration: 0.6,
    }}
  >

    {roles[currentRole]}

  </motion.span>

</motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >

            I build scalable full-stack applications,
            responsive interfaces, and modern digital
            experiences using the MERN stack and
            performance-focused architecture.

          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
          >

            <a
              href="#work"
              className="primary-btn"
            >

              View Projects

              <ArrowRight size={18} />

            </a>

            <a
              href="#about"
              className="secondary-btn"
            >
              About Me
            </a>

          </motion.div>

        </div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >

          <img
            src="/assets/profile.jpg"
            alt="profile"
            className="hero-profile-image"
          />

          <div className="hero-badge">
            MERN + AI
          </div>

        </motion.div>

      </div>

    </section>
  )
}