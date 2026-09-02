import React from 'react';
import About from './About';
import profilePhoto from '../textures/William-Profile-Photo.png';
import resumePdf from '../textures/William-Almaguer.pdf';
import githubLogo from '../textures/github.png';
import linkedinLogo from '../textures/linkedin.png';
import '../css/Home.css';

function Home() {
  return (
    <main className="Home">
        <section className="hero">
            <div className="hero-content">
                <div className="hero-left">
                    <div className="hero-image">
                        <img src={profilePhoto} alt="Profile Picture" className='Profile-Pic' />
                    </div>
                </div>
                <div className="hero-right">
                    <div className="hero-text">
                        <h1>William Almaguer</h1>
                        <h2>Software Development, Data Analysis, Statistics, and Data Visualization</h2>
                    </div>
                    <div className="hero-buttons">
                        <a href={resumePdf} target="_blank" rel="noopener noreferrer" className= "btn">Download CV</a>
                        <a href="/contact" className="btn">Contact Information</a>
                    </div>
                    <div className="hero-social">
                        <img src={linkedinLogo} alt="My Linkedin" className="icon" onClick={() => window.open('https://www.linkedin.com/in/william-almaguer-b680432ab/', '_blank')} />
                        <img src={githubLogo} alt="My Github" className="icon" onClick={() => window.open('https://github.com/William102004', '_blank')} />
                    </div>
                </div>
            </div>
        </section>
    </main>
  );
}

export default Home;