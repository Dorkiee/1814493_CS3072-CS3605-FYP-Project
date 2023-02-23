import React, { Component } from "react";
import axios from 'axios';
import "../main_pages/CSS/signForm.css"
import DashboardNav from "../main_pages/DashboardNav.js";
import withRouter from "./withRouter.js";

class courseEdit extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
        courseName: '',
        courseOutline: '',
        curriculumContent:'',
        curriculumVids:'',
      }
      this.changecourseName = this.changecourseName.bind(this)
      this.changecourseOutline = this.changecourseOutline.bind(this)
      this.changecurriculumContent = this.changecurriculumContent.bind(this)
      this.changecurriculumVids = this.changecurriculumVids.bind(this)
     this.onSubmit = this.onSubmit.bind(this)
  }


  componentDidMount() {

    axios.get('http://localhost:4000/app/course/' + this.props.params.id)
      .then(response => {

        this.setState({
        courseName:response.data.courseName,
        courseOutline: response.data.courseOutline,
        curriculumContent:response.data.curriculumContent,
        curriculumVids:response.data.curriculumVids,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }
  changecourseName(event) {
    this.setState({
        courseName:event.target.value
    })
  }

  changecourseOutline(event) {
    this.setState({
      courseOutline:event.target.value
    })
  }

  changecurriculumContent(event) {
    this.setState({
     curriculumContent:event.target.value
    })
  }
  
  changecurriculumVids(event) {
    this.setState({
     curriculumVids:event.target.value
    })
  } 


  onSubmit(event) {
    event.preventDefault()

    const editCourse = {
    courseName:this.state.courseName,
    courseOutline: this.state.courseOutline,
    curriculumContent:this.state.curriculumContent,
    curriculumVids:this.state.curriculumVids,
    };
    axios.put('http://localhost:4000/app/update-createdcourse/' + this.props.params.id, editCourse)
      .then((res) => {
        console.log(res.data)
        console.log('Course successfully updated')
      }).catch((error) => {
        console.log(error)
      })
    
   
  }

  render() {
    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow">
        <div class="wrapper">
        <DashboardNav/>
        <div class="main_content">
        <div class="info">
       
        <div>
          <div class="Formcontainer">
            <form onSubmit={this.onSubmit} >
            <p>edit this later</p>
              <br></br>
              <div className='mb-3'>
                  <label>Update Course Name</label> 
                  <input className="form-control" 
                  type="courseName" 
                  id="courseName" 
                  placeholder="Course Name"
                  onChange={this.changecourseName}
                  value={this.state.courseName}
                  />
              </div>
              <div className="mb-3">
                <label>Update Course Outline</label>
                  <input  type="text" 
                   id="courseOutline"  
                   className="form-control"
                   placeholder="Course Outline"
                   onChange={this.changecourseOutline}
                  value={this.state.courseOutline}
                   />
              </div>
              <div className="mb-3">
                <label>Update Content</label>
                <textarea 
                class="form-control" 
                id="exampleFormControlTextarea1" 
                rows="10"
                onChange={this.changecurriculumContent}
                value={this.state.curriculumContent}
                />
              </div>
              <div className="mb-3"> {/* have two sign up pages -- have a drop down to select registed company -- if company not listed, send request to IT department for them to sign up?*/}
                <label>Update Video Upload</label>
                <p>The YouTube URL must contain "embed" rather than "watch" since the /embed endpoint enables external calls while the /watch endpoint does not.</p>
                  <input  type="text" 
                  id="CurriculumVids" 
                  className="form-control" 
                  placeholder="Upload videos"
                  onChange={this.changecurriculumVids}
                  value={this.state.curriculumVids}
                  />
              </div>
              <div className='d-grid'>
              <button type='submit' className='btn btn-primary' value='Submit'>
                Update
              </button>
              </div>
              </form>
              </div>
    
          </div>

        </div>
        </div>
        </div>
        </nav>

    </div>
    );
  }
}
export default withRouter(courseEdit);