import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import './CSS/App.css';
import Home from "./HomePage.js"
import UserSignup from '../employee_pages/signup.js';
import SelectSignup from '../main_pages/selectSignUp.js'
import AdminSignup from '../soc_pages/adminSignup.js';

const App = () => {
  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/select-sign-up" element={<SelectSignup/>} />
          <Route path="/sign-up" element={<UserSignup/>} />
          <Route path="/sign-up-admin" element={<AdminSignup/>} />
          </Routes>
      </Router> 
    </div>
  );
}

export default App;
