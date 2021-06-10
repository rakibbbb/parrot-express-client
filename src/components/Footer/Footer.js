import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={3} md={6} sm={12} className="mb-3">
            <img src={logo} alt="ParrotEx" style={{ height: "85px" }} />
            <p>Moving every Customer with care.</p>
          </Col>
          <Col lg={3} md={6} sm={12} className="mb-3">
            <h4>Quick Links</h4>
            <hr style={{ backgroundColor: "white" }} />
            <Link className="quick-links" to="/about">About</Link>
            <br />
            <Link className="quick-links" to="/dashboard">Dashboard</Link>
            <br />
            <Link className="quick-links" to="/contact-us">Contact Us</Link>
            <br />
            <Link className="quick-links" to="/coverage-map">Coverage Map</Link>
          </Col>
          <Col lg={3} md={6} sm={12} className="mb-3">
            <h4>Address</h4>
            <hr style={{ backgroundColor: "white" }} />
            <p>
              20/2, West Panthapath,
              <br /> 2nd Floor, Dhaka-1205,
              <br /> Bangladesh
            </p>
            <p></p>
          </Col>
          <Col lg={3} md={6} sm={12} className="mb-3">
            <h4>Social links</h4>
            <hr style={{ backgroundColor: "white" }} />
            <a href="https://www.facebook.com/r.rakib1997/" target="_blank"><img src="https://img.icons8.com/color/48/000000/facebook-circled--v4.png" alt="Facebook"/></a>
            <a href="https://www.instagram.com/ra_kibb/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" alt="Instagram"/></a>
            <img src="https://img.icons8.com/color/48/000000/twitter-circled--v3.png" alt="Twitter"/>
            <img src="https://img.icons8.com/fluent/48/000000/google-plus.png" alt="GooglePlus"/>
            <a href="https://www.linkedin.com/in/md-rakibuzzaman-a97b38146/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn"/></a>            
          </Col>
        </Row>
      </Container>
      <div className="copyright mt-5">
          <p>Copyright © {(new Date()).getFullYear()} ParrotEx. All rights reserved. Developed by Md. Rakibuzzaman.</p>
      </div>
    </footer>
  );
};

export default Footer;
