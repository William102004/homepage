import React from 'react';
import '../css/Experience.css';
import ProjectGallery from '../components/ProjectGallery';

import expenseAccounts from '../textures/ExpenseTracker/AccountsPage.png';
import expenseBudgets from '../textures/ExpenseTracker/Budgets Page.png';
import expenseLogin from '../textures/ExpenseTracker/LoginScreen.png';
import expenseMonthlySpending from '../textures/ExpenseTracker/Monthly Spending.png';
import expenseRegister from '../textures/ExpenseTracker/RegisterPage.png';
import expenseRiskAnalysis from '../textures/ExpenseTracker/Spending Risk Analysis.png';
import expenseTransactions from '../textures/ExpenseTracker/TransactionsPage.png';
import expenseSpendingVsBudget from '../textures/ExpenseTracker/spending vs Budget.png';

import movieAppHome from '../textures/MovieApp/MovieApp.png';
import movieAppSearch from '../textures/MovieApp/MovieApp Search.png';
import movieAppRegister from '../textures/MovieApp/MovieAppRegister.png';
import movieAppPlaying from '../textures/MovieApp/MoviePlaying.png';
import movieAppPlaying2 from '../textures/MovieApp/MoviePlaying2.png';

import yahtzeeGame from '../textures/Yahtzee/YahtzeeGame.png';
import yahtzeePlayerName from '../textures/Yahtzee/PlayerName.png';
import yahtzeeJavaPlayers from '../textures/Yahtzee/JavaPlayers.png';
import yahtzeeSession from '../textures/Yahtzee/GameSession.png';
import yahtzeeExit from '../textures/Yahtzee/ExitGame.png';

import ecommerceStart from '../textures/E-Commerce Shop/E-commerce start.png';
import ecommerceShop from '../textures/E-Commerce Shop/E-commerce shop.png';
import ecommerceInventory from '../textures/E-Commerce Shop/E-commerce inventory.png';
import ecommerceCheckout from '../textures/E-Commerce Shop/Checkout.png';

const expenseTrackerImages = [
  { src: expenseLogin, alt: 'Expense Tracker – login screen' },
  { src: expenseRegister, alt: 'Expense Tracker – register page' },
  { src: expenseAccounts, alt: 'Expense Tracker – accounts page' },
  { src: expenseTransactions, alt: 'Expense Tracker – transactions page' },
  { src: expenseMonthlySpending, alt: 'Expense Tracker – monthly spending analysis' },
  { src: expenseSpendingVsBudget, alt: 'Expense Tracker – spending vs budget' },
  { src: expenseBudgets, alt: 'Expense Tracker – budgets page' },
  { src: expenseRiskAnalysis, alt: 'Expense Tracker – spending risk analysis' },
];

const movieAppImages = [
  { src: movieAppHome, alt: 'Movie App – home screen' },
  { src: movieAppSearch, alt: 'Movie App – search' },
  { src: movieAppRegister, alt: 'Movie App – register screen' },
  { src: movieAppPlaying, alt: 'Movie App – now playing' },
  { src: movieAppPlaying2, alt: 'Movie App – now playing detail' },
];

const yahtzeeImages = [
  { src: yahtzeePlayerName, alt: 'Yahtzee Game – player name entry' },
  { src: yahtzeeJavaPlayers, alt: 'Yahtzee Game – players list' },
  { src: yahtzeeGame, alt: 'Yahtzee Game – board' },
  { src: yahtzeeSession, alt: 'Yahtzee Game – active session' },
  { src: yahtzeeExit, alt: 'Yahtzee Game – exit screen' },
];

const ecommerceImages = [
  { src: ecommerceStart, alt: 'E-Commerce Shop – start screen' },
  { src: ecommerceShop, alt: 'E-Commerce Shop – shop page' },
  { src: ecommerceInventory, alt: 'E-Commerce Shop – inventory management' },
  { src: ecommerceCheckout, alt: 'E-Commerce Shop – checkout' },
];

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
              <ProjectGallery images={expenseTrackerImages} />
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
              <ProjectGallery images={movieAppImages} />
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
              <ProjectGallery images={yahtzeeImages} />
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
              <ProjectGallery images={ecommerceImages} />
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
