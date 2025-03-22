import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% flex justify-between items-center px-8 py-4 ">
      <Link to="/" className="font-light text-5xl text-white ml-0 sm:ml-36 text-left sm:text-center">
        cyrpto<span className="italic font-light">So</span>
      </Link>

      <div className="hidden lg:flex space-x-20">
        <Link to="/market" className="text-white hover:text-purple-400 text-xl">Market</Link>
        <Link to="/swap" className="text-white hover:text-purple-400 text-xl">Swap</Link>
        <div className="relative group">
          <Link to='/wallet' className="text-white hover:text-purple-400 text-xl">Wallet</Link>
        </div>
      </div>

      <div className="hidden lg:flex items-center space-x-4">
        <button className="bg-gray-300 px-4 py-2 rounded">Login</button>
        <span className="text-white">Coin Balance</span>
      </div>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-10">
          <div className="flex flex-col items-start pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/market" className="block text-black px-3 py-2">Market</Link>
            <Link to="/swap" className="block text-black px-3 py-2">Swap</Link>
            <Link to="/wallet" className="block text-black px-3 py-2">Wallet</Link>
            <button className="bg-gray-300 px-4 py-2 rounded mx-3 my-2">Login</button>
            <span className="text-black px-3 py-2">Coin Balance</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
