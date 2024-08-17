import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import Events from './components/Events';
import Register from './components/Register';
import Navbar from './components/Navbar';
import FooterNav from "./components/FooterNav";
import Event from "./components/Event";
function App()
{
 
   return(
   <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home></Home>} />
      
      <Route path="/Events" element={<Events></Events>} />
      <Route path="/Register" element={<Register></Register>} />
      <Route path="/event1" element={<Event></Event>} />{/*we ll use the Event component once 
      by changing the props for the respecctive event here */}
        
    </Routes>
     <FooterNav></FooterNav> 
    
  </Router>)

  }

export default App;