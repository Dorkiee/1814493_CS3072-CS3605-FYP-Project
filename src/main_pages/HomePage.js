import {Col, Button, Image } from 'react-bootstrap';
import "./CSS/HomePage.css"

const Home = () => {

  
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
  <form className="formLogin-container">
<div>
<label>Email address</label>
<input
className="form-control"
type="email"
placeholder="Enter email"
/>
</div>
<br></br>
<div>
<label>Password</label>
<input
className="form-control"
type="password"
placeholder="Password"

/>
</div>
<br></br>
<Button variant="primary" type="submit" className="btn-block" style={{backgroundColor: '#a66cff'}}>
Login
</Button>
<div className="mt-3 text-center">
Don't have an account? <a herf ="/register">Sign up</a>
</div>
</form>
</div>
</Col>
</div>
  );
  };
  
  export default Home;