import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white px-4 py-10">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">About Bishop Trading</h1>
        <p className="text-lg text-gray-300">
          Bishop Trading is built on precision, speed, and strategy. We focus on smart money concepts,
          liquidity mapping, and high-probability setups. Our tools and dashboards are designed for traders
          seeking consistency in volatile markets.
        </p>
        <p className="text-lg text-gray-300">
          This project integrates real-time Forex data, dynamic charting, and advanced technical indicators to support
          disciplined decision-making.
        </p>
        <p className="text-lg text-gray-300">
          Whether you’re a beginner or a seasoned trader, Bishop Trading helps you analyze, strategize, and execute
          trades with confidence.
        </p>
      </div>
    </div>
  );
};

export default About;
