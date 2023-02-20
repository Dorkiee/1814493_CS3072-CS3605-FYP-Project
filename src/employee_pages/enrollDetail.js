/* eslint-disable no-cond-assign */
import React, { Component } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import DashboardNav from "../main_pages/DashboardNav.js";
import enrollRouter from "./enrollRouters.js";
import editUsers from "../soc_pages/editUsers.js";


class enrollDetail extends Component {
  


  constructor(props) {
    super(props)
    this.state = {
        courseName: '',
        courseOutline: '',
        curriculumContent: '',
      }
    this.onChangeCourseName = this.onChangeCourseName.bind(this);
    this.onChangecourseOutline = this.onChangecourseOutline.bind(this);
    this.onChangecurriculumContent = this.onChangecurriculumContent.bind(this);
    this.taskUpdate = React.createRef();
  }


  componentDidMount() {

    axios.get('http://localhost:4000/app/mycourse/' + this.props.params.id)
      .then(response => {

        this.setState({
        courseName: response.data.courseName,
        courseOutline: response.data.courseOutline,
        curriculumContent: response.data.curriculumContent,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }




  onChangeCourseName(event) {
    this.setState({ courseName: event.target.value })
  }

  onChangecourseOutline(event) {
    this.setState({courseOutline: event.target.value})
  }

  onChangecurriculumContent (event) {
    this.setState({curriculumContent: event.target.value})
  }

  render() {
    return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
    <div class="wrapper">
    <DashboardNav/>
    <div class="main_content">
    <div class="info">
      <div><h1>{this.state.courseName} Course</h1></div>
      <div>{this.state.courseOutline}</div>  
      <div style={{ whiteSpace: "pre-wrap" }}>{this.state.curriculumContent}</div>
      <editUsers ref={this} />
      <div><button onClick={() => editUsers.current.onCompleteTask()}>Complete Course</button></div>
    </div>
    </div>
    </div>
    </nav>

    </div>
    );
  }
  //CREATE A BUTTON FOR COMPLETION TO TRACK USER'S PROGRESS
}
export default enrollRouter(enrollDetail);