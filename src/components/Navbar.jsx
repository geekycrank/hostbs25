import React from 'react';

import "./Navbar.css"
import logo from  "../assets/bslogo.png"; 

function Navbar() {
  return (
    <nav class="navbar" style={{width:"100%",display:"flex"}} >
         <img src={logo} alt="logo" className="logo"></img>
        <h2 className='grey-qo-regular' style={{margin:"0px",color:'inherit',paddingLeft:"10px"} }>BrainStrain'24</h2>
         <div class="top-nav" style={{display:"flex"}}>
          <p><a href="/">home</a></p>
          <p><a href="/Events">events</a></p>
          <p><a href="/Register">register</a></p>
          <p><a href="/Contact">contact</a></p>
         </div>
    </nav>
  );
}

export default Navbar;
