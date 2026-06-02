import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [period, setPeriod] = useState('daily');

  useEffect(() => {
    fetchRecommendations();
  }, [period]);

  const fetchRecommendations = async () => {
    try {
      const res = await axios.get(`/api/recommendations/history?period=${period}`);
      setRecommendations(res.data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div className="recommendations-container">
      <h1>Stock Recommendations</h1>
      <div className="filter-buttons">
        {['daily', 'weekly', 'monthly', 'yearly'].map(p => (
          <button 
            key={p} 
            onClick={() => setPeriod(p)}
            className={period === p ? 'active' : ''}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
      </div>
      <div className="recommendations-list">
        {/* TODO: Display recommendations */}
      </div>
    </div>
  );
};

export default Recommendations;
