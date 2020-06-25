import {Button, Col, Container, Row} from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import intro from "../img/intro-bg.jpg";

const Banner = () => (
  <header id="banner">
    <Intro style={{ backgroundImage:`url(${intro})` }}>
      <Overlay>
        <Container>
          <Row>
            <IntroText md={{span: 8, offset: 2}}>
              <IntroH1>We Are Intertrader</IntroH1>
              <IntroP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed
                commodo nibh ante facilisis bibendum.</IntroP>
              <LearnMoreButton variant="custom" href="#features" size="lg">Learn More</LearnMoreButton>
            </IntroText>
          </Row>
        </Container>
      </Overlay>
    </Intro>
  </header>
)

export default Banner;

const Overlay = styled.div`
  background: rgba(0,0,0,0.2);
`;

const Intro = styled.div`
  display: table;
  width: 100%;
  padding: 0;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
`;

const IntroText = styled(Col)`
  padding-top: 350px;
  padding-bottom: 200px;
  text-align: center;
`;

const LearnMoreButton = styled(Button)`
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  color: #fff !important;
  background-color: #5ca9fb !important;
  background-image: linear-gradient(to right, #5ca9fb 0%, #6372ff 100%);
  padding: 14px 34px;
  letter-spacing: 1px;
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  border-radius: 25px;
  border: 0;
  transition: all 0.5s ease !important;
  
  :hover {
    color: #fff;
    background-image: none;
    background-color: #6372ff !important;
  }
`

const IntroH1 = styled.h1`
  font-family: 'Raleway', sans-serif;
  color: #fff;
  font-size: 67px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 10px;
`;

const IntroP = styled.p`
  color: #fff;
  font-size: 22px;
  font-weight: 300;
  line-height: 30px;
  margin: 0 auto;
  margin-bottom: 60px;
`;
