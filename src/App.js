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
      eventName:"ADZAP",
      description:"Pitch the most outrageous product ideas imaginable! Say invisible socks or a smartphone that only works when you're asleep. Get creative, get funny, and keep the audience in stitches.",
      guidelines:[
        'Your product idea/ad should be unique and humorous. Think outside the box.',
        'Ensure all team members have a role in the ad and contribute to the overall performance.',
        'The use of simple props is allowed. Make sure any props are easy to manage within the time constraints.',
        'Be mindful of the time.'
      ],
      prelims:[
        'Each team should have 4-6 members.',
        'You will have 7 minutes to brainstorm and script your ad.',
        'Your performance should last 4-5 minutes. Going over the time limit will cost you points.',
        'Make sure your humor is clean. Offensive content or vulgar language is not allowed.',
        "The judge's decision is final."
      ]
    },
    {
      eventName:"DEBATE",
      description:"Prepare to engage in a battle of wits, where your critical thinking and communication skills will be put to the ultimate test. This event is designed to test your ability to argue both for and against a given topic, clearly and coherently, in a limited time setting.",
      guidelines:[
        "Individual Participation.",
        "Two-round event."
      ],
      prelims:[
        'Each team should have 4-6 members.',
        'You will have 7 minutes to brainstorm and script your ad.',
        'Your performance should last 4-5 minutes. Going over the time limit will cost you points.',
        'Make sure your humor is clean. Offensive content or vulgar language is not allowed.',
        "The judge's decision is final."
      ],
      finals:[
        "Teams will be formed from those selected in Round 1.",
        "Teams will be given a topic 10 minutes before the debate begins.",
        "Speech Structure:- \nThe first two contestants from each team will present arguments in favor of the topic.\n- The third contestant will present a rebuttal speech, countering the points made by the opposing team.",
        "The jury's decision will be final."
      ]
    },
    {
      eventName:"SHIPWRECK",
      description:"Get ready for a fun quiz that tests your knowledge and quick thinking. Compete with the best and aim to be the top quiz champion. Only the sharpest will win. Show your skills and rise to the challenge!",
      guidelines:[
        'Each team should consist of 2 members.',
        'The event will feature 2 rounds.'
      ],
      prelims:[
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
      prelims:[
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
      prelims:[
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
      prelims:[
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
      prelims:[
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
      <Route path="/event1" element={<Event eventName={events[0].eventName} eventDescription={events[0].description} eventGuidelines={events[0].guidelines} eventRules={events[0].prelims} eventFinals={events[0].finals}></Event>} />
      <Route path="/event2" element={<Event eventName={events[1].eventName} eventDescription={events[1].description} eventGuidelines={events[1].guidelines} eventRules={events[1].prelims} eventFinals={events[1].finals}></Event>} />
      <Route path="/event3" element={<Event eventName={events[2].eventName} eventDescription={events[2].description} eventGuidelines={events[2].guidelines} eventRules={events[2].prelims} eventFinals={events[2].finals}></Event>} />
      <Route path="/event5" element={<Event eventName={events[3].eventName} eventDescription={events[3].description} eventGuidelines={events[3].guidelines} eventRules={events[3].prelims} eventFinals={events[3].finals}></Event>} />
      <Route path="/event6" element={<Event eventName={events[4].eventName} eventDescription={events[4].description} eventGuidelines={events[4].guidelines} eventRules={events[4].prelims} eventFinals={events[4].finals}></Event>} />
      <Route path="/event7" element={<Event eventName={events[5].eventName} eventDescription={events[5].description} eventGuidelines={events[5].guidelines} eventRules={events[5].prelims} eventFinals={events[5].finals}></Event>} />
      <Route path="/event8" element={<Event eventName={events[6].eventName} eventDescription={events[6].description} eventGuidelines={events[6].guidelines} eventRules={events[6].prelims} eventFinals={events[6].finals}></Event>} />
        
    </Routes>
    
     <FooterNav></FooterNav> 
    
  </Router>)

  }

export default App;




