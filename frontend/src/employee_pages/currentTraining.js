import React, {Component} from "react";
import "../main_pages/CSS/dashboardCSS.css";
import DashboardNav from "../main_pages/DashboardNav.js";
import axios from "axios";
import EnrolledCourses from "./enrollCourseTable.js";

export default class CurrentTraining extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
      courses: [],
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
        }).then((response) => response.json())
        .then((data) => {
            this.setState({ userData: data.data})
        });

      
    axios.get("https://phishshield-1814493.onrender.com/app/mycourses")
    .then(response => {
      this.setState({ courses: response.data})
    })
    .catch(error => {
      console.log(error);
    });

    }

    signOut = () => {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("isLoggedIn");
      window.localStorage.href = "https://phishshield-1814493.onrender.com/app/";
    }

    DataTable () {
      return this.state.courses.map ((res, i) => {
        return <EnrolledCourses obj={res} key={i}/>
      });
    }

    render () {
        return (
          <div>
          <nav >
          <div class="wrapper">
          <DashboardNav/>
            <div class="main_content">
              <div class="info">
                <div className="text_content">
              Here is list of training that needs to be complete:
               <br></br>
               <br></br>
               
                        {this.DataTable()}
              </div>
              </div>
              </div>
              </div>
              </nav>
            </div>
        );
    }
}