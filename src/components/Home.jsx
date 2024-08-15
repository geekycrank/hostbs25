import React from 'react';
import "./Home.css";
import "../assets/Home-bg-img.jpg";
import "..//assets/about_desktop.jpg"
import logo from "../assets/bslogo.png"
import bs_logo from "../assets/about_phone.png"
import WebTeam from "./WebTeam";
import CountdownTimer from './CountdownTimer';

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

       <div class="Timer" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
       <CountdownTimer targetDate={targetDate} />
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
              <p style={{margin:"0px",padding:"0px"}}>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 


              </p>
            </div>
           </div>
           

            
           </div>
             
          </div>

          <div className='about-D'>
            <h1>BrainStrain</h1>
             <div style={{display:"flex",maxWidth: "100vw",height: "100%"}}>
            <div className='about-D-image'>
            <img src={logo} alt="logo"></img>
            </div>

            <div className='about-D-inner'>
              <p>Brainstrain is an annual literary event hosted by The Literary and Debating Society of GCT, Coimbatore. Featuring over 10 events and attracting significant participation, it showcases the finest talents among competitors Brainstrain is an annual literary event hosted by The Literary and Debating Society of GCT, Coimbatore. Featuring over 10 events and attracting significant participation, it showcases the finest talents among competitors.</p>
              
            </div>
            </div>
          </div>


          </div>


          <div style={{display:"flex",flexDirection:"column"}}>
          <h3 style={{textAlign:"center"}}>Web Team</h3>
          <WebTeam></WebTeam>
          </div>
          
        
        </div> 
    
  );
}

export default Home;
