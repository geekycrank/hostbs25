import React from 'react';
import "./Home.css";
import "../assets/Home-bg-img.jpg";
import "../assets/about_desktop.png"
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
              The conglomeration of the brightest minds enhancing the participant’s knowledge and creative potentials. The 3 day annual symposium showcases 15+ events and flagship contests of crystal gazing technology. Abacus's coverage and deliberations of earlier symposia have been a grand success with insatiable thirst for technological development rejuvenating the technology with innovation. This year, Abacus is back offline on a grander scale with an innovative edge to all the events.

              </p>
            </div>
           </div>
           

            
           </div>
             
          </div>

          <div className='about-D'>
            <h1 style={{color:"#e8ddc0",marginBottom:"3%"}}>B R A I N S T R A I N ' 24</h1>
             <div style={{display:"flex",maxWidth: "80%",height:"50%",gap:"8%"}}>
            <div className='about-D-image' style={{width:"40%"}}>
            <img src={logo} alt="logo"></img>
            </div>

            <div className='about-D-inner' style={{width:"60%",backgroundColor:"#e8ddc0",borderRadius:"20px",color:"#5f1a1f"}}>
              <p style={{color:"inherit",fontSize:"1.3rem"}}>Brainstrain is an annual literary event hosted by The Literary and Debating Society of GCT, Coimbatore. Featuring over 10 events and attracting significant participation, it showcases the finest talents among competitors Brainstrain is an annual literary event hosted by The Literary and Debating Society of GCT, Coimbatore. Featuring over 10 events and attracting significant participation, it showcases the finest talents among competitors.</p>
              
            </div>
            </div>
          </div>


          </div>


          <div style={{display:"flex",flexDirection:"column",backgroundColor:"#e8ddc0",paddingBottom:"5%"}}>
          <h2 style={{textAlign:"center",color:"#5f1a1f",fontFamily:"EFCOBrookshireRegular",padding:"4%",margin:"0%"}}>Web Team</h2>
          <WebTeam></WebTeam>
          </div>

          
          
          <div className="contact"  id="Contact" style={{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#5f1a1f",color:"#e8ddc0",height:"50vh",padding:"2%"}}>
             <h1>B R A I N S T R A I N '24</h1>
             <div class="icons" style={{display:"flex"}}>
              <h3>icon</h3>
              <h3>icon</h3>
              <h3>icon</h3>
             </div>

             <div class="contact-details" style={{textAlign:'center'}}>
             <h2>CONTACT</h2>
             <div>
              <p>
              Arivumathi - 9876543210

              </p>
              <p>
              Arivumathi - 9876543210

              </p>
             </div>
        </div>
             <div>
              <h4>Presented by The Literary and Debating Society </h4>
             </div>

             </div>
             

          </div>


          
          
        
       
    
  );
}

export default Home;
