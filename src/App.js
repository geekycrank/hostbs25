import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Events from './components/Events';
import Register from './components/Register';
import Navbar from './components/Navbar';

function App()
{
 
   return(
   <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home></Home>} />
      <Route path="/Contact" element={<Contact></Contact>} />
      <Route path="/Events" element={<Events></Events>} />
      <Route path="/Register" element={<Register></Register>} />
     
    </Routes>
    
  </Router>)

  }

export default App;