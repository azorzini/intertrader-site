import {Col, Container, Nav, Navbar} from "react-bootstrap";
import React from "react";
import styled from "styled-components";
import Scrollspy from 'react-scrollspy';

const NavigationBar = () => (
  <StyledNavBar id="navigationbar" expand="lg" fixed="top">
    <Container>
      <StyledBrand href="#home">Intertrader</StyledBrand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Col />
        <Nav className="mr-auto">
          <StyledScrollSpy items={ ['banner','features', 'about', 'services'] } currentClassName="is-current" >
            <StyledNavLink href="#features">Features</StyledNavLink>
            <StyledNavLink href="#about">About</StyledNavLink>
            <StyledNavLink href="#services">Services</StyledNavLink>
            <StyledNavLink href="#testimonials">Testimonials</StyledNavLink>
            <StyledNavLink href="#team">Team</StyledNavLink>
            <StyledNavLink href="#contact">Contact</StyledNavLink>
          </StyledScrollSpy>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </StyledNavBar>
)

export default NavigationBar;

const StyledScrollSpy = styled(Scrollspy)`
  display: contents;
`;

const StyledNavLink = styled(Nav.Link)`
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  color: #555 !important;
  font-size: 16px !important;
  font-weight: 500;
  padding: 8px 2px;
  border-radius: 0;
  margin: 9px 20px 0 20px;
  
  :after {
    display: block;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
    content: "";
    transition: width 0.2s;
    margin-top: 6px;
  }
  :hover {
    :after {
      width: 100%;
    }
  }
`;

const StyledNavBar = styled(Navbar)`
  padding: 10px;
  transition: all 0.8s;
  background-color: #fff;
  border-color: rgba(231, 231, 231, 0);
  box-shadow: 0 0 10px rgba(0,0,0,0.15)
`;

const StyledBrand = styled(Navbar.Brand)`
  font-family: 'Raleway', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #333;
  text-transform: uppercase;
`;
