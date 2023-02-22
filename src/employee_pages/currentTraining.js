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
        }).then((response) => response.json())
        .then((data) => {
            console.log(data, "userData");
            this.setState({ userData: data.data})
        });

      
    axios.get("http://localhost:4000/app/mycourses")
    .then(response => {
      console.log(response, "displayed all enrolled courses");
      this.setState({ courses: response.data})
    })
    .catch(error => {
      console.log(error);
    });

    }

    signOut = () => {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("isLoggedIn");
      window.localStorage.href = "/";
    }

    DataTable () {
      return this.state.courses.map ((res, i) => {
        return <EnrolledCourses obj={res} key={i}/>
      });
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
              <div class="info">
              Here is list of training that needs to be complete:
               <br></br>
               <br></br>
               <form>
                <table>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </table>
            </form>
              </div>
              </div>
              </div>
              </nav>
            </div>
        );
    }
}