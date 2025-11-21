// Dashboard.jsx
import React, { useState } from 'react';
import { Sidebar } from './SideBar';
import { DashboardContent } from './DashboardContent';

export const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [userName] = useState('Alex Abugu');

  const handleNavigate = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Component */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        activeTab={activeTab}
        onNavigate={handleNavigate}
        userName={userName}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-64">
        <DashboardContent
          userName={userName}
          onNavigate={handleNavigate}
          onMenuClick={() => setSidebarOpen(true)}
        />
      </div>
    </div>
  );
};
