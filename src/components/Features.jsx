import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBullhorn, faComment, faLayerGroup, faMagic} from "@fortawesome/free-solid-svg-icons";
import {Styledh3, StyledpP, SectionTitle, SectionTitleh2, StyledI} from "./common.styled";
import React from "react";
import styled from "styled-components";


const Features = () => (
  <StyledDiv id="features">
    <Container>
      <SectionTitle md={{span: 10, offset: 1}}>
        <SectionTitleh2>Features</SectionTitleh2>
      </SectionTitle>
      <Row>
        <Col xs={6} md={3}>
          <StyledI>
            <FontAwesomeIcon icon={faComment}/>
          </StyledI>
          <Styledh3>Lorem ipsum</Styledh3>
          <StyledpP>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque
            etiam.</StyledpP>
        </Col>
        <Col xs={6} md={3}>
          <StyledI>
            <FontAwesomeIcon icon={faBullhorn}/>
          </StyledI>
          <Styledh3>Lorem ipsum</Styledh3>
          <StyledpP>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque
            etiam.</StyledpP>
        </Col>
        <Col xs={6} md={3}>
          <StyledI>
            <FontAwesomeIcon icon={faLayerGroup}/>
          </StyledI>
          <Styledh3>Lorem ipsum</Styledh3>
          <StyledpP>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque
            etiam.</StyledpP>
        </Col>
        <Col xs={6} md={3}>
          <StyledI>
            <FontAwesomeIcon icon={faMagic}/>
          </StyledI>
          <Styledh3>Lorem ipsum</Styledh3>
          <StyledpP>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque
            etiam.</StyledpP>
        </Col>
      </Row>
    </Container>
  </StyledDiv>
);

export default Features;

const StyledDiv = styled.div`
  text-align: center;
  padding: 100px 0;
  background: #f6f6f6;
  min-height: 594px;
`;