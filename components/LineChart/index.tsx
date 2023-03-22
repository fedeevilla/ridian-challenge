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
  const hourly_navs = navs.hourly_navs["1"];
  const daily_navs = navs.daily_navs["1"];

  const labels = Object.keys(daily_navs).sort();
  const labelsHourly = Object.keys(hourly_navs).sort();

  const [type, setType] = useState<Types>("lastDay");
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
          labelsHourly.slice(-24).map((label: string) => hourly_navs[label])
        );
        break;
      case "lastWeek":
        setFormLabels(labels.slice(-7));
        setFormData(labels.slice(-7).map((label: string) => daily_navs[label]));
        break;
      case "lastMonth":
        setFormLabels(labels.slice(-30));
        setFormData(
          labels.slice(-30).map((label: string) => daily_navs[label])
        );
        break;
      default:
        setFormLabels(labels.slice(-365));
        setFormData(
          labels.slice(-365).map((label: string) => daily_navs[label])
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
          className="block text-sm text-gray-900 font-extralight"
          htmlFor="type"
        >
          Select a view option
        </label>
        <select
          className="block p-1 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
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
