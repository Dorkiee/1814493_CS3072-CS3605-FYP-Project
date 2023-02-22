
import express from 'express'
import mongoose from 'mongoose';


import curriculmModel from '../models/curriculumModel.js'


const Enroll = mongoose.model("enrolled"); 

const curriculumController = express.Router();

curriculumController.post('/enrolledcourse', async (request, response) => { //admin users are able to create their own courses
    const {courseName} = request.body;
    try {
        const savedCourse = await Enroll.findOne({courseName})
        if(savedCourse) {
            return response.json({error: "course exists"})
        }
        const asignedCourses = new curriculmModel({
            courseName:request.body.courseName,
            courseOutline:request.body.courseOutline,
            curriculumContent: request.body.curriculumContent,
            curriculumVids:request.body.curriculumVids,
            curriculumGame: request.body.curriculumGame,
            completedContent:request.body.completedContent, 
            taskStatus: request.body.taskStatus,
        })
        asignedCourses.save()
        .then(data =>{
            response.json(data)
        })
        .catch (error =>{
            response.json(error)
        })

    } catch (error) {
        response.send({ status: "error" });
      }
})


curriculumController.get("/mycourses", async (request, response, next) => {
    Enroll.find({})
    .then((data) => response.json(data))
    .catch(err => response.status(404).json({error: "no courses found"}));
});

curriculumController.get("/mycourse/:id", async (request, response, next) => {
    Enroll.findById(request.params.id)
    .then(user => response.json(user))
    .catch(error =>response.status(404).json({error: 'no course'}))
});


curriculumController.put("/course-status/:id", async (request, response, next) => {
    Enroll.findByIdAndUpdate(request.params.id, request.body)
        .then(user => response.json({ msg: 'completed courses added' }))
        .catch(err =>
            response.status(400).json({ error: 'Unable to update the Database' })
        );
    
});


export default curriculumController;