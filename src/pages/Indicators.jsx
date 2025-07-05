import React, { useEffect, useState } from "react";
import axios from "axios";

const Indicators = () => {
  const [indicators, setIndicators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/indicators")
      .then((res) => {
        setIndicators(res.data.indicators);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching indicators:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white px-4 py-10">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold mb-6">Trading Indicators</h1>

        {loading ? (
          <p className="text-gray-400">Loading indicators...</p>
        ) : (
          <ul className="space-y-6">
            {indicators.map((indicator, index) => (
              <li
                key={index}
                className="bg-gray-800 p-5 rounded-md shadow-md border border-gray-700"
              >
                <h2 className="text-2xl font-semibold">{indicator.name}</h2>
                <p className="text-gray-300 mt-2">{indicator.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Indicators;
