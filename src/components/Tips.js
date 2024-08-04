import React, { useEffect, useState } from 'react';
import './Tips.css';

const allTips = [
  { category: 'General Health', tips: [
    'Drink plenty of water throughout the day.',
    'Incorporate fruits and vegetables into your meals.',
    'Get at least 30 minutes of exercise most days of the week.'
  ]},
  { category: 'Mental Health', tips: [
    'Practice mindfulness or meditation daily.',
    'Engage in activities that you enjoy and bring you happiness.',
    'Seek professional help if you feel overwhelmed.'
  ]},
  { category: 'Nutrition', tips: [
    'Limit the intake of sugary and processed foods.',
    'Eat a variety of foods to ensure a balanced diet.',
    'Read nutrition labels to make informed choices.'
  ]},
  { category: 'Exercise', tips: [
    'Find an exercise routine that you enjoy.',
    'Mix up your workouts to prevent boredom.',
    'Set achievable fitness goals and track your progress.'
  ]},
  { category: 'Sustainable Living', tips: [
    'Reduce, reuse, and recycle to minimize waste.',
    'Opt for sustainable products and practices.',
    'Support local and eco-friendly businesses.'
  ]}
];

function Tips() {
  const [dailyTip, setDailyTip] = useState('');
  const [tipsList, setTipsList] = useState([]);

  useEffect(() => {
    getRandomTip();
    setTipsList(allTips);
  }, []);

  const getRandomTip = () => {
    const randomCategory = allTips[Math.floor(Math.random() * allTips.length)];
    const randomTip = randomCategory.tips[Math.floor(Math.random() * randomCategory.tips.length)];
    setDailyTip(randomTip);
  };

  return (
    <div className="tips">
      <div className="daily-tip">
        <h2>Daily Tip</h2>
        <p>{dailyTip}</p>
        <button onClick={getRandomTip}>Get Another Tip</button>
      </div>
      <div className="all-tips">
        <h2>Tips for a Healthier Life</h2>
        {tipsList.map((category, index) => (
          <div key={index} className="tips-category">
            <h3>{category.category}</h3>
            <ul>
              {category.tips.map((tip, tipIndex) => (
                <li key={tipIndex}>{tip}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tips;
