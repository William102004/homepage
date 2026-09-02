import React from 'react';
import '../css/Experience.css';

function Experience() {
  return (
    <section className="Experience-page">
      <div className="Experience-layout">
        <h1 className="Experience-title">Experience</h1>

        <div className="Experience-content">
          <h2 className="Experience-section-heading">Education</h2>
          <div className="Education-list">
            <div className="Education-card">
              <h3>Florida State University</h3>
              <p className="Education-degree">Bachelor of Science in Computer Science</p>
              <p className="Education-date">Expected Graduation: May 2027</p>
            </div>
            <div className="Education-card">
              <h3>Florida State University</h3>
              <p className="Education-degree">Bachelor of Science in Statistics</p>
              <p className="Education-date">Expected Graduation: May 2027</p>
            </div>
          </div>

          <h2 className="Experience-section-heading">Work Experience</h2>
          <div className="Experience-card">
            <h3>Website and Widget Development</h3>
            <p>
              Developed a website for Wiltz Dermatology office using Wix and WordPress. In
              addition, I installed widgets connecting to the Dermatology platform using
              JavaScript. This helped develop capabilities in managing code made by others and
              implementing it for usage in a different environment.
            </p>
            <a
              className="Experience-link"
              href="https://www.wiltzderm.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Wiltz Dermatology Website →
            </a>
          </div>

          <h2 className="Experience-section-heading">Projects</h2>
          <div className="Projects-grid">
            <div className="Project-card">
              <div className="Project-thumbnail" aria-hidden="true">
                <span>Screenshot coming soon</span>
              </div>
              <div className="Project-body">
                <h3>Expense Tracker Web Application</h3>
                <p className="Project-stack">PHP · JavaScript · MySQL · HTML/CSS</p>
                <p>
                  A database-driven application with user creation for accounts, transactions,
                  and budgets. Features include monthly spending analysis and a budget comparison
                  page with trend signaling for users to watch spending behavior.
                </p>
              </div>
            </div>

            <div className="Project-card">
              <div className="Project-thumbnail" aria-hidden="true">
                <span>Screenshot coming soon</span>
              </div>
              <div className="Project-body">
                <h3>Movie App (iOS)</h3>
                <p className="Project-stack">Swift · Firebase</p>
                <p>
                  A Netflix-like iOS mobile application built in Swift, utilizing Firebase as the
                  backend database.
                </p>
              </div>
            </div>

            <div className="Project-card">
              <div className="Project-thumbnail" aria-hidden="true">
                <span>Screenshot coming soon</span>
              </div>
              <div className="Project-body">
                <h3>Yahtzee Game</h3>
                <p className="Project-stack">Java</p>
                <p>
                  A fully featured digital Yahtzee game with a fun and simple interface allowing
                  for persistent game states. Features include large multiplayer games, save and
                  load functionality, and a visual interface for the dice.
                </p>
              </div>
            </div>

            <div className="Project-card">
              <div className="Project-thumbnail" aria-hidden="true">
                <span>Screenshot coming soon</span>
              </div>
              <div className="Project-body">
                <h3>E-Commerce Shop</h3>
                <p className="Project-stack">.NET MAUI · .NET 8.0 · JSON · C#</p>
                <p>
                  A cross-platform shopping application with a CRUD system for inventory
                  management, a consistent cart, checkout, and search capabilities. Includes
                  Swagger documentation for API testing and file-based data persistence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
