import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import "../main_pages/CSS/dashboardCSS.css";

export default class DashboardNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
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
    }

    signOut = () => {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("isLoggedIn");
      window.localStorage.href = "/";
    }

    render () {
      const isAdmin = this.state.userData.isAdmin;
      console.log(isAdmin, "role");
        return (
          <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
          <div class="wrapper">
          <div class="sidebar">
          <h2>{this.state.userData.companyName}</h2>
          {isAdmin? (
          <>
          <ul> {/* have a boolean to check if this isAdmin */}
          <li><NavLink to="/Get-Started" exact title="Get Started"><i></i>Get Started</NavLink></li>
          <li><NavLink to="/Dashboard" exact title="Dashboard"><i></i>Dashboard</NavLink></li>
          <li><NavLink to="/Users" exact title="Users"><i></i>Users</NavLink></li>
          <li><NavLink to="/Department" exact title="Department"><i></i>Department</NavLink></li>
          <li><NavLink to="/Training" exact title="Training"><i></i>Training</NavLink></li>
          <li><NavLink to="/ExaminationPortal" exact title="Examination"><i></i>Examination</NavLink></li>
          <li><a href="/" onClick={this.signOut}>Sign out</a></li>
          </ul> 
          </>
          ) : (
          <>
           <ul>
            <li><NavLink to="/Dashboard" exact title="EDashboard"><i></i>Dashboard</NavLink></li>
            <li><NavLink to="/Current-Training" exact title="Training"><i></i>Current Training</NavLink></li>
            <li><NavLink to="/Examination" exact title="Exam"><i></i>Examination</NavLink></li>
            <li><a href="/" onClick={this.signOut}>Sign out</a></li>
          </ul>        
          </>
          ) } 
            </div>
              </div>
              </nav>
            </div>
        );
    }
}