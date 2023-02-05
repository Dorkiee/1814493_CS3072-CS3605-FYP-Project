import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import './CSS/App.css';
import Home from "./HomePage.js"
import UserSignup from '../employee_pages/signup.js';
import SelectSignup from '../main_pages/selectSignUp.js'
import AdminSignup from '../soc_pages/adminSignup.js';
import MainDashboard from "../main_pages/mainDashboard.js";
import HeaderNavigation from './navigationHeader.js';

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

          <Route path="/Dashboard" element={<MainDashboard/>} />

          </Routes>
      </Router> 
    </div>
  );
}

export default App;
