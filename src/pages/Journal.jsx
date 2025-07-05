import React, { useState } from "react";

const Journal = () => {
  const [trades, setTrades] = useState([]);
  const [form, setForm] = useState({
    pair: "",
    entry: "",
    exit: "",
    result: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTrades([form, ...trades]);
    setForm({ pair: "", entry: "", exit: "", result: "", notes: "" });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center text-blue-400">Trade Journal</h1>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-800 p-6 rounded-lg border border-gray-700"
        >
          <input
            className="p-2 rounded bg-gray-900 border border-gray-700"
            type="text"
            name="pair"
            placeholder="Currency Pair"
            value={form.pair}
            onChange={handleChange}
            required
          />
          <input
            className="p-2 rounded bg-gray-900 border border-gray-700"
            type="number"
            name="entry"
            placeholder="Entry Price"
            value={form.entry}
            onChange={handleChange}
            required
          />
          <input
            className="p-2 rounded bg-gray-900 border border-gray-700"
            type="number"
            name="exit"
            placeholder="Exit Price"
            value={form.exit}
            onChange={handleChange}
            required
          />
          <select
            name="result"
            value={form.result}
            onChange={handleChange}
            className="p-2 rounded bg-gray-900 border border-gray-700"
            required
          >
            <option value="">Result</option>
            <option value="Profit">Profit</option>
            <option value="Loss">Loss</option>
            <option value="Break-even">Break-even</option>
          </select>
          <textarea
            className="p-2 rounded bg-gray-900 border border-gray-700 col-span-full"
            name="notes"
            placeholder="Trade notes"
            rows={3}
            value={form.notes}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded col-span-full"
          >
            Add Trade
          </button>
        </form>

        {trades.length > 0 && (
          <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <h2 className="text-2xl mb-4 text-green-400">Trade History</h2>
            <table className="w-full text-left text-sm">
              <thead className="text-gray-300 border-b border-gray-600">
                <tr>
                  <th>Pair</th>
                  <th>Entry</th>
                  <th>Exit</th>
                  <th>Result</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody className="text-gray-400">
                {trades.map((trade, i) => (
                  <tr key={i} className="border-t border-gray-700">
                    <td>{trade.pair}</td>
                    <td>{trade.entry}</td>
                    <td>{trade.exit}</td>
                    <td
                      className={
                        trade.result === "Profit"
                          ? "text-green-400"
                          : trade.result === "Loss"
                          ? "text-red-400"
                          : "text-yellow-400"
                      }
                    >
                      {trade.result}
                    </td>
                    <td>{trade.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Journal;
