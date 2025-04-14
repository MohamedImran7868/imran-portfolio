import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import React, {useState, useEffect} from 'react';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Project from './component/Project';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App;
