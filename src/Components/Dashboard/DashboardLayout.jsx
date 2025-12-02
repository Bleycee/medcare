// DashboardLayout.jsx - Wrapper for all dashboard pages
import React, { useState } from 'react';
import { Sidebar } from './SideBar';

export const DashboardLayout = ({ children, activeTab = 'home' }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userName] = useState('Alex Abugu'); // TODO: Get from auth context

  const handleNavigate = (tabId) => {
    // Navigation is handled by sidebar itself
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

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:ml-64">
        {children}
      </div>
    </div>
  );
};