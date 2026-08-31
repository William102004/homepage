import React from 'react';
import '../css/About.css';
import AboutPhoto from '../textures/about-pic.png';
function About() {
  return (
    <section className="About">
      <h1 className="About-title">About William Almaguer</h1>
      <div className="About-content">
        <div className="About-pic">
          <img src={AboutPhoto} alt="Profile Picture" className='Profile-Pic' />
        </div>
        <div className="About-text">
          <p>
            Hello! My name is William Almaguer"
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
