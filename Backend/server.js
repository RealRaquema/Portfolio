import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import projectRoutes from './routes/projectRoutes.js'

const app = express()

app.use(cors({

  origin:
    '*',

}))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err))

app.use('/api/projects', projectRoutes)

app.listen(5000, () => {
  console.log('Server Running')
})