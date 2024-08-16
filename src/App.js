import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import Events from './components/Events';
import Register from './components/Register';
import Navbar from './components/Navbar';
import FooterNav from "./components/FooterNav";

function App()
{
 
   return(
   <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home></Home>} />
      
      <Route path="/Events" element={<Events></Events>} />
      <Route path="/Register" element={<Register></Register>} />
    </Routes>
     <FooterNav></FooterNav> 
    
  </Router>)

  }

export default App;