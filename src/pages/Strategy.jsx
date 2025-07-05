import React, { useEffect, useState } from "react";
import axios from "axios";

const Strategy = () => {
  const [strategy, setStrategy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:8000/strategy")
      .then((res) => {
        setStrategy(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching strategy:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white px-4 py-10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-4xl font-bold mb-6">Strategy Overview</h1>

        {loading ? (
          <p className="text-gray-400">Loading strategy...</p>
        ) : (
          strategy && (
            <div className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 space-y-5">
              <h2 className="text-2xl font-semibold text-blue-400">{strategy.name}</h2>
              <p className="text-gray-300">{strategy.summary}</p>

              <div>
                <h3 className="text-xl font-bold text-green-400 mt-4">Rules:</h3>
                <ul className="list-disc list-inside text-gray-300 text-left mt-2">
                  {strategy.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-yellow-400 mt-4">Timeframes:</h3>
                <p className="text-gray-300">{strategy.timeframes.join(", ")}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Strategy;
