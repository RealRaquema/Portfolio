import React, {
  useState,
} from 'react'

import axios from 'axios'

import '../styles/Contact.css'

export default function Contact() {

  const [name, setName] =
    useState('')

  const [email, setEmail] =
    useState('')

  const [message, setMessage] =
    useState('')

  const [loading, setLoading] =
    useState(false)

  const [success, setSuccess] =
    useState(false)

  const handleSubmit = async (
    e
  ) => {

    e.preventDefault()

    try {

      setLoading(true)

      await axios.post(

        'https://formspree.io/f/mbdbrgwn',

        {

          name,

          email,

          message,

        },

        {

          headers: {

            Accept:
              'application/json',

          },

        }

      )

      setSuccess(true)

      setName('')
      setEmail('')
      setMessage('')

    } catch (error) {

      console.log(error)

      alert(
        'Failed to send message'
      )

    } finally {

      setLoading(false)

    }

  }

  return (

    <section className="contact-page">

      <div className="container">

        <div className="contact-header">

          <span className="section-tag">
            CONTACT
          </span>

          <h1>
            Let's Work Together
          </h1>

          <p>

            Have a project idea,
            collaboration opportunity,
            freelance work,
            or just want to connect?

          </p>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="contact-grid">

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              required
            />

          </div>

          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
            required
          />

          <button
            type="submit"
            disabled={loading}
          >

            {loading
              ? 'Sending...'
              : 'Send Message'}

          </button>

          {success && (

            <p className="success-message">

              Message sent successfully!

            </p>

          )}

        </form>

      </div>

    </section>

  )

}