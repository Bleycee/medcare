// HelpPage.jsx - The content component for the Help & Support route
import React from "react";
import {
  Search,
  Bot,
  Shield,
  FileText,
  Users,
  Settings,
  BookOpen,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Component for a single category card (reusable UI element)
const HelpCategoryCard = ({ title, description, icon: Icon, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center space-x-4 p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-cyan-500 transition duration-200 text-left w-full"
  >
    <div className="p-3 bg-cyan-100 rounded-full text-cyan-600 flex-shrink-0">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
    </div>
  </button>
);

// Main Help and Support Page component
export const HelpPage = () => {
  const navigate = useNavigate();

  // Define the content blocks based on the Figma design
  const categories = [
    {
      title: "Condition Management",
      description: "Diabetes, Hypertension, Weight Management",
      icon: FileText,
      action: () => console.log("Navigating to Condition Management topics..."),
    },
    {
      title: "24/7 Care",
      description: "Immediate care, what we treat, prescriptions",
      icon: Bot,
      action: () => navigate("/chat"), // Link to your existing Chat.jsx component
    },
    {
      title: "Security & Privacy",
      description: "8 articles",
      icon: Shield,
      action: () => console.log("Navigating to Security & Privacy articles..."),
    },
    {
      title: "Troubleshooting",
      description: "Find solutions to common issues",
      icon: Settings,
      action: () => console.log("Navigating to Troubleshooting guides..."),
    },
    {
      title: "User Guides",
      description: "Read detailed instructions and manuals",
      icon: BookOpen,
      action: () => console.log("Navigating to User Guides..."),
    },
    {
      title: "Accounts",
      description: "Sign in help",
      icon: Users,
      action: () => console.log("Navigating to Account help..."),
    },
  ];

  return (
    <div className="p-4 sm:p-8 md:p-10 min-h-full">
      {/* 1. Header and Search Area */}
      <div className="mb-10">
        <h1 className="text-xl font-bold text-gray-600 mb-1">HELP & SUPPORT</h1>
        <p className="text-3xl font-extrabold text-gray-900 mb-6">
          Find answers to common questions
        </p>

        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search help topics..."
            className="w-full py-3 pl-12 pr-4 text-gray-700 border border-gray-300 rounded-xl focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition duration-150"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
      {/* 2. Knowledge Base Categories (Content Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <HelpCategoryCard
            key={category.title}
            title={category.title}
            description={category.description}
            icon={category.icon}
            onClick={category.action}
          />
        ))}
      </div>
      {/* Footer Note */}
            <div className="mt-12 text-center">
        <p className="text-sm text-gray-500">
          Can't find what you're looking for? Try the{" "}
          <button
            className="text-cyan-600 hover:text-cyan-700 font-medium inline-flex items-center space-x-1" // Use flex to align icon and text
            onClick={() => navigate("/dashboard/chat")}
          >
            <Bot className="w-4 h-4" />{" "}
            {/* Smaller, simple icon next to the text */}
            <span>24/7 Care Chat</span>
          </button>
        </p>
      </div>
    </div>
  );
};

export default HelpPage;
