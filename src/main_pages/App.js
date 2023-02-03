import React from "react";
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import './CSS/App.css';
import Home from "./HomePage.js"

const App = () => {
  return (
    <div>
        <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          </Routes>
      </Router> 
    </div>
  );
}

export default App;
