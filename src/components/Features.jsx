import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faIdCard, faAlignCenter, faBuilding, faRocket, faPodcast} from "@fortawesome/free-solid-svg-icons";
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
        <Col xs={6} md>
          <StyledI>
            <FontAwesomeIcon icon={faAlignCenter}/>
          </StyledI>
          <Styledh3>Software development</Styledh3>
          <StyledpP>
            We provide end-to-end software development services from concept creation and design, to development and final product delivery.
          </StyledpP>
        </Col>
        <Col xs={6} md>
          <StyledI>
            <FontAwesomeIcon icon={faBuilding}/>
          </StyledI>
          <Styledh3>Infrastructure Solutions</Styledh3>
          <StyledpP>
            While our clients focus on scaling their business, we make sure what needs to work, works.
          </StyledpP>
        </Col>
        <Col xs={6} md>
          <StyledI>
            <FontAwesomeIcon icon={faRocket}/>
          </StyledI>
          <Styledh3>Consultancy, Startups & Tech Partnership</Styledh3>
          <StyledpP>
            It’s your idea – we help design its technical needs, develop a business plan, and launch through execution.
          </StyledpP>
        </Col>
        <Col xs={6} md>
          <StyledI>
            <FontAwesomeIcon icon={faPodcast}/>
          </StyledI>
          <Styledh3>Software as a Service</Styledh3>
          <StyledpP>
            Web Crawlers, Scrappers, Bots. Marketing Analysis and Competitive Diligence.
          </StyledpP>
        </Col>
        <Col xs={12} md>
          <StyledI>
            <FontAwesomeIcon icon={faIdCard}/>
          </StyledI>
          <Styledh3>Small business Solutions</Styledh3>
          <StyledpP>
            Institutional web development, e-marketing, promotion in Google SEO SEM, e-Commerce, CRM, mobile apps iOS / Android.
          </StyledpP>
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
