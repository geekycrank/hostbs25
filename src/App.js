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

  const events=[
    {
      eventName:"event1"
    },
    {
      eventName:"event2"
    },
    {
      eventName:"event3"
    },
    {
      eventName:"event4"
    },
    {
      eventName:"event5"
    },
    {
      eventName:"event6"
    },
    {
      eventName:"event7"
    },
  ]
 
   return(
   <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home></Home>} />
      
      <Route path="/Events" element={<Events></Events>} />
      <Route path="/Register" element={<Register></Register>} />
      <Route path="/event1" element={<Event eventName={events[0].eventName}></Event>} />
      <Route path="/event2" element={<Event eventName={events[1].eventName}></Event>} />
      <Route path="/event3" element={<Event eventName={events[2].eventName}></Event>} />
      <Route path="/event5" element={<Event eventName={events[3].eventName}></Event>} />
      <Route path="/event6" element={<Event eventName={events[4].eventName}></Event>} />
      <Route path="/event7" element={<Event eventName={events[5].eventName}></Event>} />
      <Route path="/event8" element={<Event eventName={events[6].eventName}></Event>} />
        
    </Routes>
    
     <FooterNav></FooterNav> 
    
  </Router>)

  }

export default App;




