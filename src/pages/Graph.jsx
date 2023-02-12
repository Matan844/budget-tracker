import { useContext } from "react";
import { Detail } from "./context";
import { NavLink } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import React from "react";

import { Chart, ArcElement } from "chart.js";

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
  Legend
);

Chart.register(ArcElement);

export default function Graph() {
  const { income, setincome } = useContext(Detail);
  const { expenses, setexpenses } = useContext(Detail);
  const positive = expenses * -1;
  const { food, setfood } = useContext(Detail);
  const { supermarket, setsupermarket } = useContext(Detail);
  const { bills, setbills } = useContext(Detail);
  const { clothes, setclothes } = useContext(Detail);
  const { finance, setfinance } = useContext(Detail);
  const { eduction, seteduction } = useContext(Detail);
  const { health, sethealth } = useContext(Detail);
  const { communication, setcommunication } = useContext(Detail);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Expenses against income in the recent period",
      },
    },
  };
  const labels = ["income vs expenses"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "income",
        data: [income, 0],
        backgroundColor: "green",
      },
      {
        label: "expenses",
        data: [positive, 0],
        backgroundColor: "red",
      },
    ],
  };

  const catagoryz = {
    labels: [
      "food",
      "supermarket",
      "bills",
      "clothes",
      "finance",
      "eduction",
      "health",
      "communication",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [
          food,
          supermarket,
          bills,
          clothes,
          finance,
          eduction,
          health,
          communication,
        ],
        backgroundColor: [
          "#0000FF",
          "#FF0000",
          "#00FF00",
          "#808080",
          "#FFFF00",
          "#333300",
          "#000000",
          "#00FFFF",
        ],
        hoverOffset: 4,
      },
    ],
  };
  const config2 = {
    type: "doughnut",
    data: catagoryz,
  };
  return (
    <div >
      <div className="navbar">
        <NavLink to="/main">main</NavLink>
        <NavLink to="/graph">graph</NavLink>
        <NavLink to="/add">add</NavLink>
      </div>
      <div className="graphpage">
        <h1>income vs expenses chart</h1>
        <div style={{ width: "1200px", margin: "auto auto" }}>
          <Bar options={options} data={data} />
        </div>
        <div className="donut" style={{ width: "45%", height: "45%" }}>
          <h1>Division of expenses by categories</h1>
          <Doughnut data={catagoryz} />
        </div>
      </div>
    </div>
  );
}
