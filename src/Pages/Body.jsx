import React, { useState } from 'react';
import Coin from './Coin';

export default function Body() {
  const [activeTab, setActiveTab] = useState('Coins');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className=" min-h-screen bg-gradient-to-r from-teal-800 via-blue-600 to-teal-800 animate-customPulse">
      <div className="font-sans p-8">
        <div className="flex justify-center mt-10 space-x-20 font-medium text-xl text-white">
          <button
            className={`px-4 py-2 transition-all duration-300 ${
              activeTab === 'Coins' ? 'border-b-2 border-yellow-400 text-yellow-400' : 'hover:text-blue-300'
            }`}
            onClick={() => handleTabClick('Coins')}
          >
            Coins
          </button>
          <button
            className={`px-4 py-2 transition-all duration-300 ${
              activeTab === 'Discussion' ? 'border-b-2 border-yellow-400 text-yellow-400' : 'hover:text-blue-300'
            }`}
            onClick={() => handleTabClick('Discussion')}
          >
            Discussion
          </button>
          <button
            className={`px-4 py-2 transition-all duration-300 ${
              activeTab === 'News' ? 'border-b-2 border-yellow-400 text-yellow-400' : 'hover:text-blue-300'
            }`}
            onClick={() => handleTabClick('News')}
          >
            News
          </button>
        </div>
        <div className="mt-10 text-center">
          {activeTab === 'Coins' && <Coin />}
          {activeTab === 'Discussion' && <div>Discussion content goes here.</div>}
          {activeTab === 'News' && <div>News content goes here.</div>}
        </div>
      </div>
    </div>
  );
}