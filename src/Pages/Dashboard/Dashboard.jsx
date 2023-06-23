import React, { useState, useEffect } from "react";
import { Row, Col, Card, Statistic, Typography } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import Widget from "../../Components/Charts/Widget";
import RawChart from "../../Components/Charts/RawChart";
import FGChart from "../../Components/Charts/FGChart";
import OutgoingTable from "../../Components/Tables/OutgoingTable";

const { Title } = Typography;

export default function DashBoard() {
  return (
    <div className="container">
      <Row className="rowDashboard">
        {/* <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar /> */}
        {/* <div className="widgets">
          <Widget type="incoming" />
          <Widget type="outgoing" />
          <Widget type="stock" />
        </div> */}
        {/* </div>
        </div> */}
        {/* <Col span={5} className="columnDashboard" id="columnDashboard1">
          <Card title="Monthly Warehouse Overview" bordered={false}>
            <Card
              bordered={true}
              style={{
                marginBottom: 10,
                backgroundColor: "rgba(57, 206, 243, 0.4)",
              }}
            >
              <Statistic
                title="Imcoming 8,652MTs"
                value={24.3}
                precision={2}
                valueStyle={{ color: "#BA2B4E" }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
            <Card
              bordered={true}
              style={{
                marginBottom: 10,
                backgroundColor: "rgba(61, 163, 65, 0.5)",
              }}
            >
              <Statistic
                title="Outgoings 8,652MTs"
                value={24.3}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
            <Card
              bordered={true}
              style={{ backgroundColor: "rgba(250, 226, 104, 0.5)" }}
            >
              <Statistic
                title="Remaining 965MTs"
                value={4.2}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Card> */}

        {/* </Col> */}

        <Col span={8} className="columnDashboard" id="columnDashboard2">
          <Card
            title={<Title level={2}>Raw Cashew Nuts</Title>}
            bordered={false}
          >
            <RawChart />
          </Card>{" "}
        </Col>

        <Col span={8} className="columnDashboard" id="columnDashboard3">
          <Card
            title={<Title level={2}>Finished Products</Title>}
            bordered={false}
          >
            <FGChart />
          </Card>{" "}
        </Col>
      </Row>
      <Row className="rowDashboard">
        <Col span={23}>
          <Card>
            <OutgoingTable />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
