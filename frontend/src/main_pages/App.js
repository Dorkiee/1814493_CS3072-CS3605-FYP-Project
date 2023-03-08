import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './CSS/App.css';

import Home from "./HomePage.js"
import UserSignup from '../employee_pages/signup.js';
import Login from '../main_pages/login.js'
import AdminSignup from '../soc_pages/adminSignup.js';
import MainDashboard from "../main_pages/mainDashboard.js";
import HeaderNavigation from './navigationHeader.js';

import Training from "../soc_pages/Training.js";
import CreateCourse from "../soc_pages/createCourse.js"
import CourseDetail from "../soc_pages/courseDetail.js"
import CourseEdit from "../soc_pages/courseEdit.js"
import ListUsers from "../soc_pages/Users.js"
import EditUsers from "../soc_pages/editUsers.js";
import TaskStatus from "../soc_pages/TaskStatus.js"
import ExamPortal from "../soc_pages/ExamPortal.js";

import CurrentTraining from "../employee_pages/currentTraining.js"
import EnrolledDetail from "../employee_pages/enrollDetail.js"
import ExamContent from "../employee_pages/Exam.js";

import GameCourse from "../soc_pages/UnityGame";

import UsersCount from "../soc_pages/UsersCount";


export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }  
  
  componentDidMount() {
    fetch("https://phishshield-1814493.onrender.com/app/Dashboard", {
        method: "POST",
        crossDomain: true,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
        }, 
        body: JSON.stringify ({
            token: window.localStorage.getItem("token"),
            
        }),
    })
    
    .then((response) => response.json())
    .then((data) => {
        this.setState({ userData: data.data})
    });
   }




  render() {
    
    const {userData} = this.state;
    const loggedIn = window.localStorage.getItem("isLoggedIn");
  return (
    <div>
        <Router> {/*Creating protected routing through the use of if statements, however this is not eniterly effective as signin user can still access login and sign up */}
          <HeaderNavigation/>
        <Routes>
          
        {userData.isAdmin &&  (
              <>
{/*Admin pages*/}
          <Route path="https://phishshield.onrender.com/Dashboard" element={<MainDashboard/>}/>
          <Route path="https://phishshield.onrender.com/Training" element={<Training/>}/>
          <Route path="https://phishshield.onrender.com/add-course" element={<CreateCourse/>}/>
          <Route path="https://phishshield.onrender.com/course/:id" element={<CourseDetail/>}/>
          <Route path="https://phishshield.onrender.com/update-createdcourse/:id" element={<CourseEdit/>}/>
          <Route path="https://phishshield.onrender.com/Users" element={<ListUsers/>}/>
          <Route path="https://phishshield.onrender.com/edits/:id" element={<EditUsers/>} />
          <Route path="https://phishshield.onrender.com/Examination-Portal" element={<ExamPortal/>}/>
          <Route path="https://phishshield.onrender.com/taskcount" element={<UsersCount/>}/>
          <Route path="https://phishshield.onrender.com/view/:id" element={<TaskStatus/>}/>
          <Route path= "*" element={<Navigate to="/Dashboard" />}/>
          </>
        )}

        {userData.isUser && (
        <>
{/*user pages */}
          <Route path="https://phishshield.onrender.com/Dashboard" element={<MainDashboard/>}/>
          <Route path="https://phishshield.onrender.com/Current-Training" element={<CurrentTraining/>}/>
          <Route path="https://phishshield.onrender.com/mycourse/:id" element={<EnrolledDetail/>}/>
          <Route path="https://phishshield.onrender.com/examination/:id" element={<ExamContent/>}/>
          <Route path="https://phishshield.onrender.com/Phishing-Adventure" element={<GameCourse/>}/> {/*remove later possibly*/}
          <Route path= "*" element={<Navigate to="/Dashboard" />}/>
          </>
         )}

        {!loggedIn && !userData.isUser && !userData.isAdmin && (
        <>
{/*main pages*/}
          <Route path="https://phishshield.onrender.com/" element={<Home/>} />
          <Route path="https://phishshield.onrender.com/log-in" element={<Login/>} />
          <Route path="https://phishshield.onrender.com/sign-up" element={<UserSignup/>} />
          <Route path="https://phishshield.onrender.com/sign-up-admin" element={<AdminSignup/>}/>
           </>
         )}
          </Routes>
      </Router> 
    </div>
  );
}
}
