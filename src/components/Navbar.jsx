import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css"
import logo from  "../assets/bslogo.png"; 

function Navbar() {

  const [link, setLink] = React.useState("home");
    const location = useLocation(); // Get the current location

    // Update the active link based on the current path
    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === "/") {
            setLink("home");
        } else if (currentPath === "/Contact") {
            setLink("contact");
        } else if (currentPath === "/Events") {
            setLink("events");
        } else if (currentPath === "/Register") {
            setLink("register");
        }
    }, [location]); // Runs whenever the location changes
  return (
    <nav class="navbarr" style={{width:"100%",display:"flex"}} >
         <img src={logo} alt="logo" className="logo"></img>
        <h2 className='brainstrain' style={{margin:"0px",color:'inherit',paddingLeft:"10px"} }>BrainStrain'24</h2>
         <div class="top-nav">
          <p><a href="/">home</a></p>
          <p><a href="/Events">events</a></p>
          <p><a href="/Register">register</a></p>
          {link!=="events" &&
          <p><a href="#Contact">contact</a></p>
          }
         </div>
    </nav>
  );
}

export default Navbar;
