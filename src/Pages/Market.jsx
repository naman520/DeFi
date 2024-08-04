import React, { useState } from 'react';
import Navbar from './Navbar';
import Api from './Api';
import Coins from './Coins'; 
import Footer from './Footer';

const Market = () => {
  const [activeTab, setActiveTab] = useState('Coin List');

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-teal-800 via-blue-600 to-teal-800 animate-customPulse">
        <div className='flex justify-center pt-11 text-xl font-semibold space-x-20'>
          <div onClick={() => setActiveTab('Coin List')} className="cursor-pointer">Coin List</div>
          <div onClick={() => setActiveTab('DeFi')} className="cursor-pointer">DeFi</div>
          <div onClick={() => setActiveTab('NFT')} className="cursor-pointer">NFT</div>
        </div>
        <div className="p-10">
          {activeTab === 'Coin List' && <Coins />}
          {activeTab === 'DeFi' && <div>DeFi Content</div>}
          {activeTab === 'NFT' && <Api />}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Market;
