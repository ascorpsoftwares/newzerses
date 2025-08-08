import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PLR from './PLR.jsx'

const AppSwitcher = () => {
  const [currentApp, setCurrentApp] = useState('portfolio'); // 'portfolio' or 'plr'

  // Keyboard shortcuts
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === '1') {
          e.preventDefault();
          setCurrentApp('portfolio');
        } else if (e.key === '2') {
          e.preventDefault();
          setCurrentApp('plr');
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div>
      {/* App Switcher - Development Mode */}
      <div className="fixed top-4 right-4 z-[9999] bg-white shadow-2xl rounded-lg p-3 border-2 border-gray-300">
        <div className="text-xs text-gray-500 mb-2 text-center">Switch Site:</div>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentApp('portfolio')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all transform hover:scale-105 ${
              currentApp === 'portfolio' 
                ? 'bg-blue-500 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            📄 Portfolio
          </button>
          <button
            onClick={() => setCurrentApp('plr')}
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all transform hover:scale-105 ${
              currentApp === 'plr' 
                ? 'bg-purple-500 text-white shadow-lg' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🔮 PLR Site
          </button>
        </div>
      </div>

      {/* Render the selected app */}
      {currentApp === 'portfolio' ? <App /> : <PLR />}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppSwitcher />
  </React.StrictMode>,
)