// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Components/LoginSignup/Login';
import { LandingPage } from './Components/LandingPage/LandingPage';

// 404 Page Component
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-cyan-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">Page not found</p>
      <a href="/" className="px-6 py-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition">Go Home</a>
        
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Login/Sign Up Page */}
        <Route path="/login" element={<Login />} />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;