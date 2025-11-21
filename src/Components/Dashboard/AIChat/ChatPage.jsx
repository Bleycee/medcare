import React, { useState } from "react";
import { Send, Bot, User, Menu } from "lucide-react";

export default function ChatPage({ onMenuClick }) {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      content: "Hello! I'm your AI health assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        role: "ai",
        content:
          "I'm analyzing your symptoms... This is placeholder logic. In production, this will call your backend AI API.",
      };
      setMessages((prev) => [...prev, aiResponse]);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Bar */}
      <div className="flex items-center p-4 bg-white shadow-md">
        <button onClick={onMenuClick} className="lg:hidden mr-4">
          <Menu className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-semibold text-gray-800">AI Health Assistant</h1>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start space-x-3 ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.role === "ai" && (
              <div className="p-2 bg-blue-100 rounded-full">
                <Bot className="w-5 h-5 text-blue-600" />
              </div>
            )}

            <div
              className={`max-w-xs p-3 rounded-2xl text-sm shadow-md ${
                msg.role === "user"
                  ? "bg-blue-600 text-white rounded-br-none"
                  : "bg-white text-gray-700 rounded-bl-none"
              }`}
            >
              {msg.content}
            </div>

            {msg.role === "user" && (
              <div className="p-2 bg-gray-200 rounded-full">
                <User className="w-5 h-5 text-gray-700" />
              </div>
            )}
          </div>
        ))}

        {/* Loading Bubble */}
        {loading && (
          <div className="flex items-start space-x-3">
            <div className="p-2 bg-blue-100 rounded-full">
              <Bot className="w-5 h-5 text-blue-600" />
            </div>
            <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-md text-gray-600 text-sm animate-pulse">
              Thinking...
            </div>
          </div>
        )}
      </div>

      {/* Input Box */}
      <div className="p-4 bg-white border-t flex items-center space-x-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your symptoms or ask a health question..."
          className="flex-1 px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white p-3 rounded-xl shadow hover:bg-blue-700"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
