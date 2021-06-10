import React from 'react';
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import Navigation from "../Navigation/Navigation";

const Header = () => {
    return (
        <div>
            <Container>
        <Row>
          <Col lg={7} md={12} sm={12} className="py-2 header-top">Welcome to ParrotEx</Col>
          <Col lg={2} md={6} sm={12} className="py-2 header-top">
            <FontAwesomeIcon icon={faPhoneAlt} /> 01521429924
          </Col>
          <Col lg={3} md={6} sm={12} className="py-2 email header-top">
            <FontAwesomeIcon icon={faEnvelope} /> info@parrotex.com.bd
          </Col>
        </Row>
      </Container>
      <Navigation />
        </div>
    );
};

export default Header;