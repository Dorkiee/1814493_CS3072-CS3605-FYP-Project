import React, { Component } from 'react';
import axios from 'axios'
import "../main_pages/CSS/signForm.css"

class signup extends Component {
  constructor () {
    super ()
    this.state = {
      username: '',
      firstName: '',
      lastName:'',
      companyName:'',
      age: '',
      department:'',
      role:'',
      isAdmin: false,
      isModerator: false,
      pin: ''
    }
    this.changeUsername = this.changeUsername.bind(this)
    this.changeFirstName = this.changeFirstName.bind(this)
    this.changeLastName = this.changeLastName.bind(this)
    this.changeCompanyName = this.changeCompanyName.bind(this)
    this.changepin = this.changepin.bind(this)
    this.changeDepartment = this.changeDepartment.bind(this)
    this.changeAge = this.changeAge.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeUsername(event) {
    this.setState({
      username:event.target.value
    })
  }

  changeFirstName(event) {
    this.setState({
      firstName:event.target.value
    })
  }

  changeLastName(event) {
    this.setState({
      lastName:event.target.value
    })
  }
  
  changeCompanyName(event) {
    this.setState({
      companyName:event.target.value
    })
  } 

  changepin(event) {
    this.setState({
      pin:event.target.value
    })
  }

  changeDepartment(event) {
    this.setState({
      department:event.target.value
    })
  }

  changeAge(event) {
    this.setState({
      age:event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault()
  
    const registered = {
      registered_by: 'admin',
        username:this.state.username,
        firstName: this.state.firstName,
        lastName:this.state.lastName,
        companyName:this.state.companyName,
        age:this.state.age,
        role:'user',
        department:this.state.department,
        isAdmin: false,
        isModerator: false,
        pin:this.state.pin
    }

    axios.post('http://localhost:4000/app/sign-up', registered)
   .then(response => console.log(response.data))

        this.setState({
          username: '',
            firstName:'',
            lastName:'',
            companyName: '',
            age: '',
            department:'',
            role:'',
            isAdmin: false,
            isModerator: false,
            pin: '',
        })
  }

  render () {
    return (
    <div>
      <div class="containerForm">
        <form onSubmit={this.onSubmit} >
          <h3 className='text-wrapper'>Sign Up Today</h3>
          <br></br>
          <div className='mb-3'>
              <label>username</label>
              <input type="text" 
              id="username" 
              className="form-control"
              placeholder="username *"
              onChange={this.changeUsername}
              value={this.state.username}
              />
          </div>
          <div className="mb-3">
            <label>First Name</label>
              <input  type="text" 
               id="firstName"  
               className="form-control"
               placeholder="First Name *"
               onChange={this.changeFirstName}
              value={this.state.firstName}
               />
          </div>
          <div className="mb-3">
            <label>Last Name</label>
              <input  type="text" 
              id="lastName" 
              className="form-control" 
              placeholder="Last Name *"
              onChange={this.changeLastName}
              value={this.state.lastName}
              />
          </div>
          <div className="mb-3">
            <label>Age</label>
              <input className="form-control" 
              type="age" 
              id="age" 
              placeholder="Enter your age"
              onChange={this.changeAge}
              value={this.state.age}
              />
          </div>
          <div className="mb-3"> {/* have two sign up pages -- have a drop down to select registed company -- if company not listed, send request to IT department for them to sign up?*/}
            <label>Profession *</label>
            <br></br>
              <select  
              id="companyName dropdown" 
              className="dropdown-select" 
              placeholder="Select your company"
              onChange={this.changeCompanyName}
              value={this.state.companyName}
              >
                <option value="">Select an option</option>
                <option value="Indivior">Indivior Employee</option>
                <option value="brunel">Brunel Student</option>
                <option value="public">Member of public</option>
                </select>
          </div>
          <div className="mb-3"> {/* have two sign up pages -- have a drop down to select registed company -- if company not listed, send request to IT department for them to sign up?*/}
            <label>Department</label>
              <input  type="text" 
              id="department" 
              className="form-control" 
              placeholder="Department Name"
              onChange={this.changeDepartment}
              value={this.state.department}
              />
          </div>
          <div className="mb-3">
            <label>pin</label>
              <input className="form-control" 
              type="pin"  
              id="pin" 
              placeholder="pin *"
              onChange={this.changepin}
              value={this.state.pin}
              />
          </div>
          <div className='d-grid'>
          <button type='submit' className='btn btn-primary' value='Submit'>
            Sign up
          </button>
          </div>
          </form>
          </div>
          <br></br>
          <br></br>
          <footer className='footerLogin'>
          <p>&copy; 2023 PhishShield, developed by Kehinde Oduyeye 1814493</p>
          </footer>  
      </div>   
  );
}
} 
export default signup;