import React from "react";
import { Row, Col, Card, Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import BarChart from "../../Components/Charts/BarChar";
import IncomingTable from "../../Components/Tables/ImcomingTable";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Product from "../../Components/Product/product";
// import { getProductApi } from "../../redux/reducers/productReducer";
// import Carousel_Home from "./Carousel_Home";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

const incomingData = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];
export default function DashBoard() {
  //Lấy dữ liệu từ redux
  //   const { arrProduct } = useSelector((state) => state.productReducer);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     const action = getProductApi();
  //     dispatch(action);
  //   }, []);
  //   console.log(arrProduct);

  return (
    <div className="container">
      <Row className="rowDashboard">
        <Col span={5} className="columnDashboard" id="columnDashboard1">
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
          </Card>
        </Col>
        <Col span={9} className="columnDashboard" id="columnDashboard2">
          <Card title="Raw Cashew Nuts" bordered={false}>
            <BarChart data={data} />
          </Card>{" "}
        </Col>
        <Col span={9} className="columnDashboard" id="columnDashboard3">
          <Card title="Finished Products" bordered={false}>
            <BarChart data={data} />
          </Card>{" "}
        </Col>
      </Row>
      <Row className="rowDashboard">
        <Col span={24}>
          <Card>
            <IncomingTable data={incomingData} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
