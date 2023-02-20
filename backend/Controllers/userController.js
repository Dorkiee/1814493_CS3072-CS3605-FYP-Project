import express from 'express'
import mongoose from 'mongoose';


import userModel from '../Models/userModel.js'
import bcrypt from'bcrypt'
import jwt from 'jsonwebtoken'


const User = mongoose.model("users");


const userController = express.Router();

const JWT_SECRET = "jsid7GAds09ds()oufnhjnujsgbwsa0-0SFSDFQJK9fyuoijs£!sgh3565fg"

userController.post('/sign-up', async (request, response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    const {email} = request.body;

    try {
        const oldUser = await User.findOne({ email });
    
        if (oldUser) {
          return response.json({ error: "User Exists" });
        }

        const signedUpUser = new userModel({
            email:request.body.email,
            firstName:request.body.firstName,
            lastName:request.body.lastName,
            companyName:request.body.companyName,
            role:'user',
            department:request.body.department,
            isAdmin: false,
            isModerator: false,
            password:securePassword
        })
        signedUpUser.save()
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

userController.post('/sign-up-admin', async (request, response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    const {email} = request.body;

    try {
        const oldUser = await User.findOne({ email });
    
        if (oldUser) {
          return response.json({ error: "User Exists" });
        }

        const signedUpUser = new userModel({
            email:request.body.email,
            firstName:request.body.firstName,
            lastName:request.body.lastName,
            companyName:request.body.companyName,
            role:'admin',
            department:request.body.department,
            isAdmin: true,
            isModerator: false,
            password:securePassword
        })
        signedUpUser.save()
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


userController.post('/examinationResults', async (request, response) => {

    try {

        const examination = new userModel({
            examResults:request.body.examResults,
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

userController.post('/log-in', async (request, response) => {

    const {email, password} = request.body;
    const user = await User.findOne({ email });

    if (!user) {
        return response.json({ error: "User Not Found" });
    }

    if(await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({email: user.email}, JWT_SECRET);

        if(response.status(201)) {
            return response.json({status:"ok", data: token});
        } else {
            return response.json({error: "error"}) 
        }
    }

    response.json({status:"error", error: "Invaild password"})
})


userController.get("/log-in", async (request, response, next) => {
    User.find({})
    .then((data) => response.json(data))
    .catch(next);
});

userController.post("/Dashboard", async (request, response) => {
    const {token} = request.body;
    try {
        const user = jwt.verify (token, JWT_SECRET);
        const usermail = user.email;
        User.findOne({email: usermail})
        .then((data) => {
            response.send({status: "ok", data: data});
        })
        .catch((error) => {
            response.send({status: "error", data: error});
        });
    } catch (error) {

    }
});

userController.get("/log-in", async (request, response, next) => {
    User.find({})
    .then((data) => response.json(data))
    .catch(next);
});

userController.get("/edits/:id", async (request, response, next) => {
    User.findById(request.params.id)
    .then(user => response.json(user))
    .catch(error =>response.status(404).json({error: 'no empolyee'}))
});

userController.put("/update/:id", async (request, response, next) => {
        User.findByIdAndUpdate(request.params.id, request.body)
        .then(user => response.json({ msg: 'Updated successfully' }))
        .catch(err =>
            response.status(400).json({ error: 'Unable to update the Database' })
        );
    
});

userController.delete("/deleteUser/:id", async (request, response, next) => {
    User.findByIdAndRemove(request.params.id, request.body)
    .then(user => response.json({ msg: 'User deleted successfully' }))
    .catch(err =>
        response.status(404).json({ error: 'Unable to delete user from the Database' })
    );

});

export default userController;