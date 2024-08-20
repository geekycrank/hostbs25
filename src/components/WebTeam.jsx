import React from "react";

import logo from  "../assets/bslogo.png";
import "./WebTeam.css";
import giri from "../assets/Giri.jpg";
import barath from "../assets/Barath.jpeg";
import megu from "../assets/Megu.jpg";
import bala from "../assets/Bala.jpg";
import raga from "../assets/Raga.jpg";
import balaji from "../assets/Balaji.jpg";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const WebTeam = () => {
    const teamMembers = [
        {
          name: "Giridharan",
          role: "Web Developer",
          image: giri // Replace with actual image paths
        },
        {
          name: "BarathKumar",
          role: "Web Developer",
          image: barath 
        },
        {
          name: "Megavannan",
          role: "Designer",
          image: megu
        },
        {
          name: "Balasakthi",
          role: "UI Designer",
          image: bala
        },
        {
          name: "RagaPriyanka",
          role: "Designer",
          image: raga
        },
        {
          name: "Balaji",
          role: "Designer",
          image: balaji
        }
        // Add more team members as needed
      ];
    
      const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
      return (
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 1s ease"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} className="team-member-image" />
              <h3 className="team-member-name" style={{color:"#5f1a1f",fontFamily:"kurale"}}>{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
            </div>
          ))}
        </Carousel>
      );
};



export default WebTeam;

