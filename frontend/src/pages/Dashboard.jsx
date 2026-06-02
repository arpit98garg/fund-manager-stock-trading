import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [portfolioData, setPortfolioData] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [portfolioRes, recommendationsRes] = await Promise.all([
        axios.get('/api/portfolio'),
        axios.get('/api/recommendations/today')
      ]);
      
      setPortfolioData(portfolioRes.data);
      setRecommendations(recommendationsRes.data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-grid">
        <div className="card portfolio-summary">
          <h2>Portfolio Summary</h2>
          {/* TODO: Display portfolio data */}
        </div>
        <div className="card recommendations-summary">
          <h2>Today's Recommendations</h2>
          {/* TODO: Display recommendations */}
        </div>
        <div className="card market-overview">
          <h2>Market Overview</h2>
          {/* TODO: Display market indices */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
