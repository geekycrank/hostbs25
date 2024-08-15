import React from 'react';
import "./Home.css";
import "../assets/Home-bg-img.jpg";
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

        <div className="about">

         <p>about pages</p>
        </div> 
    </div>
  );
}

export default Home;
