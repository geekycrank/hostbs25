import React from "react";

import logo from  "../assets/bslogo.png";
import "./WebTeam.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const WebTeam = () => {
    const teamMembers = [
        {
          name: "John Doe",
          role: "Frontend Developer",
          image: logo // Replace with actual image paths
        },
        {
          name: "Jane Smith",
          role: "Backend Developer",
          image: logo 
        },
        {
          name: "Emily Johnson",
          role: "Full Stack Developer",
          image: logo 
        },
        {
          name: "Michael Brown",
          role: "UI/UX Designer",
          image: logo 
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
          //showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} className="team-member-image" />
              <h3 className="team-member-name" style={{color:"#5f1a1f"}}>{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
            </div>
          ))}
        </Carousel>
      );
};



export default WebTeam;

