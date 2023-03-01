import React, { Component } from 'react';
import axios from 'axios'
import "../main_pages/CSS/signForm.css"

class signup extends Component {
  constructor () {
    super ()
    this.state = {
      username: '',
      companyName:'',
      age: '',
      department:'',
      role:'',
      isAdmin: false,
      isUser: true,
      password: ''
    }
    this.changeUsername = this.changeUsername.bind(this)
    this.changeCompanyName = this.changeCompanyName.bind(this)
    this.changepassword = this.changepassword.bind(this)
    this.changeDepartment = this.changeDepartment.bind(this)
    this.changeAge = this.changeAge.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  changeUsername(event) {
    this.setState({
      username:event.target.value
    })
  }

  
  changeCompanyName(event) {
    this.setState({
      companyName:event.target.value
    })
  } 

  changepassword(event) {
    this.setState({
      password:event.target.value
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
        companyName:this.state.companyName,
        age:this.state.age,
        role:'user',
        department:this.state.department,
        isAdmin: false,
        isUser: true,
        password:this.state.password
    }

    axios.post('http://localhost:4000/app/sign-up', registered)
   .then(response => console.log(response.data))

        this.setState({
          username: '',
            companyName: '',
            age: '',
            department:'',
            role:'',
            isAdmin: false,
            isUser: true,
            password: '',
        })
  }

  validationpassword = event => { //testing validation, password must be higher than 4 but less than 6 for format to be submitted 
    const password = event.target.value;
    const isValid = /^[0-9]{4,6}$/.test(password);

    if (isValid) {
      this.setState({ errorMessage: '' });
    } else {
      this.setState({ errorMessage: 'incorrect format 4-6 digits, please try again' });
    }
  };


  render () {
    return (
    <div>
      <div class="containerForm">
        <form onSubmit={this.onSubmit} >
          <h3 className='text-wrapper'>Sign Up Today</h3>
          <br></br>
          <div className='mb-3'>
              <label>Username</label>
              <input type="text" 
              id="username" 
              className="form-control"
              placeholder="Username *"
              onChange={this.changeUsername}
              value={this.state.username}
              required
              />
          </div>
          <div className="mb-3">
            <label>Age</label>
            <br></br>
            <select 
            className="dropdown-select" 
              type="age" 
              id="age" 
              placeholder="Select your age *"
              onChange={this.changeAge}
              value={this.state.age}
              required
              >
                <option value="">Please select an option *</option>
                <option value="18 to 24">18 to 24</option>
                <option value="25 to 34">25 to 34</option>
                <option value="35 to 44">35 to 44</option>
                <option value="45 to 54">45 to 54</option>
                <option value="55 to 64">55 to 64</option>
                <option value="65 or over">65 or over</option>
                </select>
          </div>
          <div className="mb-3"> {/* have two sign up pages -- have a drop down to select registed company -- if company not listed, send request to IT department for them to sign up?*/}
            <label>Profession</label>
            <br></br>
              <select  
              id="companyName dropdown" 
              className="dropdown-select" 
              placeholder="Select an option"
              onChange={this.changeCompanyName}
              value={this.state.companyName}
              required
              >
                <option value="">Please select an option *</option>
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
            <label>Pin</label>
              <input className="form-control" 
              type="password"  
              id="password" 
              placeholder="password *"
              pattern="[0-9]{4,6}"
              onChange={this.changepassword}
              value={this.state.password}
              onBlur={this.validatepassword}
              required
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