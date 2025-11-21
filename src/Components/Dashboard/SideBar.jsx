import React from 'react';
import { 
  Home,
  MessageSquare,
  Activity, 
  History, 
  Calendar, 
  Lightbulb,
  User,
  Settings,
  HelpCircle,
  LogOut,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Sidebar = ({ 
  isOpen, 
  onClose, 
  activeTab, 
  onNavigate,
  userName 
}) => {
  const navigate = useNavigate();

  const sidebarItems = [
    { id: 'home', label: 'Dashboard', icon: Home, path: '/dashboard' },
    { id: 'chat', label: 'AI Assistant', icon: MessageSquare, path: '/chat', badge: 'New' },
    { id: 'assessment', label: 'New Assessment', icon: Activity, path: '/assessment' },
    { id: 'history', label: 'My History', icon: History, path: '/history' },
    { id: 'consultation', label: 'Book Consult', icon: Calendar, path: '/consultation' },
    { id: 'tips', label: 'Health Tips', icon: Lightbulb, path: '/health-tips' },
    { id: 'profile', label: 'My Profile', icon: User, path: '/profile' },
  ];

  const bottomSidebarItems = [
    { id: 'help', label: 'Help & Support', icon: HelpCircle, path: '/help' },
    { id: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
  ];

  const handleNavigation = (path, id) => {
    onNavigate(id);
    navigate(path);
    onClose();
  };

  const handleLogout = () => {
    // TODO: Clear auth
    navigate('/login');
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r border-gray-200 fixed h-full z-30">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-cyan-600">MedCare</h1>
          <p className="text-xs text-gray-500 mt-1">Smart Health Assistant</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {sidebarItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigation(item.path, item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      isActive
                        ? 'bg-cyan-50 text-cyan-600 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 ${isActive ? 'text-cyan-600' : 'text-gray-400'}`} />
                    <span className="flex-1 text-left text-sm">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Bottom Navigation */}
          <div className="mt-auto pt-4 border-t border-gray-200 px-3">
            <ul className="space-y-1">
              {bottomSidebarItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavigation(item.path, item.id)}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-all"
                    >
                      <IconComponent className="w-5 h-5 text-gray-400" />
                      <span className="flex-1 text-left text-sm">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* User Profile Section */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              {userName.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">{userName}</p>
              <p className="text-xs text-gray-500 truncate">Premium Member</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition text-sm text-gray-700"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-50 transform transition-transform duration-300 lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-cyan-600">MedCare</h1>
            <p className="text-xs text-gray-500 mt-1">Smart Health Assistant</p>
          </div>
          <button onClick={onClose}>
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <nav className="overflow-y-auto py-4 h-[calc(100vh-180px)]">
          <ul className="space-y-1 px-3">
            {sidebarItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigation(item.path, item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      isActive
                        ? 'bg-cyan-50 text-cyan-600 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <IconComponent className={`w-5 h-5 ${isActive ? 'text-cyan-600' : 'text-gray-400'}`} />
                    <span className="flex-1 text-left text-sm">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 pt-4 border-t border-gray-200 px-3">
            <ul className="space-y-1">
              {bottomSidebarItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavigation(item.path, item.id)}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-all"
                    >
                      <IconComponent className="w-5 h-5 text-gray-400" />
                      <span className="flex-1 text-left text-sm">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              {userName.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">{userName}</p>
              <p className="text-xs text-gray-500 truncate">Premium Member</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition text-sm text-gray-700"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};