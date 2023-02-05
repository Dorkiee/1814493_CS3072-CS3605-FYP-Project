import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import DashboardNav from "./DashboardNav.js";
import "../main_pages/CSS/dashboardCSS.css";

export default class mainDashboard extends Component {
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
      window.localStorage.href = "/home";
    }

    render () {
      const isAdmin = this.state.userData.isAdmin;
      console.log(isAdmin, "role");
      return (
          <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div class="wrapper">
          <DashboardNav/>
          <div class="main_content">
            {/*<div class="header">Welcome!! user name here</div>*/}
            <div class="info">
            <h1>{this.state.userData.firstName} {this.state.userData.lastName}</h1>
            <h1>{this.state.userData.email}</h1>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            <p>content</p>
            </div>
            </div>
            </div>
            </nav>
          </div>
        );
    }
}