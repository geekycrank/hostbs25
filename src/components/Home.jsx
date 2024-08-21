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
          <h1>BrainStrain '24</h1>
          
          <p>starts in</p>
        </div>

        <div className="Timer" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
          <CountdownTimer targetDate={targetDate} />
          <p className='datee' style={{position:"absolute",bottom: "20%",fontFamily:"EFCOBrookshireRegular",fontSize:"1.3rem"}}>September 14</p>
        </div> 
      </div>

     
      <div className='about-page'>
        <div className="about">
           <div className='about-content'>
           <div className="about-header">
            <h2>About</h2>
           </div>
            
           <div className="about-body">
            <div className='about-image'><img src={bs_logo} alt="logo"></img></div>
            <div className='about-inner'>
              <p style={{margin:"0px",padding:"0px",fontSize:"1.5rem",fontFamily:"Kurale"}}>
              Brainstrain is an inter-collegiate literary fest hosted by the Literary and Debating Society of the Government College of Technology, Coimbatore. This fest features a multitude of literary events designed to bring out the hidden talents of participants while serving as a platform to connect like-minded individuals from diverse geographical backgrounds.
             
              </p>
            </div>
           </div>
           

            
           </div>
             
          </div>

          <div className='about-D'>
            <h1 style={{color:"#e8ddc0",marginBottom:"3%",fontSize:"2.5rem"}}>A b o u t</h1>
             <div className="about-D-body" style={{display:"flex",maxWidth: "80%",height:"50%",gap:"8%"}}>
            <div className='about-D-image' style={{width:"40%"}}>
            <img src={logo} alt="logo"></img>
            </div>

            <div className='about-D-inner' style={{width:"60%",backgroundColor:"#e8ddc0",borderRadius:"20px",color:"#5f1a1f"}}>
              <p style={{color:"inherit",fontSize:"1.3rem"}}>
              Brainstrain is an inter-collegiate literary fest hosted by the Literary and Debating Society of the Government College of Technology, Coimbatore. This fest features a multitude of literary events designed to bring out the hidden talents of participants while serving as a platform to connect like-minded individuals from diverse geographical backgrounds.
              </p>
              
            </div>
            </div>
          </div>


          </div>
      

      <div className="team" style={{display:"flex",flexDirection:"column",backgroundColor:"#e8ddc0",paddingBottom:"3%",height: "90vh"}}>
        <h2 style={{textAlign:"center",color:"#5f1a1f",fontFamily:"EFCOBrookshireRegular",padding:"4%",margin:"0%"}}>Web Team</h2>
        <WebTeam></WebTeam>
      </div>
          
      <div className="contact" id="Contact" style={{display:"flex",flexDirection:"column",alignItems:"center",color:"#e8ddc0",height:"100vh",padding:"2%"}}>
        <h1 style={{fontFamily:"EFCOBrookshireRegular",fontSize:"1.4rem",fontSize: "2.4rem",height: "25%",
    paddingTop: "5%"}}>Contact</h1>
        <div className="body-contact">
          <div className="icons" style={{display:"flex",alignItems:'center',justifyContent:"center",marginBottom: "4%"}}>
          <a href="mailto:litsociety.gct@gmail.com" target='blank'>
            <div className="icon1" style={{width:"58px",height:"58px"}}>
             <FontAwesomeIcon className="iconImage" icon={faEnvelope} style={{color: "#611a22",}} />
            </div>
            </a>

            <a href="https://www.instagram.com/literary_and_debating_society/" target='blank'>
            <div className="icon2"  style={{width:"58px",height:"58px"}} >
            <FontAwesomeIcon className="iconImage" icon={faInstagram} style={{color: "#611a22",}} />
            </div>
            </a>
            </div>

          <div className="contact-details" style={{textAlign:'center'}}>
            
            <div>
              <p>Arivumathi - 9344346700</p>
              <p>Dhanvarashan - 8220916740</p>
            </div>
          </div>
        </div>

        <div className="contact-last">
          <h4 style={{textAlign: "center"}}>Powered by The Literary and Debating Society </h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
