import {Col, Container, Row} from "react-bootstrap";
import {Styledh2, Styledh3, StyledImg, Styledul} from "./common.styled";
import AboutImg from "../img/about.jpg";
import React from "react";
import styled from "styled-components";


const About = () => (
  <StyledDiv id="about">
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <StyledImg src={AboutImg} alt="" />
        </Col>
        <Col xs={12} md={6}>
          <div>
            <Abouth2>About Us</Abouth2>
            <Aboutp>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</Aboutp>
            <Abouth3>Why Choose Us?</Abouth3>
            <Row>
              <Col lg={6} sm={6} xs={12}>
                <Styledul>
                  <Aboutli>Lorem ipsum dolor</Aboutli>
                  <Aboutli>Tempor incididunt</Aboutli>
                  <Aboutli>Lorem ipsum dolor</Aboutli>
                  <Aboutli>Incididunt ut labore</Aboutli>
                </Styledul>
              </Col>
              <Col lg={6} sm={6} xs={12}>
                <Styledul>
                  <Aboutli>Aliquip ex ea commodo</Aboutli>
                  <Aboutli>Lorem ipsum dolor</Aboutli>
                  <Aboutli>Exercitation ullamco</Aboutli>
                  <Aboutli>Lorem ipsum dolor</Aboutli>
                </Styledul>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  </StyledDiv>
)

export default About;


const StyledDiv = styled.div`
  padding: 100px 0;
`;

const Abouth3 = styled(Styledh3)`
  font-size: 22px;
  margin: 0 0 20px 0;
`;

const Abouth2 = styled(Styledh2)`
  position: relative;
  margin-bottom: 15px;
  padding-bottom: 15px;
  ::after{
    position: absolute;
    content: "";
    background: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
    height: 4px;
    width: 60px;
    bottom: 0;
    left: 0;
  }
`;

const Aboutp = styled.p`
  line-height: 24px;
  margin: 30px 0;
  color: #777;
  font-size: 15px;
`;

const Aboutli = styled.li`
  margin-bottom: 6px;
  margin-left: 6px;
  list-style: none;
  font-size: 14px;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
  text-rendering: optimizeLegibility !important;
  color: #777;
  font-weight: 400;
  
  :before{
    content: '✓';
    color: #5ca9fb;
    font-size: 14px;
    font-weight: bold;
    padding-right: 8px;
  }
`;