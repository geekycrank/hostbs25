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
              {props.eventDescription}
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
  {props.eventRules.map((rule, index) => {
    if (Array.isArray(rule)) {
      return (
        <ul key={index} style={{ listStyleType: "none", paddingLeft: "20px", margin: 0 }}>
          {rule.map((subRule, subIndex) => (
            <li key={subIndex} style={{ paddingLeft: "20px" }}>
              {subRule}
            </li>
          ))}
        </ul>
      );
    } else if (typeof rule === "string") {
      return (
        <li key={index}>
          {rule}
        </li>
      );
    } else {
      return null;
    }
  })}
</ol>
 <div className="rulesHeading">Finals</div>
               <ol className="rulesContent">
  {props.eventFinals.map((final, index) => {
    if (Array.isArray(final)) {
      return (
        <ul key={index} style={{ listStyleType: "none", paddingLeft: "20px", margin: 0 }}>
          {final.map((subItem, subIndex) => (
            <li key={subIndex} style={{ paddingLeft: "20px" }}>
              {subItem}
            </li>
          ))}
        </ul>
      );
    } else if (typeof final === "string") {
      return (
        <li key={index}>
          {final}
        </li>
      );
    } else {
      return null;
    }
  })}
</ol>
            </div>
          )}

          <div className="prize-pool" style={{display:"flex",width:"100%", color:"#5f1a1f",fontFamily:"kurale"}}>
             
              <h3 style={{width:"100%"}}>PRIZE POOL Rs.{props.prize}</h3>
            </div>
        </div>

      </div>
    </div>
  );
}

export default Event;
