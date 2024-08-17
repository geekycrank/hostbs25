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
      eventName:"SHIPWRECK",
      description:"Get ready for a fun quiz that tests your knowledge and quick thinking. Compete with the best and aim to be the top quiz champion. Only the sharpest will win. Show your skills and rise to the challenge!",
      guidelines:[
        'Each team should consist of 2 members.',
        'The event will feature 2 rounds.'
      ],
      rules:[
        'Use of mobile phones during the event will result in disqualification.',
        'The preliminaries will take place strictly within the allotted time.',
        'The top 6 teams will advance to the finals.',
        'Final round rules will be announced on the spot.'
      ]
    },
    {
      eventName:"QUIZ",
      description:"Get ready for a fun quiz that tests your knowledge and quick thinking. Compete with the best and aim to be the top quiz champion. Only the sharpest will win. Show your skills and rise to the challenge!",
      guidelines:[
        'Each team should consist of 2 members.',
        'The event will feature 2 rounds.'
      ],
      rules:[
        'Use of mobile phones during the event will result in disqualification.',
        'The preliminaries will take place strictly within the allotted time.',
        'The top 6 teams will advance to the finals.',
        'Final round rules will be announced on the spot.'
      ]
    },
    {
      eventName:"SHIPWRECK",
      description:"Get ready for a fun quiz that tests your knowledge and quick thinking. Compete with the best and aim to be the top quiz champion. Only the sharpest will win. Show your skills and rise to the challenge!",
      guidelines:[
        'Each team should consist of 2 members.',
        'The event will feature 2 rounds.'
      ],
      rules:[
        'Use of mobile phones during the event will result in disqualification.',
        'The preliminaries will take place strictly within the allotted time.',
        'The top 6 teams will advance to the finals.',
        'Final round rules will be announced on the spot.'
      ]
    },
    {
      eventName:"SHIPWRECK",
      description:"Get ready for a fun quiz that tests your knowledge and quick thinking. Compete with the best and aim to be the top quiz champion. Only the sharpest will win. Show your skills and rise to the challenge!",
      guidelines:[
        'Each team should consist of 2 members.',
        'The event will feature 2 rounds.'
      ],
      rules:[
        'Use of mobile phones during the event will result in disqualification.',
        'The preliminaries will take place strictly within the allotted time.',
        'The top 6 teams will advance to the finals.',
        'Final round rules will be announced on the spot.'
      ]
    },
    {
      eventName:"SHIPWRECK",
      description:"Get ready for a fun quiz that tests your knowledge and quick thinking. Compete with the best and aim to be the top quiz champion. Only the sharpest will win. Show your skills and rise to the challenge!",
      guidelines:[
        'Each team should consist of 2 members.',
        'The event will feature 2 rounds.'
      ],
      rules:[
        'Use of mobile phones during the event will result in disqualification.',
        'The preliminaries will take place strictly within the allotted time.',
        'The top 6 teams will advance to the finals.',
        'Final round rules will be announced on the spot.'
      ]
    },
    {
      eventName:"SHIPWRECK",
      description:"Get ready for a fun quiz that tests your knowledge and quick thinking. Compete with the best and aim to be the top quiz champion. Only the sharpest will win. Show your skills and rise to the challenge!",
      guidelines:[
        'Each team should consist of 2 members.',
        'The event will feature 2 rounds.'
      ],
      rules:[
        'Use of mobile phones during the event will result in disqualification.',
        'The preliminaries will take place strictly within the allotted time.',
        'The top 6 teams will advance to the finals.',
        'Final round rules will be announced on the spot.'
      ]
    },
    {
      eventName:"SHIPWRECK",
      description:"Get ready for a fun quiz that tests your knowledge and quick thinking. Compete with the best and aim to be the top quiz champion. Only the sharpest will win. Show your skills and rise to the challenge!",
      guidelines:[
        'Each team should consist of 2 members.',
        'The event will feature 2 rounds.'
      ],
      rules:[
        'Use of mobile phones during the event will result in disqualification.',
        'The preliminaries will take place strictly within the allotted time.',
        'The top 6 teams will advance to the finals.',
        'Final round rules will be announced on the spot.'
      ]
    },
  ]
 
   return(
   <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Home></Home>} />
      
      <Route path="/Events" element={<Events></Events>} />
      <Route path="/Register" element={<Register></Register>} />
      <Route path="/event1" element={<Event eventName={events[0].eventName} eventDescription={events[0].description} eventGuidelines={events[0].guidelines} eventRules={events[0].rules}></Event>} />
      <Route path="/event2" element={<Event eventName={events[1].eventName} eventDescription={events[1].description} eventGuidelines={events[1].guidelines} eventRules={events[1].rules}></Event>} />
      <Route path="/event3" element={<Event eventName={events[2].eventName} eventDescription={events[2].description} eventGuidelines={events[2].guidelines} eventRules={events[2].rules}></Event>} />
      <Route path="/event5" element={<Event eventName={events[3].eventName} eventDescription={events[3].description} eventGuidelines={events[3].guidelines} eventRules={events[3].rules}></Event>} />
      <Route path="/event6" element={<Event eventName={events[4].eventName} eventDescription={events[4].description} eventGuidelines={events[4].guidelines} eventRules={events[4].rules}></Event>} />
      <Route path="/event7" element={<Event eventName={events[5].eventName} eventDescription={events[5].description} eventGuidelines={events[5].guidelines} eventRules={events[5].rules}></Event>} />
      <Route path="/event8" element={<Event eventName={events[6].eventName} eventDescription={events[6].description} eventGuidelines={events[6].guidelines} eventRules={events[6].rules}></Event>} />
        
    </Routes>
    
     <FooterNav></FooterNav> 
    
  </Router>)

  }

export default App;




