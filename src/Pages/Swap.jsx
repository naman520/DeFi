import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function Swap() {
  const coins = [
    { value: "BTC", name: "Bitcoin (BTC)" },
    { value: "ETH", name: "Ethereum (ETH)" },
    { value: "USDT", name: "Tether (USDT)" },
    { value: "BNB", name: "BNB (BNB)" },
    { value: "SOL", name: "Solana (SOL)" },
    { value: "XRP", name: "XRP (XRP)" },
    { value: "DOGE", name: "Dogecoin (DOGE)" },
    { value: "ADA", name: "Cardano (ADA)" },
    { value: "DOT", name: "Polkadot (DOT)" },
    { value: "UNI", name: "Uniswap (UNI)" }
  ];

  const [sendAmount, setSendAmount] = useState('');
  const [sendCurrency, setSendCurrency] = useState('BTC');
  const [receiveCurrency, setReceiveCurrency] = useState('ETH');
  const [receiveAmount, setReceiveAmount] = useState('');

  // Mock exchange rates (replace with real API data in a production app)
  const exchangeRates = {
    BTC: 30000, ETH: 2000, USDT: 1, BNB: 300, SOL: 50,
    XRP: 0.5, DOGE: 0.1, ADA: 0.3, DOT: 5, UNI: 5
  };

  useEffect(() => {
    convertCurrency();
  }, [sendAmount, sendCurrency, receiveCurrency]);

  const convertCurrency = () => {
    if (sendAmount && sendCurrency && receiveCurrency) {
      const sendRate = exchangeRates[sendCurrency];
      const receiveRate = exchangeRates[receiveCurrency];
      const convertedAmount = (sendAmount * sendRate) / receiveRate;
      setReceiveAmount(convertedAmount.toFixed(8));
    } else {
      setReceiveAmount('');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-white text-4xl font-bold text-center mb-8">Crypto Exchange</h1>
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <h2 className="text-xl font-semibold mb-4">Free from sign-up, limits, complications</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">You send</label>
                <div className="flex">
                  <input
                    type="number"
                    value={sendAmount}
                    onChange={(e) => setSendAmount(e.target.value)}
                    className="flex-grow p-2 border rounded-l"
                    placeholder="0.0"
                  />
                  <select
                    value={sendCurrency}
                    onChange={(e) => setSendCurrency(e.target.value)}
                    className="p-2 border border-l-0 rounded-r bg-gray-100"
                  >
                    {coins.map(coin => (
                      <option key={coin.value} value={coin.value}>{coin.value}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">You get</label>
                <div className="flex">
                  <input
                    type="text"
                    value={receiveAmount}
                    readOnly
                    className="flex-grow p-2 border rounded-l bg-gray-100"
                    placeholder="0.0"
                  />
                  <select
                    value={receiveCurrency}
                    onChange={(e) => setReceiveCurrency(e.target.value)}
                    className="p-2 border border-l-0 rounded-r bg-gray-100"
                  >
                    {coins.map(coin => (
                      <option key={coin.value} value={coin.value}>{coin.value}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                Exchange
              </button>
            </div>
          </div>
          <div className="mt-8 bg-blue-800 text-white p-4 rounded-lg max-w-md mx-auto">
            <h3 className="font-semibold">New Loyalty program is here!</h3>
            <p>Receive BTC cashback for every exchange</p>
          </div>
        </div>
      </div>
    </>
  );
}