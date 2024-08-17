import React from "react";
import "./Event.css";

function Event(props) {
  return (
    <div className="Event">
       <div className="outerBox">
           <div className="innerBox">
              <div className="eventName">
                  {props.eventName}
              </div>

              <div className="eventDescription">
                   <div className="descHeading">Description</div>
                   <div className="descContent">
                        Get ready for a fun quiz that tests your knowledge and quick thinking. Compete with the best and aim to be the top quiz champion. Only the sharpest will win. Show your skills and rise to the challenge!
                   </div>
              </div>

              <div className="guidelines">
                  <div className="guideHeading">Guidelines</div>
                  <ol className="guideContent">
                     {props.eventGuidelines.map((guideline, index) => (
                     <li key={index}>{guideline}</li>
                      ))}
                  </ol> 
              </div>

              <div className="rules">
                  <div className="rulesHeading">Rules</div>
                  <ol className="rulesContent">
                     {props.eventRules.map((guideline, index) => (
                     <li key={index}>{guideline}</li>
                      ))}
                  </ol> 
              </div>
           </div>
       </div>
    </div>
  );
}

export default Event;



{/* <h1>{props.eventName}</h1>
      <h2>{props.eventDescription}</h2>
      <ol>
        {props.eventGuidelines.map((guideline, index) => (
          <li key={index}>{guideline}</li>
        ))}
      </ol> */}
