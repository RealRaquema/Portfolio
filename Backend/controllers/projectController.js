import Project from '../models/Project.js'

export const addProject = async (req, res) => {
  try {
    const project = await Project.create({
      title: req.body.title,
      description: req.body.description,
      featured: req.body.featured,
      image: req.file?.path || '',
    })

    res.status(201).json(project)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 })

    res.json(projects)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id)

    res.json({ message: 'Project deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateProject = async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        ...(req.file && { image: req.file.path }),
      },
      { new: true }
    )

    res.json(updated)
  } catch (error) {

  console.log('FULL ERROR:')
  console.log(error)

  res.status(500).json({
    success: false,
    message: error.message,
  })
}
}