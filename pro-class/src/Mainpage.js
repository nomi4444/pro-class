import React from 'react';
import './Mainpage.css';
import yourVideo from './Assets/your-video.mp4'; // Adjust the path and file extension

function Mainpage() {
  return (
    <div className="mainpage-container">
      <div className="hero-banner">
        <div className="banner-content">
          <h1>We Are on a Mission to Educate the World</h1>
          <div className="cta-buttons">
            <button>I am a student exploring studying abroad</button>
            <button>I am a recruitment partner</button>
            <button>I work at a school</button>
          </div>
        </div>
        <video className="background-video" autoPlay loop muted>
          <source src={yourVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Mainpage;
