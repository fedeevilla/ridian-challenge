"use client";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import { NavsType } from "@/types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Types = "lastDay" | "lastWeek" | "lastMonth" | "lastYear";

interface Props {
  navs: NavsType;
}

const LineChart = ({ navs }: Props): JSX.Element => {
  const labels = Object.keys(navs.daily_navs["1"]).sort();
  const labelsHourly = Object.keys(navs.hourly_navs["1"]).sort();

  const [type, setType] = useState<Types>("lastWeek");
  const [formData, setFormData] = useState<string[]>();
  const [formLabels, setFormLabels] = useState<string[]>(labels.slice(-7));

  useEffect(() => {
    switch (type) {
      case "lastDay":
        setFormLabels(
          labelsHourly
            .slice(-24)
            .map((hour) => `${hour.split(" ")[0]} - ${hour.split(" ")[1]}hs`)
        );
        setFormData(
          labelsHourly
            .slice(-24)
            .map((label: string) => navs.hourly_navs["1"][label])
        );
        break;
      case "lastWeek":
        setFormLabels(labels.slice(-7));
        setFormData(
          labels.slice(-7).map((label: string) => navs.daily_navs["1"][label])
        );
        break;
      case "lastMonth":
        setFormLabels(labels.slice(-30));
        setFormData(
          labels.slice(-30).map((label: string) => navs.daily_navs["1"][label])
        );
        break;
      default:
        setFormLabels(labels.slice(-365));
        setFormData(
          labels.slice(-365).map((label: string) => navs.daily_navs["1"][label])
        );
        break;
    }
  }, [type]);

  const data = {
    labels: formLabels,
    datasets: [
      {
        label: "Navs of a user",
        data: formData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="max-w-4xl p-4 m-auto">
      <div className="flex items-center justify-center gap-4">
        <label
          className="block text-sm font-medium text-gray-900 dark:text-gray-400"
          htmlFor="type"
        >
          Select an option
        </label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value as Types)}
        >
          <option value="lastDay">Last day</option>
          <option value="lastWeek">Last Week</option>
          <option value="lastMonth">Last Month</option>
          <option value="lastYear">Last Year</option>
        </select>
      </div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
