import React, { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_URL = "http://localhost:8000";

const Home = () => {
  const [marketData, setMarketData] = useState({});
  const [homeMessage, setHomeMessage] = useState({ title: "", message: "" });

  useEffect(() => {
    fetchData();

    const interval = setInterval(fetchData, 60000); // Refresh every 60s
    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    try {
      const [summaryRes, homeRes] = await Promise.all([
        axios.get(`${BACKEND_URL}/market-summary`),
        axios.get(`${BACKEND_URL}/home`)
      ]);

      setMarketData(summaryRes.data);
      setHomeMessage(homeRes.data);
    } catch (error) {
      console.error("Failed to load market data:", error);
    }
  };

  const chartSymbols = ["FX_IDC:XAUUSD", "OANDA:GBPUSD", "OANDA:USDJPY", "OANDA:GBPJPY"];

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white px-4 py-10">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">{homeMessage.title}</h1>
        <p className="text-lg text-gray-300">{homeMessage.message}</p>

        {/* Market Summary Table */}
        <div className="overflow-x-auto mt-10">
          <h2 className="text-2xl mb-4 font-semibold">Market Summary</h2>
          <table className="w-full table-auto border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-2 border border-gray-700">Symbol</th>
                <th className="px-4 py-2 border border-gray-700">Price</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(marketData).map(([symbol, price]) => (
                <tr key={symbol} className="text-center">
                  <td className="px-4 py-2 border border-gray-700">{symbol}</td>
                  <td className="px-4 py-2 border border-gray-700">
                    {isNaN(price) ? <span className="text-red-400">{price}</span> : `$${parseFloat(price).toFixed(4)}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {chartSymbols.map((symbol) => (
            <div key={symbol} className="w-full">
              <iframe
                src={`https://s.tradingview.com/widgetembed/?symbol=${symbol}&interval=30&theme=dark&style=1&timezone=Africa/Nairobi`}
                width="100%"
                height="400"
                allowtransparency="true"
                frameBorder="0"
                title={symbol}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
