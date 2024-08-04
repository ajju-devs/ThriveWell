import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <h1>About "ThriveWell"</h1>
      <p className="intro">
        Our project, <strong>"ThriveWell- a holistic health portal"</strong>, focuses on promoting and improving global health standards aligned with the United Nations Sustainable Development Goal (SDG) 3. This initiative aims to provide valuable information and resources related to health and wellness, advocating for a healthier and more equitable world.
      </p>
      <div className="section-container">
        <section className="section details">
          <h2>Project Objectives</h2>
          <ul>
            <li><strong>Raise Awareness:</strong> Educate users about critical health issues and wellness practices through interactive quizzes and statistics.</li>
            <li><strong>Provide Resources:</strong> Offer easy access to reliable health resources and services.</li>
            <li><strong>Engage Users:</strong> Utilize engaging content and tools to encourage proactive health management and well-being.</li>
            <li><strong>Track Progress:</strong> Provide tools for tracking health improvements and understanding health trends.</li>
          </ul>
        </section>
        <section className="section statistics">
          <h2>Health Statistics and Insights</h2>
          <p>
            Our application includes interactive charts and visualizations to present key health statistics and insights. These visualizations cover various aspects such as mortality rates, access to healthcare, vaccination coverage, and more, providing users with a clear understanding of health trends and challenges.
          </p>
        </section>
        <section className="section future-plans">
          <h2>Future Enhancements</h2>
          <ul>
            <li><strong>Integration with Health APIs:</strong> Enhance the application with real-time data from health-related APIs.</li>
            <li><strong>Personalized Health Recommendations:</strong> Develop features to offer personalized health tips based on user data.</li>
            <li><strong>Expanded Quizzes:</strong> Add more quizzes and interactive content to cover a broader range of health topics.</li>
            <li><strong>Community Engagement:</strong> Implement features to facilitate community discussions and support networks.</li>
          </ul>
        </section>
      </div>
      <div className="developers">
        <h2>Meet the Developers</h2>
        <div className="developer-info">
          <div className="developer">
            <h3>Ajay Kumar</h3>
            <p>Student</p>
            <p>B.Tech AI-ML</p>
            <p>USAR, Delhi (GGSIPU EDC)</p>
            <p>Email: theajaykumar29@gmail.com</p>
            <p><a href="https://www.linkedin.com/in/theajaykumar29/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
          <div className="developer">
            <h3>Harsh Upreti</h3>
            <p>Student</p>
            <p>B.Tech AI-ML</p>
            <p>USAR, Delhi (GGSIPU EDC)</p>
            <p>Email: harshupreti3857@gmail.com</p>
            <p><a href="https://www.linkedin.com/in/harsh-upreti-7016792b1/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
          <div className="developer">
            <h3>Ankush Mishra</h3>
            <p>Student</p>
            <p>B.Tech AI-ML</p>
            <p>USAR, Delhi (GGSIPU EDC)</p>
            <p>Email: mishraankush713@gmail.com</p>
            <p><a href="http://www.linkedin.com/in/ankushmishra04" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
          <div className="developer">
            <h3>Harshveer Singh</h3>
            <p>Student</p>
            <p>B.Tech AI-ML</p>
            <p>USAR, Delhi (GGSIPU EDC)</p>
            <p>Email: harshveerhvs@gmail.com</p>
            <p><a href="https://www.linkedin.com/in/harshveer-singh-1a6912205" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
          <div className="developer">
            <h3>Deepanshu Singh</h3>
            <p>Student</p>
            <p>B.Tech AI-ML</p>
            <p>USAR, Delhi (GGSIPU EDC)</p>
            <p>Email: deepanshusingh963n@gmail.com</p>
            <p><a href="https://www.linkedin.com/in/deepanshu-singh-ab0249148/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
