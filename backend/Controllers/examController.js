import express from 'express'
import mongoose from 'mongoose';

import examModel from '../Models/examModel.js'
import userModel from '../Models/userModel.js'

const examController = express.Router();


const Exam = mongoose.model("exam");
const User = mongoose.model("users");

examController.post('/examinationResults', async (request, response) => {
    try {

        const usertakenexam = await examModel.findOne({ examID: request.params.id });
    
        if (usertakenexam) {
          return response.json({ error: "User has already taken the exam" });
        }


        const examination = new examModel({
            score:request.body.score,
            examID: request.params.id,
            firstName:request.body.firstName,
            lastName:request.body.lastName,
        })
        examination.save()
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

examController.get("/examination", async (request, response, next) => {
    Exam.find({})
    .then((data) => response.json(data))
    .catch(next);
});

export default examController;
