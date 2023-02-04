import React, { Component } from 'react';
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"

class adminSignup extends Component {
  constructor () {
    super ()
    this.state = {
      email: '',
      firstName: '',
      lastName:'',
      companyName:'',
      role:'',
      department:'',
      isAdmin: false,
      isModerator: false,
      password: ''
    }
    this.changeEmail = this.changeEmail.bind(this)
    this.changeFirstName = this.changeFirstName.bind(this)
    this.changeLastName = this.changeLastName.bind(this)
    this.changeCompanyName = this.changeCompanyName.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.changeDepartment = this.changeDepartment.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeEmail(event) {
    this.setState({
      email:event.target.value
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

  changePassword(event) {
    this.setState({
      password:event.target.value
    })
  }

  changeDepartment(event) {
    this.setState({
      department:event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault()
  
    const registeredA = {
        registered_by: 'moderator',
        email:this.state.email,
        firstName: this.state.firstName,
        lastName:this.state.lastName,
        companyName:this.state.companyName,
        role:'admin',
        department:this.state.department,
        isAdmin: true,
        isModerator: false,
        password:this.state.password
    }

    axios.post('http://localhost:4000/app/sign-up-admin', registeredA)
   .then(response => console.log(response.data))

        this.setState({
            registered_by: '',
            email: '',
            firstName:'',
            lastName:'',
            companyName: '',
            role:'',
            department:'',
            isAdmin: false,
            isModerator: false,
            password: '',
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
              <label>Email Address</label>
              <input className="form-control" 
              type="email" 
              id="email" 
              placeholder="Email *"
              onChange={this.changeEmail}
              value={this.state.email}
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

          <div className="mb-3"> {/* have two sign up pages -- have a drop down to select registed company -- if company not listed, send request to IT department for them to sign up?*/}
            <label>Company Name</label>
              <input  type="text" 
              id="companyName" 
              className="form-control" 
              placeholder="Company Name *"
              onChange={this.changeCompanyName}
              value={this.state.companyName}
              />
          </div>

          <div className="mb-3">
            <label>Password</label>
              <input className="form-control" 
              type="password"  
              id="password" 
              placeholder="Password *"
              onChange={this.changePassword}
              value={this.state.password}
              />
          </div>
          <div className="mb-3"> {/* have two sign up pages -- have a drop down to select registed company -- if company not listed, send request to IT department for them to sign up?*/}
            <label>Department</label>
              <input  type="text" 
              id="department" 
              className="form-control" 
              placeholder="Drop down box here"
              onChange={this.changeDepartment}
              value={this.state.department}
              />
          </div>

          <div className="mb-3">
            <label>Confirm Password</label>
              <input className="form-control" 
              type="password" 
              id="confirmPassword" 
              placeholder="Confirm Password *"
              
              />
          </div>
          <div className='d-grid'>
          <button type='submit' className='btn btn-primary' value='Submit'>
            Sign up
          </button>
          </div>
          </form>
          </div>

      </div>   
  );
}
} 
export default adminSignup;