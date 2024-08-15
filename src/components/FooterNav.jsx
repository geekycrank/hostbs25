import React,{useEffect} from "react";
import { useLocation } from "react-router-dom";
import "./FooterNav.css"
function Footer_nav()
{
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
    return <div style={{display:"flex",justifyContent:"center"}}>

    <div className="buttons" >
    <div className='home-icon'>
    <a href="/" style={{outline:"none"}} /*</div>onClick={()=>{changelink("home")}}*/>
    <div class="circle-icon">
      <i class="fa-sharp fa-solid fa-house fa-2xl" ></i> 
  </div>
  </a>
    <p className={link==="home"?"text-under-icon-show":"text-under-icon"}>Home</p>


    </div>
<div className='events-icon'>
<a href="/Events" /*onClick={()=>{changelink("events")}} */>
<div class="circle-icon">
      <i class="fa-regular fa-calendar-check fa-2xl"></i> 
  </div>
  </a>

  <p className={link==="events"?"text-under-icon-show":"text-under-icon"}>Events</p>

</div>

<div className='register_icon'>
<a href="/Register" /* onClick={()=>{changelink("register")}}*/>
<div class="circle-icon">
      <i class="fa-solid fa-user fa-2xl"></i> 
  </div>
  </a>
  <p className={link==="register"?"text-under-icon-show":"text-under-icon"}>register</p>
</div>

<div className='contact-icon'>
<a href="/Contact" /*onClick={()=>{changelink("contact")}} */>
<div class="circle-icon">
      <i class="fa-solid fa-phone fa-2xl "></i> 
  </div>
  </a>
  <p className={link==="contact"?"text-under-icon-show":"text-under-icon"}>Contact</p>

</div>
     
</div>
  </div> 
  
}
export default Footer_nav;