// controllers/projectController.js

import Project from '../models/Project.js'

import cloudinary from '../config/cloudinary.js'

/* =========================
   ADD PROJECT
========================= */

export const addProject = async (
  req,
  res
) => {

  try {

    console.log(req.body)

    let imageUrl = ''

    /* IMAGE UPLOAD */

    if (req.file) {

      const result =
        await cloudinary.uploader.upload(
          req.file.path
        )

      imageUrl =
        result.secure_url

    }

    /* TECHNOLOGIES */

    let technologies = []

    if (req.body.technologies) {

      try {

        technologies =
          JSON.parse(
            req.body.technologies
          )

      } catch {

        technologies = []

      }

    }

    /* CREATE PROJECT */

    const project =
      await Project.create({

        title:
          req.body.title,

        description:
          req.body.description,

        featured:
          req.body.featured ===
          'true',

        liveLink:
          req.body.liveLink,

        github:
          req.body.github,

        technologies,

        image:
          imageUrl,

      })

    res
      .status(201)
      .json(project)

  } catch (error) {

    console.log(error)

    res.status(500).json({

      message:
        'Failed to add project',

      error:
        error.message,

    })

  }

}

/* =========================
   GET PROJECTS
========================= */

export const getProjects = async (
  req,
  res
) => {

  try {

    const projects =
      await Project.find()

    res.json(projects)

  } catch (error) {

    console.log(error)

    res.status(500).json({

      message:
        'Failed to fetch projects',

      error:
        error.message,

    })

  }

}

/* =========================
   DELETE PROJECT
========================= */

export const deleteProject = async (
  req,
  res
) => {

  try {

    await Project.findByIdAndDelete(
      req.params.id
    )

    res.json({

      message:
        'Project deleted',

    })

  } catch (error) {

    console.log(error)

    res.status(500).json({

      message:
        'Delete failed',

      error:
        error.message,

    })

  }

}

/* =========================
   UPDATE PROJECT
========================= */

export const updateProject = async (
  req,
  res
) => {

  try {

    let updatedData = {

      title:
        req.body.title,

      description:
        req.body.description,

      featured:
        req.body.featured ===
        'true',

      liveLink:
        req.body.liveLink,

      github:
        req.body.github,

      technologies:
        req.body.technologies
          ? JSON.parse(
              req.body.technologies
            )
          : [],

    }

    /* IMAGE */

    if (req.file) {

      const result =
        await cloudinary.uploader.upload(
          req.file.path
        )

      updatedData.image =
        result.secure_url

    }

    const project =
      await Project.findByIdAndUpdate(

        req.params.id,

        updatedData,

        { new: true }

      )

    res.json(project)

  } catch (error) {

    console.log(error)

    res.status(500).json({

      message:
        'Update failed',

      error:
        error.message,

    })

  }

}