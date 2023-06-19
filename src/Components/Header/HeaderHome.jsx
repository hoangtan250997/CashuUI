import React from "react";
import { Layout, Avatar } from "antd";
import LetterAvatar from "../Avatar/Avatar";
import SearchBar from "../Search/SearchBar";
const { Header, Content, Sider } = Layout;

const { Footer } = Layout;

const HeaderDashboard = () => {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: "20px",
        backgroundColor: "transparent",
        justifyContent: "center",
      }}
    >
      <div style={{ flex: 1 }}></div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <SearchBar />
      </div>
      <div style={{ flex: 1, textAlign: "right" }}>
        <LetterAvatar />{" "}
      </div>

      {/* <div className="demo-logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} /> */}
    </Header>
  );
};

export default HeaderDashboard;
