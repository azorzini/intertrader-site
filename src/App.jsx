import React from 'react';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Features from "./components/Features";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App" data-spy="scroll" data-target="navigationbar" data-offset="200">
      <NavigationBar />
      <Banner />
      <Features />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
