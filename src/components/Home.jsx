import React from 'react';
import "./Home.css";
import "../assets/Home-bg-img.jpg";
import "../assets/about_desktop.png";
import logo from "../assets/bslogo.png";
import bs_logo from "../assets/about_phone.png";
import "../assets/Contact_bg.png";
import WebTeam from "./WebTeam";
import CountdownTimer from './CountdownTimer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';



function Home() {
  const targetDate = '2024-09-14T08:59:59'; 

  return (
    <div style={{maxWidth:"100vw"}}> 
      <div className="home" style={{color:"#5f1a1f"}}>
        <div className="presents-quote" style={{display:"flex", flexDirection:"column"}}>
          <h3 style={{padding:"0px",margin:"0px"}}>The Literary and Debating Society </h3>
          <p>presents</p>
        </div>
        
        <div className="Brainstrain-name">
          <h1>BrainStrain'24</h1>
          <p>starts in</p>
        </div>

        <div className="Timer" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <CountdownTimer targetDate={targetDate} />
        </div> 
      </div>

      <div className="about-page">
        {/* ...Other sections... */}
      </div>

      <div style={{display:"flex",flexDirection:"column",backgroundColor:"#e8ddc0",paddingBottom:"5%"}}>
        <h2 style={{textAlign:"center",color:"#5f1a1f",fontFamily:"EFCOBrookshireRegular",padding:"4%",margin:"0%"}}>Web Team</h2>
        <WebTeam></WebTeam>
      </div>
          
      <div className="contact" id="Contact" style={{display:"flex",flexDirection:"column",alignItems:"center",color:"#e8ddc0",height:"100vh",padding:"2%"}}>
        <h1>B R A I N S T R A I N '24</h1>
        <div className="body-contact">
          <div className="icons" style={{display:"flex",alignItems:'center',justifyContent:"center",marginBottom: "4%"}}>
            <div className="icon1" >
              <FontAwesomeIcon className="iconImage" icon={faEnvelope} style={{color: "#611a22",}} />
            </div>
            <div className="icon2" >
            <FontAwesomeIcon className="iconImage" icon={faInstagram} style={{color: "#611a22",}} />
            </div>
            <div className="icon3" >
            <FontAwesomeIcon className="iconImage" icon={faLinkedinIn} style={{color: "#611a22",}} />
            </div>
          </div>

          <div className="contact-details" style={{textAlign:'center'}}>
            <h2>CONTACT</h2>
            <div>
              <p>Arivumathi - 9876543210</p>
              <p>Arivumathi - 9876543210</p>
            </div>
          </div>
        </div>

        <div className="contact-last">
          <h4 style={{textAlign: "center"}}>Presented by The Literary and Debating Society </h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
