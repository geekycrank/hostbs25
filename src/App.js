import React from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import Events from './components/Events';
import Register from './components/Register';
import Navbar from './components/Navbar';
import FooterNav from "./components/FooterNav";
import Event from "./Event";
function App()
{
 
   return(
   <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home></Home>} />
      
      <Route path="/Events" element={<Events></Events>} />
      <Route path="/Register" element={<Register></Register>} />
      <Route path="/event1" element={<Event eventName="event1"></Event>} />
      <Route path="/event2" element={<Event eventName="event2"></Event>} />
      <Route path="/event3" element={<Event eventName="event3"></Event>} />
      <Route path="/event4" element={<Event eventName="event4"></Event>} />
      <Route path="/event4" element={<Event eventName="event5"></Event>} />
        
    </Routes>
     <FooterNav></FooterNav> 
    
  </Router>)

  }

export default App;