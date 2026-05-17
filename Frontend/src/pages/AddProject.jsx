// AddProject.jsx

import React, {
  useState,
} from 'react'

import axios from 'axios'

import {
  ImagePlus,
  Globe,
  Github,
} from 'lucide-react'

import '../styles/AddProject.css'

export default function AddProject() {

  /* STATES */

  const [title, setTitle] =
    useState('')

  const [
    description,
    setDescription,
  ] = useState('')

  const [featured, setFeatured] =
    useState(false)

  const [image, setImage] =
    useState(null)

  const [liveLink, setLiveLink] =
    useState('')

  const [github, setGithub] =
    useState('')

  const [
    technologies,
    setTechnologies,
  ] = useState([])

  /* TECH OPTIONS */

  const techOptions = [

    'React',
    'Node.js',
    'MongoDB',
    'Express',
    'Next.js',
    'Tailwind',
    'JavaScript',
    'Python',
    'Java',
    'Docker',
    'PostgreSQL',
    'MySQL',
    'AWS',

  ]

  /* SUBMIT */

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault()

    try {

      const formData =
        new FormData()

      formData.append(
        'title',
        title
      )

      formData.append(
        'description',
        description
      )

      formData.append(
        'featured',
        featured
      )

      formData.append(
        'liveLink',
        liveLink
      )

      formData.append(
        'github',
        github
      )

      formData.append(
        'technologies',
        JSON.stringify(
          technologies
        )
      )

      if (image) {

        formData.append(
          'image',
          image
        )

      }

      console.log(
        technologies
      )

      const res =
        await axios.post(

          'http://localhost:5000/api/projects',

          formData,

          {

            headers: {

              'Content-Type':
                'multipart/form-data',

            },

          }

        )

      console.log(
        res.data
      )

      alert(
        'Project Added Successfully'
      )

      /* RESET */

      setTitle('')
      setDescription('')
      setFeatured(false)
      setImage(null)
      setLiveLink('')
      setGithub('')
      setTechnologies([])

    } catch (error) {

      console.log(error)

      alert(
        'Failed to add project'
      )

    }

  }

  return (

    <section className="add-project-page">

      <div className="container">

        <div className="add-project-header">

          <span className="section-tag">
            ADMIN PANEL
          </span>

          <h1>
            Add New Project
          </h1>

          <p>

            Upload and manage your
            portfolio projects with
            technologies, images,
            GitHub repositories,
            and live deployment links.

          </p>

        </div>

        <form
          className="add-project-form"
          onSubmit={handleSubmit}
        >

          {/* TOP GRID */}

          <div className="form-grid">

            {/* TITLE */}

            <div className="form-group">

              <label>
                Project Title
              </label>

              <input
                type="text"
                placeholder="AI SaaS Dashboard"
                value={title}
                onChange={(e) =>
                  setTitle(
                    e.target.value
                  )
                }
                required
              />

            </div>

            {/* GITHUB */}

            <div className="form-group">

              <label>
                GitHub Repository
              </label>

              <div className="input-icon-wrapper">

                <Github size={18} />

                <input
                  type="text"
                  placeholder="https://github.com/..."
                  value={github}
                  onChange={(e) =>
                    setGithub(
                      e.target.value
                    )
                  }
                />

              </div>

            </div>

          </div>

          {/* TECHNOLOGIES */}

          <div className="form-group">

            <label>
              Technologies
            </label>

            <div className="tech-select-grid">

              {techOptions.map(
                (tech) => (

                  <button

                    type="button"

                    key={tech}

                    className={
                      technologies.includes(
                        tech
                      )
                        ? 'tech-pill active-tech'
                        : 'tech-pill'
                    }

                    onClick={() => {

                      if (
                        technologies.includes(
                          tech
                        )
                      ) {

                        setTechnologies(

                          technologies.filter(
                            (
                              item
                            ) =>
                              item !==
                              tech
                          )

                        )

                      } else {

                        setTechnologies(
                          [
                            ...technologies,
                            tech,
                          ]
                        )

                      }

                    }}
                  >

                    {tech}

                  </button>

                )
              )}

            </div>

            {/* SELECTED */}

            <div className="selected-tech-preview">

              {technologies.map(
                (tech) => (

                  <span
                    key={tech}
                    className="selected-tech-pill"
                  >

                    {tech}

                  </span>

                )
              )}

            </div>

          </div>

          {/* DESCRIPTION */}

          <div className="form-group">

            <label>
              Project Description
            </label>

            <textarea

              placeholder="
Describe your project,
technologies,
architecture,
and purpose...
              "

              value={description}

              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }

              required
            />

          </div>

          {/* LIVE URL */}

          <div className="form-group">

            <label>
              Live Project URL
            </label>

            <div className="input-icon-wrapper">

              <Globe size={18} />

              <input

                type="text"

                placeholder="https://yourproject.com"

                value={liveLink}

                onChange={(e) =>
                  setLiveLink(
                    e.target.value
                  )
                }
              />

            </div>

          </div>

          {/* IMAGE */}

          <div className="form-group">

            <label>
              Project Thumbnail
            </label>

            <div className="upload-box">

              <ImagePlus
                size={44}
              />

              <h3>
                Upload Project Image
              </h3>

              <p>
                Recommended size
                1280×720
              </p>

              <input
                type="file"
                onChange={(e) =>
                  setImage(
                    e.target.files[0]
                  )
                }
              />

            </div>

          </div>

          {/* FEATURED */}

          <div className="featured-wrapper">

            <label className="featured-label">

              <input

                type="checkbox"

                checked={featured}

                onChange={(e) =>
                  setFeatured(
                    e.target.checked
                  )
                }
              />

              Featured Homepage Project

            </label>

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            className="publish-btn"
          >

            Publish Project

          </button>

        </form>

      </div>

    </section>
  )
}