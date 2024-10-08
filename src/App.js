import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Statistics from './components/Statistics';
import Quizzes from './components/Quizzes';
import Surveys from './components/Surveys';
import Contact from './components/Contact';
import Resources from './components/Resources';
import Tips from './components/Tips';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-logo-container">
          <Logo />
        </div>
        <Navbar />
        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/quizzes" element={<Quizzes />} />
            <Route path="/surveys" element={<Surveys />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/tips" element={<Tips />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
