import {Col, Container, Row} from "react-bootstrap";
import {SectionTitle, Styledh2, Styledh3, StyledI, StyledpP} from "./common.styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileWord} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";


const Services = () => (
  <StyledDiv id="services">
    <Container>
      <SectionTitle>
        <Serviceh2>Our Services</Serviceh2>
        <Servicep>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</Servicep>
      </SectionTitle>
      <Row>
        <Col md={4}>
          <StyledI>
            <FontAwesomeIcon icon={faFileWord}/>
          </StyledI>
          <ServiceDesc>
            <Serviceh3>Lorem ipsum dolor</Serviceh3>
            <Servicep2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd
              commodo nibh ante facilisis bibendum dolor feugiat at.</Servicep2>
          </ServiceDesc>
        </Col>
        <Col md={4}>
          <StyledI>
            <FontAwesomeIcon icon={faFileWord}/>
          </StyledI>
          <ServiceDesc>
            <Serviceh3>Consectetur adipiscing</Serviceh3>
            <Servicep2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo
              nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Servicep2>
          </ServiceDesc>
        </Col>
        <Col md={4}>
          <StyledI>
            <FontAwesomeIcon icon={faFileWord}/>
          </StyledI>
          <ServiceDesc>
            <Serviceh3>Lorem ipsum dolor</Serviceh3>
            <Servicep2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.</Servicep2>
          </ServiceDesc>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <StyledI>
            <FontAwesomeIcon icon={faFileWord}/>
          </StyledI>
          <ServiceDesc>
            <Serviceh3>Consectetur adipiscing</Serviceh3>
            <Servicep2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd
              commodo nibh ante facilisis bibendum dolor feugiat at.</Servicep2>
          </ServiceDesc>
        </Col>
        <Col md={4}>
          <StyledI>
            <FontAwesomeIcon icon={faFileWord}/>
          </StyledI>
          <ServiceDesc>
            <Serviceh3>Lorem ipsum dolor</Serviceh3>
            <Servicep2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd
              commodo nibh ante facilisis bibendum dolor feugiat at.</Servicep2>
          </ServiceDesc>
        </Col>
        <Col md={4}>
          <StyledI>
            <FontAwesomeIcon icon={faFileWord}/>
          </StyledI>
          <ServiceDesc>
            <Serviceh3>Consectetur adipiscing</Serviceh3>
            <Servicep2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd
              commodo nibh ante facilisis bibendum dolor feugiat at.</Servicep2>
          </ServiceDesc>
        </Col>
      </Row>
    </Container>
  </StyledDiv>
)

export default Services;

const StyledDiv = styled.div`
  text-align: center;
  padding: 100px 0;
  background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
  color: #fff;
`;

const ServiceDesc = styled.div`
  margin: 10px 10px 20px;
  margin-bottom: 40px !important;
`;

const Serviceh2 = styled(Styledh2)`
  color: #fff;
  position: relative;
  margin-top: 10px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  ::after {
    position: absolute;
    content: "";
    background: rgba(255, 255, 255, 0.3);
    height: 4px;
    width: 60px;
    bottom: 0;
    margin-left: -30px;
    left: 50%;
    margin-top: 6px;
  }
`;

const Serviceh3 = styled(Styledh3)`
  font-weight: 500;
  padding: 5px 0;
  color: #fff;
`;

const Servicep = styled(StyledpP)`
  color: rgba(255,255,255,.75);
  font-size: 18px;
`;

const Servicep2 = styled(StyledpP)`
  color: rgba(255,255,255,.75);
  font-size: 16px;
`;
