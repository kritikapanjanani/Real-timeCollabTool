import React from 'react';
import './Landingpage.css'; // Assuming you have created this CSS file
import teamImage from '../assets/rb_25328.png';
import teamcom from '../assets/3527178.jpg';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero">
        <h1 className="title">Real-Time Collaboration</h1>
        <p className="description">
          Teams can work together on docs, share ideas, and communicate efficiently.
        </p>
        <div className="cta-buttons">
          <button className="cta-button">Start Collaboration</button>
          <button className="cta-button">Learn More</button>
        </div>
      </div>
      <div className="features">
        <div className="feature">
          <img src={teamImage} alt="teamcollaboration" />
          <h2>Team Collaboration</h2>
          <p>Teams can easily collaborate on documents, spreadsheets, and more in real-time.</p>
        </div>
        <div className="feature">
          <img src={teamcom} alt="teamcollaboration" />
          <h2>Team Communication</h2>
          <p>Built-in messaging features to communicate seamlessly within teams.</p>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-tagline">
          <h2>Fast to set up. Easy to use.</h2>
          <p>
            Get your team up and running in 60 seconds. Or schedule a free, personalized demo today.
          </p>
          <div className="footer-buttons">
            <button className="cta-button">Try for Free</button>
            <button className="cta-button">Book a Demo</button>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h3>LetsCollab!</h3>
            <ul>
              <li>Blog</li>
              <li>Privacy</li>
              <li>Contact</li>
              <li>Help Center</li>
              <li>Terms of Service</li>
            </ul>
          </div>
          <div>
            <h3>Features</h3>
            <ul>
              <li>Employee Communication</li>
              <li>Shift Scheduling</li>
              <li>Time Off</li>
              <li>Team Management</li>
              <li>Employee Happiness</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
