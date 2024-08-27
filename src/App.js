
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Warning from './Components/Warning';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom";

function App() {

  
  return (
    <>
  <Router>  
  <Navbar title="Shirisha" aboutText="About" />

  <Warning alert="This is alert" />
  <div className="container my-3">
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/" element={<TextForm heading="Enter the text here" />} />
    </Routes>
  </div>
</Router>

</>
  );
}

export default App;
