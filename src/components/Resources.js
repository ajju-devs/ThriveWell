import React from 'react';
import './Resources.css';

const resources = [
  {
    title: "World Health Organization (WHO)",
    description: "Global health information and resources.",
    link: "https://www.who.int"
  },
  {
    title: "Centers for Disease Control and Prevention (CDC)",
    description: "Health information and guidelines.",
    link: "https://www.cdc.gov"
  },
  {
    title: "Mayo Clinic",
    description: "Expert medical advice and health information.",
    link: "https://www.mayoclinic.org"
  },
  {
    title: "Healthline",
    description: "Health articles and wellness tips.",
    link: "https://www.healthline.com"
  },
  {
    title: "WebMD",
    description: "Medical news and health information.",
    link: "https://www.webmd.com"
  },
  {
    title: "TED Talks: Health",
    description: "Inspirational talks and videos about health.",
    link: "https://www.ted.com/topics/health"
  }
];

function Resources() {
  return (
    <div className="resources">
      <h2>Health Resources</h2>
      <div className="resource-list">
        {resources.map((resource, index) => (
          <div className={`resource-item ${index % 2 === 0 ? 'left' : 'right'}`} key={resource.title}>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">Learn more</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;
