import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import './Blogs.css'

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: 'The Future of UI/UX Design',
      excerpt:
        'Exploring the latest trends and technologies that are shaping the future of digital design.',
      date: 'May 15, 2024',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
    },
    {
      id: 2,
      title: 'Building Performant React Applications',
      excerpt:
        'Best practices and techniques for optimizing React applications for maximum performance.',
      date: 'May 10, 2024',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=250&fit=crop',
    },
    {
      id: 3,
      title: 'The Art of Glassmorphism',
      excerpt:
        'A deep dive into glassmorphism design, implementation, and best practices for modern web.',
      date: 'May 5, 2024',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="blogs-section" id="blogs">
      <div className="container">
        <motion.div
          className="blogs-header"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Latest Articles</h2>
          <p>Insights, tips, and thoughts on design and development</p>
        </motion.div>

        <motion.div
          className="blogs-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              className="glass blog-card"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="blog-image-wrapper">
                <img src={blog.image} alt={blog.title} className="blog-image" />
                <span className="blog-category">{blog.category}</span>
              </div>

              <div className="blog-content">
                <div className="blog-meta">
                  <Calendar size={16} />
                  <span>{blog.date}</span>
                </div>

                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>

                <motion.a
                  href="#"
                  className="read-more"
                  whileHover={{ x: 5 }}
                >
                  Read More <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
