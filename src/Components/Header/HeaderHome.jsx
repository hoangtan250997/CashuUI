import React from "react";
import { Layout, Avatar } from "antd";
import LetterAvatar from "../Avatar/Avatar";
import SearchBar from "../Search/SearchBar";
import { useDispatch, useSelector } from "react-redux";

const { Header, Content, Sider } = Layout;

const { Footer } = Layout;

const HeaderDashboard = () => {
  const { userLogin } = useSelector((state) => state.userReducer);

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
      <p>IN NOTES</p>
      <div style={{ flex: 1 }}></div>

      <div
        style={{
          flex: 0.4,
          textAlign: "center",
          color: "white",
          fontWeight: "1000",
        }}
      >
        <p style={{ backgroundColor: "grey", borderRadius: "10px" }}>
          Hello! {userLogin.employeeName}
        </p>
      </div>

      <div style={{ flex: 0.2, textAlign: "right" }}>
        <LetterAvatar />{" "}
      </div>

      {/* <div className="demo-logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} /> */}
    </Header>
  );
};

export default HeaderDashboard;
