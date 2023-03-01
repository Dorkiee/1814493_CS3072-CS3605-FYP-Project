import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import "../main_pages/CSS/dashboardCSS.css";
import axios from "axios"

export default class DashboardNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
      courseData: [],

    };
  }  
  
  componentDidMount() {

    axios.get("http://localhost:4000/app/mycourses")
    .then(res => {
      console.log(res, "all couses");
      this.setState({ courseData: res.data})   
    })
    .catch(error => {
      
    });

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
    }

    signOut = () => {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("isLoggedIn");
      window.localStorage.href = "/";
      
    }

    render() {
      const isAdmin = this.state.userData.isAdmin;
      
      const courseData = this.state.courseData;
      const userCompletedTasks = courseData.filter(task => task.userName === this.state.userData.userName && task.completed === true);



      return (
        <div>
        <p>{this.state.courseData.courseName}</p>

          <div className="container"> 
            <aside>
              <div className="top">
                <div className="logo">
                  <h2>{this.state.userData.companyName}</h2>
                </div>
              
                <div className="close">
                  <span class="material-symbols-outlined">
                    close
                  </span>
                </div>
              </div>
    
              {isAdmin ? (
                <div className="sidebar">
                  <a href="/Dashboard" className="active">
                    <span class="material-symbols-outlined">home</span>
                    <h6>Dashboard</h6>
                  </a>
    
                  <a href="/Training">
                  <span class="material-symbols-outlined">model_training</span>
                    <h6>Courses</h6>
                  </a>

                  
                  <a href="/Users">
                    <span class="material-symbols-outlined">group</span>
                    <h6>Users</h6>
                  </a>
    
    
                  <a href="/" onClick={this.signOut}>
                    <span class="material-symbols-outlined">logout</span>
                    <h6>Sign out</h6>
                  </a>
                </div>
              ) : (
                <div className="sidebar">
                  <a href="/Dashboard" className="active">
                    <span class="material-symbols-outlined">home</span>
                    <h6>Dashboard</h6>
                  </a>
    
                  <a href="/Current-Training">
                    <span class="material-symbols-outlined">school</span>
                    <h6>Training</h6>
                  </a>
    
                  {userCompletedTasks ? (
                    <p>Complete all course to access examination</p>
                  ) : (
                <a href="/Examination">
                  <span class="material-symbols-outlined">quiz</span>
                  <h6>Examination</h6>
                </a>
                
              )}

    
                
    
                  <a href="/" onClick={this.signOut}>
                    <span class="material-symbols-outlined">logout</span>
                    <h6>Sign out</h6>
                  </a>
                </div>
              )}
            </aside>
          </div>
        </div>
      );
    }
    
}