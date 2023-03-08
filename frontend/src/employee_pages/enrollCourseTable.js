import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./CSS/courseCards.css";

export default class enrollCourseTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseData: [],
      userData: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://phishshield-1814493.onrender.com/app/mycourses")
      .then((res) => {
        console.log(res.data)
        this.setState({ courseData: res.data });
      })
      .catch((error) => {});

    fetch("https://phishshield-1814493.onrender.com/app/Dashboard", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data)
        this.setState({ userData: data.data });
      });
  }



  render () {
    const { completedTasks } = this.props.obj;
    const { username } = this.state.userData;
    const userCompletedTasks = completedTasks.filter(task => task.userName === username);
    const isCourseCompleted = userCompletedTasks.length > 0;


    return (
      <div className="courseContent">
        <div className="cardSize">
          <div className="insights">
            <h3 className="card-title">{this.props.obj.courseName}</h3>
            <div className="card-action">
              {isCourseCompleted ? (
                <p>Course completed</p>
              ) : (
                <Link className="view-link" to={"/mycourse/" + this.props.obj._id}>Take Course</Link>        
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}
