import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'C:/Users/paula/Documents/dreyfit1.0/src/components/pages/Home.js';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
    <Router>
    <Navbar />
      
        <Routes>
        <Route path='/' exact element={ <Home />}></Route>       
        </Routes>
        <Routes>
        <Route path='/services' exact element={ <Services/>}></Route>       
        </Routes>
        <Routes>
        <Route path='/contact' exact element={ <Contact/>}></Route>       
        </Routes>
        <Routes>
        <Route path='/sign-up' exact element={ <SignUp/>}></Route>       
        </Routes>
      
      </Router>
    </>
  );
}

export default App;
