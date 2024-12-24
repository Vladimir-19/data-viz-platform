import Chart from "react-apexcharts";
import { Button } from "@/components/ui/button";
import "../style/GraphAndKPISection.css";
import { ChevronDown } from "lucide-react";

import { ApexOptions } from "apexcharts";

const chartConfig: {
  options: ApexOptions;
  series: ApexAxisChartSeries;
  height: number;
  type: "line";
} = {
  height: 240,
  type: "line",
  series: [
    {
      name: "Rate",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: { text: "" },
    dataLabels: { enabled: false },
    colors: ["#b4d47f"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: { size: 0 },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      labels: {
        style: {
          colors: "white",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "white",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 500,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#363636",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: function (value: number) {
          return `$${value}`;
        },
      },
    },
  },
};

export default function CardGraph() {
  return (
    <div>
      <div className="test">
        <Button className="dropdown-button">
          Unsatisfied Demand % <ChevronDown size={15} />
        </Button>
      </div>
      <Chart
        options={chartConfig.options}
        series={chartConfig.series}
        type={chartConfig.type}
        height={chartConfig.height}
      />
    </div>
  );
}
