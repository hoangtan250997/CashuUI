import React from "react";
import { fetchChartData } from "../../Services/Data";
import { useDispatch, useSelector } from "react-redux";

export default function CompanyInfo() {
  const { userLogin } = useSelector((state) => state.userReducer);
  console.log("a: ", fetchChartData);

  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <p>{fetchChartData}</p>
      <p>123</p>
    </div>
  );
}
