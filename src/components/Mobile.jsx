import 'react-responsive-carousel/lib/styles/carousel.min.css';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';


import './Mobile.css';
import JamImage from "../assets/JAM.png";
import MicrotaleImage from "../assets/MICROTALE.png";
import PoemImage from "../assets/POEM.png";
import ShipwreckImage from "../assets/SHIPWRECK.png";
import DebateImage from "../assets/DEBATE.png";
import DumbCImage from "../assets/DumbC.png";
import QuizImage from "../assets/QUIZ.png";
import PuzzleCrosswordImage from "../assets/PUZZLECROSSWORD.png";
import UnoMinutoImage from "../assets/UNO-MINUTO.png";
import AdzapImage from "../assets/ADZAP.png";
import DramaImage from "../assets/DRAMA.png";



function Mobile()
{
  const events = [
    {
      link: "/event1",
      contact:"7010922948",
      prize:"2250",
      img: AdzapImage,
      title: "Adzap",
      description: "Pitch the most outrageous product ideas imaginable! Say invisible socks or a smartphone that only works when you're asleep. Get creative, get funny, and keep the audience in stitches."
    },
    {
      link: "/event2",
      contact:"7845080225",
      prize:"1500",
      img: DebateImage,
      title: "Debate",
      description: "Prepare to engage in a battle of wits, where your critical thinking and communication skills will be put to the ultimate test. This event is designed to test your ability to argue both for and against a given topic, clearly and coherently, in a limited time setting."
    },
    
    {
      link: "/event3",
      contact:"8248255395",
      prize:"3750",
      img: DramaImage,
      title: "Drama",
      description: "Get ready to bring your acting skills to life and command the stage! This is your moment to step into the spotlight and show the world what you’ve got. It’s not just about performing—it’s about seizing the chance to be at the centre of attention and express your passion for drama. Get ready to entertain, explore, and let your talent shine when it’s your time to take the stage. The stage is set, and the spotlight is waiting for you!"
    },
    {
      link: "/event4",
      contact:"9551014349",
      prize:"2250",
      img: DumbCImage,
      title: "Dumb-C",
      description: "Demonstrate your perfect partnership with a game of Dumb Charades! This classic and entertaining game invites you and your partner to get imaginative with clues and lively gestures. It’s an ideal way to highlight your teamwork while enjoying endless laughs together!"
    },
    
    {
      link: "/event5",
      contact:"9344346700",
      prize:"1500",
      img: JamImage,
      title: "Jam",
      description: "Just A Minute (JAM) is an exhilarating event that challenges participants to speak spontaneously on a given topic for one minute. This fast-paced competition not only tests quick thinking and creativity but also hones communication skills under pressure, providing an adrenaline-fueled experience that pushes speakers to their limits."
    },
    {
      link: "/event6",
      contact:"8667721591",
      prize:"1500",
      img: MicrotaleImage,
      title: "Microtale",
      description: "Embark on a literary journey of brevity and depth at our Microtale event! With just a few words, weave stories that linger in minds and hearts. Join us for poetic magic where the tiniest tales hold the mightiest power by unleashing your creativity, crafting miniature worlds where every letter counts."
    },
    {
      link: "/event7",
      contact:"8667721591",
      prize:"1500",
      img: PoemImage,
      title: "Poem",
      description: "Step into a realm where words dance with imagery, let the picture guide your lyrical spree. The participants will be given a picture about which he/she has to write a poem entitled a topic that suits it the best."
    },
    {
      link: "/event8",
      contact:"7812868428",
      prize:"2250",
      img: PuzzleCrosswordImage,
      title: "Puzzle",
      description: "Prepare to twist your mind and challenge your thinking at our Puzzle Event! Dive into a world of brainteasers that will test your logic and creativity. From cryptic riddles to intricate puzzles, every challenge will test your logic and wit. Are you ready to unlock the mysteries?"
    },
    {
      link: "/event9",
      contact:"8072477148",
      prize:"2250",
      img: QuizImage,
      title: "Quiz",
      description: "Get ready for a fun quiz that tests your knowledge and quick thinking. Compete with the best and aim to be the top quiz champion. Only the sharpest will win. Show your skills and rise to the challenge!"
    },
    {
      link: "/event10",
      contact:"6374437435",
      prize:"1500",
      img: ShipwreckImage,
      title: "Shipwreck",
      description: "A Tempest of wit and wisdom, where words and sense of humour are the life boats that save or sink, you're a crewmate on a sinking ship, and there's only one life jacket left. Your mission? Convince the captain to save you!."
    },
    {
      link: "/event11",
      contact:"9361140647",
      prize:"1500",
      img: UnoMinutoImage,
      title: "Uno Minuto",
      description: "Are you a person who can stun the observer with your electrifying performance. Then, this is for you! The stage is all yours for those 60 seconds. May it be any talent that makes you unique, may it be anything. Come on people! Indulge us into astonishment with you stunning talents!!The stage awaits."
    }
   
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