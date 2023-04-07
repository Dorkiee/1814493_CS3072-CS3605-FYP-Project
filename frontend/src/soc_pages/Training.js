import React, {Component} from "react";
import "./CSS/courseCSS.css";
import DashboardNav from "../main_pages/DashboardNav.js";
import axios from "axios";
import CourseTable from "./courseTable.js";
import { Link } from 'react-router-dom';

export default class Training extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: [],
    };
  }  
  
  componentDidMount() {
    axios.get("https://phishshield-1814493.onrender.com/app/courses")
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
        <nav >
        <div class="wrapper">
       <DashboardNav/>
          <div class="main_content">
            <div class="info">
            <div className="text_content">
            <h2>Security Awareness</h2>
            <br></br>
            <div>
                <Link to={"/add-course"}>
                Add a new course
                </Link>
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
            </div>
            </nav>
          </div>
        );
    }
}
