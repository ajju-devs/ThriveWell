import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to ThriveWell- A Holistic Health Portal</h2>
      <p>Our goal is to promote good health and wellness for all. Explore our resources, tips, and tools to improve your health and well-being.</p>
      <div className="highlights">
        <div className="highlight">
          <h3>Statistics</h3>
          <p>Explore health statistics and data visualizations.</p>
        </div>
        <div className="highlight">
          <h3>Health Tips</h3>
          <p>Get daily tips to improve your health.</p>
        </div>
        <div className="highlight">
          <h3>Quizzes</h3>
          <p>Test your knowledge on health topics.</p>
        </div>
      </div>
      <div className="additional-info">
        <div className="highlight">
          <h3>Why ThriveWell Matter</h3>
          <p>Health and well-being are crucial for living a happy, productive, and fulfilling life. <br /> By focusing on these areas, we can reduce health disparities and improve quality of life globally.</p>
        </div>
        <div className="highlight">
          <h3>Get Involved</h3>
          <p>Join us in our mission to promote health and well-being. Take our quizzes, follow our tips, and be part of a healthier world.</p>
        </div>
        <div className="highlight">
          <h3>Supporting the Sustainable Development Goals</h3>
          <p>Our project is aligned with the United Nations Sustainable Development Goal 3, Good Health and Well-being, <br /> which aims to ensure healthy lives and promote well-being for all at all ages.</p>
          <button className="cta-button" onClick={() => window.open('https://sdgs.un.org/goals/goal3', '_blank')}>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
