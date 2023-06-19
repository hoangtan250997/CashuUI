import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterHome = () => {
  return (
    <Footer
      style={{
        display: "flex",
        justifyContent: "center", // Căn giữa theo chiều ngang
        alignItems: "center", // Căn giữa theo chiều dọc
        borderRadius: "20px",
        height: "3vh",
        padding: "0",
        marginTop: "10px",
        backgroundColor: "rgba(255,225,255,0.5)",
      }}
    >
      © 2023 Cashu Company. All rights reserved. Website designed by Tan Nguyen
      & Thuy Nguyen.
    </Footer>
  );
};

export default FooterHome;
