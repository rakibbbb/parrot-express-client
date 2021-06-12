import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import './Navigation.css';

const Navigation = () => {
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" className="nav-bg" variant="dark">
      <Navbar.Brand href="/home" className=" brand">
        <img style={{ height:"50px", width:"150px"}} src={logo} alt="ParrotEx Logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto pr-5">
          <Nav.Link href="/home"><Link to="/home" className="link">Home</Link></Nav.Link>
          <Nav.Link href="/dashboard"><Link to="/dashboard" className="link">Dashboard</Link></Nav.Link>
          <Nav.Link href="/tracking"><Link to="/tracking" className="link">Tracking</Link></Nav.Link>
          <Nav.Link href="/coverage-map"><Link to="/coverage-map" className="link">Coverage Map</Link></Nav.Link>
          {/* <Nav.Link href="/reviews"><Link to="/reviews" className="link">Reviews</Link></Nav.Link> */}
          <Nav.Link href="/about"><Link to="/about" className="link">About</Link></Nav.Link>
          <Nav.Link href="/contact"><Link to="/contact-us" className="link">Contact Us</Link></Nav.Link>
        </Nav>
        <Nav className="pr-5">
          <Nav.Link eventKey={2} href="/sign-in">
            <FontAwesomeIcon icon={faSignInAlt} /> <Link to="/sign-in" className="link">Sign In</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
