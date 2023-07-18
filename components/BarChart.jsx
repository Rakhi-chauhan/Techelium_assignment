import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const BarChart = ({ chartData }) => {
  const data = {
    labels: chartData && [
      ...chartData?.map((item) => {
        return item?.designation;
      }),
    ],
    datasets: [
      {
        data: chartData && [
          ...chartData?.map((item) => {
            return item?.age;
          }),
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;
