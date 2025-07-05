import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

const MarketChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const prices = Array.from({ length: 12 }, () => (Math.random() * 100).toFixed(2));
      setChartData({
        labels: Array.from({ length: 12 }, (_, i) => `T${i + 1}`),
        datasets: [
          {
            label: 'Live GOLD Price',
            data: prices,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.3
          }
        ]
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!chartData) return <p className="text-center">Loading chart...</p>;

  return (
    <div className="bg-white p-4 rounded shadow">
      <Line data={chartData} />
    </div>
  );
};

export default MarketChart;
