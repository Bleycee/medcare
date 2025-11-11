// Hero.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid  grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              SOLVING HEALTHCARE OVERCROWDING
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Know your health,Get the best medical assistance from the comfort of your home with MedCare's AI-powered health assessment tool.
            </p>
            <button 
              onClick={() => navigate('/login')}
              className="px-8 py-4 bg-cyan-500 text-white rounded-full text-lg font-semibold hover:bg-cyan-600 transition shadow-lg"
            >
              Start Your Free Assessment Now →
            </button>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <div className="bg-blue-600 rounded-2xl h-96 flex items-center justify-center">
              <img 
              src="/images/hero-image.png" 
              alt="image of a doctor" 
              className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};