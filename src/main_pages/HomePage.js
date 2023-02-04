import {Col, Button } from 'react-bootstrap';
import "./CSS/HomePage.css"
import { NavLink } from "react-router-dom";
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

//NEED TO DISTINGUSION WITH USER WANTS TO LOGIN AND POST THE RIGHT DATA BASED ON ROLE??? 
//TICK "isAdmin" TO TRUE IF EMAIL MATCH ADMIN USER'S EMAIL AND LOG THEM INTO THE SOC_DASHBOARD ??


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:4000/app/log-in", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("isLoggedIn", true);
          window.location.href = "/Dashboard";
        }
      });
  }

  render () {
  return (
<div className="img-container d-flex justify-content-between">
<Col xs={12} sm={12} md={6} lg={7} className="p-0" style={{ height: 'auto', backgroundColor: '#1b2430'  }}>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>

</Col>
<Col xs={12} sm={12} md={6} lg={5} className="breakLogin-Container" style={{ height: 'auto', backgroundColor: '#3d454e' }}>
<br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
<div>
  <form className="formLogin-container" onSubmit={this.handleSubmit}>
<div>
<label>Email address</label>
<input
className="form-control"
type="email"
placeholder="Enter email"
onChange={(e) => this.setState({ email: e.target.value })}
/>
</div>
<br></br>
<div>
<label>Password</label>
<input
className="form-control"
type="password"
placeholder="Password"
onChange={(e) => this.setState({ password: e.target.value })}


/>
</div>
<br></br>
<Button variant="primary" type="submit" className="btn-block" style={{backgroundColor: '#a66cff'}}>
Login
</Button>
<div className="mt-3 text-center">
Don't have an account?
<NavLink className="nav-link" to="/select-sign-up" exact title="Signup">
   Register
</NavLink>
</div>
</form>
</div>
</Col>
</div>
  );
  };
}; 
  
  export default Home;