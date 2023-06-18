import React, { useState } from "react";
import { Menu, Button, Divider, Switch } from "antd";
import {
  DashboardOutlined,
  LineChartOutlined,
  EditOutlined,
  PrinterOutlined,
  SolutionOutlined,
  LogoutOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import logo from "../../logo.png";
import "../../CSS/scss/styles.scss";
import "../../CSS/scss/styles.css";

function Navbar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(177, 120, 84,0.9)",
        borderRadius: "20px",
        height: "100%",
        fontFamily: "Inter",
        textAlign: "center",
      }}
    >
      {/* <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */}
      <div id="logo" className="logo-container">
        <img src={logo} alt="" className="logo-image" />
      </div>
      <Divider
        style={{
          borderColor: "white",
          opacity: "0.5",
          marginTop: "0",
          marginBottom: "50",
        }}
      />
      <Menu
        style={{
          backgroundColor: "rgba(0, 0, 0, 0)",
          fontWeight: "500",
          color: "white",
        }}
        // defaultSelectedKeys={["1"]}
        // defaultOpenKeys={["sub1"]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        <Menu.Item className="menuItem">
          <div className="content">
            <NavLink to="/dashboard">
              <DashboardOutlined className="icon" />
              <span>Dashboard</span>{" "}
            </NavLink>
          </div>
        </Menu.Item>
        <Menu.Item className="menuItem">
          <div className="content">
            <LineChartOutlined className="icon" />
            <span>Analytics</span>{" "}
          </div>
        </Menu.Item>
        <Menu.Item className="menuItem">
          <div className="content">
            <NavLink to="/innote">
              <EditOutlined className="icon" />
              <span>In Notes</span>{" "}
            </NavLink>
          </div>
        </Menu.Item>
        <Menu.Item className="menuItem">
          <div className="content">
            <NavLink to="/outnote">
              <PrinterOutlined className="icon" />
              <span>Out Notes</span>
            </NavLink>
          </div>
        </Menu.Item>
        <Menu.Item className="menuItem">
          <div className="content">
            <SolutionOutlined className="icon" />
            <span>Company News</span>
          </div>
        </Menu.Item>
        <Divider
          style={{
            borderColor: "white",
            opacity: "0.5",
            width: "1px",
          }}
        />
        <Menu.Item className="menuItem">
          <div className="content">
            <LogoutOutlined className="icon" />
            <span>Log out</span>
          </div>
        </Menu.Item>
        <Menu.Item className="menuItem">
          <div className="content">
            <Switch
              Switch
              defaultChecked
              // onChange={onChange}
              className="icon"
            />
            <span>Dark Mode</span>
          </div>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Navbar;
