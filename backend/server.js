import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import userRoutes from './Routes/userRoutes.js'
import courseRoutes from './Routes/courseRoutes.js'
import cors from 'cors'

const app = express()



dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () =>console.log("Database connected") )

app.use(express.json())
app.use(cors())
app.use('/app', userRoutes)
app.use('/app', courseRoutes)
app.use((req, res, next) => {
  const error = new Error(`Not found -${req.originalUrl}`)
  res.status(404)
  next(error)
})
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
})
app.listen(4000, () => console.log("server is up and running"))
