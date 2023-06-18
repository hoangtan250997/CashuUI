import React from "react";
import NavBar from "../Components/Navbar/Navbar";
import Footer from "../Components/FooterHome/FooterHome";
import HeaderDashboard from "../Components/Header/HeaderHome";
import { Outlet } from "react-router-dom";
import "../CSS/scss/styles.css";
export const HomeTemplate = () => {
  return (
    <div
      style={{
        height: "95vh",
        display: "grid",
        gridTemplateColumns: "256px 1fr",
        gap: "20px",
        // padding: "1vh",
      }}
    >
      <div>
        <NavBar />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          // gap: "20px",
        }}
      >
        <HeaderDashboard />

        <div style={{ flex: 1, marginTop: 20 }}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};
