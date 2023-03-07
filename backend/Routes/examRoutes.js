
import express from 'express'
import path from 'path'

import examController from path.join(__dirname, '../Controllers/examController.js')
import userController from path.join(__dirname, '../Controllers/userController.js')


const examRoutes = express.Router() //add comment to include courseRoutes i think should work???


examRoutes.post('/examinationResults', examController)
examRoutes.get('/examination', examController)
examRoutes.post('/Dashboard', userController) //change to get??

export default examRoutes;