import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

function Navbar() {
  return (
    <nav style={{width:"100%",display:"flex",position:"fixed",backgroundColor:'whitesmoke'}} >
     
        <h1 className='grey-qo-regular ' style={{margin:"0px"}}>Brain Strain</h1>
      
    </nav>
  );
}

export default Navbar;
