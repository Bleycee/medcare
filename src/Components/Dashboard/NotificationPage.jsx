import React, { useState } from 'react';
import { Bell, Check, Trash2, Settings, Filter, Menu } from 'lucide-react';

const NotificationPage = ({ onMenuClick }) => {
  const [filter, setFilter] = useState('all'); // all, unread, read
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'assessment',
      title: 'Assessment Complete',
      message: 'Your health assessment results are ready to view.',
      time: '5 minutes ago',
      read: false,
      icon: '🏥'
    },
    {
      id: 2,
      type: 'reminder',
      title: 'Follow-up Reminder',
      message: 'Time for your weekly health check. Start a new assessment.',
      time: '2 hours ago',
      read: false,
      icon: '⏰'
    },
    {
      id: 3,
      type: 'tip',
      title: 'Daily Health Tip',
      message: 'Stay hydrated! Drink at least 8 glasses of water today.',
      time: '1 day ago',
      read: true,
      icon: '💡'
    },
    {
      id: 4,
      type: 'update',
      title: 'New Feature Available',
      message: 'Check out our new AI-powered symptom checker in the assessment section.',
      time: '2 days ago',
      read: true,
      icon: '🎉'
    },
    {
      id: 5,
      type: 'assessment',
      title: 'Assessment Saved',
      message: 'Your recent assessment has been saved to your history.',
      time: '3 days ago',
      read: true,
      icon: '✅'
    },
    {
      id: 6,
      type: 'system',
      title: 'Privacy Update',
      message: 'We\'ve updated our privacy policy. Review the changes in Settings.',
      time: '1 week ago',
      read: false,
      icon: '🔒'
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread') return !notification.read;
    if (filter === 'read') return notification.read;
    return true;
  });

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const clearAll = () => {
    if (window.confirm('Are you sure you want to clear all notifications?')) {
      setNotifications([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="h-16 bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Notifications</h2>
              <p className="text-sm text-gray-500 mt-0.5">
                {unreadCount > 0 ? `${unreadCount} unread` : 'All caught up!'}
              </p>
            </div>
          </div>

          <button className="p-2 rounded-lg hover:bg-gray-100 transition">
            <Settings className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Filter & Actions Bar */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Filters */}
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    filter === 'all'
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All ({notifications.length})
                </button>
                <button
                  onClick={() => setFilter('unread')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    filter === 'unread'
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Unread ({unreadCount})
                </button>
                <button
                  onClick={() => setFilter('read')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    filter === 'read'
                      ? 'bg-cyan-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Read ({notifications.length - unreadCount})
                </button>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition flex items-center space-x-2"
                  >
                    <Check className="w-4 h-4" />
                    <span>Mark all read</span>
                  </button>
                )}
                {notifications.length > 0 && (
                  <button
                    onClick={clearAll}
                    className="px-4 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition flex items-center space-x-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span className="hidden sm:inline">Clear all</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Notifications List */}
          {filteredNotifications.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-gray-200">
              <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {filter === 'unread' ? 'No unread notifications' : 'No notifications'}
              </h3>
              <p className="text-gray-500">
                {filter === 'all' 
                  ? "You're all caught up! Check back later for updates."
                  : filter === 'unread'
                  ? "Great! You've read all your notifications."
                  : "No read notifications to show."}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`bg-white rounded-xl p-4 sm:p-5 shadow-sm border transition hover:shadow-md ${
                    notification.read
                      ? 'border-gray-200'
                      : 'border-cyan-200 bg-cyan-50 bg-opacity-30'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center text-2xl">
                      {notification.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className={`font-semibold ${
                          notification.read ? 'text-gray-800' : 'text-gray-900'
                        }`}>
                          {notification.title}
                        </h3>
                        {!notification.read && (
                          <span className="ml-2 w-2 h-2 bg-cyan-500 rounded-full flex-shrink-0"></span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500">
                        {notification.time}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 flex-shrink-0">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className="p-2 hover:bg-blue-50 rounded-lg transition text-blue-600"
                          title="Mark as read"
                        >
                          <Check className="w-5 h-5" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className="p-2 hover:bg-red-50 rounded-lg transition text-red-600"
                        title="Delete"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default NotificationPage;