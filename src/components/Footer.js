import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p className="bold-text">Built with ❤️ by:</p>
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-item">
            <a href="https://www.linkedin.com/in/theajaykumar29/" target="_blank" rel="noopener noreferrer">Ajay Kumar</a>
            <span> | theajaykumar29@gmail.com</span>
          </div>
          <div className="footer-item">
            <a href="https://www.linkedin.com/in/harsh-upreti-7016792b1/" target="_blank" rel="noopener noreferrer">Harsh Upreti</a>
            <span> | harshupreti3857@gmail.com</span>
          </div>
          <div className="footer-item">
            <a href="http://www.linkedin.com/in/ankushmishra04" target="_blank" rel="noopener noreferrer">Ankush Mishra</a>
            <span> | mishraankush713@gmail.com</span>
          </div>
        </div>
        <div className="footer-row">
          <div className="footer-item">
            <a href="https://www.linkedin.com/in/harshveer-singh-1a6912205" target="_blank" rel="noopener noreferrer">Harshveer Singh</a>
            <span> | harshveerhvs@gmail.com</span>
          </div>
          <div className="footer-item">
            <a href="https://www.linkedin.com/in/deepanshu-singh-ab0249148/" target="_blank" rel="noopener noreferrer">Deepanshu Singh</a>
            <span> | deepanshusingh963n@gmail.com</span>
          </div>
          <div className="footer-item">
            <a href="https://in.linkedin.com/in/aseem-saini-8b8883257" target="_blank" rel="noopener noreferrer">Maulana Aseem al-Abdullah Khan</a>
            <span> | 08619011621.aiml@gmail.com</span>
          </div>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} ThriveWell- A Holistic Health Portal WebApp. IBM FEWD Internship Project July'2024. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
