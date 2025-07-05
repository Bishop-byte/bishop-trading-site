import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Indicators from './pages/Indicators';
import Strategy from './pages/Strategy';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <nav className="bg-gray-800 text-white p-4 shadow-md flex justify-center space-x-8">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/indicators">Indicators</Link>
          <Link to="/strategy">Strategy</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <main className="max-w-6xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/indicators" element={<Indicators />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
