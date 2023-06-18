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
        height: "0.5vh",
      }}
    >
      Cashu Company
    </Footer>
  );
};

export default FooterHome;
