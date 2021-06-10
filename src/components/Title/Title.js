import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import titleImg from '../../assets/images/title1.png';
import './Title.css'

const Title = () => {
  return (
    <div className="title-container">
      <Container>
        <Row>
          <Col lg={8} md className="title-text text-white">
            <h1>Moving every Customer with care.</h1>
          </Col>
          <Col lg={4}>
            <img className="titleImg" src={titleImg} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Title;
