import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import DashboardNav from "./DashboardNav.js";
import "../main_pages/CSS/dashboardCSS.css";
import axios from "axios"

export default class mainDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
      alluserData: "",
    };
  }  
  
  componentDidMount() {
        fetch("http://localhost:4000/app/Dashboard", {
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
            console.log(data, "userData");
            this.setState({ userData: data.data})
        });


        axios.get("http://localhost:4000/app/log-in")
        .then(res => {
          console.log(res, "all users");
          this.setState({ alluserData: res.data})   
        })
        .catch(error => {
          
        });
  }

    signOut = () => {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("isLoggedIn");
      window.localStorage.href = "/home";
    }

    render () {
      const isAdmin = this.state.userData.isAdmin;
      console.log(isAdmin, "role");
      return (
        <div>
        <nav>
        <div class="wrapper">
        <DashboardNav/>
        <div class="main_content">
        <div className="info">
        <div className="text_content">
              <h1>Welcome back, {this.state.userData.username}</h1>
              <br></br>
              <br></br>
          <div className="mainCards">
              <div className="card">
                  <div className="chartRightCard">
                  <div className="card1">
                      <span className="primaryText">Number of Users:</span>
                      <br></br>
                      <span className="boldText">30</span>
                      </div>
                      <div className="card2">
                      <span className="primaryText">Number of Courses: </span>
                      <br></br>
                      <span className="boldText">10</span>
                      </div>
                  </div>
              </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </nav>
        
        
        {/* 
        
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div class="wrapper">
          <DashboardNav/>
          <div class="main_content">
            <div class="info">
            <h1>{this.state.userData.firstName} {this.state.userData.lastName}</h1>
            <h1>{this.state.userData.email}</h1>
         
            </div>
            </div>
            </div>
            </nav>
        
        */}
        
            
          </div>
        );
    }
}