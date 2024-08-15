import React from 'react';
import "./Home.css";
import "../assets/Home-bg-img.jpg";

function Home() {
  return (
    <div> 
    <div className="home" >
    
        <div className="buttons" >
          <div className='home-icon'>
          <div class="circle-icon">
            <i class="fa-sharp fa-solid fa-house fa-2xl" ></i> 
        </div>



          </div>
    <div className='contact-icon'>
    <div class="circle-icon">
            <i class="fa-regular fa-calendar-check fa-2xl"></i> 
        </div>

    </div>

    <div className='register_icon'>
    <div class="circle-icon">
            <i class="fa-solid fa-user fa-2xl"></i> 
        </div>

    </div>

    <div className='events-icon'>
    <div class="circle-icon">
            <i class="fa-solid fa-phone fa-2xl "></i> 
        </div>
    
    </div>
           
    
        </div> 
        </div>

        <div className="about">

          <p>sdfdsfsdfsfsfsdfsdfsdfdsfsfsdfsdfsdfdsfdsfsdfsdfsdf
          fsdfsdfsdfsddf  dasasd  sdadasdasdasdasdadasdasdasdasdasd
          asdasdasdasdasd
          asdasdasdasdasdasdadadasd
          asdsadasdadasdasdasdasdad
          asdasdasdasddasdasdasdasdasdasdasdasdasdasd</p>
        </div> 
    </div>
  );
}

export default Home;
