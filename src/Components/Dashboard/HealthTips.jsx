// HealthTips.jsx - With standard sidebar and brand colors
import React from 'react';
import { BookOpen, UserCheck, Moon, Sun, Heart, Dumbbell, Shield, MessageCircle, Menu, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Reusable card for a Tip Category (The 7-item grid)
const TipCategoryCard = ({ title, icon: Icon, action }) => (
  <button
    onClick={action}
    className="flex flex-col items-center justify-center p-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-cyan-500 transition duration-200 w-full h-28 text-center"
  >
    <Icon className="w-6 h-6 text-cyan-600 mb-1" />
    <p className="text-sm font-medium text-gray-700">{title}</p>
  </button>
);

// Main Health Tips Page component
export const HealthTips = ({ onMenuClick }) => {
  const navigate = useNavigate();

  const tipCategories = [
    { title: 'Eat More Foods', icon: Sun },
    { title: 'Mental Health', icon: MessageCircle },
    { title: 'Nutrition', icon: Heart },
    { title: 'Prevention & Safety', icon: Shield },
    { title: 'Sleep & Recovery', icon: Moon },
    { title: 'General well being', icon: UserCheck },
    { title: 'Fitness Activity', icon: Dumbbell },
  ];

  const handleAction = (title) => {
    console.log(`Navigating to ${title} topics.`);
    // TODO: Navigate to detailed content for this category
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>

            {/* Page Title */}
            <div className="flex-1 lg:flex-none">
              <h2 className="text-2xl font-bold text-gray-800">Health Tips</h2>
              <p className="text-sm text-gray-500 mt-0.5">
                Daily wellness guidance for better health
              </p>
            </div>

            
            
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        {/* 1. Large Feature Banner Card (Hydration Tip) */}
        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-6 sm:p-8 rounded-2xl flex flex-col lg:flex-row items-center mb-8 border border-cyan-200 shadow-sm">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Drink Enough Water Daily
            </h2>
            <p className="text-gray-700 mb-4 max-w-lg">
              Staying hydrated helps improve energy levels, digestion, and overall health. Aim for 6-8 cups of water a day.
            </p>
            <button 
              className="px-6 py-3 bg-cyan-600 text-white text-sm font-semibold rounded-lg hover:bg-cyan-700 transition shadow-sm"
              onClick={() => handleAction('Hydration')}
            >
              Read more
            </button>
          </div>
          
          {/* Placeholder for visual */}
          <div className="hidden lg:flex w-40 h-40 flex-shrink-0 items-center justify-center bg-white bg-opacity-50 rounded-full">
            <div className="text-6xl">💧</div>
          </div>
        </div>
        
        {/* 2. Health Tips Categories Grid */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Explore Health Categories</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {tipCategories.map((category) => (
              <TipCategoryCard 
                key={category.title}
                title={category.title}
                icon={category.icon}
                action={() => handleAction(category.title)}
              />
            ))}
          </div>
        </div>
        
        {/* 3. Actionable Tip Cards Grid (Bottom Row) */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Daily Tips & Goals</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Exercise Tip */}
          <div className="bg-white p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <p className="text-xs text-cyan-600 font-semibold mb-1">ACTIVITY</p>
                <p className="font-semibold text-gray-800">Get Enough Exercise</p>
                <p className="text-sm text-gray-600 mt-2">
                  Regular physical activity boosts mood and energy.
                </p>
              </div>
            </div>
            <button className="text-sm text-cyan-600 font-semibold hover:text-cyan-700 transition">
              Learn more →
            </button>
          </div>
          
          {/* Card 2: Sleep Tip */}
          <div className="bg-white p-5 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <p className="text-xs text-cyan-600 font-semibold mb-1">WELLNESS</p>
                <p className="font-semibold text-gray-800">Prioritize Sleep</p>
                <p className="text-sm text-gray-600 mt-2">
                  Quality sleep is essential for physical and mental health.
                </p>
              </div>
            </div>
            <button className="text-sm text-cyan-600 font-semibold hover:text-cyan-700 transition">
              Learn more →
            </button>
          </div>

          {/* Card 3: Take a 30-Minute Walk Tip (Highlighted) */}
          <div className="bg-gradient-to-br from-cyan-600 to-blue-600 text-white p-6 rounded-xl shadow-lg border-2 border-cyan-500 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold">Today's Tip</p>
              <BookOpen className="w-5 h-5" />
            </div>
            <p className="text-xl font-bold mb-2">Take a 30-Minute Walk</p>
            <p className="text-sm opacity-90 mb-4">
              Keep yourself active and reduce stress today.
            </p>
            <button className="w-full py-2.5 border-2 border-white text-white text-sm font-semibold rounded-lg hover:bg-white hover:text-cyan-600 transition">
              Start Now
            </button>
          </div>
        </div>

        {/* Additional Tips Section */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">More Health Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Tip 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-teal-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2">Maintain a Balanced Diet</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Include fruits, vegetables, whole grains, and lean proteins in your meals for optimal nutrition.
                  </p>
                  <button className="text-sm text-cyan-600 font-semibold hover:text-cyan-700">
                    Read full article →
                  </button>
                </div>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-2">Regular Health Check-ups</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Schedule routine check-ups to catch potential health issues early and maintain wellness.
                  </p>
                  <button className="text-sm text-cyan-600 font-semibold hover:text-cyan-700">
                    Read full article →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default HealthTips;