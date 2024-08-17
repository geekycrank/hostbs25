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

          {!props.eventFinals || props.eventFinals.length === 0 ? (
            <div className="rules">
              <div className="rulesHeading">Rules</div>
              <ol className="rulesContent">
                {props.eventRules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ol>
            </div>
          ) : (
            <div className="rules">
              <div className="rulesHeading">Rules</div>
              <div className="rulesHeading">Prelims</div>
              <ol className="rulesContent">
               {props.eventRules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ol>
               <div className="rulesHeading">Finals</div>
              <ol className="rulesContent">
               {props.eventFinals.map((final, index) => (
                  <li key={index}>{final}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Event;
