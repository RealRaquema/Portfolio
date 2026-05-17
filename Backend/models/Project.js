import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema({

  title: String,

  description: String,

  image: String,

  featured: Boolean,

  liveLink: String,

  github: String,

  technologies: [String],

})

export default mongoose.model(
  'Project',
  projectSchema
)