import React, { Component } from 'react';
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import DashboardNav from '../main_pages/DashboardNav.js';
import "./CSS/Table-Fourm.css"
class createCourse extends Component {
    constructor () {
        super ()
        this.state = {
         courseName: '',
         courseOutline: '',
         curriculumContent:'',
         curriculumVids:'',
         curriculumGame: false,
        // Examinations:'',
       //  totalUsers: '',
        }
        this.changecourseName = this.changecourseName.bind(this)
        this.changecourseOutline = this.changecourseOutline.bind(this)
        this.changecurriculumContent = this.changecurriculumContent.bind(this)
        this.changecurriculumVids = this.changecurriculumVids.bind(this)
        this.changecurriculumGame = this.changecurriculumGame.bind(this)
      //  this.changeExaminations = this.changeExaminations.bind(this)
       // this.changetotalUsers = this.changetotalUsers.bind(this)
       this.onSubmit = this.onSubmit.bind(this)
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

    
      changecurriculumGame(event) {
        this.setState({
          curriculumGame:event.target.checked
         })
      } 

      onSubmit(event) {
        event.preventDefault()
      
        const courseCreate = {
            courseName:this.state.courseName,
            courseOutline: this.state.courseOutline,
            curriculumContent:this.state.curriculumContent,
           curriculumVids:this.state.curriculumVids,
           curriculumGame:this.state.curriculumGame,
          //  Examinations:this.state.Examinations
        }
    
        axios.post('http://localhost:4000/app/createcourse', courseCreate)
       .then(response => console.log(response.data))
    
            this.setState({
                courseName: '',
                courseOutline: '',
                curriculumContent:'',
                curriculumVids:'',
                curriculumGame:false,
              //  Examinations:'',
            })

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
                <div>
                  <div className="mx-auto" style={{ width: '900px' }}>
                    <form onSubmit={this.onSubmit}>
                      <br></br>
                      <div className="mb-3">
                        <label>Course Name</label>
                        <input
                          className="form-control"
                  type="courseName" 
                  id="courseName" 
                  placeholder="Course Name"
                  onChange={this.changecourseName}
                  value={this.state.courseName}
                  />
              </div>
              <div className="mb-3">
                <label>Course Outline</label>
                  <input  type="text" 
                   id="courseOutline"  
                   className="form-control"
                   placeholder="Course Outline"
                   onChange={this.changecourseOutline}
                  value={this.state.courseOutline}
                   />
              </div>
              <div className="mb-3">
                <label>Content</label>
                <textarea 
                class="form-control" 
                id="textArea" 
                rows="10"
                style={{ whiteSpace: "pre-wrap" }}
                onChange={this.changecurriculumContent}
                value={this.state.curriculumContent}
                />
              </div>
              <div className="mb-3"> {/* have two sign up pages -- have a drop down to select registed company -- if company not listed, send request to IT department for them to sign up?*/}
                <label>Upload a video</label>
                <p>The YouTube URL must contain "embed" rather than "watch" since the /embed endpoint enables external calls while the /watch endpoint does not.</p>
                  <input  type="text" 
                  id="CurriculumVids" 
                  className="form-control" 
                  placeholder="Upload videos"
                  onChange={this.changecurriculumVids}
                  value={this.state.curriculumVids}
                  />
              </div>

              <div className="mb-3"> 
                <label>Assign Game</label>
                <label className="checkbox-wrapper">
                  <input  
                    type="checkbox" 
                    id="CurriculumGame" 
                    className="game content"
                    checked={this.state.curriculumGame}
                    onChange={this.changecurriculumGame}
                  />
                  <span></span>
                     Check this box to assign the game
                </label>
              </div>

              <div className='d-grid'>
              <button type='submit' className='btn btn-primary' value='Submit'>
                Create
              </button>
              </div>
              </form>
              </div>
    
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

export default createCourse;
