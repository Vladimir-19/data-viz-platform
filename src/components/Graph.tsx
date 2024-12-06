import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import "../style/GraphAndKPISection.css";
import { ChevronDown } from "lucide-react";

// Define the chart configuration with proper TypeScript types
const chartConfig: ApexCharts.ApexOptions & {
  series: ApexAxisChartSeries;
  height: number;
} = {
  type: "line",
  height: 240,
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
    title: {
      text: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#b4d47f"],
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
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

export default function Example(): JSX.Element {
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="test">
          <Button className="dropdown-button">
            Unsatisfied Demand % <ChevronDown size={15} />
          </Button>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart
          options={chartConfig.options}
          series={chartConfig.series}
          type={chartConfig.type}
          height={chartConfig.height}
        />
      </CardBody>
    </Card>
  );
}
