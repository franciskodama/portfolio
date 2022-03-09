
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../src/styles/reset.css'
import '../src/styles/fonts.css'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Reason from "./components/Reason";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Hero />}></Route>
          </Routes>
      </Router>
            <Reason />
            <About />
            <Contact />
            <Footer />
      <div className="content">
        <h1> className CONTENT</h1>
      </div>
    </div>
  )
}

export default App

