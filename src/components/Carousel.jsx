import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css'; // Add your custom styles here

// Import your custom arrow images
import leftArrow from '../assets/arrow.png';
import rightArrow from '../assets/arrow.png';

function EventCarousel() {
  const events = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-fgwmpjs1IWLX6Zk_b1Nmx9q51-tnsixC1n7SoiMbGYCoLUw",
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
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-fgwmpjs1IWLX6Zk_b1Nmx9q51-tnsixC1n7SoiMbGYCoLUw",
      title: "SHIPWRECK",
      description: "A Tempest of wit and wisdom, where words and sense of humour are the life boats that save or sink, you're a crewmate on a sinking ship, and there's only one life jacket left. Your mission? Convince the captain to save you!."
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-fgwmpjs1IWLX6Zk_b1Nmx9q51-tnsixC1n7SoiMbGYCoLUw",
      title: "SHIPWRECK",
      description: "A Tempest of wit and wisdom, where words and sense of humour are the life boats that save or sink, you're a crewmate on a sinking ship, and there's only one life jacket left. Your mission? Convince the captain to save you!."
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-fgwmpjs1IWLX6Zk_b1Nmx9q51-tnsixC1n7SoiMbGYCoLUw",
      title: "SHIPWRECK",
      description: "A Tempest of wit and wisdom, where words and sense of humour are the life boats that save or sink, you're a crewmate on a sinking ship, and there's only one life jacket left. Your mission? Convince the captain to save you!."
    }
  ];

  const renderCustomArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button type="button" onClick={onClickHandler} title={label} className="custom-arrow custom-arrow-prev">
        <img src={leftArrow} alt="Previous" />
      </button>
    );

  const renderCustomArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button type="button" onClick={onClickHandler} title={label} className="custom-arrow custom-arrow-next">
        <img src={rightArrow} alt="Next" />
      </button>
    );

  return (
    <Carousel 
      showThumbs={false} 
      showStatus={false} 
      showIndicators={false}
      className="event-carousel" 
      infiniteLoop={true} 
      emulateTouch={true}
      renderArrowPrev={renderCustomArrowPrev}
      renderArrowNext={renderCustomArrowNext}>
      {events.map((event, index) => (
        <div key={index} className="event-slide-wrapper">
          <div className="event-slide">
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
        </div>
      ))}
    </Carousel>
  );
}

export default EventCarousel;



