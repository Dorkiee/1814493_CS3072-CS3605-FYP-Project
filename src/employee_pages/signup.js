import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

class signup extends Component {


  render () {
    return (
    <div>
      <div class="containerForm">
        <form >
          <h3 className='text-wrapper'>Sign Up Today</h3>
          <br></br>
          <div className='mb-3'>
              <label>Email Address</label>
              <input className="form-control" 
              type="email" 
              id="email" 
              placeholder="Email *"
              />
          </div>
          <div className="mb-3">
            <label>First Name</label>
              <input  type="text" 
               id="firstName"  
               className="form-control"
               placeholder="First Name *"
               />
          </div>
          <div className="mb-3">
            <label>Last Name</label>
              <input  type="text" 
              id="lastName" 
              className="form-control" 
              placeholder="Last Name *"
              />
          </div>

          <div className="mb-3"> {/* have two sign up pages -- have a drop down to select registed company -- if company not listed, send request to IT department for them to sign up?*/}
            <label>Company Name</label>
              <input  type="text" 
              id="companyName" 
              className="form-control" 
              placeholder="Company Name *"
              />
          </div>

          <div className="mb-3">
            <label>Password</label>
              <input className="form-control" 
              type="password"  
              id="password" 
              placeholder="Password *"
              />
          </div>
          <div className="mb-3"> {/* have two sign up pages -- have a drop down to select registed company -- if company not listed, send request to IT department for them to sign up?*/}
            <label>Department</label>
              <input  type="text" 
              id="department" 
              className="form-control" 
              placeholder="Drop down box here"
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
export default signup;