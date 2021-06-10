import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mapBD from "../../assets/images/bd-map.png";
import './Coverage.css';

const Coverage = () => {
  return (
    <div className="coverage" id="coverage-map">
      <Container>
        <Row>
          <Col lg={5} md={12} sm={12}>
            <img src={mapBD} alt="Bangladesh Map" style={{ height: "450px" }} />
          </Col>
          <Col lg={7} md={12} sm={12} className="justify-content-center align-self-center">
            <div>
              <h1 className="coverage-title">
                ParrotEx provides doorstep delivery service in 490+ upazila across
                Bangladesh
              </h1>
              <p className="coverage-slogan">
                Send parcels from anywhere in Bangladesh, we deliver all over
                the country.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Coverage;
