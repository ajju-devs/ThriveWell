import React from 'react';
import './Services.css';

function Services() {
  const servicesList = [
    {
      title: 'Wellness Coaching',
      description: 'Personalized coaching to help you achieve your health and wellness goals.'
    },
    {
      title: 'Nutritional Counseling',
      description: 'Expert advice on diet and nutrition to improve your overall health.'
    },
    {
      title: 'Fitness Programs',
      description: 'Customized fitness plans to suit your individual needs and goals.'
    },
    {
      title: 'Mental Health Support',
      description: 'Resources and support for managing stress, anxiety, and mental well-being.'
    },
    {
      title: 'Health Screenings',
      description: 'Regular health screenings to monitor and maintain your health status.'
    }
  ];

  return (
    <div className="services">
      <h2>Our Services</h2>
      <ul>
        {servicesList.map((service, index) => (
          <li key={index} className="service-item">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
