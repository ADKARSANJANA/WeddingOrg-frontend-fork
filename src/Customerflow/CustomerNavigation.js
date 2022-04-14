import React from "react";
//import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav ,Container} from "react-bootstrap";
import {  Link } from "react-router-dom";

//import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faLongArrowAltUp, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
// import {
//   faUserPlus,
//   faSignInAlt,
//   faSignOutAlt,
// } from "@fortawesome/free-solid-svg-icons";
// import { logoutUser } from "../services/index";
//import Navbar from 'react-bootstrap/Navbar'
const CustomerNavigation = () => {
 
  return (
    <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" >
    <Container>
    <Navbar.Brand href="/"><b><i>
    <img
          src="https://i.pinimg.com/736x/03/5b/b5/035bb5227440e8b153e74bea5d286232.jpg"
          width="30"
          height="30"
          alt="brand"
        />{" "}
      Wedding Organizer</i></b></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
      <Nav>
        <Nav.Link href="/"> <FontAwesomeIcon icon={faHome} /></Nav.Link>
      </Nav>
        <Nav.Link href="#">About us</Nav.Link>
        <Nav.Link href="#">Contact us</Nav.Link>
        
      </Nav>
      
      
      <Nav>
      <Nav.Link href="/">Logout <FontAwesomeIcon icon={faSignOutAlt} /></Nav.Link>
      </Nav>
      
    </Navbar.Collapse>
    
    
    </Container>
  </Navbar>
  );
};

export default CustomerNavigation;