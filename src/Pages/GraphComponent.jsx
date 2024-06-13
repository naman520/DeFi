import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import Navbar from "./Navbar";

const GraphComponent = () => {
  const originalJson = {
    coins: [
      {
        c1: "BTC",
        price: 200,
        "market (in Trillion dollars)": 300,
      },
      {
        c2: "ETH",
        price: 100,
        "market (in Trillion dollars)": 80,
      },
      {
        c3: "DOGE",
        price: 50,
        "market (in Trillion dollars)": 1,
      },
      {
        c4: "PLDT",
        price: 10,
        "market (in Trillion dollars)": 1,
      },
      {
        c5: "MOON",
        price: 5,
        "market (in Trillion dollars)": 0.5,
      },
      {
        c6: "BTCUSDF",
        price: 20,
        "market (in Trillion dollars)": 0.7,
      },
    ],
  };

  const mappedCoins = originalJson.coins.map((coin) => {
    const key = Object.keys(coin).find((k) => k.startsWith("c"));
    return {
      name: coin[key],
      price: coin.price,
      market_cap: coin["market (in Trillion dollars)"],
    };
  });

  const data = {
    labels: mappedCoins.map((coin) => coin.name),
    datasets: [
      {
        label: "Price",
        data: mappedCoins.map((coin) => coin.price),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Market Cap (in Trillion dollars)",
        data: mappedCoins.map((coin) => coin.market_cap),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <div className="  ">
        {" "}
        {/* add css here */}
        <div className=" text-2xl font-semibold text-green-400 text-center">
          <h1>Cryptocurrency Prices and Market Cap</h1>
        </div>
        <div className=" flex justify-center">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Market Cap (in Trillion dollars)</th>
              </tr>
            </thead>
            <tbody>
              {mappedCoins.map((coin, index) => (
                <tr key={index}>
                  <td>{coin.name}</td>
                  <td>{coin.price}</td>
                  <td>{coin.market_cap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div></div>
      <h2>Chart</h2>
      <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <Bar data={data} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
    </div>
  );
};

export default GraphComponent;
