// import Chart from "react-apexcharts";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
import styles from "./charts.module.scss";

export default function SampleLine() {
  var options = {
    chart: {
      type: "area",
      stacked: true,
      height: "100px !important",
    },
    colors: [
      "#7D011C",
      "#960222",
      "#AF0228",
      "#C8022E",
      "#E10333",
      "#FA0339",
      "#F81A4A",
      "#F6305C",
    ],
    fill: {
      type: "solid",
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
      formatter: function (value, { seriesIndex, dataPointIndex, w }) {
        return w.config.series[seriesIndex].name;
      },
    },
    labels: ["Apples", "Oranges", "Berries", "Grapes"],
    stroke: {
      show: true,
      width: 1,
      curve: "straight",
      colors: ["#00000030"],
    },
    xaxis: {
      categories: ["DEC 2021", "DEC 2022", "DEC 2023", "DEC 2024", "DEC 2025"],
      labels: {
        style: {
          fontFamily: "Magistral-Medium",
          fontSize: "20px",
          colors: "#c5c5c5",
        },
      },
    },
    yaxis: {
      show: true,
      labels: {
        style: {
          fontFamily: "Magistral-Medium",
          fontSize: "16px",
          colors: "#F3F2EE",
        },
        // formatter: (value) => {
        //   var x = value;
        //   x = x.toString();
        //   var lastThree = x.substring(x.length - 3);
        //   var otherNumbers = x.substring(0, x.length - 3);
        //   if (otherNumbers != "") lastThree = "," + lastThree;

        //   return otherNumbers.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + lastThree;
        // },
      },
    },
  };
  const series = [
    {
      name: "Seed",
      data: [0, 23076923, 25000000, 25000000, 25000000],
    },
    {
      name: "Private",
      data: [0, 103846154, 112500000, 112500000, 112500000],
    },
    {
      name: "Public",
      data: [33333333, 33333333, 33333333, 33333333, 33333333],
    },
    {
      name: "Treasury",
      data: [0, 139583333, 279166667, 279166667, 279166667],
    },
    {
      name: "Ecosystem",
      data: [7500000, 147900000, 288300000, 288300000, 288300000],
    },
    {
      name: "Team",
      data: [0, 0, 50000000, 100000000, 100000000],
    },
    {
      name: "Marketing",
      data: [2500000, 49300000, 96100000, 96100000, 96100000],
    },
    {
      name: "Advisors",
      data: [0, 0, 25000000, 50000000, 50000000],
    },
  ];
  return (
    <div className={` ${styles.chartWrapper} nitro-container`}>
      <div className="heading-style-1">
        <span className="title-borderLine h2"></span>
        <h2>Token Release Schedule</h2>
      </div>
      <ApexCharts options={options} type="area" series={series} height="550" />
    </div>
  );
}
