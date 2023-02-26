/* eslint-disable no-cond-assign */
import React, { Component } from "react";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import DashboardNav from "../main_pages/DashboardNav.js";
import enrollRouter from "./enrollRouters.js";
import editUsers from "../soc_pages/editUsers.js";
import { Link } from 'react-router-dom';

class enrollDetail extends Component {
  


  constructor(props) {
    super(props)
    this.state = {
        courseName: '',
        courseOutline: '',
        curriculumContent: '',
        curriculumVids: '',
        curriculumGame: false,
      }
    this.onChangeCourseName = this.onChangeCourseName.bind(this);
    this.onChangecourseOutline = this.onChangecourseOutline.bind(this);
    this.onChangecurriculumContent = this.onChangecurriculumContent.bind(this);
    this.onChangecurriculumVids = this.onChangecurriculumVids.bind(this);
    this.onChangecurriculumGame = this.onChangecurriculumGame.bind(this);
    this.taskUpdate = React.createRef();
  }


  componentDidMount() {

    axios.get('http://localhost:4000/app/mycourse/' + this.props.params.id)
      .then(response => {

        this.setState({
        courseName: response.data.courseName,
        courseOutline: response.data.courseOutline,
        curriculumContent: response.data.curriculumContent,
        curriculumVids: response.data.curriculumVids,
        curriculumGame: response.data.curriculumGame, 
        });
        console.log(response);
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

  onChangecurriculumGame (event) {
    this.setState({curriculumGame: event.target.checked})
  }

  onChangecurriculumVids (event) {
    this.setState({curriculumVids: event.target.value})
  }

  render() {
    return (
    <div>
    <nav >
    <div class="wrapper">
    <DashboardNav/>
    <div class="main_content">
    <div class="info">
    <div className="text_content">
      <div><h1>{this.state.courseName} Course</h1></div>
      <div><h3>{this.state.courseOutline}</h3></div> 
      {this.state.curriculumVids && this.state.curriculumVids.includes('youtube') ? (
      <iframe width="900" height="500" src={this.state.curriculumVids} frameborder="0" allowFullScreen></iframe>
      ) : (
        <p>This course has no video content.</p>
      )}
      <br></br>
      <br></br>
      <div style={{ whiteSpace: "pre-wrap" }}>{this.state.curriculumContent}</div>
      <br></br>
      {this.state.curriculumGame ? (
        /*picture of game and explanation here */
       <Link className="view-link" to={"/Phishing-Adventure"}>
          Play Game
        </Link>
      ) : (
        <p>This course has no game content.</p>
      )}
      <br></br>
      <br></br>
      {/* possibly have the complete button locked until user has played the game */}
      <div><button onClick={() => editUsers.current.onCompleteTask()}>Complete Course</button></div>
    </div>
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