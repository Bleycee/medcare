// components/Button.jsx
export const Button = ({ children, onClick }) => (
  <button 
    onClick={onClick}
    className="px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition"
  >
    {children}
  </button>
);