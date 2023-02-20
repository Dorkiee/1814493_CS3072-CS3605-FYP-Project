import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import './CSS/App.css';

import Home from "./HomePage.js"
import UserSignup from '../employee_pages/signup.js';
import SelectSignup from '../main_pages/selectSignUp.js'
import AdminSignup from '../soc_pages/adminSignup.js';
import MainDashboard from "../main_pages/mainDashboard.js";
import HeaderNavigation from './navigationHeader.js';

import Training from "../soc_pages/Training.js";
import CreateCourse from "../soc_pages/createCourse.js"
import CourseDetail from "../soc_pages/courseDetail.js"
import CourseEdit from "../soc_pages/courseEdit.js"
import ListUsers from "../soc_pages/Users.js"
import EditUsers from "../soc_pages/editUsers.js";
import ExamPortal from "../soc_pages/ExamPortal.js";


import CurrentTraining from "../employee_pages/currentTraining.js"
import EnrolledDetail from "../employee_pages/enrollDetail.js"
import ExamContent from "../employee_pages/Exam.js";

const App = () => {
  return (
    <div>
        <Router>
          <HeaderNavigation/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/select-sign-up" element={<SelectSignup/>} />
          <Route path="/sign-up" element={<UserSignup/>} />
          <Route path="/sign-up-admin" element={<AdminSignup/>} />
          <Route path="/Examination-Portal" element={<ExamPortal/>}></Route>

          <Route path="/Dashboard" element={<MainDashboard/>} />
          <Route path="/Training" element={<Training/>}></Route>
          <Route path="/add-course" element={<CreateCourse/>}/>
          <Route path="/course/:id" element={<CourseDetail/>}/>
          <Route path="/update-createdcourse/:id" element={<CourseEdit/>}/>
          <Route path="/Users" element={<ListUsers/>} />
          <Route path="/edits/:id" element={<EditUsers/>}/>


          <Route path="/Current-Training" element={<CurrentTraining/>}/>
          <Route path="/mycourse/:id" element={<EnrolledDetail/>}/>
          <Route path="/Examination" element={<ExamContent/>}></Route>
          </Routes>
      </Router> 
    </div>
  );
}

export default App;
