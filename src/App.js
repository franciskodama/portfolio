
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/styles/reset.css'
import '../src/styles/fonts.css'
import './App.css'
import Navbar from './pages/Navbar'
import Hero from './pages/Hero'
import Reason from './pages/Reason';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Projects from './pages/Projects';
// import ErrorPage from './pages/ErrorPage';
import Api from './pages/Api';
import CleanCode from './pages/CleanCode';

const App = () => {
  
  return (
    <div className='App'>
        <Navbar />
        <Hero />
        <Reason /> 
        <About />
        <Projects />
        <Api />
        <CleanCode />
        <Contact />
        <Footer />
    </div>
  )
}

export default App

// function App() {
//   return (
//     <div className='App'>
//       <Router>
//         <Navbar />
//           <Routes>
//             <Route path='/' element={<Hero />} />
//             <Route path='/reason' element={<Reason />} />
//             <Route path='/about' element={<About />} />
//             <Route path='/projects' element={<Projects />} />
//             <Route path='/api' element={<Api />} />
//             <Route path='/contact' element={<Contact />} />
//             <Route path='*' element={<ErrorPage />} />
//           </Routes>
//       </Router>
//             <Reason /> 
//             <About />
//             <Projects />
//             <Api />
//             <Contact />
//             <Footer />
//     </div>
//   )
// }