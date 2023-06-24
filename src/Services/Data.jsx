import { useState, useEffect } from "react";
import axios from "axios";

export const fetchChartData = async () => {
  try {
    const response = await axios.get("http://localhost:8080/countries");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
