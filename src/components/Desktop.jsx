import React from 'react';
import './Desktop.css';

function Desktop() {
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

  return (
    <>
      {events.map((event, index) => (
        <div className="desk" key={index}>
          <div className="frame1">
            <div className="eventImage">
              <img src={event.img} alt="Event" />
            </div>
            <div className="eventName">
              <h1>{event.title}</h1>
            </div>
          </div>
          <div className="frame2">
            <div className="description">
              {event.description}
            </div>
            <a href={event.link}>
              <div className="discover">
                DISCOVER MORE
              </div>
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default Desktop;
