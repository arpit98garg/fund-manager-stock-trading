import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Performance = () => {
  const [performanceData, setPerformanceData] = useState(null);
  const [missedOpportunities, setMissedOpportunities] = useState([]);
  const [performanceGaps, setPerformanceGaps] = useState([]);

  useEffect(() => {
    fetchPerformanceData();
  }, []);

  const fetchPerformanceData = async () => {
    try {
      const [metricsRes, missedRes, gapsRes] = await Promise.all([
        axios.get('/api/performance/metrics'),
        axios.get('/api/performance/missed-opportunities'),
        axios.get('/api/performance/performance-gaps')
      ]);
      
      setPerformanceData(metricsRes.data);
      setMissedOpportunities(missedRes.data);
      setPerformanceGaps(gapsRes.data);
    } catch (error) {
      console.error('Error fetching performance data:', error);
    }
  };

  return (
    <div className="performance-container">
      <h1>Performance Analysis</h1>
      <div className="performance-grid">
        <div className="card">
          <h2>Metrics</h2>
          {/* TODO: Display performance metrics */}
        </div>
        <div className="card">
          <h2>Missed Opportunities</h2>
          {/* TODO: Display missed opportunities */}
        </div>
        <div className="card">
          <h2>Performance Gaps</h2>
          {/* TODO: Display performance gaps */}
        </div>
      </div>
    </div>
  );
};

export default Performance;
