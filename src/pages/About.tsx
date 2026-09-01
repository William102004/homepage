import React from 'react';
import '../css/About.css';
import AboutPhoto from '../textures/about-pic.png';
import resume from '../textures/William-Almaguer.pdf';
function About() {
  return (
    <section className="About">
      <div className="About-Layout">
      <h1 className="About-title">About William</h1>
      <div className="About-content">
        <div className="About-pic">
          <img src={AboutPhoto} alt="Profile Picture" className='Profile-Pic' />
        </div>
        <div className="About-text">
          <p>
            I am a Fourth Year Computer Science and Statistics student at Florida State University from Miami, Florida. Motivated in exploring the world of how technology and Data intersect. I have stong foundations in the C-Family languages, java, python,SQL. I have experience in web development, databases, data structures, and algorithms.             
          </p>
          <p>
              Passionate about learning new things and currently want to expand skills in data visualization and data analysis, in order to turn skills with data and web development into meaningful applications and insights. Seeking opportunities to work in a passionate group of people that can hopefully help to better each other and grow. 
          </p>
      </div>
      </div>
      <aside className="About-aside">
        <div className="sidecard">
          <h3>Connect</h3>
          <a href="https://www.linkedin.com/in/william-almaguer/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/William10182004" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/william.almaguer1/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={resume} target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>
        <div className="sidecard">
          <h3>Contact</h3>
          <p>Email: William10182004@gmail.com</p>
          <p>Phone: (786)-797-2876</p>
        </div>
      </aside>
      </div>
    </section>
  );
}

export default About;
