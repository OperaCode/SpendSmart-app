import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ transactions }) => {
  const totalFoodGroceries = Array.isArray(transactions)
    ? transactions
        .filter((transaction) => transaction.category === "Food and groceries")
        .reduce((acc, transaction) => acc + (transaction.amount || 0), 0)
    : 0;
  const totalUtilities = Array.isArray(transactions)
    ? transactions
        .filter((transaction) => transaction.category === "Utilities")
        .reduce((acc, transaction) => acc + (transaction.amount || 0), 0)
    : 0;

  const totalTransportation = Array.isArray(transactions)
    ? transactions
        .filter((transaction) => transaction.category === "Transportation")
        .reduce((acc, transaction) => acc + (transaction.amount || 0), 0)
    : 0;

  const categories = [
    {
      label: "Foods and Groceries",
      total: totalFoodGroceries,
    },
    {
      label: "Utilities",
      total: totalUtilities,
    },
    {
      label: "Transportation",
      total: totalTransportation,
    },
  ];

  const labels = categories.map((v) => v.label);
  const dataValues = categories.map((v) => v.total);

  const data = {
    labels,
    datasets: [
      {
        label: "Total Expenses Recorded ($)",
        data: dataValues,
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(201, 203, 207, 0.5)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          font: { size: 10, weight: "bold" },
        },
      },
    },
    scales: {
      x: {
        ticks: { font: { size: 12, weight: "bold" } },
      },
      y: {
        beginAtZero: true,
        ticks: { font: { size: 12, weight: "bold" } },
      },
    },
  };

  return (
    <div className="m-auto rounded">
      <h2 className="font-bold text-xl text-center">My Spend Analytics</h2>
      <div className="flex justify-center ">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
