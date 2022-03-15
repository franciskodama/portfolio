
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../src/styles/reset.css'
import '../src/styles/fonts.css'
import './App.css'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import Reason from "./pages/Reason";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

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

    </div>
  )
}

export default App

