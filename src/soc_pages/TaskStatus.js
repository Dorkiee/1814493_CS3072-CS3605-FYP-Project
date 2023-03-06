import axios, { Axios } from "axios";
import React, {Component, useState, useEffect} from "react";
import TaskTable from './taskTable.js'
import { NavLink } from "react-router-dom";
import DashboardNav from "../main_pages/DashboardNav.js";
import "../soc_pages/CSS/Table-Fourm.css";


// for task status have it as X0...Xn10 out of XX and XX should be the number of tasks created.
export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseData: [],
      userData: {},
    };
  }  
  
  componentDidMount() {
    axios.get("http://localhost:4000/app/mycourses")
    .then(res => {
      console.log(res, "courseData");
      this.setState({ courseData: res.data})   
    })
    .catch(error => {
      
      });

      axios.get("http://localhost:4000/app/log-in")
      .then(res => {
        console.log(res, "userData");
        this.setState({ userData: res.data})   
      })
      .catch(error => {
        
        });
    }

    DataTable () {
      return this.state.courseData.map ((res, i) => {
        return <TaskTable obj={res} key={i} userData={this.state.userData} />
      });
    }
  

    render () {
      
        return (
        <div>
        <nav >
        <div>
          <div class="main_content">
            {/*<div class="header">Welcome!! user name here</div>*/}
            <div class="info">
            <div class="Tabelcontainer">
            <div>
                <br></br>
            </div>
            <form class="usertable">
                <table>
                    <thead>
                        <tr>
                            <th>Courses assigned to users</th>
                            <th>Users who have completed the course</th>
                        </tr>
                    </thead>
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
