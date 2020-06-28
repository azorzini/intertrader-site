import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import styled from "styled-components";

const StyledDiv = styled.div`
  min-width: fit-content;
`;

const App = () => {
  return (
    <StyledDiv className="App" data-spy="scroll" data-target="navigationbar" data-offset="200">
      <NavigationBar />
      <Banner />
      <Features />
      <About />
      <Services />
    </StyledDiv>
  );
}

export default App;
