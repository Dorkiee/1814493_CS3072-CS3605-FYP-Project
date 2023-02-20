import React, {Component} from "react";
import "./CSS/courseCSS.css";
import DashboardNav from "../main_pages/DashboardNav.js";
import axios from "axios";
import CourseTable from "./courseTable.js";

export default class Training extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }  
  
  componentDidMount() {
    axios.get("http://localhost:4000/app/courses")
    .then(response => {
      console.log(response, "courses");
      this.setState({ courses: response.data})
    })
    .catch(error => {
      console.log(error);
    });
  }

  DataTable () {
    return this.state.courses.map ((res, i) => {
      return <CourseTable obj={res} key={i}/>
    });
  }
  

    render () {
      
      return (
          <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div class="wrapper">
       <DashboardNav/>
          <div class="main_content">
            <div class="info">
            <h2>Security Awareness</h2>
            <br></br>
            <div>
                <a href="/add-course" class="border-shadow">
                    <span class="text-gradient">Add a new course<i></i></span>
                </a>
            </div>
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