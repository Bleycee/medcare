// DashboardContent.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Activity, 
  MessageSquare,
  History,
  Calendar,
  Clock,
  TrendingUp,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  FileText,
  Lightbulb,
  Bell,
  Menu
} from 'lucide-react';

export const DashboardContent = ({ userName, onNavigate, onMenuClick }) => {
  const navigate = useNavigate();

  // Mock data
  const stats = [
    { label: 'Assessments', value: '12', icon: Activity, color: 'bg-blue-500', change: '+2 this week' },
    { label: 'Last Check', value: '2d ago', icon: Clock, color: 'bg-cyan-500', change: 'Feeling better' },
    { label: 'Health Score', value: '85%', icon: TrendingUp, color: 'bg-purple-500', change: '+5% this month' },
    { label: 'Active Days', value: '28', icon: Calendar, color: 'bg-green-500', change: 'This month' },
  ];

  const recentAssessment = {
    date: '2 days ago',
    time: '2:30 PM',
    symptoms: 'Cough, Fatigue',
    result: 'Low Risk',
    recommendation: 'Rest, stay hydrated, and monitor symptoms',
    followUpDue: true,
  };

  const upcomingReminders = [
    { id: 1, text: 'Follow-up health check recommended', time: 'Today', type: 'check' },
    { id: 2, text: 'Review your recent assessment results', time: 'Tomorrow', type: 'check' },
  ];

  const healthTip = {
    title: 'Stay Hydrated',
    content: 'Drink at least 8 glasses of water daily to support your immune system and overall health.',
    category: 'Wellness',
    readTime: '2 min read'
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>

            {/* Page Title - Desktop */}
            <div className="hidden lg:block">
              <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
              <p className="text-sm text-gray-500 mt-0.5">
                Welcome back, {userName.split(' ')[0]}
              </p>
            </div>

            {/* Right Side - Notifications & Profile */}
            <div className="flex items-center space-x-4">
              <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
                <Bell className="w-6 h-6 text-gray-700" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <button
                onClick={() => navigate('/profile')}
                className="lg:hidden w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
              >
                {userName.charAt(0)}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 rounded-2xl p-6 sm:p-8 text-white mb-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Hi {userName.split(' ')[0]}, How are you feeling today?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl">
              Your health is our priority. Start a new assessment or chat with our support assistant for instant help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  onNavigate('assessment');
                  navigate('/dashboard/assessment');
                }}
                className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center space-x-2 shadow-lg"
              >
                <Activity className="w-5 h-5" />
                <span>Start Assessment</span>
              </button>
              <button
                onClick={() => {
                  onNavigate('chat');
                  navigate('/dashboard/chat');
                }}
                className="px-6 py-3 bg-blue-700 bg-opacity-50 text-white rounded-xl font-semibold hover:bg-opacity-70 transition inline-flex items-center justify-center space-x-2 backdrop-blur-sm border border-white border-opacity-20"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Support Chat</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                <p className="text-xs text-gray-500">{stat.change}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Recent Assessment Card */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-800">Recent Assessment</h3>
              <button
                onClick={() => {
                  onNavigate('history');
                  navigate('/history');
                }}
                className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm flex items-center space-x-1"
              >
                <span>View All</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="border border-gray-200 rounded-lg p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{recentAssessment.symptoms}</p>
                    <p className="text-sm text-gray-500">{recentAssessment.date} • {recentAssessment.time}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  {recentAssessment.result}
                </span>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-800">Recommendation:</strong> {recentAssessment.recommendation}
                </p>
              </div>

              {recentAssessment.followUpDue && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-blue-800 font-medium text-sm mb-2">
                      Time for a follow-up check
                    </p>
                    <button
                      onClick={() => {
                        onNavigate('assessment');
                        navigate('/dashboard/assessment');
                      }}
                      className="text-blue-600 font-semibold hover:underline text-sm inline-flex items-center space-x-1"
                    >
                      <span>Start Quick Recheck</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Reminders Panel */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Reminders</h3>
            <div className="space-y-3">
              {upcomingReminders.map((reminder) => (
                <div key={reminder.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {reminder.type === 'check' ? (
                      <Activity className="w-4 h-4 text-cyan-600" />
                    ) : (
                      <Calendar className="w-4 h-4 text-cyan-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">{reminder.text}</p>
                    <p className="text-xs text-gray-500 mt-1">{reminder.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-cyan-600 hover:bg-cyan-50 rounded-lg transition text-sm font-semibold">
              View All Reminders
            </button>
          </div>
        </div>

        {/* Health Tip of the Day */}
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200 shadow-sm">
          <div className="flex items-start space-x-4">
            <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <Lightbulb className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center flex-wrap gap-2 mb-3">
                <h3 className="font-bold text-gray-800 text-lg">{healthTip.title}</h3>
                <span className="px-3 py-1 bg-teal-600 text-white text-xs rounded-full font-semibold">
                  {healthTip.category}
                </span>
                <span className="text-xs text-gray-500">• {healthTip.readTime}</span>
              </div>
              <p className="text-gray-700 mb-4">{healthTip.content}</p>
              <button
                onClick={() => {
                  onNavigate('tips');
                  navigate('/health-tips');
                }}
                className="text-teal-600 hover:text-teal-700 font-semibold text-sm inline-flex items-center space-x-1"
              >
                <span>Explore More Tips</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};