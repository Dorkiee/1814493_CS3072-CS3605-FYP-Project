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
      <nav className="navbar navbar-expand-lg shadow" style={{ backgroundColor: '#1b2430' }}>
        <div className="container">
          <NavLink className="navbar-brand fs-3 fw-bold" to="/home" exact>
            <h1 style={{ color: 'white' }}>Logo Here</h1>
          </NavLink>
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
                    <NavLink className="nav-link" to="/about" exact title="about">
                      About
                    </NavLink>
                    <ul></ul>
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

