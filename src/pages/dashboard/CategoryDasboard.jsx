import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const CategoryDashboard = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 25, 13, 12, 25, 13],
        backgroundColor: [
          "#E61C24",
          "#2C5EBF",
          "#902CBF",
          "#2D5030",
          "#FE9B00",
          "#75A8C3",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  return (
    <div className="h-[200px] w-[200px]">
      <Pie data={data} options={options} />
    </div>
  );
};
