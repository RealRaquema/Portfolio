import React, { useState } from 'react'
import axios from 'axios'
import { techOptions } from '../utils/techIcons'

import {
  ImagePlus,
  Github,
  Globe,
  Tag,
  Sparkles,
} from 'lucide-react'

import '../styles/Admin.css'

export default function AddProject() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [featured, setFeatured] = useState(false)

  const [image, setImage] = useState(null)

  const [github, setGithub] = useState('')
  const [link, setLink] = useState('')

  const [tags, setTags] = useState('')

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const formData = new FormData()

      formData.append('title', title)
      formData.append('description', description)

      formData.append('featured', featured)

      formData.append('github', github)
      formData.append('link', link)

      formData.append('tags', tags)

      if (image) {
        formData.append('image', image)
      }

      await axios.post(
        'http://localhost:5000/api/projects',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      alert('Project Added Successfully')

      setTitle('')
      setDescription('')
      setFeatured(false)

      setImage(null)

      setGithub('')
      setLink('')
      setTags('')

    } catch (error) {

      console.log(error)

      alert('Something went wrong')

    }

  }

  return (

    <div className="admin-page">

      <div className="admin-header">

        <span className="admin-badge">
          PROJECT DASHBOARD
        </span>

        <h1>Add New Project</h1>

        <p>
          Upload and manage your portfolio projects with
          images, links, technologies, and featured homepage visibility.
        </p>

      </div>

      <form
        onSubmit={handleSubmit}
        className="admin-form"
      >

        <div className="form-grid">

          <div className="input-group">

  <label className="input-label">
    Technologies
  </label>

  <select
    multiple
    className="tech-select"
    value={tags}
    onChange={(e) => {

      const values = Array.from(
        e.target.selectedOptions,
        option => option.value
      )

      setTags(values)

    }}
  >

    {techOptions.map((tech) => (

      <option
        key={tech.name}
        value={tech.name}
      >
        {tech.name}
      </option>

    ))}

  </select>

</div>

          <div className="input-group">

            <label className="input-label">
              GitHub Repository
            </label>

            <div className="input-icon-wrapper">

              <Github size={18} />

              <input
                type="text"
                placeholder="https://github.com/..."
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />

            </div>

          </div>

        </div>

        <div className="input-group">

          <label className="input-label">
            Project Description
          </label>

          <textarea
            placeholder="Describe your project, technologies, architecture, and purpose..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

        </div>

        <div className="form-grid">

          <div className="input-group">

            <label className="input-label">
              Live Project URL
            </label>

            <div className="input-icon-wrapper">

              <Globe size={18} />

              <input
                type="text"
                placeholder="https://yourproject.com"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />

            </div>

          </div>

          <div className="input-group">

            <label className="input-label">
              Technologies / Tags
            </label>

            <div className="input-icon-wrapper">

              <Tag size={18} />

              <input
                type="text"
                placeholder="React, Node.js, MongoDB"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
              />

            </div>

          </div>

        </div>

        <div className="upload-section">

          <label className="input-label">
            Project Thumbnail
          </label>

          <div className="upload-box">

            <ImagePlus size={34} />

            <h3>Upload Project Image</h3>

            <p>
              Recommended size 1280×720
            </p>

            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />

          </div>

        </div>

        <div className="form-footer">

          <div className="featured-toggle">

            <Sparkles size={18} />

            <span>
              Featured Homepage Project
            </span>

            <input
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
            />

          </div>

          <button
            type="submit"
            className="admin-btn"
          >
            Publish Project
          </button>

        </div>

      </form>

    </div>
  )
}