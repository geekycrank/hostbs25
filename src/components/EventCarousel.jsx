import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './EventCarousel.css'; // Add your custom styles here
// import image1 from '../assets/image 25.png';

// Correct import path for the image
// import image1 from './assets/image25.png'; 

function EventCarousel() {
  const events = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-fgwmpjs1IWLX6Zk_b1Nmx9q51-tnsixC1n7SoiMbGYCoLUw", // Directly use the imported image
      title: "SHIPWRECK",
      description: "A Tempest of wit and wisdom, where words and sense of humour are the life boats that save or sink, you're a crewmate on a sinking ship, and there's only one life jacket left. Your mission? Convince the captain to save you!"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-fgwmpjs1IWLX6Zk_b1Nmx9q51-tnsixC1n7SoiMbGYCoLUw",
      title: "SHIPWRECK",
      description: "A Tempest of wit and wisdom, where words and sense of humour are the life boats that save or sink, you're a crewmate on a sinking ship, and there's only one life jacket left. Your mission? Convince the captain to save you!."
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-fgwmpjs1IWLX6Zk_b1Nmx9q51-tnsixC1n7SoiMbGYCoLUw",
      title: "SHIPWRECK",
      description: "A Tempest of wit and wisdom, where words and sense of humour are the life boats that save or sink, you're a crewmate on a sinking ship, and there's only one life jacket left. Your mission? Convince the captain to save you!."
    }
  ];

  return (
    <>
    <Carousel 
      showThumbs={false} 
      showStatus={false} 
      showIndicators={false} // Hide the dots
      className="event-carousel" 
      infiniteLoop={true} 
      emulateTouch={true}>
      {events.map((event, index) => (
        <div key={index} className="event-slide">
          <div className="event-image">
            <img src={event.img} alt={event.title} />
          </div>
          <div className="title">
            <h2>{event.title}</h2>
          </div>
          <div className="event-description">
            <p>{event.description}</p>
          </div>
          <div className="rm">Read More</div>
        </div>
      ))}
    </Carousel>


<Carousel 
      showThumbs={false} 
      showStatus={false} 
      showIndicators={false} // Hide the dots
      className="event-carousel" 
      infiniteLoop={true} 
      emulateTouch={true}>
      {events.map((event, index) => (
        <div key={index} className="event-slide">
          <div className="event-image">
            <img src={event.img} alt={event.title} />
          </div>
          <div className="title">
            <h2>{event.title}</h2>
          </div>
          <div className="event-description">
            <p>{event.description}</p>
          </div>
          <div className="rm">Read More</div>
        </div>
      ))}
    </Carousel>
    </>
  );
}

export default EventCarousel;
