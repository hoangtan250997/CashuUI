import "../../CSS/scss/widget.scss";
import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import axios from "axios";

const Widget = ({ type }) => {
  //  let data;
  const [widgetData, setWidgetData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/incomingdetails/total-monthly-incoming"
      );
      setWidgetData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // switch (type) {
  //   case "incoming":
  //     data = {
  //       title: "INCOMINGS",
  //       icon: (
  //         <PersonOutlinedIcon
  //           className="icon"
  //           style={{
  //             color: "crimson",
  //             backgroundColor: "rgba(255, 0, 0, 0.2)",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //   case "outgoing":
  //     data = {
  //       title: "OUTGOINGS",
  //       icon: (
  //         <ShoppingCartOutlinedIcon
  //           className="icon"
  //           style={{
  //             backgroundColor: "rgba(218, 165, 32, 0.2)",
  //             color: "goldenrod",
  //           }}
  //         />
  //       ),
  //     };
  //     break;
  //   case "stock":
  //     data = {
  //       title: "STOCKS",
  //       icon: (
  //         <MonetizationOnOutlinedIcon
  //           className="icon"
  //           style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
  //         />
  //       ),
  //     };
  //     break;

  //   default:
  //     break;
  // }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">Title</span>
        <span className="counter">
        {widgetData}
        </span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />

        </div>

      </div>
    </div>
  );
};

export default Widget;
