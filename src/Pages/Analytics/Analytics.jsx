import React from "react";
import MonthInAnalytics from "../../Components/AnalyticsChart/MonthInAnalytics";
import YearInAnalytics from "../../Components/AnalyticsChart/YearInAnalytics";
import MonthOutAnalytics from "../../Components/AnalyticsChart/MonthOutAnalytics";
import { Row, Col, Card, Statistic, Typography } from "antd";

export default function Analytics() {
  return (
    <div className="container">
      <Row className="rowDashboard">
        <Col span={10} className="columnDashboard" id="columnDashboard1">
          <MonthInAnalytics />
        </Col>
        <Col span={10} className="columnDashboard" id="columnDashboard2">
          <MonthOutAnalytics />
        </Col>
      </Row>
    </div>
  );
}
