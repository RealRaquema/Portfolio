import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Code, Palette, Smartphone } from 'lucide-react'
import './Expertise.css'

export default function Expertise() {
  const expertiseAreas = [
    {
      id: 1,
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Creating beautiful and intuitive user interfaces with focus on user experience and accessibility.',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
    },
    {
      id: 2,
      icon: Code,
      title: 'Frontend Development',
      description:
        'Building responsive and performant web applications using modern frameworks and technologies.',
      skills: ['React', 'JavaScript', 'CSS', 'HTML'],
    },
    {
      id: 3,
      icon: Smartphone,
      title: 'Mobile Design',
      description:
        'Designing and developing mobile-first applications that work seamlessly across all devices.',
      skills: ['Responsive Design', 'Mobile UX', 'iOS/Android', 'Progressive Web Apps'],
    },
    {
      id: 4,
      icon: Zap,
      title: 'Performance & Optimization',
      description:
        'Optimizing applications for speed, efficiency, and better user experience across all platforms.',
      skills: ['Performance Optimization', 'SEO', 'Analytics', 'Testing'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="expertise-section" id="expertise">
      <div className="container">
        <motion.div
          className="expertise-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>My Expertise</h2>
          <p>Areas where I excel and can add value to your projects</p>
        </motion.div>

        <motion.div
          className="expertise-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {expertiseAreas.map((area) => {
            const IconComponent = area.icon
            return (
              <motion.div
                key={area.id}
                className="glass expertise-card"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="expertise-icon">
                  <IconComponent size={40} />
                </div>

                <h3>{area.title}</h3>
                <p>{area.description}</p>

                <div className="expertise-skills">
                  {area.skills.map((skill, index) => (
                    <span key={index} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
