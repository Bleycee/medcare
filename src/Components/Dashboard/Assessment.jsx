// Assessment.jsx - AI Medical Triage (Simple version with standard sidebar)
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Send, 
  Sparkles,
  AlertCircle,
  ThermometerSun,
  Wind,
  HeartPulse,
  Brain,
  Activity,
  Droplet,
  Eye,
  Ear,
  Shield,
  Menu
} from 'lucide-react';

const formatTime = (date) => {
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
};

const Assessment = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      text: "Hello! I'm your AI Health Assistant. I'll help assess your symptoms and provide health guidance.\n\n⚠️ Important: This is not a substitute for professional medical advice. For emergencies, please call 911 or visit your nearest hospital.\n\nLet's start - what symptoms are you experiencing today?",
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [assessmentStage, setAssessmentStage] = useState('initial');
  const [userSymptoms, setUserSymptoms] = useState([]);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Common symptom quick actions
  const symptomActions = [
    { id: 1, label: 'Fever', icon: ThermometerSun, query: "I have a fever" },
    { id: 2, label: 'Cough', icon: Wind, query: "I have a cough" },
    { id: 3, label: 'Headache', icon: Brain, query: "I have a headache" },
    { id: 4, label: 'Chest Pain', icon: HeartPulse, query: "I have chest pain" },
    { id: 5, label: 'Fatigue', icon: Activity, query: "I feel very tired" },
    { id: 6, label: 'Nausea', icon: Droplet, query: "I feel nauseous" },
    { id: 7, label: 'Vision Issues', icon: Eye, query: "I have vision problems" },
    { id: 8, label: 'Ear Pain', icon: Ear, query: "My ear hurts" },
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: inputText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = generateTriageResponse(currentInput);
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1200);
  };

  const generateTriageResponse = (userInput) => {
    const input = userInput.toLowerCase();
    let responseText = "";
    let actions = [];
    let severity = "low";

    const emergencySymptoms = [
      'chest pain', 'difficulty breathing', 'can\'t breathe', 'severe bleeding',
      'unconscious', 'suicide', 'overdose', 'stroke', 'heart attack',
      'severe head injury', 'seizure'
    ];

    const hasEmergency = emergencySymptoms.some(symptom => input.includes(symptom));

    if (hasEmergency) {
      severity = "emergency";
      responseText = "🚨 EMERGENCY ALERT 🚨\n\nYour symptoms require IMMEDIATE medical attention!\n\n📞 Call Emergency Services: 911\n🏥 Or go to the nearest Emergency Room NOW\n\nDo not delay. Your health and safety are the priority.";
      actions = [
        { label: '📞 Call 911', action: 'emergency', phone: '911' },
        { label: '🏥 Find Hospital', action: 'external', url: 'https://maps.google.com/?q=hospital+near+me' }
      ];
      return { id: Date.now(), type: 'ai', text: responseText, timestamp: new Date(), actions, severity };
    }

    if (input.includes('fever') || input.includes('temperature')) {
      if (!userSymptoms.includes('fever')) {
        setUserSymptoms(prev => [...prev, 'fever']);
      }
      responseText = "I understand you have a fever. Let me gather more information:\n\n📊 Questions:\n• What is your temperature? (if you've measured it)\n• How long have you had the fever?\n• Any other symptoms? (chills, body aches, sweating)\n• Have you taken any medication?";
      severity = "moderate";
    } else if (input.includes('cough')) {
      if (!userSymptoms.includes('cough')) {
        setUserSymptoms(prev => [...prev, 'cough']);
      }
      responseText = "I see you have a cough. Let me ask some questions:\n\n🔍 Details needed:\n• Is it a dry cough or producing mucus?\n• What color is the mucus? (clear, yellow, green)\n• How long have you had this cough?\n• Is it worse at certain times (night, morning)?\n• Any difficulty breathing?";
      severity = "moderate";
    } else if (input.includes('headache') || input.includes('head hurt')) {
      if (!userSymptoms.includes('headache')) {
        setUserSymptoms(prev => [...prev, 'headache']);
      }
      responseText = "I'm sorry you're experiencing a headache. Let me understand it better:\n\n🎯 Assessment:\n• On a scale of 1-10, how severe is the pain?\n• Where exactly is the pain? (front, back, sides, all over)\n• What type of pain? (throbbing, sharp, dull, pressure)\n• How long have you had it?\n• Any vision changes, nausea, or sensitivity to light?";
      severity = "moderate";
    } else if (input.includes('chest') && input.includes('pain')) {
      if (!userSymptoms.includes('chest pain')) {
        setUserSymptoms(prev => [...prev, 'chest pain']);
      }
      responseText = "⚠️ Chest pain can be serious. Let me assess:\n\n🫀 Important questions:\n• How severe is the pain? (1-10)\n• Is it sharp, dull, or pressure-like?\n• Does it radiate to arm, jaw, or back?\n• Any shortness of breath or sweating?\n• When did it start?\n\n⚠️ If severe or getting worse, seek immediate medical care!";
      severity = "high";
      actions = [
        { label: '🏥 Find Urgent Care', action: 'external', url: 'https://maps.google.com/?q=urgent+care+near+me' }
      ];
    } else if (input.includes('tired') || input.includes('fatigue') || input.includes('exhausted')) {
      if (!userSymptoms.includes('fatigue')) {
        setUserSymptoms(prev => [...prev, 'fatigue']);
      }
      responseText = "I understand you're feeling very tired. Let's explore this:\n\n💤 Questions:\n• How long have you been feeling this way?\n• Is it affecting your daily activities?\n• How is your sleep? (quality and hours)\n• Any other symptoms? (weight changes, mood changes)\n• Recent stress or lifestyle changes?";
      severity = "low";
    } else if (input.includes('nausea') || input.includes('vomit') || input.includes('throw up')) {
      if (!userSymptoms.includes('nausea')) {
        setUserSymptoms(prev => [...prev, 'nausea']);
      }
      responseText = "I see you're experiencing nausea. Let me gather details:\n\n🤢 Information needed:\n• Have you vomited? How many times?\n• Any diarrhea or stomach pain?\n• When did it start?\n• What have you eaten recently?\n• Fever or other symptoms?\n\n💡 Tip: Stay hydrated with small sips of water.";
      severity = "moderate";
    } else if (assessmentStage === 'initial') {
      responseText = "Thank you for sharing that. To provide the best assessment, I need a bit more information:\n\n📝 Please tell me:\n• What specific symptoms are you experiencing?\n• When did they start?\n• How severe are they?\n• Have you taken any medications?";
      setAssessmentStage('gathering');
    } else {
      responseText = "I understand. Can you describe your symptoms in more detail? For example:\n\n• What are you feeling?\n• Where does it hurt?\n• When did it start?\n• How severe is it (mild, moderate, severe)?";
    }

    return {
      id: Date.now(),
      type: 'ai',
      text: responseText,
      timestamp: new Date(),
      actions,
      severity
    };
  };

  const handleQuickSymptom = (query) => {
    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: query,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse = generateTriageResponse(query);
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1200);
  };

  const handleActionButton = (action) => {
    if (action.action === 'navigate') {
      navigate(action.path);
    } else if (action.action === 'external') {
      window.open(action.url, '_blank');
    } else if (action.action === 'emergency') {
      window.location.href = `tel:${action.phone}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10 shadow-sm">
        <div className="flex items-center space-x-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-gray-800">AI Health Assessment</h1>
              <p className="text-xs text-cyan-600 flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                Secure & Confidential
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] sm:max-w-[75%]`}>
              <div className="flex items-end space-x-2 mb-1">
                {message.type === 'ai' && (
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                )}
                
                <div className="flex-1">
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : message.severity === 'emergency'
                        ? 'bg-red-50 text-red-900 border-2 border-red-500 rounded-bl-none shadow-lg'
                        : message.severity === 'high'
                        ? 'bg-orange-50 text-orange-900 border border-orange-300 rounded-bl-none'
                        : 'bg-white text-gray-800 shadow-sm border border-gray-200 rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                  
                  {message.actions && message.actions.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {message.actions.map((action, index) => (
                        <button
                          key={index}
                          onClick={() => handleActionButton(action)}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                            action.action === 'emergency'
                              ? 'bg-red-600 text-white hover:bg-red-700 animate-pulse'
                              : 'bg-blue-600 text-white hover:bg-blue-700'
                          }`}
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
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    U
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-end space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="bg-white rounded-2xl rounded-bl-none px-4 py-3 shadow-sm border border-gray-200">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Symptom Buttons */}
      {messages.length <= 2 && (
        <div className="px-4 py-3 bg-white border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-2 font-semibold">🏥 Common Symptoms:</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {symptomActions.map((symptom) => {
              const IconComponent = symptom.icon;
              return (
                <button
                  key={symptom.id}
                  onClick={() => handleQuickSymptom(symptom.query)}
                  className="flex items-center space-x-2 px-3 py-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium text-gray-700 transition"
                >
                  <IconComponent className="w-4 h-4 flex-shrink-0" />
                  <span className="text-xs">{symptom.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-4 py-4">
        <div className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Describe your symptoms..."
              className="w-full px-4 py-3 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            />
          </div>

          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className={`p-3 rounded-full transition ${
              inputText.trim()
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-start space-x-2 mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800">
            <strong>Medical Disclaimer:</strong> This AI assessment provides general health information only. It is not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Assessment;