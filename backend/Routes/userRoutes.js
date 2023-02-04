
import express from 'express'
import userController from '../Controllers/userController.js'
const userRoutes = express.Router()

userRoutes.post('/sign-up', userController)
userRoutes.post('/sign-up-admin', userController)
userRoutes.post('/log-in', userController)
userRoutes.get('/log-in', userController) //change to get??
userRoutes.post('/Dashboard', userController) //change to get??


export default userRoutes;