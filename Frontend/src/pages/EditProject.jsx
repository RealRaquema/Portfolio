import React, {
  useEffect,
  useState,
} from 'react'

import {
  useParams,
  useNavigate,
} from 'react-router-dom'

import axios from 'axios'

export default function EditProject() {

  const { id } = useParams()

  const navigate =
    useNavigate()

  const [title, setTitle] =
    useState('')

  const [
    description,
    setDescription,
  ] = useState('')

  const [liveLink, setLiveLink] =
    useState('')

  const [github, setGithub] =
    useState('')

  const [
    technologies,
    setTechnologies,
  ] = useState([])

  const [featured, setFeatured] =
    useState(false)

  const [image, setImage] =
    useState(null)

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

  useEffect(() => {

    fetchProject()

  }, [])

  const fetchProject = async () => {

    try {

      const res =
        await axios.get(
         `${import.meta.env.VITE_API_URL}/api/projects`
        )

      const project =
        res.data.find(
          (p) => p._id === id
        )

      if (!project) return

      setTitle(project.title)
      setDescription(
        project.description
      )
      setLiveLink(
        project.liveLink || ''
      )
      setGithub(
        project.github || ''
      )
      setTechnologies(
        project.technologies || []
      )
      setFeatured(
        project.featured
      )

    } catch (error) {

      console.log(error)

    }

  }

  const handleUpdate = async (
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
        'liveLink',
        liveLink
      )

      formData.append(
        'github',
        github
      )

      formData.append(
        'featured',
        featured
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

      await axios.put(

       `${import.meta.env.VITE_API_URL}/api/projects/${id}`,


        formData,

        {

          headers: {

            'Content-Type':
              'multipart/form-data',

          },

        }

      )

      alert(
        'Project Updated'
      )

      navigate('/manage')

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <div className="edit-page">

      <div className="container">

        <h1>
          Edit Project
        </h1>

        <form
          onSubmit={handleUpdate}
          className="add-project-form"
        >

          <input
            type="text"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
          />

          <textarea
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
          />

          <input
            type="text"
            value={liveLink}
            onChange={(e) =>
              setLiveLink(
                e.target.value
              )
            }
            placeholder="Live URL"
          />

          <input
            type="text"
            value={github}
            onChange={(e) =>
              setGithub(
                e.target.value
              )
            }
            placeholder="GitHub URL"
          />

          {/* TECH */}

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

                      setTechnologies([
                        ...technologies,
                        tech,
                      ])

                    }

                  }}
                >

                  {tech}

                </button>

              )
            )}

          </div>

          <input
            type="file"
            onChange={(e) =>
              setImage(
                e.target.files[0]
              )
            }
          />

          <label>

            <input
              type="checkbox"
              checked={featured}
              onChange={(e) =>
                setFeatured(
                  e.target.checked
                )
              }
            />

            Featured Project

          </label>

          <button
            type="submit"
            className="publish-btn"
          >

            Update Project

          </button>

        </form>

      </div>

    </div>

  )

}