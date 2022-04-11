import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "../src/styles/reset.css";
import "../src/styles/fonts.css";
import "./App.css";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Palette from "./components/Palette";
import Reason from "./pages/Reason";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Projects from "./pages/Projects";
import Api from "./pages/Api";
import CleanCode from "./pages/CleanCode";
// import ErrorPage from './pages/ErrorPage';

const App = () => {
  const root = document.querySelector(":root");

  const [isActive, setIsActive] = useState({
    first: true,
    second: false,
    third: false,
  });

  const firstColors = () => {
    root.style.setProperty("--dark-color", "#1c1c1c");
    root.style.setProperty("--bright-color", "#ffffff");
    root.style.setProperty("--third-color", "#ed1c24");
    setIsActive({
      first: true,
      second: false,
      third: false,
    });
  };

  const secondColors = () => {
    root.style.setProperty("--dark-color", "#29335C");
    root.style.setProperty("--bright-color", "#669BBC");
    root.style.setProperty("--third-color", "#F3A712");
    setIsActive({
      first: false,
      second: true,
      third: false,
    });
  };

  const thirdColors = () => {
    root.style.setProperty("--dark-color", "#757575");
    root.style.setProperty("--bright-color", "#ffffff");
    root.style.setProperty("--third-color", "#03A9F4");
    setIsActive({
      first: false,
      second: false,
      third: true,
    });
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Palette
        firstColors={firstColors}
        secondColors={secondColors}
        thirdColors={thirdColors}
        isActive={isActive}
      />
      <Reason />
      <About />
      <Projects />
      <Api />
      <CleanCode />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
