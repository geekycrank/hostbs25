import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';


import './Mobile.css';





function Mobile()
{
  const events = [
    {
      link:"/event1",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-fgwmpjs1IWLX6Zk_b1Nmx9q51-tnsixC1n7SoiMbGYCoLUw",
      title: "SHIPWRECK",
      description: "A Tempest of wit and wisdom, where words and sense of humour are the life boats that save or sink, you're a crewmate on a sinking ship, and there's only one life jacket left. Your mission? Convince the captain to save you!"
    },
    {
      link:"/event2",  
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-fgwmpjs1IWLX6Zk_b1Nmx9q51-tnsixC1n7SoiMbGYCoLUw",
      title: "SHIPWRECK",
      description: "A Tempest of wit and wisdom, where words and sense of humour are the life boats that save or sink, you're a crewmate on a sinking ship, and there's only one life jacket left. Your mission? Convince the captain to save you!."
    },
    {
        link:"/event3",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-fgwmpjs1IWLX6Zk_b1Nmx9q51-tnsixC1n7SoiMbGYCoLUw",
        title: "SHIPWRECK",
        description: "A Tempest of wit and wisdom, where words and sense of humour are the life boats that save or sink, you're a crewmate on a sinking ship, and there's only one life jacket left. Your mission? Convince the captain to save you!."
      },
      {
        link:"/event4",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-fgwmpjs1IWLX6Zk_b1Nmx9q51-tnsixC1n7SoiMbGYCoLUw",
        title: "SHIPWRECK",
        description: "A Tempest of wit and wisdom, where words and sense of humour are the life boats that save or sink, you're a crewmate on a sinking ship, and there's only one life jacket left. Your mission? Convince the captain to save you!."
      },
      {
        link:"/event5",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-fgwmpjs1IWLX6Zk_b1Nmx9q51-tnsixC1n7SoiMbGYCoLUw",
        title: "SHIPWRECK",
        description: "A Tempest of wit and wisdom, where words and sense of humour are the life boats that save or sink, you're a crewmate on a sinking ship, and there's only one life jacket left. Your mission? Convince the captain to save you!."
      },
      {
        link:"/event6",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-fgwmpjs1IWLX6Zk_b1Nmx9q51-tnsixC1n7SoiMbGYCoLUw",
        title: "SHIPWRECK",
        description: "A Tempest of wit and wisdom, where words and sense of humour are the life boats that save or sink, you're a crewmate on a sinking ship, and there's only one life jacket left. Your mission? Convince the captain to save you!."
      },
      {
        link:"/event8",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-fgwmpjs1IWLX6Zk_b1Nmx9q51-tnsixC1n7SoiMbGYCoLUw",
        title: "SHIPWRECK",
        description: "A Tempest of wit and wisdom, where words and sense of humour are the life boats that save or sink, you're a crewmate on a sinking ship, and there's only one life jacket left. Your mission? Convince the captain to save you!."
      },
  ];


  const handleDivClick = (link) => {
    window.location.href = link;
  };
    
    return (
        <div className="Mobile">
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
            {event.title}
          </div>
          <div className="event-description">
             {event.description}
          </div>
          <div className="rm"  onClick={() => handleDivClick(event.link)}>Read More</div>
        </div>
      ))}
    </Carousel>
        </div>
    );
}

export default Mobile;