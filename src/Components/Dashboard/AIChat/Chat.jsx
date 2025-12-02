// Chat.jsx - Customer Support Version
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
 
  Send, 
  MessageCircle,
  MoreVertical,
  Bot,
  HelpCircle,
  Calendar,
  CreditCard,
  Shield,
  FileText,
  Clock,
  Users
} from 'lucide-react';

// Utility function outside component
const formatTime = (date) => {
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
};

const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      text: "👋 Hello! I'm your MedCare support assistant. How can I help you today?",
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Quick action buttons for common questions
  const quickActions = [
    { 
      id: 1, 
      label: 'How to use MedCare?', 
      icon: HelpCircle, 
      query: "How do I use MedCare?" 
    },
    { 
      id: 2, 
      label: 'Privacy & Security', 
      icon: Shield, 
      query: "How is my data protected?" 
    },
    { 
      id: 3, 
      label: 'Health Assessment', 
      icon: FileText, 
      query: "How does the health assessment work?" 
    },
    { 
      id: 4, 
      label: 'Contact support', 
      icon: Users, 
      query: "How do I contact human support?" 
    },
    { 
      id: 5, 
      label: 'About MedCare', 
      icon: MessageCircle, 
      query: "Tell me about MedCare" 
    },
    { 
      id: 6, 
      label: 'FAQ', 
      icon: HelpCircle, 
      query: "Show me frequently asked questions" 
    },
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
    setShowQuickReplies(false);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputText);
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 800);
  };

  const generateAIResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    let responseText = "";
    let actions = [];

    // Greetings
    if (input.match(/\b(hi|hello|hey|good morning|good afternoon)\b/)) {
      responseText = "Hello! 👋 Welcome to MedCare Support. I'm here to help you with any questions about our platform. What would you like to know?";
    }
    
    // How to use MedCare
    else if (input.includes('how to use') || input.includes('how do i use') || input.includes('getting started')) {
      responseText = "🎯 Getting Started with MedCare:\n\n1️⃣ Take our AI Health Assessment\n2️⃣ Get instant health insights\n3️⃣ Access your health history anytime\n4️⃣ Chat with our support bot for help\n\nMedCare helps you understand your health better. Ready to start?";
      actions = [
        { label: '🏥 Start Assessment', action: 'navigate', path: '/assessment' },
        { label: 'Learn More', action: 'navigate', path: '/about' }
      ];
    }
    
    // Health Assessment
    else if (input.includes('assessment') || input.includes('health check') || input.includes('how does it work')) {
      responseText = "🏥 Our AI Health Assessment:\n\n✅ Answer simple questions about your symptoms\n✅ Get AI-powered health insights\n✅ Receive personalized recommendations\n✅ Track your health over time\n\nIt takes just 5 minutes! Would you like to try it?";
      actions = [
        { label: 'Start Assessment', action: 'navigate', path: '/assessment' }
      ];
    }
    
    // About MedCare
    else if (input.includes('about') || input.includes('what is medcare') || input.includes('tell me about')) {
      responseText = "🏥 About MedCare:\n\nMedCare is your smart health companion that helps you:\n\n• Understand your symptoms\n• Get health recommendations\n• Track your wellness journey\n• Make informed health decisions\n\nWe use AI to provide quick, reliable health guidance. Want to learn more?";
      actions = [
        { label: 'About Us', action: 'navigate', path: '/about' }
      ];
    }
    
    // Privacy and security
    else if (input.includes('privacy') || input.includes('security') || input.includes('data') || input.includes('safe')) {
      responseText = "🔒 Your privacy is our priority!\n\n✅ All data is encrypted end-to-end\n✅ HIPAA compliant\n✅ No data sharing without consent\n✅ Regular security audits\n\nYour medical information is completely confidential.";
    }
    
    // Contact support
    else if (input.includes('human') || input.includes('support') || input.includes('contact') || input.includes('help')) {
      responseText = "📞 Our support team is here for you!\n\n📧 Email: support@medcare.com\n📱 Phone: +234 800 123 4567\n⏰ Available: Mon-Fri, 8AM-8PM\n\nYou can also use the 'Contact Us' page for detailed inquiries.";
      actions = [
        { label: 'Contact Us', action: 'navigate', path: '/contact' }
      ];
    }
    
    // FAQ
    else if (input.includes('faq') || input.includes('frequently') || input.includes('common questions')) {
      responseText = "📋 Frequently Asked Questions:\n\n1. How do I use MedCare?\n2. How does the health assessment work?\n3. Is my health data secure?\n4. Can I access my assessment history?\n5. How do I contact support?\n\nWhich topic would you like to know more about?";
    }
    
    // Assessment/symptoms
    else if (input.includes('symptom') || input.includes('sick') || input.includes('pain') || input.includes('fever') || input.includes('cough')) {
      responseText = "I see you have health concerns! 🏥\n\nOur AI Health Assessment can help you understand your symptoms better. It's quick, free, and provides personalized health insights.\n\nWould you like to start an assessment now?";
      actions = [
        { label: '🏥 Start Assessment', action: 'navigate', path: '/assessment' }
      ];
    }
    
    // View history
    else if (input.includes('history') || input.includes('past assessment') || input.includes('previous')) {
      responseText = "📊 You can view your assessment history anytime!\n\nGo to Dashboard → 'My History' to see:\n• Past health assessments\n• Health trends over time\n• Previous recommendations\n\nWould you like to view your history now?";
      actions = [
        { label: 'View History', action: 'navigate', path: '/history' }
      ];
    }
    
    // How it works
    else if (input.includes('how it works') || input.includes('guide')) {
      responseText = "🎯 How MedCare Works:\n\n1️⃣ Take a quick health assessment (5 mins)\n2️⃣ Answer questions about your symptoms\n3️⃣ Get AI-powered health insights\n4️⃣ Receive personalized recommendations\n5️⃣ Track your health over time\n\nIt's that simple! Want to try it?";
      actions = [
        { label: 'Start Now', action: 'navigate', path: '/assessment' },
        { label: 'Learn More', action: 'navigate', path: '/about' }
      ];
    }
    
    // Thanks
    else if (input.match(/\b(thank|thanks|appreciate)\b/)) {
      responseText = "You're very welcome! 😊 Is there anything else I can help you with today?";
    }
    
    // Goodbye
    else if (input.match(/\b(bye|goodbye|see you)\b/)) {
      responseText = "Thank you for contacting MedCare Support! Take care and feel better soon! 👋\n\nYou can always come back if you need help.";
    }
    
    // Default fallback
    else {
      responseText = "I'm not sure I understand. Here are some things I can help with:\n\n• How to use MedCare\n• Health Assessment info\n• Privacy & security\n• Platform features\n• General support\n\nCould you rephrase your question or choose from the options below?";
      setShowQuickReplies(true);
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
    // Auto-send the query
    setTimeout(() => {
      const userMessage = {
        id: Date.now(),
        type: 'user',
        text: query,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);
      setIsTyping(true);
      setShowQuickReplies(false);

      setTimeout(() => {
        const aiResponse = generateAIResponse(query);
        setMessages((prev) => [...prev, aiResponse]);
        setIsTyping(false);
      }, 800);
    }, 100);
  };

  const handleActionButton = (action) => {
    if (action.action === 'navigate') {
      navigate(action.path);
    }
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
            
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-gray-800">MedCare Support</h1>
              <p className="text-xs text-green-600 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></span>
                Online • Fast Response
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
              <div className="flex items-end space-x-2 mb-1">
                {message.type === 'ai' && (
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                )}
                
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
                    <div className="flex flex-wrap gap-2 mt-2">
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
                    U
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
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
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

      {/* Quick Actions - Only show at start or when triggered */}
      {showQuickReplies && (
        <div className="px-4 py-3 bg-white border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-2 font-semibold">💬 Quick Questions:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {quickActions.map((action) => {
              const IconComponent = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={() => handleQuickAction(action.query)}
                  className="flex items-center space-x-2 px-3 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition text-left"
                >
                  <IconComponent className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-4 py-4">
        <div className="flex items-center space-x-2">
          {/* Text Input */}
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type your question..."
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

        {/* Footer Note */}
        <p className="text-xs text-gray-500 text-center mt-2">
          💡 For medical symptoms, use our Health Assessment tool
        </p>
      </div>
    </div>
  );
};

export default Chat;