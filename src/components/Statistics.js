import React, { useEffect, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto'; 
import './Statistics.css';

const mockData = {
  labels: ['Infant Mortality Rate', 'Access to Clean Water', 'Life Expectancy', 'Child Vaccination Rate', 'Nutrition Level'],
  values: [30, 85, 72, 90, 65],
  labels2: ['Healthcare Access by Region', 'Disease Prevalence by Region'],
  values2: [70, 40],
  labels3: ['Mental Health Awareness', 'Physical Activity', 'Nutrition Awareness'],
  values3: [65, 75, 80]
};

function Statistics() {
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        const chartData1 = {
          labels: mockData.labels,
          datasets: [
            {
              label: 'Health Statistics Overview',
              data: mockData.values,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            }
          ]
        };
        
        const chartData2 = {
          labels: mockData.labels2,
          datasets: [
            {
              label: 'Healthcare Access & Disease Prevalence',
              data: mockData.values2,
              backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
            }
          ]
        };

        const chartData3 = {
          labels: mockData.labels3,
          datasets: [
            {
              label: 'Awareness and Activity Levels',
              data: mockData.values3,
              backgroundColor: ['rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)'],
            }
          ]
        };

        setData(chartData1);
        setData2(chartData2);
        setData3(chartData3);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load data');
        setLoading(false);
      }
    }, 1000); 
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="statistics">
      <h2>Health Statistics</h2>

      {/* ese hi */}
      <div className="section">
        <h3>Child Health</h3>
        <ul className="custom-bullet">
          <li>In 2018 an estimated 6.2 million children and adolescents under the age of 15 years died, mostly from preventable causes. Of these deaths, 5.3 million occurred in the first 5 years, with almost half of these in the first month of life. 
            <a className="custom-button" href="https://www.who.int/news-room/fact-sheets/detail/children-reducing-mortality" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>Despite determined global progress, an increasing proportion of child deaths are in Sub-Saharan Africa and Southern Asia. Four out of every five deaths of children under age five occur in these regions.
            <a className="custom-button" href="https://www.who.int/news-room/fact-sheets/detail/children-reducing-mortality" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>Children in sub-Saharan Africa are more than 15 times more likely to die before the age of 5 than children in high income countries.
            <a className="custom-button" href="https://www.who.int/news-room/fact-sheets/detail/children-reducing-mortality" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>Malnourished children, particularly those with severe acute malnutrition, have a higher risk of death from common childhood illness such as diarrhoea, pneumonia, and malaria. Nutrition-related factors contribute to about 45% of deaths in children under-5 years of age.
            <a className="custom-button" href="https://www.who.int/news-room/fact-sheets/detail/children-reducing-mortality" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
        </ul>
      </div>

      <div className="section">
        <h3>Maternal Health</h3>
        <ul className="custom-bullet">
          <li>Over 40% of all countries have fewer than 10 medical doctors per 10,000 people; over 55% of countries have fewer than 40 nursing and midwifery personnel per 10,000 people.
            <a className="custom-button" href="https://unstats.un.org/sdgs/report/2020/goal-03/" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>In Eastern Asia, Northern Africa and Southern Asia, maternal mortality has declined by around two-thirds.
            <a className="custom-button" href="https://data.unicef.org/topic/maternal-health/maternal-mortality/" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>Every day in 2017, approximately 810 women died from preventable causes related to pregnancy and childbirth.
            <a className="custom-button" href="https://data.unicef.org/topic/maternal-health/maternal-mortality/" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>94% of all maternal deaths occur in low and lower middle-income countries.
            <a className="custom-button" href="https://data.unicef.org/topic/maternal-health/maternal-mortality/" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>Young adolescents (ages 10-14) face a higher risk of complications and death as a result of pregnancy than other women.
            <a className="custom-button" href="https://data.unicef.org/topic/maternal-health/maternal-mortality/" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>The maternal mortality ratio – the proportion of mothers that do not survive childbirth compared to those who do – in developing regions is still 14 times higher than in the developed regions.
            <a className="custom-button" href="https://www.who.int/news-room/fact-sheets/detail/maternal-mortality" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
        </ul>
      </div>

      <div className="section">
        <h3>HIV/AIDS, Malaria and Other Diseases</h3>
        <ul className="custom-bullet">
          <li>38 million people globally were living with HIV in 2019.
            <a className="custom-button" href="https://www.unaids.org/en/resources/fact-sheet" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>25.4 million people were accessing antiretroviral therapy in 2019.
            <a className="custom-button" href="https://www.unaids.org/en/resources/fact-sheet" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>1.7 million people became newly infected with HIV in 2019.
            <a className="custom-button" href="https://www.unaids.org/en/resources/fact-sheet" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>690,000 people died from AIDS-related illnesses in 2019.
            <a className="custom-button" href="https://www.unaids.org/en/resources/fact-sheet" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>75.7 million people have become infected with HIV since the start of the epidemic.
            <a className="custom-button" href="https://www.unaids.org/en/resources/fact-sheet" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>32.7 million people have died from AIDS-related illnesses since the start of the epidemic.
            <a className="custom-button" href="https://www.unaids.org/en/resources/fact-sheet" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>Tuberculosis remains the leading cause of death among people living with HIV, accounting for around one in three AIDS-related deaths.
            <a className="custom-button" href="https://www.unaids.org/en/resources/fact-sheet" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>Globally, adolescent girls and young women face gender-based inequalities, exclusion, discrimination and violence, which put them at increased risk of acquiring HIV.
            <a className="custom-button" href="https://www.unaids.org/en/resources/fact-sheet" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>HIV is the leading cause of death for women of reproductive age worldwide.
            <a className="custom-button" href="https://www.who.int/data/gho/data/themes/theme-details/GHO/women-and-health" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>AIDS is now the leading cause of death among adolescents (aged 10–19) in Africa and the second most common cause of death among adolescents globally.
            <a className="custom-button" href="https://www.un.org/youthenvoy/wp-content/uploads/2015/06/YouthStatsHIVAIDSpdf2.pdf" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
          <li>Over 6.2 million malaria deaths have been averted between 2000 and 2015, primarily of children under five years of age in sub-Saharan Africa. The global malaria incidence rate has fallen by an estimated 37% and the mortality rates by 58%.
            <a className="custom-button" href="https://www.who.int/malaria/media/world-malaria-report-2015/en/" target="_blank" rel="noopener noreferrer">Learn More</a>
          </li>
        </ul>
      </div>

      {/* ese hi */}
      {data && <div className="chart-container"><Bar data={data} /></div>}
      {data2 && <div className="chart-container"><Pie data={data2} /></div>}
      {data3 && <div className="chart-container"><Line data={data3} /></div>}
    </div>
  );
}

export default Statistics;
