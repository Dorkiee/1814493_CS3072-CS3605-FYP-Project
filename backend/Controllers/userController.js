import express from 'express'
import mongoose from 'mongoose';


import userModel from '../Models/userModel.js'
import bcrypt from'bcrypt'
import jwt from 'jsonwebtoken'


const User = mongoose.model("users");


const userController = express.Router();

const JWT_SECRET = "jsid7GAds09ds()oufnhjnujsgbwsa0-0SFSDFQJK9fyuoijs£!sgh3565fg"

userController.post('/sign-up', async (request, response) => {

    const saltpin = await bcrypt.genSalt(10)
    const securepin = await bcrypt.hash(request.body.pin, saltpin)
    const {username} = request.body;

    try {
        const oldUser = await User.findOne({ username });
    
        if (oldUser) {
          return response.json({ error: "User Exists" });
        }

        const signedUpUser = new userModel({
            username:request.body.username,
            firstName:request.body.firstName,
            lastName:request.body.lastName,
            companyName:request.body.companyName,
            age: request.body.age,
            role:'user',
            department:request.body.department,
            isAdmin: false,
            isUser: true,
            pin:securepin
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

    const saltpin = await bcrypt.genSalt(10)
    const securepin = await bcrypt.hash(request.body.pin, saltpin)
    const {username} = request.body;

    try {
        const oldUser = await User.findOne({ username });
    
        if (oldUser) {
          return response.json({ error: "User Exists" });
        }

        const signedUpUser = new userModel({
            username:request.body.username,
            firstName:request.body.firstName,
            lastName:request.body.lastName,
            companyName:request.body.companyName,
            age: request.body.age,
            role:'admin',
            department:request.body.department,
            isAdmin: true,
            isUser: false,
            pin:securepin
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
            score:request.body.score,
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

    const {username, pin} = request.body;
    const user = await User.findOne({ username });

    if (!user) {
        return response.json({ error: "User Not Found" });
    }

    if(await bcrypt.compare(pin, user.pin)) {
        const token = jwt.sign({username: user.username}, JWT_SECRET);

        if(response.status(201)) {
            return response.json({status:"ok", data: token});
        } else {
            return response.json({error: "error"}) 
        }
    }

    response.json({status:"error", error: "Invaild pin"})
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
        const usermail = user.username;
        User.findOne({username: usermail})
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