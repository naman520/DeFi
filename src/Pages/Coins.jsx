import React, { useEffect, useState } from 'react';

const Coins = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,ripple,tether,solana,cardano,polkadot,dogecoin,binancecoin,uniswap', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setCryptoData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching the crypto data:', error);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div className="flex justify-center p-10">
      <table className="w-96 bg-green-100 rounded-lg shadow-lg">
        <thead className="bg-green-100 text-green-900">
          <tr>
            <th className="py-3 px-6">Coins</th>
          </tr>
        </thead>
        <tbody className=' text-center'>
          {cryptoData.map((crypto, index) => (
            <tr key={crypto.id} className={index % 2 === 0 ?  "bg-green-300 " : "bg-green-100"}>
              <td className="py-3 px-6">{crypto.name}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Coins;
