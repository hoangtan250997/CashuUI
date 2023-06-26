import React, { useState, useEffect } from "react";
import { AgChartsReact } from "ag-charts-react";
import axios from "axios";

export default function YearInAnalytics() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/incomingdetails/total-annual-incoming"
        );
        console.log(response);
        setChartData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const data = chartData.map((item) => ({
      month: item.month, // Assuming you have a 'month' property in the data
      productcode: item.code,
      amount: item.totalAmount,
    }));

    const months = [...new Set(data.map((item) => item.month))]; // Get unique product codes

    const series = months.map((month) => {
      const productData = data.filter((item) => item.month === month);
      return {
        type: "line",
        xKey: "month",
        yKey: "amount",
        title: month, // Display product code as the title of each line
        data: productData,
      };
    });

    const options = {
      autoSize: true,
      data,
      title: {
        text: "MONTHLY INCOMING AMOUNT",
      },
      subtitle: {
        text: "In KGs",
      },
      series,
    };

    setOptions(options);
  }, [chartData]);

  const [options, setOptions] = useState(null);

  if (!options) {
    return null; // or show a loading spinner/placeholder
  }

  return <AgChartsReact options={options} />;
}
