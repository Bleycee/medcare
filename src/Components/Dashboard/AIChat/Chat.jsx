// Chat.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Send, 
  Mic, 
  MicOff,
  MoreVertical,
  Sparkles,
  ThermometerSun,
  Wind,
  HeartPulse,
  Stethoscope,
  Brain,
  Activity
} from 'lucide-react';

export const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      text: "Hi! I'm your AI health assistant. How can I help you today?",
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Quick action buttons
  const quickActions = [
    { id: 1, label: 'Fever', icon: ThermometerSun, query: "I have a fever" },
    { id: 2, label: 'Cough', icon: Wind, query: "I have a cough" },
    { id: 3, label: 'Headache', icon: Brain, query: "I have a headache" },
    { id: 4, label: 'Chest Pain', icon: HeartPulse, query: "I have chest pain" },
    { id: 5, label: 'Fatigue', icon: Activity, query: "I'm feeling very tired" },
    { id: 6, label: 'Start Assessment', icon: Stethoscope, query: "Start full assessment" },
  ];

  // Auto-scroll to bottom when new message
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: inputText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response (Replace with actual API call)
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputText);
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateAIResponse = (userInput) => {
    // TODO: Replace with actual AI API call
    const input = userInput.toLowerCase();
    
    let responseText = "";
    let actions = [];

    if (input.includes('fever') || input.includes('temperature')) {
      responseText = "I understand you have a fever. Let me ask a few questions:\n\n• How high is your temperature?\n• When did the fever start?\n• Do you have any other symptoms like chills or body aches?";
    } else if (input.includes('cough')) {
      responseText = "I see you have a cough. To better assist you:\n\n• Is it a dry cough or producing mucus?\n• How long have you had it?\n• Is it worse at night?";
    } else if (input.includes('headache')) {
      responseText = "I'm sorry you're experiencing a headache. Let me gather more information:\n\n• On a scale of 1-10, how severe is the pain?\n• Where exactly is the pain located?\n• Any visual disturbances or nausea?";
    } else if (input.includes('assessment')) {
      responseText = "Great! I'll start a comprehensive health assessment. This will take about 5-10 minutes. Should we proceed?";
      actions = [
        { label: 'Start Assessment', action: 'navigate', path: '/assessment' },
        { label: 'Not Now', action: 'dismiss' }
      ];
    } else {
      responseText = "Thank you for sharing that. Can you tell me more about your symptoms? When did they start and how severe are they?";
    }

    return {
      id: Date.now(),
      type: 'ai',
      text: responseText,
      timestamp: new Date(),
      actions: actions
    };
  };

  const handleQuickAction = (query) => {
    setInputText(query);
    inputRef.current?.focus();
  };

  const handleVoiceInput = () => {
    setIsListening(!isListening);
    
    // TODO: Implement actual voice recognition
    if (!isListening) {
      // Start listening
      alert('Voice input is not yet implemented. This will use Web Speech API.');
    } else {
      // Stop listening
    }
  };

  const handleActionButton = (action) => {
    if (action.action === 'navigate') {
      navigate(action.path);
    } else if (action.action === 'dismiss') {
      // Just close/dismiss
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigate('/dashboard')}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-gray-800">AI Health Assistant</h1>
              <p className="text-xs text-green-600 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                Online
              </p>
            </div>
          </div>
        </div>

        <button className="p-2 hover:bg-gray-100 rounded-lg transition">
          <MoreVertical className="w-6 h-6 text-gray-700" />
        </button>
      </header>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] sm:max-w-[70%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
              {/* Avatar */}
              <div className="flex items-end space-x-2 mb-1">
                {message.type === 'ai' && (
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                )}
                
                {/* Message Bubble */}
                <div>
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      message.type === 'user'
                        ? 'bg-cyan-600 text-white rounded-br-none'
                        : 'bg-white text-gray-800 shadow-sm border border-gray-200 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                  
                  {/* Action Buttons */}
                  {message.actions && message.actions.length > 0 && (
                    <div className="flex gap-2 mt-2">
                      {message.actions.map((action, index) => (
                        <button
                          key={index}
                          onClick={() => handleActionButton(action)}
                          className="px-4 py-2 bg-cyan-600 text-white rounded-full text-sm font-semibold hover:bg-cyan-700 transition"
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}

                  <p className="text-xs text-gray-500 mt-1">
                    {formatTime(message.timestamp)}
                  </p>
                </div>

                {message.type === 'user' && (
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    A
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-end space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-gray-200">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-3 bg-white border-t border-gray-200">
        <p className="text-xs text-gray-500 mb-2 font-semibold">Quick Actions:</p>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {quickActions.map((action) => {
            const IconComponent = action.icon;
            return (
              <button
                key={action.id}
                onClick={() => handleQuickAction(action.query)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition whitespace-nowrap"
              >
                <IconComponent className="w-4 h-4" />
                <span>{action.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-4 py-4">
        <div className="flex items-center space-x-2">
          {/* Voice Input Button */}
          <button
            onClick={handleVoiceInput}
            className={`p-3 rounded-full transition ${
              isListening
                ? 'bg-red-500 text-white animate-pulse'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>

          {/* Text Input */}
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your symptoms..."
              className="w-full px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
          </div>

          {/* Send Button */}
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className={`p-3 rounded-full transition ${
              inputText.trim()
                ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center mt-2">
          AI Assistant provides guidance only. Seek professional care for serious symptoms.
        </p>
      </div>
    </div>
  );
};

export default Chat;
