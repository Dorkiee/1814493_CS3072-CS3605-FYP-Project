import React, {Component} from 'react';
//import { useDispatch, useSelector } from 'react-redux';
//import { logout } from '../actions/teacherActions';
import { NavLink } from "react-router-dom";

export default class  navigationHeader extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }  
  
  componentDidMount() {
        fetch("http://localhost:4000/app/Dashboard", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            }, 
            body: JSON.stringify ({
                token: window.localStorage.getItem("token"),
                
            }),
        })
        
        .then((response) => response.json())
        .then((data) => {
            console.log(data, "userData");
            this.setState({ userData: data.data})
        });
       }

  


render () {
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  console.log(loggedIn, "login");

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow" style={{ backgroundColor: 'white' }}>
        <div className="container">
        {loggedIn? (
                <>
          <NavLink className="navbar-brand fs-3 fw-bold" to="/Dashboard" exact>
            <h1 style={{ color: '#1b68b3' }}>PhishShield</h1>
          </NavLink>
          </>
          ) : (
            <>
            <NavLink className="navbar-brand fs-3 fw-bold" to="/" exact>
            <span style={{ color: '#f77c1b' }}>P</span><span style={{ color: '#1b68b3' }}>hish</span><span style={{ color: '#f77c1b' }}>S</span><span style={{ color: '#1b68b3' }}>hield</span>
          </NavLink>
          </>    
          ) }
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
           
            </ul>
            <div className="navbar align-self-center d-flex">
              {loggedIn? (
                <>
                  <NavLink className="nav-link text-success" to="/Dashboard" exact title="Dashboard">
                    Hi, <strong>{this.state.userData.firstName}</strong>
                  </NavLink>
                </>
                ) : (
                  <>
                    <NavLink className="nav-link" to="/log-in" exact title="Login">
                      Login
                    </NavLink>
                    <ul></ul>
                    <NavLink className="nav-link" to="/sign-up" exact title="Signup">
                      Register
                    </NavLink>
                  </>
                ) }                        
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
  }
}

