import React, { useState, useEffect } from "react";
import { fetchChartData } from "../../Services/Data";
import { useDispatch, useSelector } from "react-redux";
import CompanyInfo1 from "../../Services/Data";
import axios from "axios";

export default function CompanyInfo() {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/suppliers");
      setChartData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log("a: ", chartData);

  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <div>
        {chartData.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div>

      <p>123</p>
    </div>
  );
}
