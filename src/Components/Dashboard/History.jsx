// History.jsx
import React, { useState } from 'react';
import { FileText, Clock, ChevronLeft, ChevronRight, BarChart2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// 1. Dummy Data Array
const dummyHistory = [
  { id: 1, date: '2025-11-28', type: 'AI Assessment', result: 'Mild Respiratory Infection', status: 'Completed', path: '/history/1' },
  { id: 2, date: '2025-11-20', type: 'Vital Check', result: 'Blood Pressure: Normal', status: 'Completed', path: '/history/2' },
  { id: 3, date: '2025-11-15', type: 'AI Assessment', result: 'Fatigue & Stress Management', status: 'Needs Review', path: '/history/3' },
  { id: 4, date: '2025-11-10', type: 'Medication Log', result: 'Dose adjustment noted', status: 'Completed', path: '/history/4' },
  { id: 5, date: '2025-11-01', type: 'AI Assessment', result: 'Musculoskeletal Strain', status: 'Completed', path: '/history/5' },
  { id: 6, date: '2025-10-25', type: 'Vital Check', result: 'Heart Rate: High', status: 'Completed', path: '/history/6' },
  { id: 7, date: '2025-10-18', type: 'AI Assessment', result: 'Seasonal Allergies Suspected', status: 'Completed', path: '/history/7' },
  { id: 8, date: '2025-10-10', type: 'Medication Log', result: 'New prescription added', status: 'Completed', path: '/history/8' },
  { id: 9, date: '2025-10-03', type: 'AI Assessment', result: 'Initial Baseline Health Check', status: 'Completed', path: '/history/9' },
  { id: 10, date: '2025-09-29', type: 'Vital Check', result: 'Temperature: Normal', status: 'Completed', path: '/history/10' },
  { id: 11, date: '2025-09-20', type: 'AI Assessment', result: 'Mild Insomnia Indicators', status: 'Completed', path: '/history/11' },
  { id: 12, date: '2025-09-15', type: 'Vital Check', result: 'Oxygen Saturation: 98%', status: 'Completed', path: '/history/12' },
];

const ITEMS_PER_PAGE = 5; // You can change this number

export const History = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  // --- Pagination Logic ---
  const totalPages = Math.ceil(dummyHistory.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = dummyHistory.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  // -------------------------

  // Helper function to render status pill
  const getStatusPill = (status) => {
    let colorClass = '';
    switch (status) {
      case 'Completed':
        colorClass = 'bg-green-100 text-green-700';
        break;
      case 'Needs Review':
        colorClass = 'bg-yellow-100 text-yellow-700';
        break;
      default:
        colorClass = 'bg-gray-100 text-gray-700';
    }
    return <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colorClass}`}>{status}</span>;
  };

  return (
    <div className="p-4 sm:p-8 md:p-10 min-h-full">
      <h1 className="text-xl font-bold text-gray-600 mb-1">MY HISTORY</h1>
      <p className="text-3xl font-extrabold text-gray-900 mb-6">
        Past Health Assessments & Records
      </p>

      {/* History List */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <ul className="divide-y divide-gray-200">
          {currentItems.map((item) => (
            <li 
              key={item.id} 
              className="p-4 sm:p-6 flex justify-between items-center hover:bg-gray-50 transition cursor-pointer"
              onClick={() => navigate(item.path)} // Navigate to detail view
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-cyan-100 rounded-lg text-cyan-600">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{item.result}</p>
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <Clock className="w-4 h-4 mr-1.5" /> 
                    {item.date} • {item.type}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                {getStatusPill(item.status)}
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </li>
          ))}
        </ul>

        {/* Empty State Check */}
        {dummyHistory.length === 0 && (
          <p className="p-6 text-center text-gray-500">No past records found. Start a new assessment!</p>
        )}
      </div>

      {/* 2. Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-between items-center">
          <button 
            onClick={handlePrevPage} 
            disabled={currentPage === 1}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${
              currentPage === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-cyan-600 text-white hover:bg-cyan-700'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>
          
          <div className="text-sm font-medium text-gray-700">
            Page {currentPage} of {totalPages}
          </div>

          <button 
            onClick={handleNextPage} 
            disabled={currentPage === totalPages}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${
              currentPage === totalPages ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-cyan-600 text-white hover:bg-cyan-700'
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default History;